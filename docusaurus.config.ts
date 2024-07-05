import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

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

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/argon-rbx/argon-wiki/tree/main",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          lastmod: "date",
          priority: null,
          changefreq: null,
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "content-docs",
      {
        id: "api",
        path: "api",
        routeBasePath: "api",
        sidebarPath: "./sidebars.ts",
        editUrl: "https://github.com/argon-rbx/argon-wiki/tree/main",
      },
    ],
    [
      "content-docs",
      {
        id: "changelog",
        path: "changelog",
        routeBasePath: "changelog",
        sidebarPath: "./sidebars.ts",
      },
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
          label: "Docs",
          position: "left",
          type: "docSidebar",
          sidebarId: "sidebar",
        },
        {
          label: "API",
          position: "left",
          to: "/api/project",
          activeBaseRegex: "/api/",
        },
        {
          label: "Changelog",
          position: "left",
          to: "/changelog/argon",
          activeBaseRegex: "/changelog/",
        },
        {
          href: "https://github.com/argon-rbx",
          position: "right",
          className: "github-link",
          "aria-label": "GitHub repository",
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
              label: "Installation",
              to: "/docs/installation",
            },
          ],
        },
        {
          title: "API",
          items: [
            {
              label: "Project",
              to: "/api/project",
            },
            {
              label: "File Types",
              to: "/api/file-types",
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

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    algolia: {
      appId: "5KSHZ35QHT",
      apiKey: "86eefe866f9a9656783501b41edc80d5",
      indexName: "argon",
    },
  } satisfies Preset.ThemeConfig,
}

export default config
