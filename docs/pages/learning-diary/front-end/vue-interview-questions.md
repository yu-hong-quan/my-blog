# Vue常见面试题(持续更新)


## Vue面试题

### 1.谈谈你对MVVM开发模式的理解

MVVM（Model-View-ViewModel）是一种[软件架构设计](https://so.csdn.net/so/search?q=%E8%BD%AF%E4%BB%B6%E6%9E%B6%E6%9E%84%E8%AE%BE%E8%AE%A1&spm=1001.2101.3001.7020)模式，特别适用于构建现代的用户界面应用程序，尤其是在前端开发领域中广为采用。它起源于微软WPF和Silverlight技术栈，后来在JavaScript世界中的框架如Vue.js、AngularJS/Angular以及React（通过Redux等状态管理库结合使用）得到了广泛应用。

**组件与职责：**

1.  **Model (模型层)：**
    
    * Model代表应用程序的数据和业务逻辑部分，通常包含数据结构、数据获取与存储逻辑。它可以是数据库实体、API响应或任何可以被视图模型操作的数据源。
        
2.  **View (视图层)：**
    
    * View是用户可见的界面部分，它负责展示数据和接收用户交互。在MVVM中，视图不直接处理业务逻辑，而是通过数据绑定与ViewModel进行交互。
        
3.  **ViewModel (视图模型层)：**
    
    * ViewModel作为Model与View之间的桥梁，封装了视图的状态和行为逻辑。它对Model的数据进行处理，提供给View需要展示的形式，并将从View接收到的用户输入转换成对Model的操作指令。
        
    * ViewModel具有双向数据绑定的能力，即当ViewModel中的数据发生变化时，自动反映到关联的View上；同时，当用户通过View改变数据时，变化也会同步回ViewModel。
        

**优点：**

* **低耦合性：** 由于数据绑定机制，ViewModel无需知道具体的View实现细节，而View也不关心数据如何处理，二者只需关注自己的职责范围，降低了模块间的耦合度。
    
* **可测试性：** ViewModel仅包含业务逻辑和数据转换，易于编写单元测试以确保功能正确性。
    
* **代码复用和组织性：** ViewModel可以独立于视图设计，因此可在多个视图之间共享相同的业务逻辑，提高代码复用率。
    
* **分离关注点：** [MVVM模式](https://so.csdn.net/so/search?q=MVVM%E6%A8%A1%E5%BC%8F&spm=1001.2101.3001.7020)使得UI开发者可以专注于界面布局与样式，后端开发者可以专注于业务逻辑，两者协同工作更加高效。
    
* **动态更新：** 双向数据绑定使得UI能够实时响应数据变化，提供了更好的用户体验。
    

总之，MVVM模式有助于构建可维护、可扩展且易测试的现代Web应用，尤其适合那些有着复杂用户界面和丰富交互的应用场景。

### 2.v-if 和 v-show 有什么区别

Vue.js 中的 `v-if` 和 `v-show` 都是用来控制元素是否渲染和显示在DOM中的指令，但它们的工作机制和使用场景有所不同：

1.  **v-if**：
    
    * 功能：条件渲染。当表达式的值为 `true` 时，该元素及其包含的所有子元素会被渲染到DOM中；当表达式的值为 `false` 时，该元素将不会被渲染到DOM中。
        
    * 性能：具有惰性渲染的特性，在初始渲染时如果条件为假，则不会执行任何渲染操作，直到条件变为真才会开始渲染。切换时涉及创建或销毁DOM元素，因此有较高的切换开销，但对初次渲染有优化效果。
        
    * 使用场景：适合那些需要根据条件决定是否生成 DOM 的情况，或者在不需要渲染大量未使用的 DOM 时。
        
2.  **v-show**：
    
    * 功能：条件显示。不论条件真假，元素总是会被渲染到DOM中，只是通过CSS的 `display` 属性来控制元素的可见性（`display: none/block/flex/gird` 等）。
        
    * 性能：在初始渲染时会一次性编译并添加所有元素到DOM树中，之后只通过修改样式来切换元素的显示状态，所以其初始渲染开销可能较大，但在切换显示隐藏状态时，由于仅涉及CSS属性的改变，性能消耗相对较小。
        
    * 使用场景：适用于频繁切换显示/隐藏状态，且DOM结构较为复杂的情况，因为避免了反复创建和销毁DOM元素带来的性能损耗。
        

总结来说，如果你确定条件变化不频繁并且希望在首次加载时减少不必要的DOM构建，可以优先考虑使用 `v-if`；而当频繁切换显示隐藏且不在乎初始渲染时稍微多一点的开销时，可以选择使用 `v-show`。

### 3.渐进式框架的理解

渐进式框架（Progressive Framework）的核心理念是允许开发者逐步增强或扩展应用程序的功能，而不是一次性提供一个全功能、一体化的解决方案。这种框架设计具有以下特点：

1.  **模块化**：渐进式框架通常将功能划分为多个独立的模块或组件，每个模块可以单独引入和使用，这样开发者可以根据项目需求选择性地集成所需的部分。
    
2.  **低侵入性**：它不会强制要求开发者遵循严格的规则集或重构整个应用才能使用框架，而是尽可能地与现有代码库和第三方库无缝融合。
    
3.  **灵活性**：开发者能够轻松地从小规模开始，仅使用框架的基本功能，并随着项目的复杂度增加逐步添加更高级的功能。
    
4.  **可扩展性**：框架的设计支持自定义扩展，这意味着开发者可以在需要时构建自己的插件或模块来满足特定业务需求。
    
5.  **易于上手**：渐进式框架往往有一个较小的学习曲线，因为开发者可以从简单用例入手，随着对框架理解加深再逐渐深入到更复杂的特性和最佳实践。
    

以Vue.js为例，作为渐进式JavaScript框架，它可以灵活地应用于各种场景，从简单的页面交互到大型单页应用。开发者可以只使用其模板引擎和数据绑定特性进行开发，或者进一步利用Vue生态中的路由管理、状态管理等工具来构建更为复杂的系统。Vue的设计使得开发者能够在不违背既有代码结构的前提下，逐步将Vue的功能融入到项目中去。

### 4.常用的vue指令都有哪些

Vue.js 中常用的指令主要包括：

1.  **v-if 和 v-else-if / v-else**：
    
    * `v-if`：根据表达式的值决定是否渲染元素。
        
    * `v-else-if`：在 `v-if` 之后使用，提供额外的条件判断。
        
    * `v-else`：与 `v-if` 或者 `v-else-if` 配合使用，当前面的条件不满足时渲染内容。
        
2.  **v-show**：
    
    * 类似于 `v-if`，但不同之处在于它通过 CSS 的 `display` 属性控制元素显示/隐藏，DOM 元素始终会被渲染，只是切换可见性。
        
3.  **v-for**：
    
    * 用于循环渲染列表或数组数据，可以遍历数组、对象或生成迭代器的任何可迭代对象。
        
4.  **v-bind（简写：:`）**：
    
5.  * 绑定元素属性到实例数据，例如 `v-bind:href="url"` 可以动态绑定链接地址，简写为 `:href="url"`。
        
6.  **v-on（简写：@）**：
    
    * 监听并处理 DOM 事件，例如 `v-on:click="handleClick"` 可以绑定点击事件处理器，简写为 `@click="handleClick"`。
        
    * **v-model**：
        
    * 在表单控件和组件上创建双向数据绑定，自动追踪输入框等表单元素的值变化，并同步到 Vue 实例的数据中。
        
7.  **v-text 和 v-html**：
    
    * `v-text`：将数据作为纯文本插入到元素内，替换其内部的所有内容。
        
    * `v-html`：将数据解析为 HTML 并插入到元素内，有安全风险，因为它会执行 HTML。
        
8.  **v-once**：
    
    * 一次性插值，只会在初次渲染时被用作插值，后续即使数据发生变化也不会重新渲染该部分的内容。
        
9.  **v-pre**：
    
    * 跳过这个元素和它的子元素的编译过程，原样输出 Mustache 标签。
        
10. **v-slot（替代了老版本的 slot）**：
    
    * 用于定义组件作用域插槽，允许自定义组件模板中的内容布局。
        

此外，还有一些更进阶或特定场景下的指令，如 `v-bind:class` 和 `v-bind:style` 进行类名和样式绑定，以及Vue 2.x中的 `v-once`（Vue 3.x已移除），还有Vue 3.x中新增的一些特性。

### 5.常用的vue修饰符都有哪些

Vue.js 中常用的事件修饰符包括但不限于以下几种：

1.  **`.stop`**：
    
    * 阻止事件继续向上冒泡（propagation），相当于调用了 `event.stopPropagation()`。
        
2.  **`.prevent`**：
    
    * 阻止事件的默认行为（default behavior），例如防止表单提交或链接跳转，相当于调用了 `event.preventDefault()`。
        
3.  **`.once`**：
    
    * 使监听器在触发一次后自动移除，确保该事件只执行一次。
        
4.  **`.capture`**（Vue 3.x中新增）：
    
    * 添加事件侦听器时使用捕获模式而不是冒泡模式。
        
5.  **`.self`**：
    
    * 只当事件是从侦听器绑定的元素本身（而不是其后代元素）触发时才触发回调。
        
6.  **`.passive`**：
    
    * 告诉浏览器你不会调用 `preventDefault()`，这样浏览器可以优化滚动或其他类似交互的性能。
        
7.  **键盘事件修饰符**：
    
    * `.enter`, `.tab`, `.delete`, `.esc`, `.space`, `.up`, `.down`, `.left`, `.right` 等，用于指定响应特定按键的事件处理器。
        
8.  **系统修饰键**：
    
    * `.ctrl`, `.alt`, `.shift`, `.meta`，这些修饰符用来检测是否同时按下了特定的系统修饰键。
        
9.  表单修饰符（用于 `v-model` 上）：
    
    * `.lazy`：在 change 事件而非 input 事件时同步输入框的值。
        
    * `.trim`：自动过滤用户输入内容的首尾空白字符。
        
    * `.number`：将用户的输入自动转换为数字类型。
        

请注意，以上信息是基于Vue 2.x和Vue 3.x的部分功能，实际应用中应参考Vue官方文档获取最新、最准确的信息。

### 6.v-for和v-if的优先级

在Vue.js中，v-for和v-if指令的优先级问题取决于Vue版本：

* **Vue 2.x**：v-for的优先级高于v-if。这意味着当它们同时出现在一个元素上时，v-for会先执行循环，然后对每个循环项应用v-if条件判断。
    
* **Vue 3.x**：从Vue 3开始，v-if的优先级高于v-for。现在，在同一个元素上同时使用这两个指令时，v-if会首先进行条件检查，只有满足条件的元素才会进入v-for循环。
    

基于这个优先级规则，为了优化性能并避免不必要的循环，推荐的做法是将v-if放在外层template标签或单独的元素上，包裹住v-for所在的元素，这样可以先筛选数据源再进行列表渲染。例如：

``` vue
<template v-if="shouldRenderItems">
 <div v-for="item in items" :key="item.id">
   <!-- 渲染item -->
 </div>
</template>
```

或者如果需要根据条件过滤列表中的项目，则可以先通过计算属性或其他方式预处理数据源。

### 7.computed 和 watch 和methods的区别

在Vue中，`computed`、`watch`和`methods`是用于处理和响应属性变化的三个不同的选项。

1.  **computed（计算属性）**：computed属性是具有缓存机制的属性，它基于依赖的响应式数据进行计算，并且只有在相关响应式数据发生变化时，才会重新计算。计算属性适用于基于多个属性的复杂逻辑计算和数据衍生。在模板中使用computed属性时，可以像访问普通属性一样直接获取其值，而不需要调用函数。
    
2.  **watch（侦听器）**：watch选项允许你观察一个表达式或一个函数，在观察目标变化时触发相应的回调。watch用于响应数据的变化，并可以执行异步操作，执行一些副作用或者派发其他的操作。它可以监听到具体的变化，并在响应式数据发生变化时执行相应的操作。
    
3.  **methods（方法）**：methods是一个包含组件中可调用方法的对象。它用于定义可以在组件中被调用的函数，方法可以接收参数，并用于处理事件、触发其他函数或实现复杂的逻辑等。
    

区别总结：

* `computed` 是一个带有缓存机制的计算属性，根据响应式数据进行计算，只有相关响应式数据发生变化时才会重新计算。
    
* `watch` 是用于观察和响应数据变化的选项，可以执行异步操作，适合用于监听具体的数据变化并做出相应的操作。
    
* `methods` 是一个包含组件可调用方法的对象，用于定义组件中可以被调用的函数，适合用于处理事件、触发其他函数或执行复杂逻辑。
    

需要根据具体的需求和场景选择合适的选项。如果需要根据已有数据进行计算或衍生新的数据，可以使用`computed`；如果需要监听和响应数据的变化并执行特定的操作，可以使用`watch`；如果需要在模板或其他地方调用的函数，可以使用`methods`。

### 8.vue中计算属性的使用

在Vue.js中，计算属性（Computed Properties）是用于根据组件内部响应式数据进行复杂计算并返回结果的特性。它们的特点是可以缓存计算结果，在依赖的数据发生变化时自动重新计算，并且可以直接在模板中使用，就像访问data对象中的属性一样。

下面是如何在Vue中定义和使用计算属性的基本步骤：

1.  **定义计算属性**： 在Vue组件的选项对象中，通过`computed`属性来定义计算属性，它是一个包含getter函数的对象。Getter函数会根据其他数据属性的值计算出一个新值。
    
``` js
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
    };
  },
  computed: {
    // 定义计算属性fullName
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  },
};
```

1.  **在模板中使用计算属性**： 计算属性可以在模板中直接引用，Vue会确保当其依赖的任何数据变化时，该计算属性也会得到更新。
    

``` js
<template>
  <div>
    <!-- 使用计算属性fullName -->
    <p>Full Name: {{ fullName }}</p>
  </div>
