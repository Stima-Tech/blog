// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Stima Research',
  tagline: '',
  favicon: 'img/favicon.ico',

  url: 'https://blog.stima.tech',
  baseUrl: '/',

  organizationName: 'stima-tech',
  projectName: 'blog',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: [
            './src/css/custom.css',
            './src/css/hover-highlight.css',
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Stima Research',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
          href: 'https://blog.stima.tech',
        },
        items: [
          {to: '/blog/welcome', label: '歡迎', position: 'left'},
          {to: '/blog', label: '所有文章', position: 'left'},
          {to: '/blog/tags/embedding', label: 'Embedding', position: 'left'},
          {to: '/blog/tags/llm', label: 'LLM', position: 'left'},
          {to: '/blog/tags/rag', label: 'RAG', position: 'left'},
          {
            href: 'https://api.stima.tech',
            label: 'Stima API',
            position: 'right',
          },
          {
            href: 'https://github.com/stima-tech',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '服務',
            items: [
              {
                label: 'Stima API 官網',
                href: 'https://api.stima.tech',
              },
              {
                label: 'Stima API 使用指南',
                href: 'https://docs.stima.tech',
              },
              {
                label: 'StimaChat 對話系統',
                href: 'https://chat.stima.tech',
              },
              {
                label: 'Playground',
                href: 'https://playground.stima.tech',
              },
              {
                label: 'Stima 伺服器狀態',
                href: 'https://status.stima.tech/',
              },
            ],
          },
          {
            title: '聯繫我們',
            items: [
              {
                label: 'Email',
                href: 'mailto:support@stima.tech',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/stimatechnologies/',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/stimatech',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/104405674/',
              },
            ],
          },
        ],
        copyright: `Copyright © 2024 - 2025 Stima AI, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["zh", "en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        indexBlog: true,
        indexDocs: true,
        indexPages: true,
      },
    ],
  ],
};

module.exports = config;
