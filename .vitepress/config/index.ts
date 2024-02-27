import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { en } from './en'
import { it } from './it'

export default defineConfig({
  ...shared,
  locales: {
    root: { label: 'English', ...en },
    it: { label: 'Italiano', ...it }
  }
})