</template>
```

1.  **带有setter的计算属性**： 除了getter之外，计算属性还可以拥有setter。当给计算属性赋值时，setter会被调用。这可以用来实现双向绑定或处理更复杂的逻辑。
    

``` js
computed: {
  fullName: {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(newValue) {
      const names = newValue.split(' ');
      this.firstName = names[0];
      this.lastName = names[1];
    },
  },
}
```

1.  **依赖追踪与缓存机制**： Vue的计算属性具有依赖追踪功能，这意味着它会自动跟踪它所依赖的所有数据属性的变化。同时，Vue还对计算属性的结果进行了缓存，只有当依赖的数据发生变化时，才会重新执行getter函数。
    

总的来说，计算属性提供了一种高效、简洁的方式来封装视图层中需要进行复杂计算的逻辑，有助于维护代码清晰和提高性能。

### 9.watch监听的使用

在Vue.js中，`watch`监听器用于观察和响应数据的变化。当被观察的数据发生变化时，`watch`对象中对应的处理函数会被触发执行。

以下是如何在Vue组件中使用`watch`的基本步骤：

1.  **定义watch监听器**： 在Vue组件的选项对象中，通过`watch`属性来定义需要监听的数据属性及其变化后的回调函数。
    
``` js
export default {
  data() {
    return {
      myData: 'Initial value',
    };
  },
  watch: {
    // 监听myData属性的变化
    myData(newValue, oldValue) {
      console.log('New value:', newValue);
      console.log('Old value:', oldValue);
      
      // 可以在这里执行任何基于新旧值变化的逻辑
    },
  },
};
```

1.  **深度监听对象或数组**： 对于对象或数组类型的属性，如果需要监听内部属性的变更，可以设置`deep: true`以进行深度监听。
    

``` js
watch: {
  complexObject: {
    handler(newVal, oldVal) {
      // ...
    },
    deep: true,
  },
}
```

1.  **监听多个属性**： 如果你需要同时监听多个属性，可以在`watch`对象中分别定义它们。
    

``` js
watch: {
  myData: function () {...},
  anotherProperty: function () {...},
}
```

1.  **方法式写法（Vue 2.x）**： 在Vue 2.x版本中，还可以直接将回调函数作为`watch`对象的键值对，这样就不需要给回调提供新旧值参数。
    
``` js
watch: {
  myData: function handleMyDataChange() {
    // ...
  },
}
```

1.  **监听多个表达式（Vue 3.x）**： Vue 3.x引入了新的`watch`API，它可以接受一个函数返回的对象，该对象包含要监听的表达式和其对应的处理函数。
    
``` js
import { ref, watch } from 'vue';

