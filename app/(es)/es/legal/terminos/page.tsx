import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/es/legal/terminos",
  title: "Términos de servicio · Boss.Technology",
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
              Términos de servicio
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
                Uso del sitio
              </h2>
              <p className="mt-3 text-body-l leading-[1.6] text-ink/75">
                El acceso y uso de este sitio implica la aceptación de estos términos. El contenido se ofrece con fines informativos sobre los productos de Boss.Technology.
              </p>
            </section>
            <section>
              <h2 className="font-display text-[22px] font-semibold text-ink">
                Propiedad intelectual
              </h2>
              <p className="mt-3 text-body-l leading-[1.6] text-ink/75">
                Las marcas, logotipos y contenidos de este sitio pertenecen a Boss.Technology y no pueden reproducirse sin autorización previa.
              </p>
            </section>
            <section>
              <h2 className="font-display text-[22px] font-semibold text-ink">
                Limitación de responsabilidad
              </h2>
              <p className="mt-3 text-body-l leading-[1.6] text-ink/75">
                Procuramos que la información esté actualizada, pero no garantizamos que esté libre de errores ni que el servicio sea ininterrumpido.
              </p>
            </section>
            <section>
              <h2 className="font-display text-[22px] font-semibold text-ink">
                Contacto
              </h2>
              <p className="mt-3 text-body-l leading-[1.6] text-ink/75">
                {"Para cualquier duda sobre estos términos, escríbenos a "}
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
