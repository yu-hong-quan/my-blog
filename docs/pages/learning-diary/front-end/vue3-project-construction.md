# Vite2.0+TypeScript+Vue3项目搭建以及介绍Vue3相关特性


## 一、Vite 介绍

尤大在 Vue 3.0 beta 直播中推荐了 vite 的工具，强调：针对Vue单页面组件的无打包开发服务器，可以直接在浏览器运行请求的 vue 文件

很新颖，这篇博客用它来搭建一个 vue3 的项目试试

Vite 是面向现代浏览器，基于原生模块系统 ESModule 实现了按需编译的 Web 开发构建工具。在生产环境下基于 Rollup 打包

- 快速冷启动服务器
- 即时热模块更换（HMR）
- 真正的按需编译

node版本要求：node >= 10.16.0

## 二、项目搭建

使用 vite 搭建项目 vite+ts+vue3 只需要一行命令

``` md
npm init @vitejs/app <project-name> --template vue-ts
```

安装相关插件

Vue路由

``` md
npm install vue-router@4 --save    
```

Vue3 状态管理器

``` md
npm i vuex@next --save	  
```

Vant3  组件UI库

``` md
npm i vant@next -S       
```

网络请求axios插件

``` md
npm i -s axios  
```

## 三、配置vite.config.ts  （默认在项目根目录）

vite.config.ts 相当于 @vue-cli 项目中的 vue.config.js

``` js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImp from 'vite-plugin-imp'
import path from 'path';// 需要安装的插件@types/node
import styleImport from "vite-plugin-style-import"; // 按需加载必备插件
import viteCompression from "vite-plugin-compression"; //gzip必备插件
const resolve = (dir: string) => path.join(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  base:"./",//打包路径
  server: {
    open: true,// 是否自动打开浏览器(默认false)
    port:3000,//启动端口
    proxy: {
      // 选项写法
      '/api': 'http://123.56.85.24:5000'//代理网址
    },
    cors:true//开启跨域
  },
  resolve: {
    alias:{
      '@': path.resolve(__dirname, './src')//设置别名
    }
  },
   // 样式相关规则
   css: {
    preprocessorOptions: {
      css: {
        // 加载全局样式
        additionalData: `@use './src/assets/css/reset.css';`,
      }
      // scss: {
      //   // 加载全局样式
      //   additionalData: `@use './src/assets/styles/var.scss';
      //                    @use './src/assets/styles/common.scss';`,
      // },
    },
  },
  plugins: [
    vue(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz",
    }),
    vitePluginImp({
      libList: [
        {
          libName: 'vant',
          style(name) {
            if (/CompWithoutStyleFile/i.test(name)) {
              // This will not import any style file 
              return false
            }
            return `vant/es/${name}/index.css`
          }
        },   
      ]
    })
  ],
  // 打包相关规则
  build: {
    target: "es2020", //指定es版本,浏览器的兼容性
    outDir: "dist", //指定打包输出路径
    assetsDir: "assets", //指定静态资源存放路径
    cssCodeSplit: true, //css代码拆分,禁用则所有样式保存在一个css里面
    sourcemap: false, //是否构建source map 文件
    terserOptions: {
      // 生产环境移除console
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  
})
```

## 四、Router    路由配置（Vue3+Vite的项目中 路由需要手动创建并编写，与vue2路由有所不同）

在 src 下新建 router 文件夹，并在文件夹内创建 index.ts

``` js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
 {
 path: '/',
 name: 'Home',
 component: () => import('/@/views/Home.vue')
 },
 {
 path: '/lifeCycle',
 name: 'lifeCycle',
 component: () => import('/@/views/LifeCycle.vue')
 }
]