setup() {
  const myData = ref('Initial value');
  
  watch(
    () => myData.value, 
    (newValue, oldValue) => {
      console.log('New value:', newValue);
      console.log('Old value:', oldValue);
    }
  );

  return { myData };
}
```

总之，`watch`监听器是Vue中实现数据变化后执行特定逻辑的核心机制之一，它使得开发者能够轻松地追踪和应对复杂数据状态的变化。

### 10.过滤器的理解与使用

在Vue.js中，过滤器（Filters）是一个用于处理数据展示时格式化和转换的机制。它们允许你定义一些预处理函数，这些函数会在数据绑定到视图之前对数据进行操作。

**理解过滤器：**

1.  **功能定位**：
    
    * 过滤器主要用于文本格式化，例如将日期格式化为易读形式、将数字转换为货币格式、字符串大小写转换等。
        
    * 它们可以链式调用，即一个数据可以依次通过多个过滤器进行处理。
        
2.  **使用方式**：
    
    * 过滤器通常在JavaScript表达式的尾部以管道符号 `|` 来调用，如 `{`{ message | uppercase `}}` 会将message变量转换为大写。
        
    * 可以传递参数给过滤器，例如 `{`{ date | dateFormat('yyyy-MM-dd') `}}`，这里的`dateFormat`是一个自定义过滤器，并接受一个表示日期格式的参数。
        
3.  **定义过滤器**：
    
    * 在Vue 2.x中，可以在全局或组件局部定义过滤器。全局过滤器通过`Vue.filter()`方法定义，而局部过滤器则在组件内通过`filters`选项定义。
        
    
    全局过滤器示例：
    
    ``` js
    Vue.filter('capitalize', function (value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    });
    ```
    
    局部过滤器示例：
    
    ``` js
    export default {
      filters: {
        capitalize(value) {
          // 同样是将值首字母转为大写
          return value.charAt(0).toUpperCase() + value.slice(1);
        }
      },
      // ...
    };
    ```
    
4.  **应用场景**：
    
    * 文本格式化：日期时间、金额、百分比、电话号码、邮箱地址等形式化显示。
        
    * 字符串处理：截取、替换、加密解密等操作。
        
    * 数据转换：简单的数据类型转换，如数字与字符串之间的互换。
        

**注意**：

* Vue 3.x 中已经移除了过滤器这一特性，推荐使用计算属性或者组合式API中的`computed`来替代过滤器的功能，因为它们提供了更强大的逻辑处理能力和更好的代码组织结构。
    

### 11.全局组件和局部组件的区别

全局组件和局部组件是Vue.js中用来组织和复用UI元素的两种不同注册方式。它们的区别主要体现在作用范围、注册方法以及可用性上：

**全局组件：**

* **作用范围**：全局组件在整个Vue应用中都是可见的，任何其他组件（包括根组件及其所有子组件）都可以直接使用。
    
* **注册方法**：通过调用`Vue.component()`全局API进行注册，例如：
    
    ``` js
    Vue.component('MyGlobalComponent', {
      template: `<div>我是全局组件</div>`
    });
    ```
    
* **特点**：一旦注册为全局组件，无需在每个需要使用的组件内部再做声明或引入。
    

**局部组件：**

* **作用范围**：局部组件只在其定义或注册的地方以及其子组件树内可见，不会影响到全局的应用范围。
    
* **注册方法**：
    
    * 在单文件组件（.vue文件）内，可以将其作为子组件直接在`<script>`标签中的`components`对象中声明并导出：
        
        ``` js
        export default {
          components: {
            'MyLocalComponent': {
              template: `<div>我是局部组件</div>`
            }
          },
          // ...
        };
        ```
        
    * 或者，在某个父组件的选项对象内注册：
        
        ``` js
        var MyParentComponent = {
          components: {
            MyLocalComponent: {
              // 组件定义
            }
          },
          // ...
        };
        ```
        
    
* **特点**：局部组件的生命周期和作用域局限于当前组件或者其父组件的上下文中，这有助于减少命名冲突和提高代码模块化程度。
    

总结起来，全局组件适合于那些需要在多个地方重复使用的通用型组件，而局部组件则更适用于特定组件内的私有封装，保持组件之间的低耦合性和高内聚性。

### 12.vue自定义插件的使用

Vue.js 中自定义插件的使用涉及以下几个步骤：

1.  **创建插件**： 首先，你需要创建一个插件。Vue.js 插件通常包含一个 `install` 方法，该方法接收两个参数：`Vue` 构造器和可选的 `options` 对象。
    
``` js
// my-plugin.js
export default {
  install(Vue, options = {}) {
    // 在这里扩展 Vue 的功能，如添加全局方法、属性、指令或组件等
    Vue.mixin({
      methods: {
        // 添加全局方法
        myCustomMethod() {
          // 自定义逻辑...
        },
      },
    });

    Vue.directive('my-directive', {
      // 定义全局自定义指令
      bind(el, binding, vnode) {
        // ...
      },
      inserted() {},
      update() {},
      componentUpdated() {},
      unbind() {},
    });

    // 注册全局组件
    Vue.component('MyGlobalComponent', {
      // 组件定义...
    });
  },
};
```

1.  **注册插件**： 创建完插件后，在应用中使用 `Vue.use()` 方法来注册插件。
    

``` js
// main.js (或者任何你初始化Vue应用的地方)
import Vue from 'vue';
import MyPlugin from './my-plugin';

Vue.use(MyPlugin, { /* 可选的插件选项 */ });
```

1.  **使用插件提供的功能**： 一旦插件被注册到Vue实例上，它所提供的全局方法、属性、指令或组件就可以在应用中的任何地方使用了。
    

例如，对于上面示例中的自定义方法：

``` js
<template>
  <button @click="myCustomMethod">点击调用自定义方法</button>
</template>

<script>
export default {
  // ...
  methods: {
    // 不需要在这里再次定义myCustomMethod，因为它是全局可用的
  },
};
</script>
```

对于自定义指令：

``` js
<div v-my-directive="someValue"></div>
```

对于全局注册的组件：

``` js
<MyGlobalComponent />
```

总之，Vue自定义插件是一种强大的扩展机制，可以用来组织和复用代码，将特定功能模块化并使其在整个应用程序中易于使用。

### 13.vue的生命周期都有哪些

Vue.js 的生命周期主要包括以下阶段，每个阶段都有相应的钩子函数可以用来执行自定义逻辑：

1.  **初始化前/创建前阶段：**
    
    * `beforeCreate`：在这个阶段，实例刚刚被创建，但数据观测和事件配置都还未完成。此时，`data` 和 `methods` 还不可用。
        
2.  **创建后阶段：**
    
    * `created`：在这个阶段，Vue实例已经被创建并完成了数据观测、计算属性的依赖收集、方法的绑定等操作，但是尚未挂载到DOM中。这意味着在此时可以访问所有的数据属性和方法，但还不能操作DOM元素。
        
3.  **挂载前阶段：**
    
    * `beforeMount`：在挂载开始之前调用，相关的render函数首次被调用。此时虚拟DOM已经创建，但尚未挂载到页面上。
        
4.  **挂载阶段：**
    
    * `mounted`：在组件被挂载到DOM中之后立即调用。此时，可以通过DOM API操作真实的DOM节点。
        
5.  **更新前阶段（数据变化时触发）：**
    
    * `beforeUpdate`：当组件数据发生变化，Vue将重新渲染组件之前调用。在这一步骤中，可以获取新的状态数据，但旧的DOM结构仍存在。
        
6.  **更新阶段：**
    
    * `updated`：在组件更新完毕后调用，此时组件DOM已经根据新的数据完成渲染。注意避免在此处进行过于频繁或昂贵的DOM操作，因为这会导致额外的重绘。
        
7.  **销毁前阶段：**
    
    * `beforeUnmount`（Vue 3.x中的名称，Vue 2.x中为`beforeDestroy`）：在实例销毁之前调用，此时实例仍然完全可用。
        
8.  **销毁阶段：**
    
    * `unmounted`（Vue 3.x中的名称，Vue 2.x中为`destroyed`）：在组件从DOM中卸载并且解除了所有绑定之后调用。这个钩子在组件生命周期结束时被调用，可以在这里执行资源清理工作，如取消定时器、移除事件监听器等。
        

总结起来，Vue.js组件完整的生命周期流程如下：

beforeCreate -> created -> beforeMount -> mounted
                              |
       数据变化引起更新     |
           ↓                
beforeUpdate -> updated
                              |
      (手动调用$destroy)     |
           ↓                
beforeUnmount -> unmounted

### 14.导航守卫都有哪些

Vue.js 中的路由导航守卫主要分为以下几类：

1.  **全局前置守卫 (Global beforeEach)**
    
    * `router.beforeEach(to, from, next)` 这个守卫在每次路由导航前都会被调用。可以用来进行诸如用户身份验证、页面权限检查或者根据某些条件重定向到其他路由的操作。必须调用 `next()` 函数来决定是否以及何时进入下一个路由。
        
2.  **全局解析守卫 (Global beforeResolve)**
    
    * `router.beforeResolve(to, from, next)` 类似于 `beforeEach`，但它会在所有组件异步依赖（如 `async component`）解决之后但在渲染之前触发。这对于需要在导航之间进行一些异步操作，并且依赖于这些操作结果来进行路由导航控制的情况非常有用。
        
3.  **全局后置钩子 (Global afterEach)**
    
    * `router.afterEach(to, from)` 在每次导航完成后执行，无论导航成功与否。通常用于更新浏览器的滚动位置、页面标题或记录路由历史等操作。
        
4.  **路由独享守卫 (Route-specific Guards)**
    
    * `beforeEnter` 可以直接在路由配置对象中定义，仅针对特定路由生效。它接受与全局前置守卫相同的参数，并通过调用 `next()` 来处理导航。
        
5.  **组件内的守卫 (In-Component Guards)**
    
    * `beforeRouteEnter`
        
    * `beforeRouteUpdate`
        
    * `beforeRouteLeave` 组件内部的导航守卫允许我们在组件自身内对路由变化做出响应：
        
        * `beforeRouteEnter`：在当前路由改变，即将进入该组件时触发。
            
        * `beforeRouteUpdate`：在当前路由改变，但是目标组件被复用时（即不重新实例化组件）触发，常用于处理数据更新。
            
        * `beforeRouteLeave`：在离开当前组件时触发，可以用来确认是否可以离开或是取消离开操作。
            

每种守卫都提供了对路由导航流程的强大控制能力，可以根据应用需求实现复杂的逻辑和权限管理。

### 15.自定义指令

Vue.js 中的自定义指令允许你扩展HTML元素的功能，使其具有特殊的响应式行为。你可以通过全局或局部注册的方式来创建一个自定义指令。

以下是一个自定义指令的基本结构：

**全局注册自定义指令：**

// 在你的Vue应用初始化文件中注册
``` js
Vue.directive('my-directive', {
  // 指令的生命周期钩子函数
  bind: function (el, binding, vnode) { /* ... */ },
  inserted: function (el, binding, vnode) { /* ... */ },
  update: function (el, binding, vnode) { /* ... */ },
  componentUpdated: function (el, binding, vnode) { /* ... */ },
  unbind: function (el, binding, vnode) { /* ... */ },
});
```

在每个钩子函数中：

* `el` 是指令绑定到的元素。
    
* `binding` 是一个对象，包含指令的绑定信息（例如绑定值、修饰符等）。
    
* `vnode` 是Vue编译生成的虚拟节点对象。
    

例如，创建一个简单的自定义指令，当元素被插入DOM时，给其添加背景色：

``` js
Vue.directive('highlight', {
  inserted: function (el, binding) {
    el.style.backgroundColor = binding.value;
  },
});
```

// 使用指令
``` js
<div v-highlight="'yellow'">This element will have a yellow background</div>
```

**局部注册自定义指令：** 如果你只想在一个组件内部使用某个自定义指令，可以在组件的选项对象中定义 `directives` 属性：

``` js
export default {
  directives: {
    'my-directive': {
      // 同样可以定义生命周期钩子函数
      bind: function (el, binding, vnode) { /* ... */ },
      // ...
    }
  },
  // ...
}
```

然后在该组件的模板中使用这个局部指令：

``` js
<template>
  <div v-my-directive="someValue">...</div>
