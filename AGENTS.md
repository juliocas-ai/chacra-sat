<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# ChacraSat — Agent Guidelines (NASA Space Apps Challenge MVP)

## 1. Contexto y Prioridad Absoluta (MVP Hoy)
- **Objetivo**: MVP funcional para **hoy** enfocado en el **NASA Space Apps Challenge** (*ChacraSat: Planificación inteligente de rotaciones de cultivos para la costa norte del Perú*).
- **Filosofía**: **Mínimo, directo y de muy rápido desarrollo**. Cero sobre-ingeniería, cero abstracciones innecesarias. Priorizar velocidad de entrega, claridad visual y funcionalidad inmediata.

## 2. Regla #1 de UI: `shadcn/ui` es la Primera Elección
- **SIEMPRE usar `shadcn` (`@/components/ui/*`) como primera elección** para cualquier elemento de interfaz (botones, tarjetas, badges, tabs, selects, diálogos, tablas, etc.).
- Para instalar nuevos componentes de shadcn usar:
  ```bash
  pnpm exec shadcn add <component-name> -y
  ```
- Estilo configurado en `components.json`: `base-nova` (`@base-ui/react` + Tailwind CSS v4 + `lucide-react`).
- No crear componentes CSS desde cero si existe un equivalente o composición en `shadcn/ui`. Solo extender con clases utilitarias de Tailwind y los tokens de marca de ChacraSat.

## 3. Stack Tecnológico
- **Framework**: Next.js 16 (App Router, React 19, TypeScript).
- **Estilos**: Tailwind CSS v4 (`src/app/globals.css`) + variables CSS de ChacraSat.
- **Componentes base**: `shadcn/ui` (`src/components/ui/`) + iconos de `lucide-react`.
- **Tipografías**: `Space Grotesk` (títulos / `--font-heading`) e `Inter` (cuerpo / `--font-sans`) vía `next/font/google`.
- **Idiomas (i18n)**: Diccionario ligero client-side (`ES` / `EN`) en `src/i18n/translations.ts` y `src/context/language-context.tsx`.

## 4. Estructura Mínima del Proyecto
```text
src/
├── app/
│   ├── globals.css          # Tokens de ChacraSat + tema shadcn/Tailwind v4
│   ├── layout.tsx           # Fuentes (Space Grotesk + Inter), Metadata y LanguageProvider
│   └── page.tsx             # Vista principal del MVP (Header + Dashboard)
├── components/
│   ├── ui/                  # Componentes oficiales de shadcn (PRIMERA ELECCIÓN)
│   ├── layout/
│   │   └── header.tsx       # Header institucional ChacraSat + estado + selector ES/EN
│   └── dashboard/
│       └── dashboard-view.tsx # Contenedor principal y tarjetas de módulos agrícolas
├── context/
│   └── language-context.tsx # Estado global mínimo para cambio de idioma ES/EN
├── i18n/
│   └── translations.ts      # Diccionario ES/EN directo
└── lib/
    └── utils.ts             # Helper cn()
```

## 5. Tokens de Diseño ChacraSat
Disponibles como variables CSS y utilidades en `globals.css`:
- `--navy`: `#0b1d3a` | `--navy-light`: `#13305c` | `--sky`: `#3fa7ff`
- `--leaf`: `#2f9e5b` | `--leaf-light`: `#e6f5ec`
- `--soil`: `#a0662f` | `--sand`: `#f6efe4`
- `--ink`: `#1c2533` | `--muted`: `#5d6878` | `--line`: `#dfe4ea`
- `--warning`: `#d9822b` | `--danger`: `#c94a3c`
- `--surface`: `#ffffff` | `--background`: `#f4f6f9`

## 6. Reglas de Desarrollo Rápido para Agentes
1. **Reutilizar `shadcn/ui`** antes de escribir marcado o estilos propios.
2. **Mantener estado simple**: `useState` / `useContext` local; evitar librerías externas pesadas de estado.
3. **Datos listos para demo**: Si un endpoint satelital/NASA tarda o falla, respaldar siempre con datos de referencia locales para que la demo nunca se rompa.
4. **Bilingüe por defecto**: Todo texto visible clave debe existir en `src/i18n/translations.ts` (`es` y `en`) para los jueces de NASA Space Apps.
