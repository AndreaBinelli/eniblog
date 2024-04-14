import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  title: "eniblog",
  base: '/eniblog/',
  description: "Enib + Log = Eniblog",
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AndreaBinelli/eniblog' }
    ]
  }
})