</template>
```

自定义指令提供了一种灵活的方式，帮助你在不修改核心库的情况下扩展Vue框架，实现更多个性化的交互和功能。

### 16.为什么data是函数而不是对象

在 Vue.js 中，数据（`data`）属性需要是一个函数而不是一个对象的原因在于 Vue 实现组件的响应式原理以及组件复用的机制。

1.  **独立作用域**： 当每个 Vue 组件实例化时，它需要有自己的独立的数据对象。如果 `data` 是一个对象，则所有实例都会共享同一份数据，导致数据相互影响。通过让 `data` 是一个返回新对象的函数，确保了每个组件实例各自拥有从这个函数生成的独一无二的数据副本。
    
2.  **响应式系统初始化**： Vue 使用了依赖收集和观察者模式来实现其响应式系统。当组件实例化时，Vue 会遍历 `data` 函数返回的对象，并使用 `Object.defineProperty()` 方法对对象中的每一个属性进行 getter 和 setter 转化，使其具有响应性。如果是直接传递一个对象，那么这个对象在创建实例之前就已经存在，Vue 将无法正确地跟踪并转换这些属性。
    
3.  **组件复用与性能优化**： 在大型应用中，组件会被多次复用。如果 `data` 是对象而非函数，每次复用组件时都指向同一个对象，那么单个组件的状态改变会影响到所有其他同样引用该对象的组件。通过使用函数返回新对象的方式，保证了组件之间的状态隔离，从而提高应用的稳定性和可维护性。
    

总结起来，在 Vue 的设计哲学中，`data` 属性是函数是为了确保组件的数据独立性和响应式系统的正常运作。

### 17.keep-alive的理解

`keep-alive` 是 Vue.js 框架提供的一个内置组件，它主要用于实现组件级别的缓存。在Vue应用中，当页面进行路由切换或者组件动态渲染时，默认情况下，离开视图的组件会被销毁（destroyed），而新的目标组件会被创建和挂载（mounted）。

**作用：**

1.  **状态保持** - 当一个被 `keep-alive` 包裹的组件切换离开后，该组件实例及其子组件的状态不会被销毁，而是被保留在内存中。
    
2.  **避免重新渲染** - 当用户再次访问到之前已离开但被缓存的组件时，Vue 会从缓存中取出这个组件实例并激活（activated），而不是重新创建，从而节省了初始化和渲染的时间，提高了用户体验。
    

**原理：**

* `keep-alive` 组件作为一个抽象组件，自身不会渲染成真实的DOM元素，但它会对包裹在其内部的动态组件进行生命周期管理。
    
* 当组件进入或离开 `keep-alive` 缓存区域时，会触发特定的生命周期钩子函数：
    
    * `activated` - 当组件被激活（从缓存中取出并重新显示时调用）
        
    * `deactivated` - 当组件停用（离开视图但未被销毁时调用）
        

**应用场景：**

* 列表页与详情页之间的快速切换，返回列表页时可以保留滚动位置及筛选条件等状态。
    
* 多标签页或多窗格布局中，频繁切换的同类型组件，如编辑器、设置面板等。
    

**使用方法：** 在Vue模板中，通常在 `<router-view>` 或其他需要缓存的动态组件外包裹 `<keep-alive>` 标签：

&lt;keep-alive&gt;
  &lt;component :is="currentView"&gt;&lt;/component&gt; &lt;!-- 动态组件 --&gt;
&lt;/keep-alive&gt;

此外，`keep-alive` 还支持一些可配置的属性，比如 `include` 和 `exclude`，用于自定义哪些组件需要被缓存或排除缓存。

### 18.操作数据页面不更新的问题

在Vue.js中，操作数据页面不更新的问题通常与Vue的响应式系统有关。Vue通过`data`选项定义的数据属性都是响应式的，但如果你直接修改对象或数组内部属性，而未触发Vue对这些变化的跟踪，可能会导致视图没有及时更新。

**原因及解决办法：**

1.  **直接修改深层次的对象属性**
    
    * 原因：当对象的深层次属性发生改变时，Vue无法检测到这种变化。
        
    * 解决方法：
        
        * 使用 `this.$set(obj, key, value)` 方法来确保添加的新属性或者更改已有属性时能够被Vue观察到。
            
        * 对于数组，使用数组变异方法（如 `push()`, `pop()`, `shift()`, `unshift()`, `splice()` 和 `sort()` 等）而不是直接赋值来修改数组内容。
            
2.  **替换整个对象或数组**
    
    * 原因：如果直接用新对象替换旧对象（`this.someObject = newObj`），Vue会丢失对原对象的引用，从而失去对新对象内部属性的响应式追踪。
        
    * 解决方法：
        
        * 如果是对象，可以考虑使用 Vue.set 或 $set 更新对象属性。
            
        * 如果是数组，可以使用数组变异方法进行更新，或者使用展开运算符和 Object.assign 创建一个新的对象，并将其赋值给原对象。
            

例如：

// 错误的方式（不会触发视图更新）
``` js
this.myObject.nestedProperty = newValue;
```

// 正确的方式（触发视图更新）
``` js
this.$set(this.myObject, 'nestedProperty', newValue);
```

// 错误的方式（不会触发视图更新）
``` js
this.myArray = newArray;
```

// 正确的方式（触发视图更新）
``` js
this.myArray.splice(0, this.myArray.length, ...newArray);
```

1.  **未在组件实例化时声明的属性**
    
    * 原因：在运行时动态添加到组件实例上的属性不是响应式的。
        
    * 解决方法：确保所有需要响应式变化的属性都在组件的 `data` 选项中初始化。
        
2.  **深度监听**
    
    * 对于深层嵌套的对象，可以通过 `watch` 的 `deep: true` 选项开启深度监听。
        

检查并修复以上问题后，一般可以解决数据修改后页面不更新的问题。如果还有其他特殊情况，请提供更详细的代码示例以便分析。

### 19.vue里面的路由切换动画

在Vue.js中，实现路由切换时的动画效果通常是通过Vue Router提供的过渡系统结合Vue自身的transition组件来完成的。以下是一个基本的实现步骤：

#### Vue 2.x 中的路由动画实现

1.  **引入CSS动画库**（如animate.css）或者自定义CSS动画类。
    
2.  在`router-view`组件外包裹一个`<transition>`或`<transition-group>`组件，并为其指定不同的进入和离开动画类名。
    
``` js
<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>

    <!-- 路由视图包裹 transition 组件 -->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
