# Baklawa House — Web

Tienda online de dulces árabes artesanales (Córdoba, Argentina). SPA hecha con
**React 19 + Vite + Tailwind CSS 4**, generada a partir del diseño de Figma Make
y preparada para desplegar en **Azure Static Web Apps**.

## Desarrollo local

```bash
cd web
npm install
npm run dev
```

Abre http://localhost:5173

Otros comandos:

```bash
npm run build     # build de producción -> web/dist
npm run preview   # sirve el build de producción localmente
```

## Estructura

```
web/
├─ index.html
├─ src/
│  ├─ App.tsx          # todas las páginas y componentes
│  ├─ data.ts          # productos, boxes, FAQ, helpers (precios, WhatsApp)
│  ├─ index.css        # tema Tailwind (colores, tipografías)
│  └─ main.tsx
├─ public/
│  └─ staticwebapp.config.json   # routing/fallback SPA para Azure SWA
├─ vite.config.ts
└─ tsconfig.json
```

## Despliegue en Azure Static Web Apps

Ya hay un workflow de GitHub Actions en
[`.github/workflows/azure-static-web-apps.yml`](../.github/workflows/azure-static-web-apps.yml)
con:

- `app_location: "web"`
- `output_location: "dist"`
- `api_location: ""`

Pasos:

1. En el **portal de Azure** creá un recurso *Static Web App*. Elegí "Otro" /
   despliegue manual, o conectá el repo de GitHub. Si Azure te pide crear el
   workflow, cancelá ese paso porque ya está en el repo.
2. Copiá el **deployment token** del recurso (Static Web App → *Manage deployment token*).
3. En GitHub: **Settings → Secrets and variables → Actions → New repository secret**
   con nombre `AZURE_STATIC_WEB_APPS_API_TOKEN` y el valor del token.
4. Hacé push a `main`. El workflow buildea `web/` y publica `web/dist`.

La config de build en Azure debe quedar: *App location* `web`, *Api location* vacío,
*Output location* `dist`.

## Pendientes antes de publicar

- **Número de WhatsApp**: en [`src/data.ts`](src/data.ts) la constante
  `WA_PHONE` es un placeholder (`5493510000000`). Reemplazalo por el número real
  (formato internacional sin `+`, ej. `54935100000000`).
- **Imágenes**: actualmente son placeholders de Unsplash cargados por URL.
  Reemplazalas por fotos reales del negocio (podés subirlas a `public/` y apuntar
  las rutas en `data.ts` / `App.tsx`).
- **Instagram**: los links apuntan a `instagram.com/baklawa_house`; ajustá si el
  usuario real es otro.
