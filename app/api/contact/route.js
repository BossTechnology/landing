// Contact and careers forms → email via SendGrid (https://sendgrid.com).
// Part of the production layer: this file is not produced by the artifact sync.
//
// Environment variables (Vercel → Project → Settings → Environment Variables):
//   SENDGRID_API_KEY  (required)  API key with "Mail Send" permission
//   CONTACT_FROM      (required)  verified sender in SendGrid, e.g. "Boss.Technology <web@boss.technology>"
//   CONTACT_TO        (optional)  team inbox, comma separated; default admin@boss.technology
//   CONTACT_TO_CAREERS(optional)  inbox for the careers form; default CONTACT_TO
//
// Two emails per submission: notification to the team (reply-to = the person) and a confirmation
// to the person in their language. If the confirmation fails the request still succeeds.

export const runtime = "nodejs";

const FIELDS = {
  firstName: { es: "Nombre", max: 120 },
  lastName: { es: "Apellido", max: 120 },
  email: { es: "Correo", max: 200 },
  company: { es: "Empresa", max: 200 },
  country: { es: "País", max: 60 },
  linkedin: { es: "LinkedIn / portafolio", max: 300 },
  area: { es: "Área de interés", max: 120 },
  message: { es: "Mensaje", max: 5000 },
};
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_FILL_MS = 2500; // humans don't fill a form in under 2.5 s
const RATE = { windowMs: 10 * 60 * 1000, max: 5 }; // per IP, per serverless instance
const hits = new Map();

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const json = (body, status = 200) => Response.json(body, { status });

function parseAddress(v) {
  const m = String(v || "").match(/^\s*(?:"?([^"<]*)"?\s*)?<([^>]+)>\s*$/);
  return m ? { email: m[2].trim(), name: (m[1] || "").trim() || undefined } : { email: String(v || "").trim() };
}

function limited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < RATE.windowMs);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return list.length > RATE.max;
}

async function send(apiKey, msg) {
  const r = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(msg),
  });
  if (!r.ok) throw new Error(`SendGrid ${r.status}: ${(await r.text()).slice(0, 500)}`);
}

