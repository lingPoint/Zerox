// theme
import { SairinConfig } from "@sairinjs/core";
import BlogTheme from "@sairinjs/sairin-theme-minimal";

export default {
  siteConfig: {
    title: 'Zerox'
  },
  theme: BlogTheme,
  themeConfig: {
    title: `Zerox`,
    links: [
      {
        title: "GitHub",
        url: "https://github.com/djyde/sairin",
      },
      {
        title: "Twitter",
        url: "https://twitter.com/randyloop",
      },
    ],
  },
} as SairinConfig;
