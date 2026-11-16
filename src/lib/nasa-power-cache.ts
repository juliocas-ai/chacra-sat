import {
  type ClimData,
  initEmbeddedStores,
  type MonthlyData,
  parsePower,
  powerUrls,
  VALLEYS,
  type ValleyId,
} from "@/lib/chacra-data";

export const NASA_POWER_TIMEOUT_MS = 2000;
export const NASA_CACHE_TTL_MS = 24 * 60 * 60 * 1000;
const NASA_CACHE_KEY = "chacrasat_nasa_power_cache_v1";

export type ValleyDataSource = "live" | "cache" | "precalculated";

interface CachedValleyEntry {
  updatedAt: number;
  clim?: ClimData;
  monthly?: MonthlyData;
}

type ValleyCacheMap = Partial<Record<ValleyId, CachedValleyEntry>>;

function readLocalCache(): ValleyCacheMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(NASA_CACHE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as ValleyCacheMap;
    if (!parsed || typeof parsed !== "object") return {};

    const now = Date.now();
    const valid: ValleyCacheMap = {};
    for (const v of VALLEYS) {
      const entry = parsed[v.id];
      if (entry && typeof entry.updatedAt === "number" && now - entry.updatedAt <= NASA_CACHE_TTL_MS) {
        valid[v.id] = entry;
      }
    }
    return valid;
  } catch {
    return {};
  }
}

function writeValleyCache(
  valleyId: ValleyId,
  data: { clim?: ClimData; monthly?: MonthlyData }
): void {
  if (typeof window === "undefined") return;
  try {
    const current = readLocalCache();
    const prev = current[valleyId];
    current[valleyId] = {
      updatedAt: Date.now(),
      clim: data.clim ?? prev?.clim,
      monthly: data.monthly ?? prev?.monthly,
    };
    window.localStorage.setItem(NASA_CACHE_KEY, JSON.stringify(current));
  } catch {
    // Ignore storage errors (private mode / quota limits).
  }
}

/**
 * Returns climate and monthly stores for all 5 valleys, backed by
 * precalculated NASA POWER data and overlaid with any fresh local cache.
 */
export function getLocalValleyStores(): {
  clim: Record<string, ClimData>;
  monthly: Record<string, MonthlyData>;
  cachedValleys: Set<ValleyId>;
} {
  const { clim, monthly } = initEmbeddedStores();
  const cached = readLocalCache();
  const cachedValleys = new Set<ValleyId>();

  for (const v of VALLEYS) {
    const entry = cached[v.id];
    if (!entry) continue;
    if (entry.clim) {
      clim[v.id] = entry.clim;
      cachedValleys.add(v.id);
    }
    if (entry.monthly) {
      monthly[v.id] = entry.monthly;
      cachedValleys.add(v.id);
    }
  }

  return { clim, monthly, cachedValleys };
}

async function fetchJsonWithTimeout(
  url: string,
  timeoutMs: number,
  externalSignal?: AbortSignal
): Promise<unknown> {
  const controller = new AbortController();
  const clampedTimeout = Math.min(Math.max(timeoutMs, 1), NASA_POWER_TIMEOUT_MS);
  const timer = setTimeout(() => controller.abort(), clampedTimeout);

  const onExternalAbort = () => controller.abort();
  if (externalSignal) {
    if (externalSignal.aborted) {
      controller.abort();
    } else {
      externalSignal.addEventListener("abort", onExternalAbort, { once: true });
    }
  }

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    return await res.json();
  } finally {
    clearTimeout(timer);
    externalSignal?.removeEventListener("abort", onExternalAbort);
  }
}

/**
 * Fetches live NASA POWER data for a valley with a strict <= 2s timeout,
 * automatically falling back to local cache or precalculated data for all 5 valleys.
 */
export async function fetchValleyPowerWithFallback(
  valleyId: ValleyId,
  options?: { timeoutMs?: number; signal?: AbortSignal }
): Promise<{
  clim: ClimData;
  monthly: MonthlyData;
  source: ValleyDataSource;
}> {
  const local = getLocalValleyStores();
  const fallbackClim = local.clim[valleyId];
  const fallbackMonthly = local.monthly[valleyId];
  const fallbackSource: ValleyDataSource = local.cachedValleys.has(valleyId)
    ? "cache"
    : "precalculated";

  const valley = VALLEYS.find((v) => v.id === valleyId) ?? VALLEYS[0];
  const urls = powerUrls(valley);
  const timeoutMs = options?.timeoutMs ?? NASA_POWER_TIMEOUT_MS;

  const [climResult, monthlyResult] = await Promise.allSettled([
    fetchJsonWithTimeout(urls.clim, timeoutMs, options?.signal),
    fetchJsonWithTimeout(urls.monthly, timeoutMs, options?.signal),
  ]);

  let liveClim: ClimData | undefined;
  if (climResult.status === "fulfilled") {
    try {
      const parsed = parsePower(climResult.value);
      if (parsed.kind === "clim") {
        liveClim = parsed.data;
      }
    } catch {
      // Fall back to local precalculated/cached climatology.
    }
  }

  let liveMonthly: MonthlyData | undefined;
  if (monthlyResult.status === "fulfilled") {
    try {
      const parsed = parsePower(monthlyResult.value);
      if (parsed.kind === "monthly" && parsed.rows.length > 0) {
        liveMonthly = { rows: parsed.rows, coords: parsed.coords };
      }
    } catch {
      // Fall back to local precalculated/cached monthly series.
    }
  }

  if (liveClim || liveMonthly) {
    writeValleyCache(valleyId, { clim: liveClim, monthly: liveMonthly });
    return {
      clim: liveClim ?? fallbackClim,
      monthly: liveMonthly ?? fallbackMonthly,
      source: "live",
    };
  }

  return {
    clim: fallbackClim,
    monthly: fallbackMonthly,
    source: fallbackSource,
  };
}