```

1.  可以根据需要为不同的路由路径设置不同的动画效果，这可以通过监听`$route`变化并在数据属性中动态更新过渡名称实现。
    
2.  使用Vue Router的钩子函数，如`beforeRouteEnter`, `beforeRouteLeave`等，在路由切换前后添加额外的逻辑处理。
    

#### Vue 3.x 中的路由动画实现

Vue 3.x 中的基本原理类似，但使用Composition API来管理状态和响应式逻辑：

1.  包裹`<router-view>`：
    
``` js
<template>
  <div id="app">
    <!-- ... 路由链接 ... -->
    
    <!-- 使用 v-bind 和 setup 内的变量控制 transition 名称 -->
    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>
```

1.  在`setup()`函数内监听`$route`变化，并设置过渡名称：
    
``` js
import { onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router';
import { ref } from 'vue';

export default {
  setup() {
    let transitionName = ref('fade');

    // 监听路由改变
    onBeforeRouteUpdate((to, from) => {
      transitionName.value = determineTransition(to.path);
    });

    onBeforeRouteLeave((to, from) => {
      transitionName.value = determineTransition(from.path);
    });

    function determineTransition(path) {
      // 根据路径返回相应的动画名称
      // ...
      return 'fade';
    }

    return {
      transitionName,
    };
  },
};
```

1.  同样需要在CSS中定义对应的动画样式。
    

#### 滚动行为与路由记录

对于页面滚动位置的保存与恢复，Vue Router提供了路由元信息滚动行为的管理，可以配置`scrollBehavior`方法来自定义滚动行为策略。

总结起来，Vue中的路由切换动画是通过结合Vue Router的路由切换机制和Vue自身提供的过渡系统来实现在不同路由之间平滑过渡的效果。

### 20.批量上传如何做？

批量上传通常是指一次性上传多个文件或数据记录到服务器的过程。在不同的场景下，批量上传的实现方式会有所不同，但以下是一个通用的步骤指南：

#### 在Web应用中的批量文件上传

##### 1. HTML界面部分

创建一个支持多选文件的input元素。

``` js
<input type="file" name="files[]" multiple>
```

这里的`multiple`属性允许用户选择多个文件。

##### 2. JavaScript处理

使用JavaScript（如原生、jQuery或Vue.js、React等框架）监听文件输入控件的`change`事件，获取所有选定的文件，并将它们打包成合适的格式以便发送到服务器。

``` js
let fileInput = document.querySelector('input[type="file"]');
fileInput.addEventListener('change', function(event) {
  let files = event.target.files;
  
  // 实现批量上传逻辑，例如：
  uploadFiles(files);
});

function uploadFiles(files) {
  let formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append('files[]', files[i]);
  }

  // 使用fetch或axios等发起POST请求
  fetch('/api/batch-upload', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.json())
  .then(data => console.log('Upload result:', data))
  .catch(error => console.error('Error uploading files:', error));
}
```

##### 3. 后端处理

后端接收POST请求并解析FormData，然后遍历每个文件进行保存或其他业务逻辑处理。

* 对于Node.js Express应用：
    
``` js
const express = require('express');
const multer = require('multer'); // Multer库用于处理multipart/form-data类型的请求

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/api/batch-upload', upload.array('files[]'), (req, res) => {
  req.files.forEach(file => {
    // 处理单个上传的文件，比如保存到硬盘、数据库操作等
  });

  res.status(200).json({ message: 'Files uploaded successfully' });
});
```

#### 数据记录批量导入

对于非文件类的数据批量上传，原理类似，只是前端收集的是JSON数组或者其他格式的数据，并通过POST请求发送给服务器。后端接收到数据后，对数组中的每一项进行处理。

#### 注意事项

* 根据需求和服务器性能限制，可能需要分批次上传或者设定大小限制。
    
* 如果涉及大量数据，应考虑异步处理和进度提示功能。
    
* 文件上传时要处理好错误情况，包括但不限于文件大小超出限制、文件类型不符合规定、网络中断等情况。
    

### 21.vue和react的区别

Vue.js 和 React 都是流行的前端JavaScript库/框架，它们都用于构建可复用和动态的用户界面。尽管两者在许多方面相似，但也存在一些重要的区别：

1.  **模板与JSX**：
    
    * Vue：使用基于HTML的模板语法（支持指令、插槽等），更接近于传统的HTML开发方式，对新手来说上手较快。
        
    * React：采用JSX语法，它是一种类似XML的JavaScript扩展，允许在JavaScript中直接编写类似HTML的结构。这使得React更加灵活，但可能需要更多时间来适应。
        
2.  **数据绑定与更新机制**：
    
    * Vue：提供双向数据绑定，通过`v-model`指令实现视图到模型或模型到视图的数据同步，并且具有响应式系统，自动追踪依赖并更新视图。
        
    * React：采用单向数据流的设计，状态管理通常通过props向下传递给子组件，而子组件内部的状态变化则通过触发事件通知父组件进行处理。虽然没有内置双向数据绑定，但借助第三方库如Redux或者Context API也能实现复杂状态管理。
        
3.  **虚拟DOM与渲染性能**：
    
    * Vue和React都有高效的虚拟DOM实现，都能够避免不必要的DOM操作以提升渲染性能。Vue 2.x提供了优化过的diff算法，而React在版本16之后引入了Fiber架构，两者的性能表现相近。
        
4.  **状态管理**：
    
    * Vue有官方推荐的Vuex作为状态管理库，提供集中式的全局状态管理解决方案，易于理解和使用。
        
    * React并没有内建的状态管理方案，开发者可以选择使用Redux、MobX或者Context API等方式进行状态管理。
        
5.  **生态与社区**：
    
    * Vue拥有丰富的生态系统和活跃的中文社区，对于国内开发者尤其友好，文档齐全且易于理解。
        
    * React由于Facebook的背景，拥有庞大的社区和丰富的第三方库，尤其是在企业级应用中有较高的市场占有率。
        
6.  **学习曲线与项目大小**：
    
    * Vue的学习曲线相对较平缓，适合快速开发小型至中大型项目。
        
    * React在大型项目的场景下有较强的灵活性，但初学者可能需要花费更多时间掌握其设计理念和周边工具链。
        

总结起来，Vue和React各有优势，选择哪个取决于具体项目需求、团队熟悉度以及个人喜好。

### 22.vue2和vue3生命周期

Vue 2.x 和 Vue 3.x 的生命周期钩子虽然有一些相似之处，但也存在一些变化。以下是两个版本中生命周期的主要阶段对比：

#### Vue 2.x 生命周期钩子：

1.  **初始化前**
    
    * `beforeCreate`：实例被创建后、数据观测和事件配置之前调用。
        
2.  **初始化**
    
    * `created`：实例已经完全创建，属性已绑定，但DOM还未生成，$el仍不可见。
        
3.  **挂载前**
    
    * `beforeMount`：在挂载开始之前调用，相关的render函数首次执行。
        
4.  **挂载**
    
    * `mounted`：组件实例已完成挂载，DOM渲染完成，此时可以通过this.$el访问到实际的DOM元素。
        
5.  **更新前**
    
    * `beforeUpdate`：数据更新时调用，发生在虚拟DOM重新渲染和打补丁之前。
        
6.  **更新**
    
    * `updated`：组件DOM已完成更新。
        
7.  **销毁前**
    
    * `beforeDestroy`：实例销毁之前调用，这时实例仍然完全可用。
        
8.  **销毁**
    
    * `destroyed`：实例已经被销毁，所有绑定解除，所有子实例也已被销毁。
        

#### Vue 3.x 生命周期钩子（Composition API）：

Vue 3.x 引入了Composition API，原有的生命周期钩子依然存在，但在Composition API下通常使用setup()函数配合onMounted(), onBeforeUnmount()等组合式API的生命周期钩子来代替：

1.  **初始化前**
    
    * 不直接对应，可通过`setup()`函数实现创建后的逻辑。
        
2.  **初始化**
    
    * `onMounted`：组件挂载完成后触发，用于执行DOM相关操作或获取数据等。
        
3.  **更新前**
    
    * `onBeforeUpdate`：组件更新前触发，可以在这里获取新的响应式依赖值。
        
4.  **更新**
    
    * `onUpdated`：组件更新后触发。
        
5.  **卸载前**
    
    * `onBeforeUnmount`：组件卸载前触发，进行清理工作。
        
6.  **卸载**
    
    * `onUnmounted`：组件卸载后触发，资源清理完毕。
        

此外，Vue 3.x 还引入了其他钩子，如`onActivated`、`onDeactivated`用于keep-alive缓存的组件激活和停用状态，以及`onErrorCaptured`用于全局错误捕获等。

注意，在Vue 3.x 中，若你仍然使用Options API，那么生命周期钩子名称与Vue 2.x保持一致，只是内部实现有所不同。

### 23.vuex和redux的工作流程

Vuex 和 Redux 都是前端状态管理库，它们的设计理念和工作流程虽有相似之处，但具体实现上有所不同。下面分别简述 Vuex 和 Redux 的工作流程：

#### Vuex（针对 Vue.js 应用）的工作流程：

1.  **初始化 Store**：
    

* 创建一个 Vuex.Store 实例，其中包含了所有应用级别的状态（state）、改变状态的方法（mutations）、计算属性（getters）以及异步操作处理逻辑（actions）。
    

1.  **State（状态）**：
    

* 所有组件共享的全局状态都存储在 Vuex Store 中，是一个单一数据源。
    

1.  **Getters（获取器）**：
    

* 类似于 Vue 的计算属性，用于从 store 的 state 中派生出新的状态，这些值会根据 state 改变而自动更新。
    

1.  **Mutations（突变）**：
    

* 是唯一更改 Vuex 状态的地方，并且必须是同步操作。组件通过 `store.commit('mutationName', payload)` 来提交 mutation，触发状态变更。
    

1.  **Actions（动作）**：
    
    * 负责处理异步逻辑，可以包含任意异步操作并调用 mutations 更新 state。组件通过 `store.dispatch('actionName', payload)` 来分发 action。
        
    
    // 在 Action 中
    ``` js
    async dispatchAction({ commit }, payload) {
      const newState = await fetchSomeData(payload);
      commit('SET_STATE', newState);
    }
    ```
    
2.  **组件交互**：
    
    * 组件可以通过 `mapState`, `mapGetters`, `mapActions`, `mapMutations` 辅助函数将 Vuex Store 与组件内部的状态和方法关联起来，使得组件可以直接访问和修改全局状态。
        

#### Redux（通用 JavaScript 库，通常与 React 结合使用）的工作流程：

1.  **创建 Store**：
    

* 使用 `createStore` 函数创建 Redux Store，传入 reducer 函数来定义状态如何根据 actions 进行更新。
    

1.  **State（状态）**：
    

* Redux Store 中也存在一个全局状态对象，所有的状态变化都在这个单一源头进行管理。
    

1.  **Reducers（还原器）**：
    
    * Reducer 是纯函数，接收当前的 state 和一个 action，返回一个新的 state。它不能执行副作用操作，只负责根据 action 更新 state。
        
    
    ``` js
    function rootReducer(state = initialState, action) {
      switch (action.type) {
        case 'ACTION_TYPE':
          return { ...state, someField: action.payload };
        default:
          return state;
      }
    }
    ```
    
2.  **Actions（行为）**：
    
    * Actions 是描述发生了什么的纯对象，它们由组件发起并通过 `store.dispatch(action)` 分发到 Store。Redux 并不直接处理异步操作，需要借助中间件如 redux-thunk 或 redux-saga 来处理异步逻辑。
        
    
    // 发起一个 Action
    ``` js
    dispatch({ type: 'ACTION_TYPE', payload: someData });
    ```
    
3.  **订阅者（Subscribers）**：
    

* 当 Store 中的 state 发生变化时，可以注册监听函数 `store.subscribe(listener)`，listener 会在每次 state 更新后被调用。
    

1.  **React-Redux 绑定**：
    
    * 为了在 React 组件中使用 Redux，通常会通过 `Provider` 组件包裹整个应用，并使用 `connect` 函数高阶组件将 Redux Store 的 state 和 dispatch 方法注入到 React 组件中。
        

总结来说，无论是 Vuex 还是 Redux，它们的核心都是提供了一个中心化的方式来管理应用程序的状态，确保状态变更可控且可预测，同时为组件间的状态共享和通信提供了便利。

### 24.组件通讯的方式都有哪些

组件通讯在Vue.js中指的是不同组件之间如何传递和共享数据，以及如何响应对方的事件或状态变化。以下是一些常见的Vue组件通讯方式：

1.  **Props（父向子）**：
    
    * 父组件可以通过props向下传递数据给子组件。子组件通过在其属性声明中接收prop来获取这些数据。
        
2.  **自定义事件（子向父）**：
    
    * 子组件可以触发一个自定义事件，通过`$emit`方法将信息传递给父组件。父组件通过监听这个事件并绑定相应的处理器来接收信息。
        
3.  **事件总线/Event Bus**：
    
    * 在大型应用中，可以创建一个全局事件总线，作为各个组件间通信的中心枢纽。组件通过发布和订阅事件的方式进行通信。
        
4.  **Vuex（全局状态管理）**：
    
    * Vuex是一个专门用于Vue应用程序的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并提供了相应的操作state的actions、mutations和getters，允许任何组件访问和修改全局状态。
        
5.  **provide / inject**：
    
    * Vue 2.x 提供了一对选项 `provide` 和 `inject` 来实现祖先组件向后代组件提供数据，无需逐层传递props。
        
6.  **依赖注入（Vue 3.x Composition API）**：
    
    * 在Vue 3.x中，通过Composition API的setup函数，可以直接使用`provide`和`inject`函数来进行依赖注入，与Vue 2.x中的用法类似，但更灵活。
        
7.  **响应式引用（Vue 3.x Ref和Reactive）**：
    
    * 在Vue 3.x中，可以创建ref或reactive对象并在多个组件之间共享，由于它们是响应式的，所以当数据发生变化时，所有引用该数据的组件都会自动更新。
        
8.  **组件嵌套通信**：
    
    * 如果组件嵌套层级较深，可以利用 `$parent`, `$children`, 或 `$refs` 访问特定的父组件、子组件实例进行直接交互，但这通常被视为一种反模式，应当尽量避免直接依赖于组件树结构进行通信。
        
9.  **路由参数和查询（对于路由组件）**：
    
    * 可以通过动态路由传参或者查询字符串来在路由切换时传递数据给目标组件。
        

总的来说，Vue鼓励单向数据流和组件间的解耦，优先推荐使用props和自定义事件进行父子组件通信，而对于复杂的应用场景，则推荐使用Vuex进行全局状态管理。

### 25.父组件使用子组件的方法

在Vue.js中，父组件调用子组件的方法主要有以下两种方式：

#### 1. 通过自定义事件（推荐）

在子组件内部 `$emit` 自定义事件，并触发相应的处理方法。父组件监听这个事件并在回调函数中进行操作。

* 子组件（ChildComponent.vue）：
    
``` js
<template>
  <!-- ... 子组件模板 ... -->
