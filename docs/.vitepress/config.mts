import { defineConfig } from "vitepress";

export default defineConfig({
  title: "余山郡",
  description: "记录美好生活",
  base: '/my-blog/',
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
    logo: "/config.svg",
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
      { text: "学习日记", link: "/pages/learning-diary" },
      { text: "记录美好生活", link: "/pages/record" },
      { text: "关于作者", link: "/pages/other/about" },
      { text: "博客统计", link: "https://us.umami.is/share/Y2BYxCAm7R0DG2Xi/carlosme.fun" }
    ],
    sidebar: [
      {
        text: "学习日记",
        link: "/pages/learning-diary",
        items: [
          { 
            text: "前端",
            link: "/pages/learning-diary/front-end/vue3-project-construction", 
            items: [
              { text: "详解Vite2.0+TypeScript+Vue3项目搭建以及介绍Vue3相关特性", link: "/pages/vue3-project-construction" },
            ]
          },
          { 
            text: "后端",
            link: "/pages/back-end",
          },
          { 
            text: "数据库",
            link: "/pages/database",
          },
          { 
            text: "运维",
            link: "/pages/ops",
          },
          { 
            text: "算法",
            link: "/pages/algorithm",
          },
          { 
            text: "干货", 
            link: "/pages/tools"
          },
        ],
      },
      {
        text: "记录美好生活",
        link: "/pages/record",
        items: [
          { 
            text: "旅行日记", 
            link: "/pages/record/travel",
            items: [
              { text: "2025年1月", link: "/pages/record/travel/2025-1" },
              { text: "2025年2月", link: "/pages/record/travel/2025-2" }, 
            ]
          },
          { 
            text: "生活日记", 
            link: "/pages/record/life",
            items: [
              { text: "2025年1月", link: "/pages/record/life/2025-1" },
              { text: "2025年2月", link: "/pages/record/life/2025-2" }, 
            ]
          },
        ],
      },
      {
        text: "其他",
        items: [
          { text: "关于作者", link: "/pages/other/about" },
          { text: "支持一下", link: "/pages/other/support-it" },
        ],
      },
      {
        text: "示例",
        items: [
          { text: "Markdown Examples", link: "/pages/markdown-examples" },
          { text: "Runtime API Examples", link: "/pages/api-examples" },
        ],
      },
    ],
    // 社交链接
    socialLinks: [
      { icon: "github", link: "https://github.com/yu-hong-quan" },
      { icon: "juejin", link: "https://juejin.cn/user/3122268754411688/posts"}
    ]
  },
});