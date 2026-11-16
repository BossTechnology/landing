# Boss.Technology · landing

Sitio estático (ES/EN) exportado del artefacto «Website Boss». No requiere build: Vercel lo sirve tal cual (Framework: Other, sin build command, output = raíz).

La fuente de verdad es el artefacto y cada sincronización reemplaza estos archivos. **Los ajustes de abajo se hicieron sobre la exportación: llévalos al artefacto o vuelve a aplicarlos tras cada sincronización.**

## Ajustes sobre la exportación

- **Formularios reales** (Contacto y Reclutamiento): `assets/site.js` envía los datos a `/api/contact` (función de Vercel en `api/contact.js`), con validación, mensajes ES/EN y un campo trampa anti-spam.
- **SEO**: en cada página, entre `<!-- seo -->` y `<!-- /seo -->`: `canonical`, `hreflang` ES/EN, `og:url`, `og:image` (`assets/brand/og-es.jpg` / `og-en.jpg`) y Twitter card. Además `robots.txt`, `sitemap.xml` y `404.html`.
- Se quitó «Web: » del título de la portada.
- Se quitó `es/guia-estilo.html` (página interna) y ~21 MB de recursos que ninguna página usaba.

## Configurar el envío de formularios

La función envía correo con [Resend](https://resend.com). En Vercel → Project → Settings → Environment Variables:

| Variable | Obligatoria | Ejemplo |
| --- | --- | --- |
| `RESEND_API_KEY` | sí | `re_…` |
| `CONTACT_FROM` | sí | `Web Boss <web@boss.technology>` (dominio verificado en Resend) |
| `CONTACT_TO` | no | por defecto `admin@boss.technology` |

Sin esas variables, los formularios muestran un error con el correo de contacto como alternativa.

El dominio usado en `canonical`, `sitemap.xml` y `og:image` es `https://boss.technology`.
