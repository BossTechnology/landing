# Capa de producción

El sitio (`index.html`, `es/`, `en/`, `assets/`, `app/layout.js`, `app/not-found.js`, `next.config.mjs`,
`package.json`, `scripts/`) se sincroniza desde el artefacto «Website Boss» y se sobrescribe en cada sincronización.
Todo lo necesario para producción vive fuera de esos archivos y se aplica al compilar:

| Archivo | Qué hace |
| --- | --- |
| `prod/build.mjs` | Se ejecuta después de `scripts/copy-site.mjs` y prepara `public/`: SEO (canonical, `hreflang`, Open Graph/Twitter con imagen, JSON-LD), `sitemap.xml`, `robots.txt`, quita «Web: » del título de la portada, corrige rutas relativas rotas y retira páginas internas (guía de estilo). Carga `prod.css` y `prod.js` en todas las páginas. |
| `prod/static/prod.js` | Aviso de cookies + Google Analytics 4 (Consent Mode v2: GA solo se carga si la persona acepta) y envío real de los formularios a `/api/contact`. |
| `prod/static/prod.css` | Estilos del aviso de cookies y de los formularios, y las correcciones de diseño y móvil. |
| `prod/static/og-*.jpg` | Imágenes para compartir en redes (1200×630). |
| `app/api/contact/route.js` | Envía los formularios por Resend: aviso al equipo y confirmación a la persona en su idioma. |
| `vercel.json` | Comando de compilación con la capa de producción, cabeceras de seguridad y redirecciones. |

`vercel.json` es lo que garantiza que la capa se aplique en Vercel: aunque una sincronización sobrescriba
`package.json`, el comando de compilación de `vercel.json` sigue ejecutando `prod/build.mjs`.

## Variables de entorno (Vercel → Project → Settings → Environment Variables)

| Variable | Obligatoria | Uso |
| --- | --- | --- |
| `RESEND_API_KEY` | sí | Clave de API de Resend con permiso de envío para `boss.technology`. |
| `CONTACT_FROM` | no | Remitente en el dominio verificado en Resend. Por defecto `Boss.Technology <web@boss.technology>`. |
| `CONTACT_TO` | no | Bandeja del equipo (varias separadas por coma). Por defecto `admin@boss.technology`. |
| `CONTACT_TO_CAREERS` | no | Bandeja para el formulario de reclutamiento. Por defecto, la de `CONTACT_TO`. |
| `GA_MEASUREMENT_ID` | no | ID de medición de GA4 (`G-XXXXXXX`). Sin ella no hay analítica ni aviso de cookies. Se lee al compilar: tras cambiarla hay que volver a desplegar. |
| `SITE_URL` | no | Dominio público. Por defecto `https://boss.technology`. |

## Local

```bash
npm install
npm run dev     # copia el sitio, aplica la capa de producción y arranca en http://localhost:3000
npm run build
```

Si una sincronización sobrescribe `package.json`, `npm run dev` deja de aplicar la capa en local. En ese caso, ejecuta
`node prod/build.mjs` después de `npm run copy-site`, o vuelve a añadirlo en los scripts `predev` y `prebuild`.

## Al cambiar el contenido en el artefacto

- Las correcciones de `prod.css` apuntan a clases concretas del sitio. Si el artefacto cambia esas partes, revisa
  que sigan aplicando (cada regla lleva un comentario con el motivo).
- Lo que debería corregirse en origen, para no depender de esta capa, está anotado como «corregir en el artefacto»
  en `prod.css` y en `politica-privacidad-propuesta.md`.
