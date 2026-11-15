# GEMINI.md — ChacraSat (NASA Space Apps Challenge MVP)

> **Instrucción crítica para Gemini y subagentes**: Este proyecto es un **MVP de entrega inmediata (hoy)** para la competencia **NASA Space Apps Challenge**. Todo código debe ser **mínimo, directo, sin sobre-ingeniería y de muy rápido desarrollo**.

## Regla de Oro de UI: `shadcn` Primero
1. **Primera elección obligatoria**: Usa **siempre** `shadcn` (`@/components/ui/*`) y sus componentes (`Card`, `Badge`, `Button`, `Tabs`, `Select`, `Separator`, etc.) para construir cualquier módulo o interfaz.
2. Si falta un componente de `shadcn`, instálalo con:
   ```bash
   pnpm exec shadcn add <componente> -y
   ```
3. Combina los componentes de `shadcn` con los colores de identidad de **ChacraSat** definidos en `src/app/globals.css` (`--navy`, `--leaf`, `--sky`, `--soil`, `--sand`, `--warning`, `--danger`).
4. Usa `lucide-react` para iconografía complementaria.

## Arquitectura Mínima
- `src/app/`: Rutas App Router (`layout.tsx`, `page.tsx`, `globals.css`).
- `src/components/ui/`: Componentes de **shadcn** (`base-nova`).
- `src/components/layout/`: `header.tsx` (Logo SVG ChacraSat, badges de estado, selector de idioma ES/EN).
- `src/components/dashboard/`: Módulos del panel agrícola (planificación de rotaciones, indicadores satelitales NASA, gráficos).
- `src/i18n/translations.ts` + `src/context/language-context.tsx`: Soporte bilingüe instantáneo (`ES` / `EN`) sin dependencias pesadas ni recargas de ruta.

## Lineamientos para Nuevos Módulos del Dashboard
- **Simplicidad extrema**: Crea componentes autocontenidos dentro de `src/components/dashboard/` usando `<Card>`, `<CardHeader>`, `<CardTitle>`, `<CardDescription>` y `<CardContent>` de `shadcn`.
- **Resiliencia para la Demo**: Asegura que todos los gráficos e indicadores funcionen con datos de referencia (`Datos de referencia` / `Reference data`) si la conexión en vivo no está disponible.
- **Next.js 16 + React 19**: Antes de usar APIs específicas de Next.js, consulta `node_modules/next/dist/docs/` según lo indicado en `AGENTS.md`.