</template>

<script>
export default {
  methods: {
    childMethod() {
      // 在这里执行子组件需要提供的逻辑
      console.log('Child method called');
      this.$emit('child-method-called'); // 触发自定义事件
    },
  },
};
</script>
```

* 父组件（ParentComponent.vue）：
    
``` js
<template>
  <div>
    <!-- 调用子组件并监听其自定义事件 -->
    <child-component @child-method-called="parentCallback"></child-component>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent,
  },
  methods: {
    parentCallback() {
      // 这里是父组件接收到子组件事件后的回调处理
      this.$refs.childComponent.childMethod();
    },
  },
};
</script>
```

#### 2. 使用 `ref` 及其回调

通过给子组件添加 `ref` 属性，父组件可以直接访问子组件实例并调用其方法。

* 子组件（保持不变）；
    
* 父组件（ParentComponent.vue）：
    
``` js
<template>
  <div>
    <!-- 给子组件添加ref属性 -->
    <child-component ref="childComponent"></child-component>
    <button @click="callChildMethod">Call Child Method</button>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent,
  },
  methods: {
    callChildMethod() {
      // 直接通过$refs访问子组件实例并调用其方法
      this.$refs.childComponent.childMethod();
    },
  },
};
</script>
```

第一种方式更加符合Vue的单向数据流和响应式编程的理念，通常情况下更推荐使用这种方式实现父子组件间的通信。

### 26.父组件监听子组件的生命周期

Vue.js 中并没有直接提供父组件监听子组件生命周期钩子的方法，但可以通过子组件触发自定义事件的方式间接实现。当子组件的某个生命周期钩子执行时，触发一个自定义事件通知父组件。

例如，在子组件（ChildComponent.vue）的 `mounted` 生命周期钩子中触发一个名为 `child-mounted` 的自定义事件：

``` js
// ChildComponent.vue
export default {
  mounted() {
    this.$emit('child-mounted');
  },
};
```

然后在父组件（ParentComponent.vue）中监听这个事件：

``` js
<!-- ParentComponent.vue -->
<template>
  <div>
    <child-component @child-mounted="onChildMounted"></child-component>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent,
  },
  methods: {
    onChildMounted() {
      console.log('Child component has been mounted.');
      // 在这里执行需要在子组件挂载后完成的操作
    },
  },
};
</script>
```

这样，当子组件被挂载时，它会触发 `child-mounted` 事件，父组件通过监听这个事件并在回调函数中执行相应的逻辑来达到"监听"子组件生命周期的目的。

### 27.在生命周期更新阶段使用数据更新会发生什么

在Vue.js的生命周期更新阶段（如`beforeUpdate`和`updated`钩子）中直接修改数据，会导致以下情况：

1.  **触发额外渲染**： 当你在这些钩子函数内部直接修改状态时，Vue会检测到数据变化，并且立即重新进行虚拟DOM diff计算，进而触发组件视图的再次更新。这意味着即使你已经处于更新过程中，Vue仍然会对新的变更做出响应并继续执行整个更新流程。
    
2.  **无限循环**： 如果在`beforeUpdate`或`updated`钩子中对导致当前更新的数据再次进行了修改，可能会陷入无限循环。因为每次数据更改都会触发新的渲染周期，而新周期中的修改又会引发下一次更新，形成死循环。
    
3.  **性能影响**： 不恰当地在更新阶段修改数据可能导致不必要的额外渲染，这可能对应用性能造成负面影响，尤其是在大型、复杂的应用中，频繁地进行无意义的重渲染将消耗更多计算资源。
    
4.  **预期行为的混乱**： 在更新阶段更改数据通常违反了单向数据流的原则，使得程序逻辑变得难以理解和维护。推荐的做法是在`created`或`mounted`阶段初始化数据，在`methods`或`computed`属性中处理业务逻辑，或者通过事件驱动的方式改变数据。
    

正确的做法是避免在这些生命周期钩子中直接修改状态，而是应该考虑使用Vue提供的其他机制来处理数据变化，例如在用户交互触发的事件处理器中更新数据，或者在异步操作完成后使用`async/await`配合`Promise`在`actions`或`mutations`中更新状态（对于使用Vuex的状态管理库的情况）。

### 28.动态class和style的使用

在Vue.js中，动态绑定`class`和`style`属性是非常常见的需求，用于根据组件内部数据的变化实时改变元素的类名或样式。以下是如何使用动态`class`和`style`的方法：

#### 动态绑定Class

1.  **对象语法**： 当需要基于多个条件决定是否应用一个或多个类时，可以使用对象语法。键是类名，值是一个布尔表达式。
    
    `<div :class="{ active: isActive, error: hasError }"></div>`
    
    在这个例子中，如果 `isActive` 或 `hasError` 的值为 `true`，相应的类名会被添加到`<div>`标签上；否则，这些类将不会被应用。
    
2.  **数组语法**： 可以传递一个数组给`:class`指令，数组中的每个项都可以是字符串、对象或布尔值。
    
   `<div :class="[activeClass, errorClass, { special: isSpecial }]"></div>`
    
    这里 `activeClass` 和 `errorClass` 是变量，它们包含类名字符串；而 `{ special: isSpecial }` 是一个对象形式的类名绑定。
    
3.  **内联计算** 也可以直接在`:class`内部使用一个返回类名数组或对象的计算属性。
    
    `<div :class="getClassNames"></div>`
    
    // 在组件的`<script>`部分定义计算属性
    ``` js
    computed: {
      getClassNames() {
        return ['class1', { 'class2': this.isActive }, this.dynamicClass];
      }
    }
    ```
    

   
4. **v-bind:class简写**
   Vue允许对`v-bind:class`进行简写，即只写`:class`。

### 动态绑定Style

1. **对象语法**：
   对于`style`属性，可以使用对象语法，键是CSS属性名，值是对应的CSS属性值，该值可以是静态字符串或任何可被Vue解析的JavaScript表达式。

   `<div :style="{ color: textColor, fontSize: fontSize + 'px' }"></div>`

上述代码中，`textColor` 和 `fontSize` 分别是Vue实例的数据属性。

1.  **内联计算** 同样可以使用计算属性来动态生成style对象。
    
    `<div :style="getStyleObject"></div>`
    
    // 在组件的`<script>`部分定义计算属性
    ``` js
    computed: {
      getStyleObject() {
        return { color: this.textColor, fontSize: this.fontSize + 'px' };
      }
    }
    ```
    

注意：Vue会自动将CSS属性名转换为驼峰式写法（例如`background-color`转为`backgroundColor`），同时处理单位和字符串拼接等操作，确保生成正确的CSS样式。

通过以上方式，Vue能够帮助开发者轻松实现动态响应式的类名和样式设置，使得视图与数据保持同步。

### 29.同一个元素可以加多个事件吗

是的，在Vue.js中，同一个元素可以绑定多个事件处理器。例如，一个按钮或任何其他DOM元素可以同时绑定`click`、`mouseover`、`mouseout`等多个不同的事件，并为每个事件指定独立的方法来处理。

在Vue模板语法中，你可以用如下方式为单个元素绑定多个事件：

``` html
<element 
  @click="handleClick"
  @mouseover="handleMouseOver"
  @mouseout="handleMouseOut"
  ...>
  <!-- 元素内容 -->
