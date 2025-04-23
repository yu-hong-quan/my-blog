# 微信小程序基础面试题

### 1、简述微信小程序原理

* 小程序本质就是一个单页面应用，所有的页面渲染和事件处理，都在一个页面内进行，但又可以通过微信客户端调用原生的各种接口；
* 它的架构，是数据驱动的架构模式，它的UI和数据是分离的，所有的页面更新，都需要通过对数据的更改来实现；
* 它从技术讲和现有的前端开发差不多，采用JavaScript、WXML、WXSS三种技术进行开发；
* 功能可分为webview和APPService两个部分，webview主要用来展示UI，appservice用来处理业务逻辑，数据及接口调用，它们在两个进程中进行，通过系统层JSBridge实现通信，实现UI的渲染，事件处理等；
* javaScript的代码是运行在微信App中的，因此一些h5技术的应用需要微信APP提供对应的API支持
* wxml 微信自己基于xml语法开发的，因此在开发时只能使用微信提供的现有标签，html的标签是无法使用的
* wxss具有css的大部分特性，但并不是所有都支持，没有详细文档（wxss的图片引入需要使用外链地址，没有body，样式可以使用import导入）

### 2、请谈谈[wxml](https://so.csdn.net/so/search?q=wxml&spm=1001.2101.3001.7020)与标准的html的异同？

