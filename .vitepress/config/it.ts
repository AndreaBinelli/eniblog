import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

export const it = defineConfig({
  lang: 'it-IT',
  description: 'Un blog genrato dalle note di Dendron.',
  themeConfig: {
    nav: nav(),
    sidebar: sidebar()
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Home', link: '/' },
  ]
}

function sidebar(): DefaultTheme.Sidebar {
  return {};
}