</element>
```

或者使用`v-on`指令的完整语法：

``` html
<element 
  v-on:click="handleClick"
  v-on:mouseover="handleMouseOver"
  v-on:mouseout="handleMouseOut"
  ...>
  <!-- 元素内容 -->
</element>
```

当点击这个元素时，会触发`handleClick`方法；当鼠标悬浮到该元素上时，会触发`handleMouseOver`方法；而鼠标移出时，则会触发`handleMouseOut`方法。每个方法都是组件内部定义的函数，用于响应相应的事件行为。

### 30.v-model的使用

`v-model`是Vue.js中的一个指令，用于在表单输入控件（如input、textarea、select等）与Vue实例的数据属性之间创建双向绑定。当表单元素的值发生变化时，它会自动更新数据属性；反之，如果数据属性改变，表单元素的值也会随之更新。

基本用法如下：

1.  **文本输入框 (input[type="text"]、input[type="password"]等)**
    

`<input type="text" v-model="message">`

在上述代码中，当用户在输入框中输入内容时，Vue实例上的`message`属性将会实时同步该输入框的内容。

1.  **多行文本输入框 (textarea)**
    

`<textarea v-model="description"></textarea>`

在这个例子中，`description`变量将与textarea组件内部的文本保持一致。

1.  **复选框 (input[type="checkbox"]或带有`value`属性的自定义复选按钮)**
    

<!-- 单个复选框 -->
`<input type="checkbox" id="checkbox1" v-model="checked">`

<!-- 多个复选框关联到同一个数组 -->
`<input type="checkbox" v-for="item in items" :value="item.id" v-model="selectedItems">`

1.  **单选按钮 (input[type="radio"])**
    

`<input type="radio" v-model="picked" value="option1"> Option 1</input>`
`<input type="radio" v-model="picked" value="option2"> Option 2</input>`

1.  **选择列表 (select)**
    
``` js
<select v-model="selectedOption">
  <option disabled value="">请选择...</option>
  <option>Option 1</option>
  <option>Option 2</option>
  <!-- ... -->
</select>
```

1.  **自定义组件的v-model** 在自定义组件上使用`v-model`时，需要实现`.prop`和`.event`来创建自定义的双向绑定逻辑。Vue 2.x版本通常使用`props: ['value']`接收外部传递的值，并通过`this.$emit('input', newValue)`触发事件更新父组件数据；而在Vue 3.x版本中，则使用`modelValue`作为默认的prop名称，并且需要声明`emits`选项来指定`update:modelValue`事件。
    

请注意，在Vue 2.x中，`v-model`可以配合修饰符（如`.trim`、`.number`等）进行格式化处理，而在Vue 3.x中则采用`.model-value`绑定以及新的API来进行类似功能的实现。

### 31.插槽的使用

在Vue.js中，插槽（Slots）是一种内容分发机制，允许你将组件的可复用部分定义为一个占位符，并在父组件中传递具体内容。这样可以极大地提高组件的灵活性和重用性。

**基本使用：**

1.  **默认插槽（Default Slot）** 在子组件中，使用`<slot>`标签作为内容插入的位置：

```vue
<!-- 子组件模板 -->
<template>
  <div class="custom-container">
    <h2>这是标题</h2>
    <!-- 默认插槽位置 -->
    <slot></slot>
  </div>
