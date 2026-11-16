import FooterEn from "./FooterEn";
import FooterEs from "./FooterEs";

export default function Footer({ lang }: { lang: "es" | "en" }) {
  return lang === "en" ? <FooterEn /> : <FooterEs />;
}
