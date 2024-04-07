import { defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  themeConfig: {
    nav: nav(),
    sidebar: sidebar()
  }
})

function nav() {
  return [
    { text: 'Home', link: '/en/' },
  ]
}

function sidebar() {
  return {};
}