</template>
```

父组件中引用子组件时，插入到`<slot>`标签内的内容会被渲染出来：

```vue
<!-- 父组件模板 -->
<template>
  <custom-container>
    <p>这是从父组件传递给子组件的内容。</p>
  </custom-container>
</template>

<script>
import CustomContainer from './CustomContainer.vue';

export default {
  components: {
    CustomContainer,
  },
};
</script>
```

2.  **具名插槽 (Named Slots)** 如果需要多个内容区域，可以使用具名插槽。子组件定义不同名称的`<slot>`元素：

```vue
<!-- 子组件模板 -->
<template>
  <div class="card">
    <header>
      <slot name="header">默认头部</slot>
    </header>
    <main>
      <slot>默认主体内容</slot>
    </main>
    <footer>
      <slot name="footer">默认底部</slot>
    </footer>
  </div>
</template>
```

父组件中通过`<template>`标签并指定`slot`属性来插入具名插槽的内容：

```vue
<!-- 父组件模板 -->
<template>
  <custom-card>
    <template #header>
      <h3>自定义头部</h3>
    </template>
    
    <div>
      <p>这是卡片主体内容。</p>
    </div>
    
    <template #footer>
      <p>自定义底部信息</p>
    </template>
  </custom-card>
</template>
```

3.  **作用域插槽 (Scoped Slots)** 作用域插槽允许子组件向父组件暴露数据以供渲染，通常用于实现更复杂的动态内容定制。

子组件定义带有值的插槽：

```vue
<!-- 子组件模板 -->
<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        <!-- 提供作用域插槽 -->
        <slot :item="item">{{ item.text }}</slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }],
    };
  },
};
</script>
```

父组件中接收并处理这些值：

```vue
<!-- 父组件模板 -->
<template>
  <custom-list>
    <template #default="{ item }">
      <strong>{{ item.text }}</strong>
      <em>(来自父组件自定义格式)</em>
    </template>
  </custom-list>
</template>
```

通过以上方式，Vue中的插槽机制可以帮助开发者构建更加灵活、可扩展的组件系统，满足复杂布局和内容填充的需求。

### 32.vue中处理事件的先后顺序

在Vue.js中，处理事件的执行顺序通常是：

1.  **事件修饰符**： 如果你使用了Vue提供的事件修饰符（如`.stop`、`.prevent`、`.capture`、`.self`等），这些修饰符会在原生DOM事件触发后立即执行它们的作用，比如阻止事件冒泡或默认行为。
    
2.  **自定义处理器**： 在没有事件修饰符的情况下，当原生DOM事件触发时，Vue绑定到该事件上的自定义处理器将会被执行。例如，在模板中通过`v-on:click="myMethod"`或`@click="myMethod"`绑定的事件处理函数`myMethod`。
    
3.  **内联处理器与修饰符组合**： 当事件既有修饰符又有内联处理器时，首先执行修饰符的功能，然后执行处理器函数。
    
4.  **组件间的事件传递**： 如果涉及到组件内部触发的自定义事件（通过 `$emit` 触发），则先由子组件内部触发 `$emit`，父组件监听到这个自定义事件并执行相应的处理器。
    
5.  **生命周期钩子中的事件处理**： 在某些特定的生命周期钩子中，例如`beforeUpdate`和`updated`，如果在这个阶段手动修改数据触发视图更新，那么Vue会重新进行虚拟DOM比对和渲染操作。这种情况下，事件处理与Vue的数据响应系统交织在一起，但事件处理本身并不影响Vue组件的生命周期流程。
    

需要注意的是，Vue的事件系统并不是严格意义上的"先后顺序"，而是根据事件触发机制和Vue自身的设计逻辑来运行的。对于不同类型的事件以及事件在Vue框架内的作用方式，其执行流程可能有所不同。在实际开发中，应当根据具体的业务需求和场景来合理安排事件处理函数的执行时机和逻辑。

### 33.双向数据绑定原理

Vue.js 的双向数据绑定基于两个核心技术：`数据劫持（Data Binding）`和`依赖收集（Dependency Injection）`。以下是一个简化的实现原理概述：

1.  **数据劫持** Vue通过ES5的`Object.defineProperty()`方法对数据对象的所有属性进行拦截，为每个属性添加getter和setter。当读取属性时（触发getter），Vue可以知道哪个组件依赖于这个属性；当修改属性时（触发setter），Vue能够通知所有依赖该属性的组件更新视图。

```js
// 简化示例
function observe(data) {
  Object.keys(data).forEach(key => {
    defineReactive(data, key, data[key]);
  });
}

function defineReactive(obj, key, val) {
  let dep = new Dep();
  Object.defineProperty(obj, key, {
    get() {
      Dep.target && dep.addSub(Dep.target); // 依赖收集
      return val;
    },
    set(newVal) {
      if (newVal !== val) {
        val = newVal;
        dep.notify(); // 触发更新
      }
    }
  });
}
```

2.  **依赖收集** 在渲染过程中，Vue会创建一个全局的Dep（依赖收集器）实例，并在访问数据属性时将当前的Watcher（观察者）实例注册到这个属性对应的Dep上。这样就建立了数据与视图之间的依赖关系。

```js
class Watcher {
  constructor(vm, expOrFn, cb) {
    this.cb = cb;
    this.vm = vm;
    this.getter = typeof expOrFn === 'function' ? expOrFn : this.parseExpression(expOrFn);
    this.value = this.get();
    Dep.target = this; // 将当前watcher设置为Dep的target
    this.getter.call(this.vm, this.vm);
    Dep.target = null; // 清除target
  }
}
```

3.  **更新视图** 当数据发生变化并触发setter时，setter会调用Dep实例的notify方法通知所有订阅了该数据变化的Watcher。Watcher接收到通知后，会重新执行getter获取新值，并对比前后值的变化，如果发现有变化则触发视图更新。

通过这种机制，Vue实现了视图与模型之间自动、高效的同步。每次数据变化都会自动反映到视图上，同时视图上的交互也会实时反馈到数据模型中，这就是Vue的双向数据绑定原理。

### 34.vue2和vue3的diff的区别

Vue 2 和 Vue 3 在虚拟DOM（Virtual DOM）的差异检测算法（Diffing Algorithm）方面存在显著区别，主要体现在以下几个方面：

#### Vue 2 的 Diff 算法

1.  **双向遍历**：Vue 2 使用了基于双端比较的优化diff算法，它会从两端开始向中间进行比较，这样可以更快地找到节点插入或删除的位置。对于列表更新时的移动操作，Vue 2 需要借助`key`属性来辅助判断是否为同一元素，否则可能会导致不必要的元素替换。
    
2.  **全量对比**：Vue 2 对于组件树的更新采用的是递归的全量对比策略，即每次都会对整个子树进行遍历和比较。
    
3.  **静态标记与动态节点区分不足**：Vue 2 中没有很好地将静态节点与动态节点区分开，这在一定程度上增加了不必要的渲染开销。
    

#### Vue 3 的 Diff 算法改进

1.  **单向遍历 + 动态规划**：Vue 3 引入了新的编译器和优化后的 `patch` 函数，使用了一种称为"最长递增子序列"（Longest Increasing Subsequence, LIS）的算法，这种算法仅需从头到尾单向遍历新旧节点即可完成更新，大大提高了效率。
    
2.  **静态提升**：Vue 3 提出了静态树提升（Static Tree Hoisting）的概念，它可以识别出那些在整个组件生命周期内都不会变化的静态内容，并在编译阶段就将其提升到外层，避免运行时重复比对这些静态节点。
    
3.  **按需更新**：Vue 3 能够更好地跟踪和处理节点的移动、插入和删除等操作，即使在没有提供`key`的情况下也能更高效地处理列表更新。同时，Vue 3 只会对动态节点进行重新渲染，而静态节点在初次渲染后就不会再参与diff过程。
    
4.  **Fragment支持**：Vue 3 支持多根节点，允许在一个组件返回多个顶级元素，这也意味着其diff算法需要能够处理这种情况下的节点变化。
    

通过以上改进，Vue 3 的Diff算法在性能上有较大提升，尤其是在大型应用和复杂组件树中表现更加优秀。