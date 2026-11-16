import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export async function getIconDataUri(): Promise<string> {
  const svgBuffer = await readFile(join(process.cwd(), "src/app/icon.svg"));
  return `data:image/svg+xml;base64,${svgBuffer.toString("base64")}`;
}

export const SOCIAL_IMAGE_SIZE = {
  width: 1200,
  height: 630,
} as const;

export const SOCIAL_IMAGE_ALT =
  "ChacraSat — Smart Crop Rotation Planning powered by NASA POWER satellite data for Peru's northern coast";

export async function renderSocialCardImage() {
  const iconDataUri = await getIconDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background:
            "radial-gradient(circle at 88% 12%, #2b5ea8 0%, #0b1d3a 62%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={iconDataUri}
              alt="ChacraSat"
              width={92}
              height={92}
              style={{ borderRadius: "20px" }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "52px",
                  fontWeight: 700,
                  letterSpacing: "-0.5px",
                }}
              >
                ChacraSat
              </span>
              <span style={{ fontSize: "22px", color: "#3fa7ff" }}>
                NASA Space Apps Challenge 2026 · Field Shift
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 20px",
              borderRadius: "999px",
              border: "1.5px solid #5fd18f",
              background: "rgba(47, 158, 91, 0.25)",
              fontSize: "20px",
              color: "#e6f5ec",
            }}
          >
            NASA POWER + FAO-56
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "960px",
          }}
        >
          <div
            style={{
              fontSize: "44px",
              fontWeight: 700,
              lineHeight: 1.18,
              color: "#ffffff",
            }}
          >
            From orbit to farm: smart crop rotations for Peru&apos;s northern
            coast
          </div>
          <div
            style={{
              fontSize: "24px",
              lineHeight: 1.4,
              color: "#c9d8ef",
            }}
          >
            NASA POWER satellite indicators, ETo water demand, and El Niño
            stress testing for Moche, Virú, Chao, and Chicama.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(201, 216, 239, 0.22)",
            paddingTop: "20px",
            fontSize: "20px",
            color: "#c9d8ef",
          }}
        >
          <span>Team Trujillo Orbital · La Libertad, Peru</span>
          <span style={{ color: "#ffd166" }}>EN / ES · NASA Open Data</span>
        </div>
      </div>
    ),
    {
      ...SOCIAL_IMAGE_SIZE,
    }
  );
}
