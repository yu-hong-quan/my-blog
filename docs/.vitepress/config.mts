import { defineConfig } from "vitepress";

export default defineConfig({
  title: "余山郡 - 个人博客",
  description: "A VitePress Site",
  // header标签里面插入的内容
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // 网站的logo
    logo: "/logo.svg",
    // 文章右侧大纲目录
    outline: {
      level: [2, 6],
      label: "目录",
    },
    //自定义上下页名
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    // 主题
    darkModeSwitchLabel: "深浅模式",
    // 返回顶部label
    returnToTopLabel: "返回顶部",
    // 搜索
    search: {
      provider: "local",
    },
    // 页脚
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present China Carlos",
    },
    // 文档的最后更新时间
    lastUpdated: {
    text: "Updated at",
    formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "示例", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "示例",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    // 社交链接
    socialLinks: [{ icon: "github", link: "https://github.com/yu-hong-quan" }]
  },
});