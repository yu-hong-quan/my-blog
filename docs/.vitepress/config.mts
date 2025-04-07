import { defineConfig } from "vitepress";

export default defineConfig({
  title: "余山郡 - 个人博客",
  description: "记录生活和技术",
  base: '/my-blog/', // 添加这行
  // header标签里面插入的内容
  head: [
    ["link", { rel: "icon", href: "/my-blog/config.svg" }]
  ],
  markdown: {
    // 代码块风格
    theme: 'material-theme-palenight',
    // theme:'github-light',
    // 代码块显示行数
    lineNumbers: true,
  },
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
      { text: "学习日记", link: "/pages/api-examples" },
      { text: "生活日记", link: "/pages/markdown-examples" },
      { text: "关于作者", link: "/pages/about" },
      { text: "示例", link: "/pages/markdown-examples" },
    ],

    sidebar: [
      {
        text: "示例",
        items: [
          { text: "Markdown Examples", link: "/pages/markdown-examples" },
          { text: "Runtime API Examples", link: "/pages/api-examples" },
        ],
      },
      {
        text: "其他相关",
        items: [
          { text: "关于作者", link: "/pages/about" },
          { text: "支持一下", link: "/pages/support-it" },
        ],
      },
    ],
    // 社交链接
    socialLinks: [{ icon: "github", link: "https://github.com/yu-hong-quan" }]
  },
});