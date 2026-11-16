// Receives the Contact and Careers forms and emails them with Resend (https://resend.com).
// Environment variables (Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY  (required)  Resend API key
//   CONTACT_FROM    (required)  sender on a domain verified in Resend, e.g. "Web Boss <web@boss.technology>"
//   CONTACT_TO      (optional)  recipient; defaults to admin@boss.technology

const FIELDS: Record<string, string> = {
  firstName: "Nombre",
  lastName: "Apellido",
  email: "Correo",
  company: "Empresa",
  linkedin: "LinkedIn",
  area: "Área",
  message: "Mensaje",
};
const MAX: Record<string, number> = { message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "invalid_body" }, { status: 400 });
  }
  if (!body || typeof body !== "object") return Response.json({ error: "invalid_body" }, { status: 400 });

  // Honeypot: bots fill the hidden field; answer OK without sending anything.
  if (body.website) return Response.json({ ok: true });

  const data: Record<string, string> = {};
  for (const key of Object.keys(FIELDS)) {
    const v = typeof body[key] === "string" ? (body[key] as string).trim() : "";
    data[key] = v.slice(0, MAX[key] || 300);
  }
  if (!data.firstName || !data.message || !EMAIL_RE.test(data.email)) {
    return Response.json({ error: "missing_fields" }, { status: 400 });
  }

  const { RESEND_API_KEY, CONTACT_FROM } = process.env;
  const to = process.env.CONTACT_TO || "admin@boss.technology";
  if (!RESEND_API_KEY || !CONTACT_FROM) {
    console.error("contact: missing RESEND_API_KEY or CONTACT_FROM");
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  const form = body.form === "reclutamiento" ? "Reclutamiento" : "Contacto";
  const name = `${data.firstName} ${data.lastName}`.trim();
  const filled = Object.entries(FIELDS).filter(([k]) => data[k]);
  const rows = filled
    .map(([k, label]) => `<tr><td style="padding:4px 12px 4px 0;color:#666;vertical-align:top">${label}</td><td style="padding:4px 0;white-space:pre-wrap">${esc(data[k])}</td></tr>`)
    .join("");
  const page = typeof body.page === "string" ? body.page.slice(0, 300) : "";
  const html = `<h2 style="font-family:sans-serif">${form} · boss.technology</h2>
<table style="font-family:sans-serif;font-size:14px">${rows}</table>
<p style="font-family:sans-serif;font-size:12px;color:#999">Idioma: ${body.lang === "en" ? "en" : "es"} · Página: ${esc(page)}</p>`;
  const text = filled.map(([k, l]) => `${l}: ${data[k]}`).join("\n");

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
      console.error("contact: Resend answered", r.status, await r.text());
      return Response.json({ error: "send_failed" }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (err) {
    console.error("contact: send error", err);
    return Response.json({ error: "send_failed" }, { status: 502 });
  }
}