function layout(title, inner) {
  return `<!doctype html><html><body style="margin:0;background:#f3f2fb;padding:24px;font-family:Inter,Segoe UI,Helvetica,Arial,sans-serif;color:#050510">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden">
<tr><td style="background:#050510;padding:20px 28px;color:#fff;font-size:18px;font-weight:600">Boss<span style="font-weight:400">.Technology</span></td></tr>
<tr><td style="padding:28px"><h1 style="margin:0 0 16px;font-size:20px;line-height:1.3">${title}</h1>${inner}</td></tr>
<tr><td style="padding:16px 28px;border-top:1px solid #eceaf7;font-size:12px;color:#7a7a8c">Boss.Technology · Business Observability · <a href="https://boss.technology" style="color:#4e49f2">boss.technology</a></td></tr>
</table></body></html>`;
}

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return json({ error: "invalid_body" }, 400);
  }
  if (!body || typeof body !== "object") return json({ error: "invalid_body" }, 400);

  // Spam traps: hidden field filled, or submitted too fast. Answer OK without sending anything.
  if (body.website || (typeof body.elapsed === "number" && body.elapsed < MIN_FILL_MS)) return json({ ok: true });

  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  if (limited(ip)) return json({ error: "rate_limited" }, 429);

  const data = {};
  for (const [k, f] of Object.entries(FIELDS)) {
    data[k] = typeof body[k] === "string" ? body[k].trim().slice(0, f.max) : "";
  }
  if (!data.firstName || !data.message || !EMAIL_RE.test(data.email)) return json({ error: "missing_fields" }, 400);

  const { SENDGRID_API_KEY, CONTACT_FROM } = process.env;
  if (!SENDGRID_API_KEY || !CONTACT_FROM) {
    console.error("contact: missing SENDGRID_API_KEY or CONTACT_FROM");
    return json({ error: "not_configured" }, 503);
  }

  const careers = body.form === "reclutamiento";
  const en = body.lang === "en";
  const from = parseAddress(CONTACT_FROM);
  const teamTo = (careers && process.env.CONTACT_TO_CAREERS) || process.env.CONTACT_TO || "admin@boss.technology";
  const to = teamTo.split(",").map((e) => ({ email: e.trim() })).filter((e) => e.email);
  const name = `${data.firstName} ${data.lastName}`.trim();
  const page = typeof body.page === "string" ? body.page.slice(0, 300) : "";
  const filled = Object.entries(FIELDS).filter(([k]) => data[k]);
  const kind = careers ? "Reclutamiento" : "Contacto";

  // 1. Team notification
  const rows = filled.map(([k, f]) => `<tr><td style="padding:6px 16px 6px 0;color:#7a7a8c;vertical-align:top;white-space:nowrap">${f.es}</td><td style="padding:6px 0;white-space:pre-wrap">${esc(data[k])}</td></tr>`).join("");
  try {
    await send(SENDGRID_API_KEY, {
      personalizations: [{ to }],
      from,
      reply_to: { email: data.email, name: name || undefined },
      subject: `[${kind}] ${name}${data.company ? ` · ${data.company}` : ""}${data.country ? ` · ${data.country}` : ""}${data.area ? ` · ${data.area}` : ""}`,
      content: [
        { type: "text/plain", value: filled.map(([k, f]) => `${f.es}: ${data[k]}`).join("\n") + `\n\nIdioma: ${en ? "en" : "es"} · Página: ${page}` },
        { type: "text/html", value: layout(`Nuevo mensaje · ${kind}`, `<table style="font-size:14px;line-height:1.5">${rows}</table><p style="margin:20px 0 0;font-size:12px;color:#7a7a8c">Idioma: ${en ? "en" : "es"} · Página: ${esc(page)}<br>Responde a este correo para escribirle directamente.</p>`) },
      ],
      categories: ["web-form", careers ? "careers" : "contact"],
    });
  } catch (err) {
    console.error("contact: team email failed", err);
    return json({ error: "send_failed" }, 502);
  }

  // 2. Confirmation to the person (best effort)
  const c = en
    ? {
        subject: careers ? "We received your application · Boss.Technology" : "We received your message · Boss.Technology",
        title: `Thanks, ${esc(data.firstName)}!`,
        body: careers
          ? "We received your application. Our team reviews every profile and will contact you if there is a fit."
          : "We received your message and will get back to you shortly, usually within one business day.",
        copy: "Your message",
      }
    : {
        subject: careers ? "Recibimos tu postulación · Boss.Technology" : "Recibimos tu mensaje · Boss.Technology",
        title: `¡Gracias, ${esc(data.firstName)}!`,
        body: careers
          ? "Recibimos tu postulación. Nuestro equipo revisa cada perfil y te contactará si hay una oportunidad que encaje."
          : "Recibimos tu mensaje y te responderemos pronto, normalmente en un día hábil.",
        copy: "Tu mensaje",
      };
  try {
    await send(SENDGRID_API_KEY, {
      personalizations: [{ to: [{ email: data.email, name: name || undefined }] }],
      from,
      reply_to: { email: to[0].email },
      subject: c.subject,
      content: [
        { type: "text/plain", value: `${c.title.replace(/&[^;]+;/g, "")}\n\n${c.body}\n\n${c.copy}:\n${data.message}\n\n— Boss.Technology` },
        { type: "text/html", value: layout(c.title, `<p style="margin:0 0 16px;font-size:15px;line-height:1.6">${c.body}</p><p style="margin:0 0 6px;font-size:12px;color:#7a7a8c;text-transform:uppercase;letter-spacing:.08em">${c.copy}</p><blockquote style="margin:0;padding:12px 16px;background:#f7f6fd;border-radius:10px;font-size:14px;line-height:1.5;white-space:pre-wrap">${esc(data.message)}</blockquote>`) },
      ],
      categories: ["web-form-confirmation"],
    });
  } catch (err) {
    console.error("contact: confirmation email failed", err);
  }

  return json({ ok: true });
}