// createWebHistory路由模式路径不带#号(生产环境下不能直接访问项目，需要nginx转发)
// createWebHashHistory路由模式路径带#号
export default createRouter({
 history: createWebHistory(),
 routes
})
```

## 五、TS types配置

项目根目录下新建 tsconfig.json 写入相关配置

``` js
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "lib": ["esnext", "dom", "dom.iterable", "scripthost"],
    "types": [
      "node"
    ]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "exclude": [
    "node_modules"
  ]
}
```

src 目录下新建相应文件夹，里面需要配置 ts 的类型

1. `shims-vue.d.ts`

   ```  js
   declare module '*.vue' {
     import { ComponentOptions} from "vue"
     const componentOptions: ComponentOptions
     export default componentOptions
   }
   ```

2. `images.d.ts`

   ```  js
   declare module '*.svg'
   declare module '*.png'
   declare module '*.jpg'
   declare module '*.jpeg'
   declare module '*.gif'
   declare module '*.bmp'
   declare module '*.tiff'
   ```

3. `main.ts`

   ```  js
   import { createApp } from 'vue'
   import App from './App.vue'
   import router from './router';
   createApp(App)
       .use(router)
       .mount('#app')
   ```

至此，相关配置及环境已经结束，接下来就可以开始写bug了🤣


## 六、vue3 相关知识点

### 1. setup

   vue3 中用 setup 函数整合了所有的 api；只执行一次，在生命周期函数前执行，所以在 setup 函数中拿不到当前实例 this，不能用 this 来调用 vue2 写法中定义的方法

   它将接受两个参数：props、context

   ```  js
   // props - 组件接受到的属性 context - 上下文 
   setup(props, context) {
    return {
    // 要绑定的数据和方法
    }
   }
   ```

### 2. props

   setup 函数中的 props 是响应式的，当传入新的 prop 时，它将被更新
   但是，因为 props 是响应式的，不能使用 ES6 解构，因为它会消除 prop 的响应性

   如果需要解构 prop，可以通过使用 setup 函数中的 toRefs 来安全地完成此操作

   ``` js
   import { toRefs } from 'vue'
   
   setup(props) {
    const { title } = toRefs(props)
    console.log(title.value)
   }
   ```

### 3. context

   context 暴露三个组件的 property：{ attrs, slots, emit }
   它是一个普通的 JavaScript 对象，不是响应式的，这意味着你可以安全地对 context 使用 ES6 解构

### 4. 生命周期函数

   通过在生命周期钩子前面加上 “on” 来访问组件的生命周期钩子

   因为 setup 是围绕 beforeCreate 和 created 生命周期钩子运行的，所以不需要显式地定义它们
   换句话说，在这两个钩子中编写的任何代码都应该直接在 setup 函数中编写

   ``` js
   setup() {
    onMounted(() => {
    console.log('组件挂载')
    })
    
    onUnmounted(() => {
    console.log('组件卸载')
    })
    
    onUpdated(() => {
    console.log('组件更新')
    })
    
    onBeforeUpdate(() => {
    console.log('组件将要更新')
    })
    
    onActivated(() => {
    console.log('keepAlive 组件 激活')
    })
    
    onDeactivated(() => {
    console.log('keepAlive 组件 非激活')
    })
    
    return {}
   }
   ```

### 5. ref、reactive

   ref ：可以将某个普通值包装成响应式数据，仅限于简单值，内部是将值包装成对象，再通过 defineProperty 来处理的
   通过 ref 包装的值，取值和设置值的时候，需用通过 .value来进行设置
   可以用 ref 来获取组件的引用，替代 this.$refs 的写法

   reactive ： 对复杂数据进行响应式处理，它的返回值是一个 proxy 对象，在 setup 函数中返回时，可以用 toRefs 对 proxy 对象进行结构，方便在 template 中使用

   ``` js
   <template>
    <div>
    <div>
     <ul v-for="ele in eleList" :key="ele.id">
     <li>{{ ele.name }}</li>
     </ul>
     <button @click="addEle">添加</button>
    </div>
    <div>
     <ul v-for="ele in todoList" :key="ele.id">
     <li>{{ ele.name }}</li>
     </ul>
     <button @click="addTodo">添加</button>
    </div>
    </div>
   </template>
    
   <script>
   import { ref, reactive, toRefs } from 'vue'
    
   export default {
    setup() {
    // ref
    const eleList = ref([])
    function addEle() {
     let len = eleList.value.length
     eleList.value.push({
     id: len,
     name: 'ref 自增' + len
     })
    }
    
    // reactive
    const dataObj = reactive({
     todoList: []
    })
    function addTodo() {
     let len = dataObj.todoList.length
     dataObj.todoList.push({
     id: len,
     name: 'reactive 自增' + len
     })
    }
    
    return {
     eleList,
     addEle,
     addTodo,
     ...toRefs(dataObj)
    }
    }
   }
   </script>
   ```

### 6. computed、watch

   ``` js
   // computed
   let sum = computed(() => dataObj.todoList.length + eleList.value.length)
   console.log('setup引用computed要.value：' + sum.value)
    
   // watch
   watch(eleList,(curVal, oldVal) => {
    	console.log('监听器：', curVal, oldVal)
    },
    {
    	deep: true
    }
   )
   ```

### 7. watchEffect

   响应式地跟踪函数中引用的响应式数据，当响应式数据改变时，会重新执行函数

   ``` js
   const count = ref(0)
   // 当 count 的值被修改时，会执行回调
   const stop = watchEffect(() => console.log(count.value))
    
   // 停止监听
   stop()
   ```

   还可以停止监听，watchEffect 返回一个函数，执行后可以停止监听

   与 vue2 一样：

   ``` js
   const unwatch = this.$watch('say', curVal => {})
   ```

   ``` js
   // 停止监听
   unwatch()
   ```

### 8. useRoute、useRouter

   ``` js
   import {useRoute, useRouter} from 'vue-router'
   
   const route = useRoute() // 相当于 vue2 中的 this.$route
   const router = useRouter() // 相当于 vue2 中的 this.$router
   ```

   route  用于获取当前路由数据
   router 用于路由跳转

### 9. vuex

   配置：

   ​	在src目录下创建store文件夹并创建index.ts文件	

   ``` js
   import { createStore } from "vuex";
   export default createStore({
       state:{
           isLogin:true
       },
       mutations:{
           SET_ISLOGIN(state,value){
               state.isLogin = value
           }
       },
       actions:{
           set_isLogin(context,value){
               context.commit('SET_ISLOGIN',value)
           }
       },
       modules:{}
   })
   ```

   使用 :

   ​	使用useStore 来获取 store 对象 从 vuex 中取值时，要注意必须使用 computed 进行包装，这样 vuex 中状态修改后才能在页面中响应

   ``` js
   import {useStore} from 'vuex'
   setup(){
    const store = useStore() // 相当于 vue2 中的 this.$store
    store.dispatch() // 通过 store 对象来 dispatch 派发异步任务
    store.commit() // commit 修改 store 数据
    
    let category = computed(() => store.state.isLogin
    return { category }
   }
   ```