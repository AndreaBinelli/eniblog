import { defineConfig } from 'vitepress'

export const it = defineConfig({
  lang: 'it-IT',
  themeConfig: {
    nav: nav(),
    sidebar: sidebar()
  }
})

function nav() {
  return [
    { text: 'Home', link: '/' },
  ]
}

function sidebar() {
  return {};
}