wxml 是微信小程序的一种[页面渲染](https://so.csdn.net/so/search?q=%E9%A1%B5%E9%9D%A2%E6%B8%B2%E6%9F%93&spm=1001.2101.3001.7020)语言，类似于 HTML，但也有一些不同之处。

以下是 wxml 与标准的 HTML 的异同：

相同点：

1.  两者都是页面渲染语言，用于描述网页的结构和内容。
2.  两者都使用标签来组织内容。
3.  两者都支持使用 CSS 样式表来控制页面的外观和布局。
4.  两者都支持事件处理，可以通过绑定事件来响应用户的操作。

不同点：

1.  标签不同：wxml 中的标签更多地与微信小程序的 API 相关，比如 &lt;view&gt;、&lt;text&gt;、&lt;image&gt; 等，而标准的 HTML 则更多地包含一些常见的元素，比如 &lt;div&gt;、&lt;span&gt;、&lt;a&gt; 等。
2.  属性不同：wxml 的标签属性与 HTML 的标签属性也有一些不同，比如 wxml 中的 wx:if、wx:for、{{}} 表达式 等属性是专门为微信小程序开发设计的，而 HTML 中则没有这些属性。
3.  样式不同：wxml 中的样式是使用 wxss（微信小程序样式表） 来定义的，而 HTML 中则是使用标准的 CSS 样式表来定义的。
4.  盒子模型不同：wxml 中的盒子模型与标准的 HTML 盒子模型也略有不同，主要体现在盒子的宽度和高度的计算方式上。
5.  小程序运行在JS Core内，没有DOM树和windiw对象，小程序中无法使用window对象和document对象。

总的来说，wxml 和 HTML 相似，但也有自己的特点和差异，需要根据具体的开发需求来选择使用哪种语言。

### 3、请谈谈WXSS和CSS的异同？

WXSS（WeChat Style Sheet）是微信小程序的样式表语言，它与标准的 CSS（Cascading Style Sheets）有以下异同：

相同点：

1.  两者都用于定义页面元素的样式，包括颜色、字体、布局、边框等方面。
2.  两者都支持选择器、属性、值等基本语法。
3.  两者都支持继承、层叠等特性。

不同点：

1.  单位不同：CSS 使用像素（px）、百分比（%）等单位来表示长度或大小，而 WXSS 使用 rpx（微信小程序专用的长度单位），rpx 会根据屏幕宽度进行自适应调整，适应不同设备的屏幕尺寸。
2.  可用属性不同：WXSS 与 CSS 支持的属性并不完全一致，例如 WXSS 中有专门针对微信小程序的一些属性，如 text-decoration-line（下划线）、-webkit-line-clamp（文本行数）等。
3.  属性值不同：WXSS 与 CSS 中某些属性的取值方式有所不同，例如 WXSS 中的 color 属性可以使用全局变量 $color 来表示颜色，而 CSS 中没有这样的机制。
4.  选择器不同：WXSS 中的选择器与 CSS 中的选择器有所不同，例如 WXSS 中的 ::after 伪元素不支持，但是支持一些特定的微信小程序的选择器，如 page、view 等。

总的来说，WXSS 与 CSS 在使用上有一些不同，但是基本的语法和概念都是相似的。如果你已经熟悉了 CSS，那么上手 WXSS 也应该相对容易。

### 4、rpx的理解？

rpx是微信小程序中的一种尺寸单位，相对于CSS中的px和rem等单位，它具有更好的适配性和跨平台性。

rpx的全称是"responsive pixel"，它是微信小程序中的一种相对单位，代表屏幕宽度的百分之一。在小程序中，设计师可以使用rpx来设置尺寸，而不用考虑不同设备的像素密度和分辨率。比如，在iPhone 6和iPhone X等设备上，1rpx分别等于0.5px和0.42px。

使用rpx可以实现小程序的自适应布局，在不同尺寸的设备上能够保持相同的视觉效果，提高用户体验。同时，由于rpx是相对单位，可以跨平台适配，无论是在iOS还是Android平台上都可以保持相同的效果。

总的来说，rpx是一种非常实用的尺寸单位，在小程序开发中非常常用，能够帮助开发者实现跨平台适配和自适应布局。

### 5、请谈谈微信小程序主要目录和文件的作用？

微信小程序的主要目录和文件包括：

* project.config.json：项目配置文件，用的最多的就是配置是否开启https校验、压缩文件等
* app.json：微信小程序的全局配置文件，包括小程序的名称、页面路径、窗口配置、导航栏设置、底部tab等信息。
    
    pages:\[所有页面路径\]   
    window：（背景色，导航样式，默认标题）  
    tabBar: 底部tab等
    
* app.js：微信小程序的入口文件，用于定义小程序的生命周期函数、全局变量、全局方法等。设置一些全局的基础数据等
* app.wxss：微信小程序的全局样式表，用于定义小程序的全局样式。公共样式，引入iconfont等
* pages/：微信小程序的页面目录，用于存放小程序的页面文件，每个页面通常由一个 wxml 模板文件、一个对应的 js 逻辑文件、一个 wxss 样式文件和一个 JSON 配置文件组成。
* utils/：微信小程序的工具目录，用于存放小程序的工具函数、公共样式等，方便在多个页面中重复使用。

### 6、简单描述下微信小程序的相关文件类型？

微信小程序的相关文件类型包括以下几种：

1.  WXML：微信小程序的模板文件，类似于 HTML 文件，用于定义小程序的页面结构和内容。
2.  WXSS：微信小程序的样式文件，类似于 CSS 文件，用于定义小程序的页面样式和布局。
3.  JSON：微信小程序的配置文件，用于定义小程序的全局配置信息、页面路径等。
4.  JS：微信小程序的脚本文件，用于编写小程序的逻辑代码，包括页面逻辑、组件逻辑、网络请求等。
5.  WXS：微信小程序的脚本文件，类似于 JS 文件，但是在编写时需要注意一些特殊的语法和限制，可以用于编写一些复杂的逻辑。
6.  图片、音频、视频等媒体文件：用于在小程序中展示图片、播放音频和视频等多媒体内容。

以上是微信小程序的主要文件类型，了解这些文件类型可以更好地理解和开发微信小程序。

### 7、请谈谈小程序的双向绑定和vue的异同？

小程序的双向绑定和 Vue 的双向绑定有以下异同：

相同点：

1.  都是实现数据的双向绑定，即数据的改变可以自动更新到视图，视图的改变也可以自动更新到数据。
2.  都是通过数据劫持的方式实现的，即通过监听数据的变化来更新视图。

不同点：

1.  实现方式不同：小程序的双向绑定是基于数据绑定和事件绑定实现的，而 Vue 的双向绑定则是基于数据劫持和发布/订阅模式实现的。
2.  语法不同：小程序的双向绑定使用的是类似于 AngularJS 的 ng-model 的语法，即 value="{{data}}" bindinput="setData"，而 Vue 的双向绑定使用的是 v-model 语法，即 v-model="data"。
3.  性能不同：Vue 的双向绑定通过数据劫持实现，可以精确地追踪数据的变化并更新视图，而小程序的双向绑定则需要通过事件绑定和数据绑定实现，相对来说效率会稍低一些。
4.  依赖不同：Vue 的双向绑定依赖于 Vue.js 框架，而小程序的双向绑定是微信小程序原生支持的功能，不需要额外的框架支持。

综上所述，虽然小程序和 Vue 都支持双向绑定，但是实现方式和语法有所不同，并且在性能和依赖方面也存在一定的差异。如果你熟悉 Vue 的双向绑定，那么上手小程序的双向绑定也应该相对容易。

### 8、微信小程序有哪些传值(传递数据)方法？

微信小程序有以下几种传值（传递数据）的方法：

1.  URL 参数传递：可以在页面路径后面添加参数进行传值，例如：/pages/index/index?id=1&name=abc，在目标页面的 onLoad 生命周期中可以通过 options 参数获取传递的值。
2.  Storage 存储：可以使用 wx.setStorageSync 或 wx.setStorage 方法将数据存储到本地缓存中，在目标页面中使用 wx.getStorageSync 或 wx.getStorage 方法获取数据。
3.  全局数据传递：可以将数据存储在 App 实例中的 globalData 属性中，在目标页面中使用 getApp().globalData 获取数据。
4.  事件传递：可以通过触发事件来传递数据，例如在子组件中触发一个自定义事件，并通过事件对象传递数据，在父组件中监听该事件并获取传递的数据。
5.  页面栈传递：可以使用小程序提供的页面栈来传递数据，通过 getCurrentPages 方法获取页面栈的实例，使用 data 属性存储数据，在目标页面中使用 options 获取数据。

需要根据实际业务需求选择合适的传值方式，上述方法中，URL 参数传递、Storage 存储、全局数据传递等方式适用于不同页面之间的数据传递，而事件传递和页面栈传递则适用于组件之间和同一页面的数据传递。

### 9、微信小程序怎么缓存数据？

微信小程序提供了一些数据缓存的API，可以将数据存储在客户端本地，以便在下次访问时快速获取，从而提高应用的性能和用户体验。下面介绍微信小程序中常用的数据缓存API：

1.  wx.setStorageSync(key, data)：将数据同步存储在本地缓存中，key 为数据的键名，data 为数据的内容，注意数据大小不能超过 10MB。
2.  wx.setStorage(key, data)：将数据异步存储在本地缓存中，key 为数据的键名，data 为数据的内容，注意数据大小不能超过 10MB。
3.  wx.getStorageSync(key)：同步获取本地缓存中指定 key 的数据。
4.  wx.getStorage(key)：异步获取本地缓存中指定 key 的数据。
5.  wx.removeStorageSync(key)：同步移除本地缓存中指定 key 的数据。
6.  wx.removeStorage(key)：异步移除本地缓存中指定 key 的数据。

除了上述 API，微信小程序还提供了一些全局的缓存机制，如全局缓存、页面缓存、数据缓存等，可以通过设置 app.json 文件中的 window 和 page 属性来控制。

需要注意的是，小程序的缓存数据是有时效性的，过期的数据需要重新从服务器获取，因此在使用缓存数据时需要判断数据是否过期，并及时更新数据。此外，缓存数据不能用于敏感信息和重要业务逻辑，需要注意数据安全。

### 10、bindtap和catchtap的区别？

* bind事件绑定不会阻止冒泡事件向上冒泡
* catch事件绑定可以阻止冒泡事件向上冒泡

在微信小程序中，bindtap 和 catchtap 都是用来绑定点击事件的属性，它们的主要区别在于事件冒泡和阻止冒泡的处理方式。

* bindtap 属性用于绑定一个点击事件处理函数，当点击事件发生时，该处理函数会被触发执行。如果在事件处理函数中调用 event.stopPropagation() 方法来阻止事件冒泡，则该事件不会向父级元素传递。
* catchtap 属性也用于绑定一个点击事件处理函数，但与 bindtap 不同的是，当点击事件发生时，该处理函数先于父级元素的事件处理函数执行，如果在事件处理函数中调用 event.stopPropagation() 方法来阻止事件冒泡，则该事件不会向父级元素传递。

因此，bindtap 和 catchtap 的主要区别在于事件冒泡和阻止冒泡的处理方式，如果希望点击事件能够向上冒泡并被父级元素捕获处理，则应该使用 bindtap，如果希望阻止点击事件冒泡，则应该使用 catchtap。

### 11、简述wx.navigateTo(),wx.redirectTo(),wx.switchTab(),wx.navigateBack(),wx.reLaunch()的区别？

在微信小程序中，以下五种页面跳转方式常用于不同的业务场景：

1.  wx.navigateTo()：保留当前页面，跳转到应用内的某个页面，新页面可以通过 wx.navigateBack() 方法返回到原页面。这种方式适用于需要在新页面中进行操作并返回原页面的情况，如填写表单、查看详情等。
2.  wx.redirectTo()：关闭当前页面，跳转到应用内的某个页面，新页面不能通过 wx.navigateBack() 方法返回到原页面，而是重新打开一个页面。这种方式适用于不需要返回原页面，而是需要直接进入目标页面的情况，如登录页、欢迎页等。
3.  wx.switchTab()：跳转到应用内的某个 TabBar 页面，并关闭其他所有非 TabBar 页面。这种方式适用于 TabBar 导航场景，如底部导航、顶部标签等。
4.  wx.navigateBack()：关闭当前页面，返回上一个页面。如果当前页面是通过 wx.navigateTo() 或 wx.redirectTo() 打开的，则返回到打开该页面的原页面，如果当前页面是 TabBar 页面，则返回到上一个 TabBar 页面。这种方式适用于返回上一个页面的情况。
5.  wx.reLaunch()：关闭所有页面，跳转到应用内的某个页面。这种方式相当于关闭所有页面，重新打开一个页面栈。这种方式适用于需要完全重启应用并打开某个页面的情况，如退出登录后重新登录。

以上是五种常用的页面跳转方式，在实际开发中需要根据业务场景选择合适的方式。

### 12、微信小程序路由跳转以及传参如何实现？

微信小程序的路由跳转可以使用以下几个 API：

1.  wx.navigateTo(Object object)：保留当前页面，跳转到应用内的某个页面，可以通过getCurrentPages()函数获取当前页面栈的信息。
2.  wx.redirectTo(Object object)：关闭当前页面，跳转到应用内的某个页面。
3.  wx.switchTab(Object object)：跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
4.  wx.reLaunch(Object object)：关闭所有页面，打开到应用内的某个页面。

在跳转的时候，还可以通过传递参数来实现数据的传递，一般有以下两种方式：

1.  query 参数传递：在跳转时，将参数以字符串形式追加到 URL 后面，如 wx.navigateTo({ url: 'pages/detail/detail?id=123' })，然后在跳转后的页面中，通过 options.query 获取参数，如 var id = options.query.id。
2.  页面栈传递：在跳转时，通过 wx.navigateTo({ url: 'pages/detail/detail', query: { id: 123 } }) 将参数传递到目标页面，然后在目标页面中，通过 getCurrentPages()\[getCurrentPages().length - 1\].options 获取参数，如 var id = getCurrentPages()\[getCurrentPages().length - 1\].options.id。

需要注意的是，以上两种方式都可以实现数据的传递，但是 query 参数传递方式对于参数较多或较复杂的情况可能会不太方便，而页面栈传递方式则需要使用 getCurrentPages() 函数来获取当前页面栈的信息，如果页面较多或层级较深时，可能会导致性能问题。

### 13、微信小程序与H5的区别？

微信小程序和H5是两种不同的技术方案，它们之间有以下几点区别：

1.  开发语言和框架：微信小程序使用的是基于JavaScript的WXML和WXSS语言，使用微信开发者工具进行开发和调试。而H5使用的是HTML、CSS和JavaScript等技术，并使用网页浏览器进行开发和调试。
2.  执行环境和性能：微信小程序的执行环境是微信客户端，可以获得更好的性能表现和用户体验，因为它可以直接使用微信客户端提供的能力，如地理位置、支付等。而H5则需要在浏览器中运行，受限于浏览器的性能和能力。
3.  可访问性：微信小程序只能在微信客户端中访问，需要用户下载并安装微信客户端，而H5则可以通过任何支持浏览器的设备访问，包括电脑、手机、平板等。
4.  可扩展性：微信小程序相对于H5来说，其功能和扩展性受到限制。小程序必须符合微信小程序的规范和限制，并且必须经过微信审核才能发布。而H5则更加灵活，可以随意扩展和定制，没有限制。

总的来说，微信小程序是一种轻量级应用，其主要优势在于用户体验和性能方面，适用于需要更加稳定和高效的应用场景。而H5则更加灵活和可扩展，适用于需要自由发挥的应用场景。

### 14、小程序和Vue写法的区别？

```
遍历的时候：小程序 wx:for="list" ,而Vue是 v-for="item in list"  

调用data模型（赋值）的时候：
    小程序：this.data.item // 调用，this.setData({item:1})//赋值
    Vue：this.item //调用，this.item=1 //赋值
```

小程序和Vue在开发模式、语法、组件化等方面有一定的区别，具体如下：

1.  开发模式：小程序需要使用微信开发者工具进行开发和调试，而Vue可以在浏览器中使用webpack等工具进行开发和调试。
2.  语法：小程序使用WXML和WXSS语言，而Vue使用HTML、CSS和JavaScript等技术。小程序的WXML和WXSS语言是为了方便小程序的开发而设计的，它们与HTML、CSS等语言有一些区别，比如标签和属性的命名、样式的定义方式等。
3.  组件化：小程序和Vue都支持组件化的开发方式，但两者的组件化方式有所不同。小程序的组件化主要是通过Component方法进行定义和注册，而Vue则是通过Vue.component方法进行定义和注册。在使用组件时，小程序需要使用组件的名称进行调用，而Vue则是通过组件的标签名称进行调用。
4.  状态管理：在状态管理方面，小程序使用的是原生的数据绑定方式，即通过setData方法进行数据的修改和更新。而Vue使用的是Vue.js提供的响应式数据绑定和Vuex状态管理机制。
5.  显示与隐藏，vue中 使用v-if show 控制，小程序使用vx-if hidden
6.  数据绑定也不同，小程序数据绑定需要使用｛｛｝｝  ，vue直接冒号

总的来说，小程序和Vue在开发模式、语法、组件化等方面有一定的区别，开发者需要根据不同的需求选择合适的技术方案。

### 15、微信小程序可以进行dom操作吗？

微信小程序中的WXML语言与HTML语言类似，但并不是真正的HTML语言。WXML是一种轻量级的标记语言，它只能用于描述小程序页面的结构，不能进行像HTML一样的DOM操作。

微信小程序的视图层和逻辑层是分离的，WXML负责视图层的渲染，而逻辑层使用JavaScript来处理数据和业务逻辑。逻辑层可以通过setData方法修改视图层中的数据，从而实现动态渲染页面。但是，不能通过JavaScript直接操作DOM元素，因为微信小程序的视图层并没有提供像Web中的document、window等对象，无法直接操作DOM元素。

微信小程序为了避免操作DOM引起性能问题，提供了一套自己的组件系统，可以通过组件的属性、方法等来操作组件的状态和属性，而不用直接操作DOM元素。此外，小程序提供了一些基础组件和API，如按钮、输入框、swiper等，这些组件可以直接在WXML中使用，并提供了一些属性、事件等用于控制组件的状态和行为。开发者也可以自定义组件，实现一些复杂的交互和动画效果。

因此，虽然微信小程序不能进行像HTML一样的DOM操作，但它提供了一套完整的组件和API体系，能够满足大部分的页面需求，并且有利于提高小程序的性能和可维护性。

### 16、微信小程序自定义tabbar的理解？

微信小程序自定义 TabBar 是指开发者可以自己定义底部的 TabBar，而不是使用微信小程序原生的 TabBar。自定义 TabBar 可以让小程序的底部导航更加灵活多样化，同时也可以更好地满足用户的需求。

自定义 TabBar 的实现方法是在小程序的 app.json 文件中定义一个 tabBar 字段，通过设置 tabBar.custom 属性为 true，告诉小程序使用自定义 TabBar。同时，还需要在 tabBar.list 字段中设置自定义 TabBar 的样式和图片等信息。开发者还需要在自定义 TabBar 的每个选项页面中添加一个自定义 TabBar 组件，以便在页面中展示自定义 TabBar。

自定义 TabBar 的实现过程中，需要注意以下几点：

1.  自定义 TabBar 的样式和图片png等资源需要开发者自行准备和管理。
2.  自定义 TabBar 只能使用微信小程序支持的组件和API，不能使用第三方库。
3.  自定义 TabBar 的选项数量需要和 tabBar.list 中的选项数量一致，否则会出现页面跳转错误。
4.  自定义 TabBar 在页面之间切换时，需要手动控制页面栈，使用 wx.switchTab() 方法切换页面时，会关闭所有非 tabBar 页面，并重置所有 tabBar 页面的状态。

总的来说，自定义 TabBar 可以让小程序的底部导航更加灵活多样化，但需要开发者花费一定的时间和精力进行开发和维护。

### 17、微信小程序怎么进行网络请求？

微信小程序提供了一些API来进行网络请求，常用的API包括：

1.  wx.request(Object object)：发起 HTTPS 网络请求。
2.  wx.uploadFile(Object object)：上传文件到服务器。
3.  wx.downloadFile(Object object)：下载文件到本地。

这些API都是异步操作，需要传入一个 Object 类型的参数，其中包括请求的 URL、请求的参数、请求的方法、请求的头部信息等。具体可以参考官方文档。

以下是一个简单的网络请求的示例代码：

```javascript
wx.request({
  url: 'https://www.example.com/api',
  method: 'GET',
  data: {
    key1: value1,
    key2: value2
  },
  header: {
    'content-type': 'application/json' // 默认值
  },
  success(res) {
    console.log(res.data)
  },
  fail(res) {
    console.log('请求失败', res)
  }
})
![网络请求](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)
```

在请求成功后，服务器返回的数据可以通过 success 回调函数中的 res 参数获取。在请求失败时，可以通过 fail 回调函数中的 res 参数获取失败原因。

需要注意的是，**微信小程序的网络请求只能发起 HTTPS 请求，而不能发起 HTTP 请求**，同时，也需要遵守微信小程序的开发规范和网络安全要求，如不允许发起跨域请求等。

### 18、微信小程序生命周期的理解？

微信小程序的生命周期包括**App、Page和Component三个部分，分别应用程序、页面和组件**的生命周期。

![](https://i-blog.csdnimg.cn/direct/0b3eb86b1cdb45e68a6c431e9cff2b21.png)

App生命周期  
App生命周期主要包括onLaunch和onShow两个函数，分别在小程序**初始化时和进入前台时**触发。

1.  onLaunch(options)：小程序初始化时调用，全局只触发一次，可以获取打开小程序的场景值、query参数等。  
    作用：在小程序启动时执行一些初始化操作，获取用户信息登录、系统信息、设置全局变量、更新提示等。
2.  onShow(options)：小程序启动或从后台进入前台时调用（每次都会执行），可以获取打开小程序的场景值、query参数等。  
    作用：用于执行一些需要在小程序显示时进行的逻辑操作，如页面刷新、数据加载、展示欢迎内容等。
3.  onHide()：小程序从前台进入后台时触发，可以在这里保存数据、清空定时器等操作。  
    作用：用于执行一些需要在小程序隐藏时进行的逻辑操作，如保存数据、清理定时器、暂停音频播放等。
4.  onError(): 当小程序发生脚本错误，或者 API 调用错误时，会触发 `onError` 并带上错误信息。  
    作用：用于捕获并处理小程序运行时的异常情况，防止程序崩溃。
5.  onPageNotFound(): 页面不存在阶段  
    作用：用于处理页面找不到的情况，可跳转到自定义的错误页面。

> 执行过程：
> 
> * ⽤户⾸次打开⼩程序，触发 onLaunch（全局只触发⼀次）
> * ⼩程序初始化完成后，触发onShow⽅法，监听⼩程序显示
> * ⼩程序从前台进⼊后台，触发 onHide⽅法
> * ⼩程序从后台进⼊前台显示，触发 onShow⽅法
> * ⼩程序后台运⾏⼀定时间，或系统资源占⽤过⾼，会被销毁

Page生命周期  
Page生命周期主要包括onLoad、onShow、onReady、onHide和onUnload五个函数，分别在页面加载、页面显示、页面初次渲染完成、页面隐藏和页面卸载时触发。

1.  onLoad(options)：页面加载时调用，一个页面只会调用一次，可以获取上个页面传递的参数等。  
    作用：用于获取页面参数、页面初始化，发送网络请求等。
2.  onShow(options)：页面显示时调用，每次打开页面都会调用一次。  
    作用：用于处理页面显示时的操作，如获取页面参数、数据加载、刷新、界面布局调整、发送网络请求等。
3.  onReady(options)：页面初次渲染完成时调用，一个页面只会调用一次。  
    作用：用于执行页面渲染完成后的操作，如获取节点信息、动画效果等。
4.  onHide()：页面隐藏时调用。  
    作用：用于处理页面进入后台时的操作，如保存数据、清理定时器、停止动画等。
5.  onUnload()：页面卸载时调用。如redirectTo或navigateBack到其他页面时。  
    作用：用于执行页面卸载前的操作，如取消网络请求、清理数据、取消订阅等。

> 执行过程：
> 
> * ⼩程序注册完成后，加载⻚⾯，触发onLoad⽅法
> * ⻚⾯载⼊后触发onShow⽅法，显示⻚⾯
> * ⾸次显示⻚⾯，会触发onReady⽅法，渲染⻚⾯元素和样式，⼀个⻚⾯只会调⽤⼀次
> * 当⼩程序后台运⾏或跳转到其他⻚⾯时，触发onHide⽅法
> * 当⼩程序有后台进⼊到前台运⾏或重新进⼊⻚⾯时，触发onShow⽅法
> * 当使⽤重定向⽅法 wx.redirectTo() 或关闭当前⻚返回上⼀⻚wx.navigateBack()，触发onUnload

Component生命周期  
Component生命周期主要包括created、attached、ready、moved和detached五个函数，分别在组件创建、组件添加到页面、组件初次渲染完成、组件移动和组件从页面中移除时触发。

1.  created()：组件实例刚刚被创建时调用，可以在这个函数中定义组件的数据和方法等。  
    作用：通常在这里可以设置组件的初始数据。  
    应用示例：状态栏适配  
    　　　　• wx.getSystemInfoSync()   同步的方式获取系统信息，包含状态栏的高度(单位px)(statusBarHeight)，系统版本，型号...
2.  attached()：组件被添加到页面中时调用。  
    作用：在组件被插入到页面节点树时执行的操作，可以进行一些 DOM 操作
3.  ready()：组件初次渲染完成时调用。  
    作用：用于执行一些在组件布局完成后的操作，通常用于获取节点信息等。
4.  moved()：组件被移动到另外一个节点时调用。  
    作用：在组件被移动到另一个位置时执行的操作。
5.  detached()：组件被从页面中移除时调用。  
    作用：在组件被销毁前执行的操作，可以进行一些清理工作，如取消订阅、清理定时器等。
6.  error(): 组件抛出异常时执行

> 注意的是：
> 
> * 组件实例刚刚被创建好时， created 生命周期被触发。此时，组件数据 this.data 就是在 Component 构造器中定义的数据 data ， 此时不能调用 setData。
> * 在组件完全初始化完毕、进入页面节点树后， attached 生命周期被触发。此时， this.data 已被初始化为组件的当前值。这个生命周期很有用，绝大多数初始化工作可以在这个时机进行。
> * 在组件离开页面节点树后， detached 生命周期被触发。退出一个页面时，如果组件还在页面节点树中，则 detached 会被触发。
> 
> 还有一些特殊的生命周期，它们并非与组件有很强的关联。但有时组件需要获知，以便组件内部处理，这样的生命周期称为“组件所在页面的生命周期”，在 pageLifetimes 定义段中定义，如下：
> 
> ![](https://i-blog.csdnimg.cn/direct/1668ba3db10d44ecbd59241c4e588d62.png)
> 
> ```javascript
> Component({
>   pageLifetimes: {
>     show: function() {
>       // 页面被展示
>     },
>     hide: function() {
>       // 页面被隐藏
>     }
>   }
> })
> ```

需要注意的是，生命周期函数可以根据需要进行覆盖和使用，例如可以在onLoad函数中进行网络请求，也可以在onShow函数中更新页面数据等。同时，小程序的生命周期也与页面或组件的生命周期有一定的关联，例如当小程序进入后台时，当前页面的onHide函数会被调用，而当小程序从后台进入前台时，当前页面的onShow函数会被调用。

##### 执行顺序 

> 当存在也应用生命周期和页面周期的时候，相关的执行顺序如下：
> 
> * 打开小程序：(App)onLaunch --> (App)onShow --> (Pages)onLoad --> (Pages)onShow --> (pages)onReady
> * 进入下一个页面：(Pages)onHide --> (Next)onLoad --> (Next)onShow --> (Next)onReady
> * 返回上一个页面：(Curr)onUnload --> (Pre)onShow
> * 离开小程序：(App)onHide
> * 再次进入：小程序未销毁 --> (App)onShow(执行上面的顺序）；小程序被销毁，（App)onLaunch重新开始执行

### 19、**小程序生命周期中可以发送网络请求的阶段包括**

1‌.**启动阶段**‌：在应用启动时进行全局数据预加载。可以在`App()`函数中的`onLaunch`生命周期函数中进行网络请求，例如：

```javascript
App({
  onLaunch: function () {
    wx.showLoading({
      title: '加载中...'
    });
    setTimeout(function () {
      MyService.getData().then(res => {
        // 数据存储在全局的MyService中，可在需要的地方使用
      });
    }, 1000);
  }
});

```

这样可以尽早进行数据预加载，减少应用启动时的空白或延迟，提升用户体验‌。

2‌.**页面渲染阶段**‌：在页面生命周期函数中进行数据请求。每个页面都有多个生命周期函数，可以在适当的时机进行网络请求：

* `onLoad`：页面加载时触发，适合进行初次加载数据。
* `onShow`：页面显示时触发，适合进行页面相关的数据请求。
* `onReady`：页面准备就绪时触发，适合进行页面的初始化设置。

例如：

```javascript
Page({
  onLoad: function(options) {
    // 页面加载时进行数据请求
  },
  onShow: function() {
    // 页面显示时进行数据请求
  },
  onReady: function() {
    // 页面准备就绪时进行初始化设置
  }
});

```

### 20、微信小程序模块化？

微信小程序支持模块化开发，可以使用ES6的模块化语法进行代码编写，同时也支持CommonJS和AMD等模块化方案。下面简单介绍微信小程序的模块化实现方式：

**1.ES6模块化**  
在小程序中使用ES6模块化语法可以通过两种方式实现，一种是在代码中直接使用import和export关键字进行导入和导出，另一种是使用微信小程序提供的npm包管理工具，先通过npm安装依赖包，然后在小程序中使用import语句进行导入。

例如，在小程序中使用ES6模块化语法导入一个模块：

```javascript
import { add } from './utils.js';
 
let result = add(1, 2);
console.log(result); // 输出：3

```

2.CommonJS模块化

在小程序中使用CommonJS模块化语法也可以通过两种方式实现，一种是通过wx.require函数进行导入，另一种是使用微信小程序提供的npm包管理工具进行安装和导入。

例如，在小程序中使用CommonJS模块化语法导入一个模块：

```javascript
let { add } = wx.require('./utils.js');
 
let result = add(1, 2);
console.log(result); // 输出：3

```

3.AMD模块化

微信小程序也支持使用AMD模块化方案进行开发，可以通过require函数进行导入和定义模块。但需要注意的是，在小程序中使用AMD模块化方案需要使用[require.js](https://requirejs.org/ "require.js")等相关库进行支持。

例如，在小程序中使用AMD模块化语法导入一个模块：

```javascript
require(['./utils.js'], function (utils) {
  let result = utils.add(1, 2);
  console.log(result); // 输出：3
});

```

综上所述，微信小程序支持多种模块化方案，可以根据需要进行选择和使用。同时，需要注意的是，在使用npm包管理工具进行依赖管理时，需要先在小程序的project.config.json文件中配置相关信息。

#### Amd/cmd规范区别

Amd提前执行依赖，尽早执行，cmd按需执行依赖，懒执行。

### 21、微信小程序所有api放在哪里，简单介绍几个api？

微信小程序的API文档可以在微信官方开发者文档中心中查看，主要分为基础库、界面、网络、媒体、文件、数据缓存、位置、设备、开放接口、小程序跳转等模块，提供了丰富的功能和接口供开发者使用。

下面简单介绍几个比较常用的API：

1.wx.request  
wx.request是微信小程序中用于发起网络请求的API，可以发送HTTP/HTTPS请求，并支持多种请求类型，如GET、POST、PUT等。请求的结果以回调函数的形式返回，开发者可以在回调函数中处理请求结果。

2.wx.getStorageSync、wx.setStorageSync  
wx.getStorageSync和wx.setStorageSync是微信小程序中用于进行本地数据缓存的API。开发者可以使用这两个API将数据存储在本地缓存中，并在需要时从缓存中读取数据。

3.wx.navigateTo、wx.redirectTo、wx.switchTab、wx.navigateBack、wx.reLaunch  
wx.navigateTo、wx.redirectTo、wx.switchTab、wx.navigateBack、wx.reLaunch是微信小程序中用于页面跳转的API，开发者可以通过这些API实现不同的页面跳转效果，比如打开新页面、关闭当前页面、切换Tab页等。

4.wx.showLoading、wx.hideLoading  
wx.showLoading和wx.hideLoading是微信小程序中用于显示和隐藏加载提示框的API。开发者可以在需要加载数据时使用wx.showLoading显示加载提示框，在加载完成后使用wx.hideLoading隐藏加载提示框。

5.wx.getSystemInfoSync  
wx.getSystemInfoSync是微信小程序中用于获取设备信息的API，可以获取设备的品牌、型号、操作系统版本、屏幕宽高等信息。开发者可以使用这些信息优化小程序的展示效果，提高用户体验。

以上是部分常用的API，微信小程序提供的API非常丰富，开发者可以根据实际需求选择和使用。

6.wx.requestPayment  
是开发者在小程序内调起[微信支付](https://so.csdn.net/so/search?q=%E5%BE%AE%E4%BF%A1%E6%94%AF%E4%BB%98&spm=1001.2101.3001.7020 "微信支付")的核心接口。通过此接口，用户可以便捷、安全地完成支付操作。

### 22、微信小程序如何使用sass预编译？

微信小程序使用 Sass 预编译，可以提高 CSS 的可维护性和复用性。下面是使用 Sass 预编译的步骤：

1.  安装 Node.js 和 npm。
    
2.  在项目根目录下创建 package.json 文件，输入以下代码：
    
    ```javascript
    {
      "name": "your-app-name",
      "version": "0.1.0",
      "description": "Your App Description",
      "scripts": {
        "build:wxss": "node-sass --output-style compressed -o dist/css src/scss"
      },
      "dependencies": {
        "node-sass": "^4.14.1"
      }
    }
    
    
    
    
    
    
    AI写代码
    ```
    
3.  运行以下命令安装依赖：
    
    ```javascript
    `npm install`
    
    
    
    AI写代码
    ```
    
4.  在项目根目录下创建一个 src/scss 目录，将你的 Sass 文件放入其中。
    
5.  在 app.wxss 中导入编译后的 css 文件：
    
    ```css
    `@import '../dist/css/app.wxss';`
    
    
    
    
    AI写代码
    ```
    
6.  运行以下命令编译 Sass 文件：
    
    ```css
    `npm run build:wxss`
    
    
    
    
    AI写代码
    ```
    
7.  运行以下命令监听 Sass 文件变化，自动编译：
    
    ```css
    node-sass --output-style compressed -o dist/css src/scss --watch
    
    
    
    
    
    AI写代码
    ```
    

### 23、[微信小程序开发](https://so.csdn.net/so/search?q=%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%BC%80%E5%8F%91&spm=1001.2101.3001.7020)文档界面都有哪些操作，列举几项？

微信小程序开发文档界面提供了丰富的操作和功能，下面列举几项：

1.  搜索框：可以输入关键字搜索相关内容。
2.  导航栏：提供了分类导航，方便查找对应的开发文档。
3.  侧边栏：提供了开发者工具、API、组件等相关链接。
4.  示例代码：提供了丰富的示例代码，帮助开发者更快地上手。
5.  快速链接：提供了一些常用链接，如开发工具下载链接、小程序审核指南等。
6.  在线工具：提供了一些在线工具，如代码压缩、图片压缩等。
7.  版本切换：可以切换不同版本的开发文档。
8.  反馈按钮：提供了反馈入口，方便开发者向官方反馈问题。

通过这些操作和功能，开发者可以更加方便地查找和使用开发文档，加速开发进程。

### 24、微信小程序自定义组件的使用？

微信小程序提供了自定义组件的功能，可以将一些通用的UI组件封装起来，方便在不同的页面中复用，提高开发效率。下面是自定义组件的使用步骤：

1.创建自定义组件：在小程序项目中创建一个自定义组件，通常包含两个文件：组件名.wxml和组件名.js。其中，组件名.wxml定义组件的结构，组件名.js定义组件的行为和数据。

2.注册自定义组件：在**需要使用**自定义组件的页面或组件中，通过**usingComponents**字段声明并注册该自定义组件。例如，在pageA页面中需要使用名为my-component的自定义组件，则需要在pageA.json中进行如下声明：

```javascript
{
  "usingComponents": {
    "my-component": "/components/my-component/my-component"
  }
}

```

其中，`my-component`是自定义组件的名称，`/components/my-component/my-component`表示自定义组件的路径。

3.使用自定义组件：在页面或组件中使用已注册的自定义组件。例如，在`pageA`页面中，可以使用以下代码引用`my-component`组件：

```html
<my-component prop1="{{data1}}" prop2="{{data2}}" bind:customEvent="onCustomEvent"></my-component>
```

其中，`prop1`和`prop2`是自定义组件的属性，`bind:customEvent`是自定义组件的事件。

通过以上步骤，就可以在微信小程序中使用自定义组件了。

### 25、微信小程序自定义组件生命周期有哪些？

微信小程序自定义组件的生命周期与小程序页面的生命周期有些不同。以下是自定义组件的生命周期：

1.  created：组件实例被创建并初始化完成时触发，此时还不能调用setData。
2.  attached：组件被添加到页面节点树时触发，此时可以调用setData。
3.  ready：组件渲染完成时触发，可以获取节点信息。
4.  moved：组件被移动到另一个节点时触发。
5.  detached：组件被从页面节点树移除时触发。
6.  error：组件发生错误时触发。

其中，created和attached是必须要实现的生命周期函数，其他生命周期函数可以根据组件的实际情况选择性实现。在自定义组件中，也可以像小程序页面一样使用setData来更新数据，只不过更新的范围是组件内部。

需要注意的是，如果自定义组件在使用时是通过wx:if或者hidden来控制显示隐藏的，那么当组件被隐藏时，其生命周期中的detached和error不会被触发。

### 26、微信小程序自定义组件父传子子传父？

微信小程序自定义组件的数据传递方式有两种：父组件向子组件传递数据（父传子），子组件向父组件传递数据（子传父）。下面分别介绍这两种传递方式的实现方法。

#### **父传子**

父组件向子组件传递数据可以通过在父组件的WXML文件中，给自定义组件设置属性来实现。子组件可以在自己的properties中声明相应的属性，并在WXML中使用这个属性。

父组件的WXML文件：

```html
<!-- 父组件 -->
<custom-component custom-data="{{customData}}"></custom-component>

```

父组件的JS文件：

```javascript
// 父组件
Page({
  data: {
    customData: '这是父组件的数据'
  }
})

```

子组件的JS文件：

```javascript
// 子组件
Component({
  properties: {
    customData: {
      type: String,
      value: ''
    }
  }
})
```

子组件的WXML文件：

```html
<!-- 子组件 -->
<view>{{customData}}</view>

```

#### **子传父**

子组件向父组件传递数据可以通过在子组件中触发一个自定义事件，并在父组件中监听这个事件来实现。子组件可以通过 this.triggerEvent() 方法触发一个自定义事件，并把需要传递的数据作为参数传递给事件处理函数。父组件可以在自己的WXML文件中，给自定义组件绑定这个事件，并在相应的事件处理函数中获取子组件传递的数据。

子组件的WXML文件：

```html
<!-- 子组件 -->
<button bindtap="onBtnTap">点击传递数据</button>

```

子组件的JS文件：

````javascript
// 子组件
Component({
  methods: {
    onBtnTap() {
      this.triggerEvent('myevent', { msg: '这是子组件的数据' })
    }
  }
})
``` vue
父组件的WXML文件：
<!-- 父组件 -->
<custom-component bind:myevent="onCustomEvent"></custom-component>

````

父组件的JS文件：

```javascript
// 父组件
Page({
  onCustomEvent(event) {
    console.log(event.detail.msg) // 输出：这是子组件的数据
  }
})


```

以上是微信小程序自定义组件中父传子、子传父两种数据传递方式的实现方法。通过这两种方式，可以实现组件间的数据共享和交互。

### 27、微信小程序事件通道的使用？

微信小程序提供了事件通道（EventChannel）的功能，可以在**不同的页面之间传递事件和数据**。以下是事件通道的使用步骤：

1.创建事件通道：在**发送事件**的页面中，使用`wx.eventChannel`创建一个事件通道，指定需要传递的数据。

```javascript
// sender.js
const eventChannel = this.getOpenerEventChannel();
eventChannel.emit('eventName', {data: 'hello'});


```

2.接收事件通道：在**接收事件**的页面中，使用`wx.eventChannel`获取事件通道，并在`on`方法中监听需要接收的事件。

```javascript
// receiver.js
const eventChannel = this.getOpenerEventChannel();
eventChannel.on('eventName', data => {
  console.log(data); // {data: 'hello'}
});

```

在以上示例中，sender.js通过getOpenerEventChannel方法创建了一个事件通道，并在emit方法中指定了需要传递的数据。receiver.js通过getOpenerEventChannel方法获取到该事件通道，并在on方法中监听了eventName事件，并通过回调函数获取到了传递的数据。

通过事件通道，可以方便地在微信小程序中进行页面间的事件和数据传递。 

### 28、微信小程序授权登录流程？

微信小程序授权登录流程如下：

1.  用户点击小程序页面中的授权登录按钮。
2.  小程序调用 wx.login API 获取用户的临时登录凭证code。
3.  小程序将code发送到开发者服务器。
4.  开发者服务器调用微信登录凭证校验API（https://api.weixin.qq.com/sns/jscode2session）获取openid和session_key。
5.  开发者服务器生成自己的登录态（例如token），并将token、**openid、appid**等信息保存到自己的数据库中。
6.  开发者服务器将token返回给小程序。
7.  小程序使用token发起后续的业务请求。

需要注意的是，小程序只能获取到用户的openid等基本信息，不能获取到用户的其他信息，如昵称、头像等。如果需要获取其他信息，需要引导用户进行微信公众号授权。

另外，为了保证用户信息的安全性，开发者在实现小程序授权登录功能时，需要注意以下几点：

1.  不能直接将用户的openid等信息保存在小程序端，必须将其保存在开发者服务器上。
2.  需要对用户的信息进行加密，保证其不被篡改。
3.  需要设置有效期，定期更新token，避免被恶意利用。

### 29、小程序关联微信公众号如何确定用户的唯一性？

使用wx.getUserlnfo方法 [withCredentials](https://so.csdn.net/so/search?q=withCredentials&spm=1001.2101.3001.7020 "withCredentials")为true时，可获取encryptedData，里面有union_id，后端需要进行对称解密

### 30、web-view 嵌入网页的组件

在微信小程序中，web-view是一个嵌入网页的组件，可以用来展示第三方网页。具体来说，web-view可以将一个网页作为一个组件嵌入到小程序中，实现小程序内部展示外部网页的效果。

在使用web-view组件时，需要注意以下几点：

1.  由于web-view是一个嵌入网页的组件，所以它可以加载任何网页。但是，由于小程序的安全机制，只有在符合一定条件下的网页才能被展示。具体来说，只有在经过微信官方认证的网站和已添加到小程序开发者工具中的网站才能被展示。
2.  web-view组件是一个与小程序本身独立的组件，它不能直接调用小程序内部的函数或变量。如果需要在web-view组件中调用小程序内部的函数或变量，需要使用JavaScript Bridge技术，即通过postMessage函数实现两者之间的通信。
3.  web-view组件的使用会影响小程序的性能，所以在使用时需要谨慎考虑。如果可能，应该尽量避免使用web-view组件，而是使用小程序内部的组件来实现相应的功能。
4.  h5的支付不可以是微信公众号的appid，必须是小程序的appid，而且用户的openid也必须是用户和小程序的

### 31、webview中的页面怎么跳转回小程序?

```javascript
wx.miniProgram.navigateTo({
    url:'pages/login/login'+'$params'
})
//跳转到小程序导航页面
wx.miniProgram.switchTab({
    url:'/pages/index/index'
})

```

首先，需要在你的html页面中引用一个js文件

```javascript
<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.3.0.js"></script>
//然后为你的按钮标签注册一个点击事件
$(".kaiqi").click(function(){
        wx.miniProgram.redirectTo({url: '/pages/indexTwo/indexTwo'})
});
// 这里的redirectTo跟小程序的wx.redirectTo()跳转页面是一样的，会关闭当前跳转到页面，换成navigateTo，跳转页面就不会关闭当前页面

```

### 32、小程序调用后台接口遇到那些问题？

* 数据的大小限制，超过范围会直接导致整个小程序崩溃，除非重启小程序
* 小程序不可以直接渲染文章内容这类型的html文本，显示需要借助插件

注：插件渲染会导致页面加载变慢，建议在后台对文章内容的html进行过滤，后台直接处理批量替换p标签div标签为view标签，然后其他的标签让插件来做

### 33、微信小程序如何实现下拉刷新？

用view代替scroll-view，设置onPullDownRefresh函数实现

### 34、小程序的发布流程（开发流程）

参考：https://www.cnblogs.com/ssrstm/p/6855572.html

1.  注册微信小程序账号
2.  获取微信小程序的AppID
3.  下载微信小程序开发者工具
4.  去微信公众号配置域名（可访问）
5.  创建demo项目（开发者工具中添加AppID、预览）
6.  代码上传
7.  设置为体验版，手机浏览
8.  提交审核
9.  小程序发布

### 35、小程序支付如何实现？

[小程序支付](https://blog.csdn.net/lph159/article/details/144746579 "小程序支付")

[小程序支付案例](https://blog.csdn.net/weixin_42554191/article/details/128967200 "小程序支付案例")

1.  小程序注册，要以公司的身份去注册一个小程序，并开通微信支付权限
2.  配置支付参数，包括商户号、密钥等。
3.  在小程序填写合法域
4.  调用 wx.login() 获取appid
5.  后端完成统一下单接口调用，并生成必要的支付参数（如 `prepay_id`）

##### 接入前置条件

在调用 `wx.requestPayment` 前，需完成以下准备工作：

* 在微信公众平台开通微信支付功能。
* 配置支付参数，包括商户号、密钥等。
* 后端完成统一下单接口调用，并生成必要的支付参数（如 `prepay_id`）。

```javascript
wx.requestPayment({
  timeStamp: '1490840662', // 时间戳
  nonceStr: '5K8264ILTKCH16CQ2502SI8ZNMTM67VS', // 随机字符串
  package: 'prepay_id=wx2017033010242291fcfe0db70013231072', //统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*// 预支付交易会话ID
  signType: 'MD5', // 签名类型，默认为MD5，支持HMAC-SHA256和MD5。注意此处需与统一下单的签名类型一致
  paySign: 'C380BEC2BFD727A4B6845133519F3AD6', // 签名,具体签名方案参见微信公众号支付帮助文档;
  success(res) {
    console.log('支付成功', res);
  },
  fail(err) {
    console.error('支付失败', err);
  },
  complete(res) {
    console.log('支付完成，无论成功或失败都会调用', res);
  }
});


![](https://csdnimg.cn/release/blogv2/dist/pc/img/newCodeMoreWhite.png)

```

![](https://i-blog.csdnimg.cn/blog_migrate/31e7fa5bdc0acfbffc412b78c54125b4.png)

### 36、小程序还有那些功能？

客服功能，录音，视频，音频，地图，定位，拍照，动画，canvas

### 37、微信小程序如何使用vant组件库？

Vant是一款基于Vue.js的移动端组件库，虽然它是面向Vue.js的，但是也可以在微信小程序中使用。以下是使用Vant组件库的步骤：

1.安装vant-weapp：在小程序根目录下打开终端，执行以下命令进行安装：

```javascript
`npm i vant-weapp -S --production`

```

2.引入需要使用的组件：在页面的JSON配置文件中，引入需要使用的组件，例如：

```javascript
{
  "usingComponents": {
    "van-button": "vant-weapp/dist/button/index"
  }
}

```

3.使用组件：在页面的WXML文件中，直接使用组件即可，例如：

```html
<van-button type="primary">按钮</van-button>
```

以上是在微信小程序中使用Vant组件库的基本步骤。需要注意的是，Vant组件库是基于Vue.js的，与微信小程序的原生语法有些不同，使用时需要根据Vant的文档进行调整。另外，Vant也提供了专门针对小程序的组件库vant-weapp-mini，可以直接使用。

### 常见问题：

1.  rpx：小程序的尺寸单位，规定屏幕为750rpx，可适配不同分辨率屏幕
2.  本地资源无法通过wxss获取：background-image：可以使用网络图片，或者base64，或者使用标签
3.  wx.navigateTo无法打开页面：一个应用同时只能打开5个页面，请避免多层级的交互方式，或使用wx.redirectTo
4.  tabBar设置不显示：1.tabBar的数量少于2项或超过5项都不会显示。2.tabBar写法错误导致不会显示。3.tabBar没有写pagePath字段（程序启动后显示的第一个页面）