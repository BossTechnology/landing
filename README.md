# Boss.Technology · landing (Next.js)

Este repo es un espejo del artefacto «Website Boss». La raíz contiene el sitio tal como lo publica el artefacto
(`index.html`, `es/`, `en/`, `assets/`) y el proyecto Next.js que lo sirve en Vercel.

- `scripts/copy-site.mjs` copia el sitio a `public/` antes de `dev` y `build` (y completa el `<head>` de la home).
- `next.config.mjs` sirve `/` con la home, redirige `/en` y `/es`, y cachea `assets/`.
- `app/` tiene el layout mínimo y la página 404.

```
npm install
npm run dev     # http://localhost:3000
npm run build
```

En Vercel: importar el repo, framework Next.js, todo por defecto.
No editar estos archivos a mano: se sincronizan desde el artefacto.
