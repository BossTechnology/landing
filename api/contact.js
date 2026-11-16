// Vercel Function: recibe los formularios de Contacto y Reclutamiento y los envía por correo con Resend.
// Variables de entorno (Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY  (obligatoria)  clave de https://resend.com
//   CONTACT_FROM    (obligatoria)  remitente en un dominio verificado en Resend, p. ej. "Web Boss <web@boss.technology>"
//   CONTACT_TO      (opcional)     destinatario; por defecto admin@boss.technology

const FIELDS = {
  firstName: "Nombre",
  lastName: "Apellido",
  email: "Correo",
  company: "Empresa",
  linkedin: "LinkedIn",
  area: "Área",
  message: "Mensaje",
};
const MAX = { message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method_not_allowed" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = null; }
  }
  if (!body || typeof body !== "object") return res.status(400).json({ error: "invalid_body" });

  // Honeypot: los bots rellenan el campo oculto; respondemos OK sin enviar nada.
  if (body.website) return res.status(200).json({ ok: true });

  const data = {};
  for (const key of Object.keys(FIELDS)) {
    const v = typeof body[key] === "string" ? body[key].trim() : "";
    data[key] = v.slice(0, MAX[key] || 300);
  }
  if (!data.firstName || !data.message || !EMAIL_RE.test(data.email)) {
    return res.status(400).json({ error: "missing_fields" });
  }

  const { RESEND_API_KEY, CONTACT_FROM } = process.env;
  const to = process.env.CONTACT_TO || "admin@boss.technology";
  if (!RESEND_API_KEY || !CONTACT_FROM) {
    console.error("contact: faltan RESEND_API_KEY o CONTACT_FROM");
    return res.status(503).json({ error: "not_configured" });
  }

  const form = body.form === "reclutamiento" ? "Reclutamiento" : "Contacto";
  const name = `${data.firstName} ${data.lastName}`.trim();
  const rows = Object.entries(FIELDS)
    .filter(([k]) => data[k])
    .map(([k, label]) => `<tr><td style="padding:4px 12px 4px 0;color:#666;vertical-align:top">${label}</td><td style="padding:4px 0;white-space:pre-wrap">${esc(data[k])}</td></tr>`)
    .join("");
  const page = typeof body.page === "string" ? body.page.slice(0, 300) : "";
  const html = `<h2 style="font-family:sans-serif">${form} · boss.technology</h2>
<table style="font-family:sans-serif;font-size:14px">${rows}</table>
<p style="font-family:sans-serif;font-size:12px;color:#999">Idioma: ${esc(body.lang === "en" ? "en" : "es")} · Página: ${esc(page)}</p>`;
  const text = Object.entries(FIELDS).filter(([k]) => data[k]).map(([k, l]) => `${l}: ${data[k]}`).join("\n");

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: [to],
        reply_to: data.email,
        subject: `[${form}] ${name}${data.company ? ` · ${data.company}` : ""}${data.area ? ` · ${data.area}` : ""}`,
        html,
        text,
      }),
    });
    if (!r.ok) {
      console.error("contact: Resend respondió", r.status, await r.text());
      return res.status(502).json({ error: "send_failed" });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("contact: error al enviar", err);
    return res.status(502).json({ error: "send_failed" });
  }
};
