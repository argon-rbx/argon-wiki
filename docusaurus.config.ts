import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Argon",
  tagline: "Full featured tool for Roblox development",
  favicon: "img/favicon.png",

  url: "https://argon.wiki",
  baseUrl: "/",

  organizationName: "argon-rbx",
  projectName: "argon",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/argon-rbx/argon-wiki/tree/main/docs",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/logo.svg",

    navbar: {
      logo: {
        alt: "Argon Logo",
        src: "img/banner.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docSidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/argon-rbx",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Intro",
              to: "/docs/intro",
            },
            {
              label: "CLI",
              to: "/docs/category/cli",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "DevForum",
              href: "https://devforum.roblox.com/t/2021776",
            },
            {
              label: "Discussions",
              href: "https://github.com/argon-rbx/argon/discussions",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/argon-rbx",
            },
            {
              label: "VS Marketplace",
              href: "https://marketplace.visualstudio.com/items?itemName=Dervex.argon",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dervex. Built with Docusaurus. Background video by Roblox.`,
    },

    algolia: {
      appId: "5KSHZ35QHT",
      apiKey: "86eefe866f9a9656783501b41edc80d5",
      indexName: "argon",
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
