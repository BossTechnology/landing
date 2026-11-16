# Boss.Technology · landing

Sitio de Boss.Technology (ES/EN) hecho con **Next.js 16** (App Router, TypeScript). Todas las páginas se generan como estáticas; lo único que corre en servidor es la API del formulario.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # compilación de producción (incluye la revisión de tipos)
```

## Estructura

| Ruta | Qué hay |
| --- | --- |
| `app/(es)/` | Páginas en español. `page.tsx` es la portada (`/`); el resto cuelga de `es/` (`/es/compania`, …). |
| `app/(en)/en/` | Páginas en inglés (`/en`, `/en/compania`, …). |
| `app/api/contact/route.ts` | Recibe los formularios de Contacto y Reclutamiento y los envía por correo. |
| `app/sitemap.ts`, `app/robots.ts`, `app/global-not-found.tsx` | `sitemap.xml`, `robots.txt` y la página 404. |
| `components/` | `Header` (menú, tema claro/oscuro, menú móvil, idioma), `FooterEs`/`FooterEn`, `SiteShell` (documento común) y `Fx`. |
| `lib/routes.ts` | Todas las rutas y su equivalente en el otro idioma (selector de idioma, `hreflang`, sitemap y redirecciones). |
| `lib/seo.ts` | `pageMetadata()`: título, descripción, canonical, `hreflang` y Open Graph de cada página. |
| `lib/fx/` | Animaciones y widgets que trabajan sobre el DOM (aparición al hacer scroll, abejas, calculadoras, pestañas de BzzzBX, canvas de IA aplicada…). `Fx` los ejecuta en cada navegación y los deshace al salir de la página. |
| `styles/` | CSS del sitio. Se carga entero en todas las páginas desde `SiteShell`. |
| `public/assets/` | Imágenes, videos y fuentes. |

Cada idioma tiene su propio layout raíz (`<html lang>`), así que pasar de español a inglés recarga la página; dentro de un idioma la navegación es instantánea.

Las URLs antiguas terminadas en `.html` redirigen a las nuevas (`/es/compania.html` → `/es/compania`), configurado en `next.config.ts`.

## Formularios

La API envía el correo con [Resend](https://resend.com). En Vercel → Project → Settings → Environment Variables:

| Variable | Obligatoria | Ejemplo |
| --- | --- | --- |
| `RESEND_API_KEY` | sí | `re_…` |
| `CONTACT_FROM` | sí | `Web Boss <web@boss.technology>` (dominio verificado en Resend) |
| `CONTACT_TO` | no | por defecto `admin@boss.technology` |

Sin esas variables, los formularios muestran un error con el correo de contacto como alternativa.

## Despliegue

Vercel detecta Next.js (`vercel.json` fija `"framework": "nextjs"`). Si el proyecto estaba configurado como sitio estático (Framework "Other", sin build), revisa en Settings → Build and Deployment que el Framework Preset sea **Next.js** y que Output Directory y Build Command estén vacíos o en sus valores por defecto.

El dominio usado en canonical, sitemap e imágenes de Open Graph es `https://boss.technology` (`lib/seo.ts`).

## Origen

El sitio nació como un artefacto exportado a HTML estático. Se migró a Next.js convirtiendo cada página a JSX y portando su JavaScript a React/TypeScript, y se comprobó que cada página se ve igual que la versión estática. A partir de ahora la fuente de verdad es este repositorio: volver a sincronizar desde el artefacto sobrescribiría la migración.
