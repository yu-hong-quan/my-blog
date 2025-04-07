// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import Layout from "./Layout.vue";
import './style.css'
import './styles/blur.css'
import './styles/vp-code-group.css'

export default {
  Layout: () => {
    return h(Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
