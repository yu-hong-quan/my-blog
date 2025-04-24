import { defineConfig } from "vitepress";

export default defineConfig({
  title: "余山郡",
  description: "记录美好生活",
  base: '/my-blog/',
  // header标签里面插入的内容
  head: [
    ["link", { rel: "icon", href: "/my-blog/config.svg" }],
    ["link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" }]
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
      { text: "学习日记", link: "/pages/learning-diary/brief-description-of" },
      { text: "记录美好生活", link: "/pages/record" },
      { text: "关于我", link: "/pages/other/about" },
      { text: "博客统计", link: "https://us.umami.is/share/Y2BYxCAm7R0DG2Xi/carlosme.fun" }
    ],
    sidebar: [
      {
        text: "学习日记",
        link: "/pages/learning-diary/brief-description-of",
        items: [
          {
            text: "面试宝典",
            items: [
              { text: "Vue常见面试题(持续更新)", link: "/pages/learning-diary/front-end/vue-interview-questions" },
              { text: "微信小程序面试题(持续更新)", link: "/pages/learning-diary/front-end/wechat-interview-questions" }
            ]
          },
          { 
            text: "前端",
            items: [
              { text: "前端未来趋势", link: "/pages/learning-diary/front-end/front-future-trend" },
              { text: "详解Vue3项目搭建以及介绍Vue3相关特性", link: "/pages/learning-diary/front-end/vue3-project-construction" },
              { text: "Vue性能优化方案", link: "/pages/learning-diary/front-end/vue-performance-optimization" },
              { text: "VitePress 搭建博客系统指南", link: "/pages/learning-diary/front-end/vitepress-blog" },
            ]
          },
          { 
            text: "后端",
          },
          { 
            text: "数据库",
          },
          { 
            text: "运维",
          },
          { 
            text: "算法",
          },
          { 
            text: "干货", 
          }
        ],
      },
      {
        text: "记录美好生活",
        link: "/pages/record",
        items: [
          { 
            text: "旅行日记", 
            items: [
              { text: "2025年1月", link: "/pages/record/travel/2025-1" },
              { text: "2025年2月", link: "/pages/record/travel/2025-2" }, 
            ]
          },
          { 
            text: "生活日记", 
            items: [
              { text: "2025年1月", link: "/pages/record/life/2025-1" },
              { text: "2025年2月", link: "/pages/record/life/2025-2" }, 
            ]
          },
        ],
      },
      {
        text: "其他",
        link: "/pages/other",
        items: [
          { text: "关于作者", link: "/pages/other/about" },
          { text: "支持一下", link: "/pages/other/support-it" },
        ],
      }
    ],
    // 社交链接
    socialLinks: [
      { icon: "github", link: "https://github.com/yu-hong-quan" },
      { icon: "juejin", link: "https://juejin.cn/user/3122268754411688/posts"}
    ]
  },
});