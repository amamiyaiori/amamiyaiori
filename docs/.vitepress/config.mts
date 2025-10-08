import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ヰ世界の宝石譚",
  description: "明日原ユウキです。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: './favicon.ico',

    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' }
      //   ]
      // }
    ],

    outline: {
      label: 'Table of contents'
    },

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: '物語',
        items: [
          { text: '从 Pixel 8 到 iPhone 17', link: '/pixel2iphone' }
        ]
      },
      {
        text: '特典',
        items: [
          { text: '水仙 ナルキッソス', link: '/narcissu' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://x.com/yorukawasekai' }
    ],

    footer: {
      copyright: 'Cortmiem/Asuharayuuki'
    }
  }
})
