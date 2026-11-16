import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/es/blog/cajas-negras",
  title: "Cajas negras, puntos ciegos y túneles oscuros · Boss.Technology",
  description: "Lo que tu empresa no ve también decide sus resultados. Cómo Business Observability conecta lo que controlas y lo que no, para entender y actuar a tiempo.",
});

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ".post-body h3{margin-top:30px;font:600 20px/1.3 var(--font-family-display);color:var(--brand-ink)}.post-body .pst-pull{margin:36px 0;padding:4px 0 4px 24px;border-left:3px solid var(--brand-accent);font:500 clamp(21px,2.3vw,26px)/1.35 var(--font-family-display);letter-spacing:-.01em;color:var(--brand-ink);text-wrap:balance}.pst-box{margin:32px 0;padding:24px 26px;border-radius:var(--radius-xl,20px);background:var(--indigo-50);border:1px solid var(--indigo-100)}.pst-box h3{margin:0 0 6px;font:600 13px/1 var(--font-family-sans);letter-spacing:.12em;text-transform:uppercase;color:var(--brand-accent)}.pst-box dl{margin:12px 0 0;display:grid;gap:12px}.pst-box dt{font:600 16px/1.3 var(--font-family-display);color:var(--brand-ink)}.pst-box dd{margin:2px 0 0;font-size:15.5px;line-height:1.55;color:var(--cool-700)}.post-fig--wide{margin-left:-6%;margin-right:-6%}@media (max-width:899px){.post-fig--wide{margin-left:0;margin-right:0}}.pst-vs{margin:28px 0 0;display:grid;gap:14px}@media (min-width:720px){.pst-vs{grid-template-columns:1fr 1fr}}.pst-vs div{padding:20px 22px;border-radius:var(--radius-xl,20px);border:1px solid var(--bz-line,rgba(5,5,16,.1));background:var(--brand-paper-2)}.pst-vs div.on{background:var(--brand-ink);border-color:transparent}.pst-vs small{font:600 12px/1 var(--font-family-sans);letter-spacing:.12em;text-transform:uppercase;color:var(--cool-500)}.pst-vs div.on small{color:var(--indigo-300)}.pst-vs p{margin-top:8px!important;font-size:16.5px!important;line-height:1.55!important}.pst-vs div.on p{color:color-mix(in srgb,var(--brand-paper-2) 82%,transparent)!important}" }} />
      <style dangerouslySetInnerHTML={{ __html: "\n.pst-g>*{min-width:0}\n.bb-cover{position:relative;overflow:hidden;border-radius:var(--radius-xl,20px);background:radial-gradient(60% 90% at 50% 0%,color-mix(in srgb,var(--brand-accent) 30%,transparent),transparent 70%),var(--brand-ink);padding:32px 24px;color:#fff}\n.bb-cover::before{content:\"\";position:absolute;inset:0;background-image:radial-gradient(rgba(150,146,255,.13) 1px,transparent 1.4px);background-size:18px 18px;pointer-events:none}\n.bb-row{position:relative;display:grid;gap:14px}\n@media (min-width:760px){.bb-cover{padding:44px}.bb-row{grid-template-columns:repeat(3,1fr);gap:18px}}\n.bb-it{padding:22px;border-radius:16px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1)}\n.bb-it b{display:block;margin-top:16px;font:600 22px/1.15 var(--font-family-display)}\n.bb-it span{display:block;margin-top:6px;font-size:14px;line-height:1.45;color:rgba(255,255,255,.62)}\n.bb-ic{position:relative;height:56px}\n.bb-ic--box i{position:absolute;left:26px;top:4px;width:48px;height:48px;border-radius:8px;background:#000;border:1px solid rgba(255,255,255,.28);box-shadow:inset 0 0 0 6px rgba(255,255,255,.04)}\n.bb-ic--box i::before,.bb-ic--box i::after{content:\"\";position:absolute;top:50%;width:22px;height:2px;background:var(--indigo-300)}\n.bb-ic--box i::before{left:-26px}.bb-ic--box i::after{right:-26px}\n.bb-ic--box{padding-left:26px}\n.bb-ic--spot i{position:absolute;left:0;top:4px;width:48px;height:48px;border-radius:50%;border:2px dashed rgba(255,255,255,.4)}\n.bb-ic--spot i::after{content:\"\";position:absolute;inset:14px;border-radius:50%;background:var(--indigo-300);opacity:.25;animation:bb-p 2.4s ease-in-out infinite}\n.bb-ic--tun i{position:absolute;left:0;right:0;top:22px;height:12px;border-radius:999px;background:linear-gradient(90deg,var(--indigo-300) 0 12%,#000 12% 88%,var(--indigo-300) 88%);border:1px solid rgba(255,255,255,.2)}\n.bb-ic--tun i::after{content:\"\";position:absolute;left:12%;right:12%;top:50%;border-top:2px dashed rgba(255,255,255,.35)}\n@keyframes bb-p{50%{opacity:.7}}\n@media (prefers-reduced-motion:reduce){.bb-ic--spot i::after{animation:none}}\n.bb-sc{margin:24px 0 0;display:grid;gap:14px}\n@media (min-width:760px){.bb-sc{grid-template-columns:1fr 1fr}}\n.bb-sc div{padding:20px 22px;border-radius:var(--radius-xl,20px);border:1px solid var(--bz-line,rgba(5,5,16,.1));background:var(--brand-paper-2)}\n.bb-sc small{font:600 11px/1 var(--font-family-sans);letter-spacing:.12em;text-transform:uppercase;color:var(--brand-accent)}\n.bb-sc b{display:block;margin-top:8px;font:600 17px/1.25 var(--font-family-display);color:var(--brand-ink)}\n.bb-sc p{margin-top:8px!important;font-size:15px!important;line-height:1.5!important}\n.bb-sc em{display:block;margin-top:10px;font-style:normal;font-size:14px;line-height:1.45;color:var(--brand-ink);padding-top:10px;border-top:1px solid var(--bz-line,rgba(5,5,16,.1))}\n.bb-sh{margin:24px 0 0;padding:0;list-style:none;display:grid;gap:10px}\n.bb-sh li{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:12px;padding:14px 18px;border-radius:14px;background:var(--brand-paper-2);border:1px solid var(--bz-line,rgba(5,5,16,.08))}\n.bb-sh s{text-decoration:none;color:var(--cool-500);font-size:15px}\n.bb-sh i{font-style:normal;color:var(--brand-accent)}\n.bb-sh b{font:600 15.5px/1.3 var(--font-family-display);color:var(--brand-ink)}\n@media (max-width:560px){.bb-sh li{grid-template-columns:1fr;gap:2px}.bb-sh i{display:none}}\n.bb-env{margin:24px 0 0;display:grid;gap:12px}\n@media (min-width:760px){.bb-env{grid-template-columns:1fr 1fr}}\n.bb-env div{padding:20px 22px;border-radius:var(--radius-xl,20px)}\n.bb-env div:first-child{background:var(--indigo-50);border:1px solid var(--indigo-100)}\n.bb-env div:last-child{background:var(--brand-ink);color:#fff}\n.bb-env small{font:600 11px/1 var(--font-family-sans);letter-spacing:.12em;text-transform:uppercase;color:var(--brand-accent)}\n.bb-env div:last-child small{color:var(--indigo-300)}\n.bb-env p{margin-top:8px!important;font-size:15px!important;line-height:1.5!important}\n.bb-env div:last-child p{color:rgba(255,255,255,.75)!important}\n" }} />
      <style dangerouslySetInnerHTML={{ __html: "@media (min-width:900px){.blg-grid--2{grid-template-columns:repeat(2,minmax(0,1fr))!important}}" }} />
      <div aria-hidden="true" className="h-[76px]" />
      <main className="flex-1 bz pst">
        <article>
          <header className="pst-h">
            <Link className="pst-back" href="/es/blog">
              ← Colmena de ideas
            </Link>
            <ul className="pst-chips">
              <li>
                Business Observability
              </li>
              <li>
                Fundamentos
              </li>
            </ul>
            <h1>
              Cajas negras, puntos ciegos y túneles oscuros
            </h1>
            <p className="pst-dek">
              Todos los sistemas en verde y el negocio igual falla. Lo que define un resultado casi nunca vive en un solo sistema, ni siquiera dentro de tu empresa. Una forma nueva de mirar la operación: por lo que afecta el resultado, no por quién es dueño de cada pieza.
            </p>
            <div className="pst-by">
              <span className="pst-av" aria-hidden="true">
                B
              </span>
              <span>
                <b>
                  Boss.Technology
                </b>
                <small>
                  <time dateTime="2026-11-16">
                    16 de noviembre de 2026
                  </time>
                  {" · 7 min de lectura"}
                </small>
              </span>
            </div>
          </header>
          {"\n"}
          <div className="pst-cover bb-cover" aria-hidden="true">
            <div className="bb-row">
              <div className="bb-it">
                <div className="bb-ic bb-ic--box">
                  <i />
                </div>
                <b>
                  Cajas negras
                </b>
                <span>
                  Entidades que hacen algo importante, pero cuyo interior no ves.
                </span>
              </div>
              <div className="bb-it">
                <div className="bb-ic bb-ic--spot">
                  <i />
                </div>
                <b>
                  Puntos ciegos
                </b>
                <span>
                  Sistemas, decisiones y servicios que afectan el resultado fuera de tu vista.
                </span>
              </div>
              <div className="bb-it">
                <div className="bb-ic bb-ic--tun">
                  <i />
                </div>
                <b>
                  Túneles oscuros
                </b>
                <span>
                  Recorridos completos que cruzan cajas negras y puntos ciegos.
                </span>
              </div>
            </div>
          </div>
          {"\n"}
          <div className="pst-g">
            <aside className="pst-side">
              <nav className="pst-toc" aria-label="En este artículo">
                <p>
                  En este artículo
                </p>
                <ol>
                  <li>
                    <a href="#todo-en-verde">
                      Todo en verde, y nada funciona
                    </a>
                  </li>
                  <li>
                    <a href="#tres-mundos-ocultos">
                      Tres mundos ocultos
                    </a>
                  </li>
                  <li>
                    <a href="#lo-que-controlas">
                      Lo que controlas y lo que no
                    </a>
                  </li>
                  <li>
                    <a href="#cuatro-escenarios">
                      Cuatro escenarios
                    </a>
                  </li>
                  <li>
                    <a href="#que-cambia">
                      Qué cambia
                    </a>
                  </li>
                  <li>
                    <a href="#lo-que-no-es">
                      Lo que no es
                    </a>
                  </li>
                  <li>
                    <a href="#una-sola-realidad">
                      Una sola realidad observable
                    </a>
                  </li>
                </ol>
              </nav>
              <div className="pst-share">
                <p>
                  Compartir
                </p>
                <div>
                  <a href="https://www.linkedin.com/sharing/share-offsite/" data-share="li" target="_blank" rel="noopener" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4V9Z" />
                    </svg>
                  </a>
                  <button type="button" className="pst-copy" aria-label="Copiar enlace" data-ok="Enlace copiado">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" />
                      <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" />
                    </svg>
                  </button>
                </div>
              </div>
            </aside>
            <div className="pst-body post-body">
              {"\n"}
              <p>
                Un sábado a las 9 de la mañana, una cafetería tiene todo listo: personal completo, inventario, caja, red y clientes en la puerta. Todos los sistemas están en verde. Y no vende un solo café. Se cortó la luz en la zona: no hay refrigeración, ni máquina de espresso, ni aire acondicionado.
              </p>
              {"\n"}
              <p>
                La tecnología estaba sana. El resultado era imposible. Una observabilidad que se detiene en el software se pierde justo el evento que más importa.
              </p>
              {"\n"}
              <aside className="pst-cta">
                <div>
                  <b>
                    Encuentra tus túneles oscuros
                  </b>
                  <span>
                    Identificamos juntos qué parte de tu operación hoy no ves.
                  </span>
                </div>
                <Link className="btn btn--primary btn--sm" href="/es/contacto">
                  Agenda una reunión
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
              </aside>
              {"\n"}
              <h2 id="todo-en-verde">
                Todo en verde, y nada funciona
              </h2>
              {"\n"}
              <p>
                La visibilidad tradicional se organiza por propiedad: mi aplicación, mi infraestructura, mi área, mi reporte. Es útil, pero incompleta. El cliente, el ciudadano o el colaborador no vive la empresa según su organigrama. Vive una sola realidad continua.
              </p>
              {"\n"}
              <p>
                Por eso Business Observability no es solo una tecnología de monitoreo más nueva. Es otra forma de mirar la organización: como un sistema vivo, donde todo afecta a todo. La lluvia altera el tráfico, el tráfico retrasa la llegada del personal, el personal define la capacidad de atención, la capacidad define el tiempo de espera y la espera se convierte en reclamos. Cada sistema registra un dato distinto. Para el negocio es un solo evento.
              </p>
              {"\n"}
              <p className="pst-pull">
                El objetivo no es controlarlo todo. Es hacer observable la realidad que define el resultado, sea quien sea el dueño de cada pieza.
              </p>
              {"\n\n"}
              <h2 id="tres-mundos-ocultos">
                Tres mundos ocultos
              </h2>
              {"\n"}
              <p>
                Toda organización tiene zonas difíciles de entender en tiempo real. Les ponemos nombre porque lo que se nombra se puede gestionar.
              </p>
              {"\n"}
              <h3>
                Cajas negras: entidades cerradas
              </h3>
              {"\n"}
              <p>
                Una caja negra hace algo importante, pero su estado interno es opaco. No depende de si es propia o de un tercero, ni de si es digital o física. Una máquina de espresso: entran café, agua e instrucciones; sale una bebida; la falla interna no se ve. Un tractor conectado cuyo software y diagnóstico controla el fabricante. Un centro de distribución tercerizado: entra un pedido, sale un paquete, y lo que pasa en medio es invisible. Un SaaS, un modelo de IA o una plataforma de pagos.
              </p>
              {"\n"}
              <p>
                Una caja negra no es algo malo ni roto. Es una condición de visibilidad.
              </p>
              {"\n"}
              <h3>
                Puntos ciegos: lo que actúa fuera de tu vista
              </h3>
              {"\n"}
              <p>
                Son más acotados: sistemas, verificaciones, decisiones o servicios que afectan el resultado, pero no están presentes de forma continua en la vista de la operación. La información existe. Alguien podría entrar a un portal o llamar al proveedor. El problema es que no participa en tiempo real. Pasa con la validación de fraude, la verificación de identidad, el envío de SMS o correos, las APIs de terceros, las consultas tributarias o de crédito, o la decisión de un proveedor que vive en su portal.
              </p>
              {"\n"}
              <h3>
                Túneles oscuros: el recorrido completo
              </h3>
              {"\n"}
              <p>
                Un túnel oscuro es el recorrido de punta a punta: cruza sistemas, personas, dispositivos, empresas, aprobaciones, lugares físicos y condiciones externas. La empresa ve con claridad el inicio y el final, pero el medio está repartido entre muchos dueños y tecnologías.
              </p>
              {"\n"}
              <blockquote>
                {"Si el cliente vive un solo recorrido y la empresa ve muchos sistemas, tickets y reportes sin relación, "}
                <em>
                  hay un túnel oscuro entre ellos.
                </em>
              </blockquote>
              {"\n\n"}
              <h2 id="lo-que-controlas">
                Lo que controlas y lo que no
              </h2>
              {"\n"}
              <p>
                Hay una segunda idea, distinta de la anterior: el límite de autoridad. Las empresas modernas operan a la vez en dos entornos.
              </p>
              {"\n"}
              <div className="bb-env">
                <div>
                  <small>
                    Entorno controlado
                  </small>
                  <p>
                    Lo que la empresa dirige directamente: sus sistemas, procesos, personas, activos y locales.
                  </p>
                </div>
                <div>
                  <small>
                    Entorno no controlado
                  </small>
                  <p>
                    Lo que la afecta sin que tenga autoridad: proveedores, bancos, APIs, operadores logísticos, aliados, dispositivos del cliente, y el mundo físico: clima, tráfico, energía, vías y condiciones sociales.
                  </p>
                </div>
              </div>
              {"\n"}
              <p>
                El recorrido del cliente no reconoce esa frontera. Simplemente funciona o falla. Por eso la observabilidad de negocio tiene que entender la realidad completa a ambos lados, y tratar el mundo físico no como contexto externo, sino como parte del sistema.
              </p>
              {"\n\n"}
              <h2 id="cuatro-escenarios">
                Cuatro escenarios
              </h2>
              {"\n"}
              <div className="bb-sc">
                {"\n"}
                <div>
                  <small>
                    Pagos
                  </small>
                  <b>
                    El costo de una decisión oculta
                  </b>
                  <p>
                    El comercio ve un pago como un evento simple: aprobado o rechazado. En medio hay antifraude, tokenización, enrutamiento, adquirente y el análisis de riesgo del banco emisor. Si el emisor rechaza por sospecha de fraude a un cliente que ya compró muchas veces, el comercio acepta el rechazo como un hecho.
                  </p>
                  <em>
                    No se trata de controlar el algoritmo del banco, sino de conectar esa decisión con el historial del cliente, el abandono y el margen perdido.
                  </em>
                </div>
                {"\n"}
                <div>
                  <small>
                    Fulfillment
                  </small>
                  <b>
                    Una caja negra en medio del comercio
                  </b>
                  <p>
                    El comercio sabe que envió el pedido y, días después, que se despachó. Entre ambos hay inventario, picking, personal, equipos, etiquetas, transportista y excepciones.
                  </p>
                  <em>
                    No se trata de reemplazar al operador, sino de saber si el pedido está detenido, si el retraso es aislado o sistémico y qué clientes se verán afectados.
                  </em>
                </div>
                {"\n"}
                <div>
                  <small>
                    Banca
                  </small>
                  <b>
                    Más allá de la agencia
                  </b>
                  <p>
                    Un cliente abre una cuenta digital, recibe su tarjeta por courier y luego deposita en una tienda aliada. Para él es una sola experiencia. Para el banco cruza burós de crédito, fabricante de tarjetas, courier, el celular del cliente, la red del aliado y los rieles de pago.
                  </p>
                  <em>
                    Ningún participante controla todo el recorrido. Business Observability conecta suficientes señales para saber dónde está la experiencia y qué acción aún es posible.
                  </em>
                </div>
                {"\n"}
                <div>
                  <small>
                    Servicio público
                  </small>
                  <b>
                    Cuando el mundo real es el flujo de trabajo
                  </b>
                  <p>
                    Una tormenta afecta varias sedes. Los sistemas internos se ven normales, pero hay vías bloqueadas, cortes de energía, personal que no llega y una sede que dejó de reportar.
                  </p>
                  <em>
                    La pregunta es si el liderazgo puede ver, en una sola realidad, el evento, las sedes y personas en riesgo, el estado actual y la siguiente acción.
                  </em>
                </div>
                {"\n"}
              </div>
              {"\n"}
              <p>
                Lo mismo ocurre en streaming: la experiencia no empieza cuando arranca el video, sino mucho antes, al despertar el dispositivo, autenticar al usuario, cargar el catálogo y verificar derechos. Si el cliente abandona antes del primer cuadro, ¿la falla fue del streaming o de una dependencia oculta en el túnel?
              </p>
              {"\n\n"}
              <h2 id="que-cambia">
                Qué cambia
              </h2>
              {"\n"}
              <p>
                La transformación de fondo no es tener más monitoreo. Es cambiar lo que la organización considera observable.
              </p>
              {"\n"}
              <ul className="bb-sh">
                {"\n"}
                <li>
                  <s>
                    De la propiedad
                  </s>
                  <i>
                    →
                  </i>
                  <b>
                    a la relevancia: si afecta el resultado, se observa
                  </b>
                </li>
                {"\n"}
                <li>
                  <s>
                    De la salud aislada
                  </s>
                  <i>
                    →
                  </i>
                  <b>
                    a las relaciones: un componente sano puede convivir con un recorrido que falla
                  </b>
                </li>
                {"\n"}
                <li>
                  <s>
                    De lo solo digital
                  </s>
                  <i>
                    →
                  </i>
                  <b>
                    a lo digital y físico: personas, máquinas, locales, clima y energía
                  </b>
                </li>
                {"\n"}
                <li>
                  <s>
                    Del reporte de lo que pasó
                  </s>
                  <i>
                    →
                  </i>
                  <b>
                    al estado presente, mientras aún se puede actuar
                  </b>
                </li>
                {"\n"}
                <li>
                  <s>
                    De la visibilidad
                  </s>
                  <i>
                    →
                  </i>
                  <b>
                    a la acción: alertar, redirigir, escalar, comunicar o automatizar
                  </b>
                </li>
                {"\n"}
                <li>
                  <s>
                    Del dato perfecto
                  </s>
                  <i>
                    →
                  </i>
                  <b>
                    a la evidencia útil y confiable
                  </b>
                </li>
                {"\n"}
              </ul>
              {"\n\n"}
              <h2 id="lo-que-no-es">
                Lo que no es
              </h2>
              {"\n"}
              <p>
                Para evitar malentendidos, algunos límites claros:
              </p>
              {"\n"}
              <ul>
                <li>
                  No hay que abrir cada caja negra. Muchas veces basta con observar sus entradas, salidas, estado y consecuencias.
                </li>
                <li>
                  Nadie controla el clima, el tráfico ni a los proveedores. El objetivo es entender su efecto y conservar opciones de acción.
                </li>
                <li>
                  No reemplaza la observabilidad de TI: la infraestructura y las aplicaciones siguen siendo parte de la realidad observable.
                </li>
                <li>
                  No es visibilidad total desde el día uno. Se empieza por lo que más importa, se demuestra valor y se amplía la cobertura.
                </li>
              </ul>
              {"\n\n"}
              <h2 id="una-sola-realidad">
                Una sola realidad observable
              </h2>
              {"\n"}
              <p>
                Las empresas no operan dentro de fronteras limpias. Sus resultados nacen de una mezcla de sistemas propios, servicios tercerizados, máquinas, personas, dispositivos de clientes, proveedores, locales, clima, tráfico, energía y decisiones ocultas. La visibilidad tradicional ve esas piezas por separado. La organización no vive por separado.
              </p>
              {"\n"}
              <p className="pst-pull">
                De gestionar lo que poseemos a entender todo lo que afecta el resultado.
              </p>
              {"\n"}
              <p>
                Business Observability es la disciplina de llevar esas realidades a un mismo campo de conciencia: no porque la empresa sea dueña de todo, sino porque todo lo que importa para el resultado merece ser entendido. Una sola realidad: conectada, observable, comprensible y accionable.
              </p>
              {"\n"}
              <div className="post-links">
                <Link className="bz-more" href="/es/bo11y">
                  Qué es Bo11y
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
                <Link className="bz-more" href="/es/productos/plataformas">
                  Conoce BzzzBX
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
                <Link className="bz-more" href="/es/casos">
                  Casos de negocio
                  <span aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </article>
        {"\n"}
        <section className="pst-rel">
          <div className="pst-rel-h">
            <h2>
              Artículos relacionados
            </h2>
            <Link className="btn-link" href="/es/blog">
              Ver todos los artículos
              <span aria-hidden="true">
                →
              </span>
            </Link>
          </div>
          <div className="blg-grid blg-grid--2">
            <article className="blg-card">
              <Link href="/es/blog/bo11y-vs-bi" className="blg-link" aria-label="Más allá del BI y los Data Lakes: ver el negocio mientras ocurre" />
              <div className="blg-th">
                <img src="/assets/blog/bi-thumb.webp" alt="" loading="lazy" />
              </div>
              <div className="blg-meta">
                <span className="blg-cat">
                  Business Observability
                </span>
                <time dateTime="2026-11-16">
                  16 de noviembre, 2026
                </time>
              </div>
              <h3>
                Más allá del BI y los Data Lakes: ver el negocio mientras ocurre
              </h3>
              <p>
                BI y Data Lakes explican lo que pasó. Business Observability muestra lo que está pasando, y por qué los completa.
              </p>
              <ul className="blg-tags">
                <li>
                  Fundamentos
                </li>
                <li>
                  Data Lakes
                </li>
              </ul>
            </article>
            <article className="blg-card">
              <Link href="/es/blog/ia-observabilidad" className="blg-link" aria-label="Por qué la observabilidad es la base de la IA en las empresas" />
              <div className="blg-th">
                <img src="/assets/blog/ia-thumb.webp" alt="" loading="lazy" />
              </div>
              <div className="blg-meta">
                <span className="blg-cat">
                  IA aplicada
                </span>
                <time dateTime="2026-11-12">
                  12 de noviembre, 2026
                </time>
              </div>
              <h3>
                Por qué la observabilidad es la base de la IA en las empresas
              </h3>
              <p>
                Sin señales en vivo, la IA responde con lo que tiene a mano. Así le damos contexto, evidencia y control.
              </p>
              <ul className="blg-tags">
                <li>
                  IA aplicada
                </li>
                <li>
                  BzzzBX
                </li>
              </ul>
            </article>
          </div>
        </section>
        {"\n"}
        <section className="px-5 lg:px-6 sec-y sec-cta">
          <div className="relative isolate mx-auto flex max-w-[1152px] flex-col items-center overflow-hidden rounded-[32px] bg-ink px-5 py-16 text-center sm:rounded-[40px] sm:px-6 lg:py-24">
            <h2 className="max-w-[638px] text-balance font-display text-[30px] font-medium leading-[1.2] text-white sm:text-[40px] lg:text-display-m">
              ¿Qué parte de tu operación hoy no ves?
            </h2>
            <p className="mt-5 max-w-[560px] text-pretty text-body-m text-[#d8d8d8] lg:mt-6 lg:text-body-l">
              Conversemos sobre cómo hacerla observable con BzzzBX.
            </p>
            <div className="mt-7">
              <Link className="inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-pill px-7 py-3.5 font-display whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:pointer-events-none disabled:opacity-50 bg-accent-base text-on-accent hover:bg-[#3f3ad9]" href="/es/contacto">
                Agenda una reunión
                <span aria-hidden="true" className="text-[16px] leading-none">
                  →
                </span>
              </Link>
              <Link className="cta-2 inline-flex shrink-0 items-center justify-center gap-2 rounded-pill px-7 font-display whitespace-nowrap" href="/es/productos/plataformas">
                Conoce BzzzBX
              </Link>
            </div>
            <ul className="cta-checks">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="m8.5 12.5 2.3 2.3 4.7-5" />
                </svg>
                En tu nube o centro de datos
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="m8.5 12.5 2.3 2.3 4.7-5" />
                </svg>
                Tu dato no sale
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="m8.5 12.5 2.3 2.3 4.7-5" />
                </svg>
                Se integra con tus sistemas
              </li>
            </ul>
          </div>
        </section>
        {"\n"}
      </main>
    </>
  );
}
