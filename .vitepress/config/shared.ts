import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  title: "mockblog",
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AndreaBinelli/mockblog' }
    ]
  }
})