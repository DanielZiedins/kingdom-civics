import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_TAGLINE, absoluteUrl } from "@/lib/seo/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Kingdom Civics",
    description: SITE_TAGLINE,
    start_url: "/",
    display: "standalone",
    background_color: "#0f1a2e",
    theme_color: "#0f1a2e",
    lang: "en-CA",
    categories: ["education", "news", "government"],
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    scope: absoluteUrl("/"),
  };
}
