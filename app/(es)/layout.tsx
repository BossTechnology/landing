import type { ReactNode } from "react";
import SiteShell from "@/components/SiteShell";
import { rootMetadata, rootViewport } from "@/lib/site-metadata";

export const metadata = rootMetadata;
export const viewport = rootViewport;

export default function Layout({ children }: { children: ReactNode }) {
  return <SiteShell lang="es">{children}</SiteShell>;
}
