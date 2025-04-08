// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import busuanzi from "busuanzi.pure.js";
import { inBrowser } from 'vitepress';
// 导入hooks
import useVisitData from './utils/useVisitData';
import './style.css';
import './styles/blur.css';
import './styles/vp-code-group.css';
import Layout from "./Layout.vue";
import confetti from "./components/confetti.vue";
import VisitorPanel from "./components/visitorPanel.vue";
import About from "./components/About.vue";

export default {
  Layout: () => {
    return h(Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component("confetti", confetti);
    app.component("VisitorPanel", VisitorPanel);
    app.component("About", About);
    if (inBrowser) {
      router.onAfterPageLoad = () => {
        busuanzi.fetch();
        // 调用统计访问接口hooks
        useVisitData();
      };
    }
  }
} satisfies Theme
