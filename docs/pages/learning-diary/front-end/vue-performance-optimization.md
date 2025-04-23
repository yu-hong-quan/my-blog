# 最全 Vue 性能优化方案



当涉及到 `Vue` 应用的性能优化时，有许多技术和策略可以帮助提升应用的性能并改善[用户体验](https://so.csdn.net/so/search?q=%E7%94%A8%E6%88%B7%E4%BD%93%E9%AA%8C&spm=1001.2101.3001.7020)。以下总结了几种常用的 `Vue` 的性能优化方案：

### 一、尽可能使用 v-show 替换 v-if

因为 `v-show` 本质上是通过 `css` 控制元素的显示与隐藏，而 `v-if` 是通过操作 `dom` 来控制元素的显示与隐藏，频繁操作 `dom` 会导致性能有所影响

### 二、使用 v-for 必须添加 key

在删除数据时，由于没有绑定 `key`，不确定删除的是哪个，就会把整个虚拟 `dom` 重新渲染，这样对性能不太友好。

但如果设置了 `key`，比如 `k` 的值为 `x`，那么在删除数据时候只会把 `dom` 为 `x` 的数据删掉，并不会重新渲染整个 `dom`。这样一来对性能有很大的提高

### 三、避免 v-for 与 v-if 一起使用

当 `v-for` 和 `v-if` 结合使用时，`Vue` 需要在每次渲染时都重新计算列表中每个元素是否满足 `v-if` 的条件，这会导致不必要的性能开销。

如果将 `v-if` 放在父元素上时，`v-for` 会在每次重新渲染时都完整遍历整个列表，判断每个元素是否满足条件。这样也会导致性能下降，尤其在列表较大时更为明显。

为了避免这种性能问题，推荐的做法是将 `v-if` 放在包裹在元素内部，而不是包裹在元素上，这样可以减少不必要的遍历次数，提升性能。

```html
<div v-for="item in data" :key="item.id">
  <div v-if="item.condition">
    <!-- 具体元素内容 -->
  </div>
</div>

```

### 四、合理使用 watch 和 computed

`watch` 适用于执行异步或开销较大的操作，或者需要对数据变化作出特定响应的场景。

`computed` 用于根据已有的响应式数据计算出一个新的值，它会根据相关的响应式数据进行缓存，只在相关响应式数据改变时进行重新计算。这样可以避免不必要的重复计算，提高性能。

**简单来说：** 使用 `watch` 监听数据变化，适合处理复杂操作或需要特定响应的情况；使用 `computed` 计算属性，可以根据已有数据计算新值并自动缓存，提高性能。合理使用这两个功能可以让代码更易读和更高效。

**组件缓存**  
组件缓存是指将组件的状态缓存起来，当组件再次被渲染时，可以直接使用缓存的状态，而不需要重新渲染组件。

组件缓存的优势在于减少了组件的渲染次数，从而降低了开销。它对于包含大量静态内容的组件，如轮播图、静态文章等组件的性能优化特别有效。因为这些组件的内容往往不会随着数据变化而发生改变，使用组件缓存可以将组件的渲染次数降至最低。

### 五、使用路由懒加载（提升30%+）

``` js
// router.js
const routes = [
{
    path: '/dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue')
    }
];

```

1.  **减轻初始加载：** 通过路由懒加载，只有在使用到对应的页面时才会加载相关的代码。这样可以减少初始加载的代码量，提升网页的加载速度，特别是在应用有很多页面的情况下效果更为明显。
2.  **提升页面加载速度：** 当用户访问某个具体的页面时，只需要加载该页面所需的代码，而不是一次性加载所有页面的代码。这样可以减少请求的网络带宽和内存占用，提升页面加载速度，给用户更好的体验。
3.  **优化资源利用：** 路由懒加载可以将应用划分为多个独立的模块，每个模块可以按需加载，提高代码的复用性和可维护性。同时，由于只加载当前需要的模块，可以更好地控制资源的使用，避免一次性加载过多的资源。

**简单来说：** 路由懒加载可以让网站加载更快，提高用户体验，同时也更好地利用资源、提高代码可维护性。

**使用懒加载**  
使用懒加载可以优化同一时间减少 `http` 请求开销。  
比如页面加载时让他先加载部分数据，等用户点击下一页或下拉之后再加载另一部分数据

### 六、引入网络资源

可以将静态资源放在第三方 `CDN` 服务器上，比如 `css`、`js`、图片、视频、字体等

这样做有以下好处：

1.  提高页面加载速度
2.  减少项目打包之后的体积
3.  利用浏览器缓存，不变动的文件长期缓存

### 七、尽可能使用按需导入

在项目中尽可能避免 `*` 导入全部而是使用按需导入，否则就会导入很多我们用不到的东西从而影响项目打包的体积大小以及页面加载速度。

### 八、icon 使用精灵图

默认情况下页面中有几张图片就会发起几次请求，所以我们可以将图片全部合成在一张图中，然后通过操作 `CSS` 的 `background` 属性，控制背景的位置以及大小，来展示需要的部分。这样可以减少 `HTTP` 请求压力

### 九、销毁资源

使用完某些代码后一定要销毁资源，比如定时器。一般在 `beforeDestroy` 中销毁。这样可以避免资源浪费以及内存泄露

### 十、使用节流防抖

节流：在一定时间间隔内只执行一次函数

``` js
function throttle(func, delay) {
  let timer = null;
  return function() {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, arguments);
        timer = null;
      }, delay);
    }
  };
}

```

防抖：在一定时间内不能被再次触发

``` js
function debounce(func, delay) {
  let timer = null;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

```

使用

``` js
function onScroll() {
  console.log("Scroll event");
}

// 使用节流函数
const throttledScroll = throttle(onScroll, 200);
window.addEventListener("scroll", throttledScroll);

// 使用防抖函数
const debouncedScroll = debounce(onScroll, 200);
window.addEventListener("scroll", debouncedScroll);

```
这两种技术可以在事件处理、滚动加载、搜索框输入等场景下有效地减少不必要的计算和操作，提升页面性能和用户体验。

### 十一、组件级动态导入（优化交互响应）
``` vue
<script setup>
import { defineAsyncComponent } from 'vue';

const HeavyComponent = defineAsyncComponent(() =>
    import('@/components/HeavyComponent.vue')
);
</script>
```

### 十二、静态资源CDN化（降低服务器压力）
``` js
// vite.config.js
export default {
 build: {
  assetsInlineLimit: 4096, // 4KB以下文件转base64
   rollupOptions: {
    output: {
     assetFileNames: 'assets/[hash][extname]'
    }
   }
 }
}
```

### 十三、第三方库按需引入（减少打包体积）
``` js
// 错误示例：全量引入Element Plus
import ElementPlus from 'element-plus';

// 正确示例：按需引入
import { ElButton, ElInput } from 'element-plus';
```

### 十四、代码分割策略优化（Vite专属）
``` js
// vite.config.js
export default {
 build: {
  rollupOptions: {
   output: {
    manualChunks: {
     vue: ['vue', 'vue-router', 'pinia'],
     charts: ['echarts', 'highcharts'],
     }
    }
   }
  }
}
```

### 十五、 预加载关键资源（加速渲染）
``` js
<!-- 预加载首屏关键字体 -->
<link rel="preload" href="/fonts/Inter.woff2" as="font" type="font/woff2" crossorigin>
```
``` js
<!-- 预获取异步组件 -->
<link rel="prefetch" href="/assets/dashboard.123abc.js">
```

### 十六、 服务端渲染（SSR）降级方案
``` js
// 使用@vueuse/head管理SSR meta
import { useHead } from '@vueuse/head';

export default {
 setup() {
  useHead({
   title: '首屏优化示例',
   htmlAttrs: { lang: 'zh-CN' }
  });
 }
}
```

### 十七、 图片资源极致压缩
``` js
# 使用vite-imagetools自动转换

npm install vite-imagetools -D

// vite.config.js
import { imagetools } from 'vite-imagetools';

export default {
 plugins: [imagetools()]
}
```

### 十八、 浏览器缓存策略优化
```js
# Nginx配置
location /assets {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

