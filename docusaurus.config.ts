import type * as Preset from "@docusaurus/preset-classic"
import type { Config } from "@docusaurus/types"
import { themes as prismThemes } from "prism-react-renderer"
import rehypeKatex from "rehype-katex"
import remarkMath from "remark-math"
import tailwindPlugin from "./plugins/tailwind-config.cjs"

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: "polyproto",
    tagline: "A refreshing new, decentralised federation protocol",
    favicon: "img/logo.svg",

    // Set the production url of your site here
    url: "https://polyproto.org",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "polyphony-chat", // Usually your GitHub org/user name.
    projectName: "polyproto-dot-org", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
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
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ["rss", "atom"],
                        xslt: true,
                    },
                    // Useful options to enforce blogging best practices
                    onInlineTags: "warn",
                    onInlineAuthors: "warn",
                    onUntruncatedBlogPosts: "warn",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    plugins: [tailwindPlugin],

    themeConfig: {
        colorMode: {
            defaultMode: "light",
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
        image: "img/banner-social.jpg",
        navbar: {
            title: "polyproto",
            logo: {
                alt: "polyproto Logo",
                src: "img/logo.svg",
            },
            items: [],
        },
        footer: {
            style: "light",
            links: [
                {
                    title: "GET HELP!",
                    items: [
                        {
                            label: "Documentation",
                            to: "/docs/intro",
                        },
                        {
                            label: "See a bug? File an issue!",
                            to: "https://github.com/polyphony-chat/polyproto-rs/issues",
                        },
                    ],
                },
                {
                    title: "SOCIAL",
                    items: [
                        {
                            label: "GitHub",
                            href: "https://github.com/polyphony-chat/polyproto-rs",
                        },
                        {
                            label: "Discord",
                            href: "https://discord.com/invite/m3FpcapGDD",
                        },
                    ],
                },
            ],
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
    markdown: {
        mermaid: true,
    },
    themes: ["@docusaurus/theme-mermaid"],
    stylesheets: [
        {
            href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
            type: "text/css",
            integrity:
                "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
            crossorigin: "anonymous",
        },
    ],
}

export default config
