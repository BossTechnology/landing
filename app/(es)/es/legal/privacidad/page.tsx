import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/es/legal/privacidad",
  title: "Política de privacidad · Boss.Technology",
  description: "Business Observability brinda a los líderes el poder de ver y entender todo lo que sucede en sus empresas, y actuar en tiempo real.",
});

export default function Page() {
  return (
    <>
      <div aria-hidden="true" className="h-[76px]" />
      <main className="flex-1">
        <section className="ph ph--sm" data-nav="dark">
          <div className="ph-in">
            <span className="ph-eb">
              Legal
            </span>
            <h1 className="ph-h1">
              Política de privacidad
            </h1>
            <p className="ph-lead">
              Última actualización: octubre de 2026
            </p>
          </div>
        </section>
        <div className="legal-col mx-auto max-w-[1200px] px-5 py-12 lg:px-6 lg:py-16">
          <div className="space-y-10">
            <section>
              <h2 className="font-display text-[22px] font-semibold text-ink">
                Qué datos recogemos
              </h2>
              <p className="mt-3 text-body-l leading-[1.6] text-ink/75">
                Recogemos los datos que nos facilitas al rellenar el formulario de contacto: nombre, correo electrónico, empresa y el mensaje que nos escribes.
              </p>
            </section>
            <section>
              <h2 className="font-display text-[22px] font-semibold text-ink">
                Para qué los usamos
              </h2>
              <p className="mt-3 text-body-l leading-[1.6] text-ink/75">
                Usamos esos datos únicamente para responder a tu solicitud y dar seguimiento comercial. No los vendemos ni los cedemos a terceros con fines publicitarios.
              </p>
            </section>
            <section>
              <h2 className="font-display text-[22px] font-semibold text-ink">
                Conservación
              </h2>
              <p className="mt-3 text-body-l leading-[1.6] text-ink/75">
                Conservamos la información el tiempo necesario para atender tu solicitud y cumplir con nuestras obligaciones legales.
              </p>
            </section>
            <section>
              <h2 className="font-display text-[22px] font-semibold text-ink">
                Tus derechos
              </h2>
              <p className="mt-3 text-body-l leading-[1.6] text-ink/75">
                {"Puedes solicitar el acceso, la rectificación o la eliminación de tus datos escribiéndonos a "}
                <a href="mailto:admin@boss.technology">
                  admin@boss.technology
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
