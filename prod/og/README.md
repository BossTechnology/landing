# Imagen para compartir (Open Graph)

`og.html` es la fuente de `prod/static/og-es.jpg` y `og-en.jpg` (1200×630), la miniatura que muestran
WhatsApp, LinkedIn, X, Slack, etc. al compartir cualquier página del sitio.

Para regenerarla tras cambiar textos o diseño: sirve la raíz del repo (`python3 -m http.server 8000`),
abre `http://localhost:8000/prod/og/og.html?l=es` (y `?l=en`) en una ventana de exactamente 1200×630
y haz una captura en JPG de cada una a `prod/static/og-es.jpg` y `og-en.jpg`.

`prod/build.mjs` añade a la URL de la imagen una versión basada en su contenido (`?v=…`), así que al
cambiar el archivo las redes sociales piden la nueva en vez de mostrar la que tenían en caché.
