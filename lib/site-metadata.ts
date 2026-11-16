import type { Metadata, Viewport } from "next";
import { SITE_URL } from "./seo";

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: { url: "/assets/brand/favicon.svg", type: "image/svg+xml" } },
};

export const rootViewport: Viewport = { themeColor: "#050510" };
