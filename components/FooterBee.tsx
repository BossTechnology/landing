import { BEE } from "@/lib/fx/bee";

/** Bee perched on the footer wordmark (hover makes it fly; five quick clicks release the swarm). */
export default function FooterBee() {
  return <button type="button" className="ft-bee" aria-label="Bzzz" dangerouslySetInnerHTML={{ __html: BEE }} />;
}
