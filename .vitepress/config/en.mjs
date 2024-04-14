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
    { text: 'Brews', link: 'notes/it.brew.brews.2016.blue-marble.md' }
  ]
}

function sidebar() {
  return {};
}
