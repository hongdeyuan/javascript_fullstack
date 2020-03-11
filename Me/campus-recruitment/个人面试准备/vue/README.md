  # vue 组件传值

  ## 1. Props :父向子组件传值

    - 在父组件的 子组件引入标签上动态绑定 需要传递的 “值”
    - 在子组件中通过 props 来获取 父组件传过来的值

    ```js
    // 1.父组件
    <template>
    <div class="container">
      <child :send="myMsg"></child>
    </div>
    </template>
    <script>
    import child from './child'
    export default {
      data () {
        return {
          myMsg: 'This is father msg'
        }
      },
      components: {
        child
      }
    }
    </script>

    // 2.子组件
    <template>
    <div class="child">
      <h2>子组件</h2>
      <p>The msg from father is: </p>
      <strong>{{send}}</strong>
      <p class="hr"></p>
      <p>The changeMsg from child is:</p>
      <strong>{{changeMsg}}</strong>
    </div>
    </template>
    <script>
    export default {
      props: ['send'],
      computed: {
        changeMsg () {
          return this.send.toUpperCase()
        }
      }
    }
    </script>
    ```

  ## 2. $emit/事件结合： 子向父组件传值

    - 子组件通过 this.$emit 发布一个方法 并携带需要传递的 “值” 
    - 父组件通过在子组件的标签上 v-on 事件绑定 子组件传出来的方法，获取其 传递出来的值

    ```js
    // 1.子组件
    <template>
    <div class="child">
      <h2>子组件</h2>
      <p>子组件要发送的消息: </p>
      <strong>{{msg}}</strong>
      <button @click="send">send</button>
    </div>
    </template>
    <script>
    export default {
      data () {
        return {
          msg: '我是子组件中的数据'
        }
      },
      methods: {
        send () {
          this.$emit('msgChild', this.msg)
        }
      }
    }
    </script>

    // 2.父组件
    <template>
      <div class="container">
        <h1>父组件</h1>
        <p>从子组件获取的消息:
          <span>{{Msg}}</span>
        </p>

        <child v-on:msgChild="getMsg"></child>
      </div>
    </template>
    <script>
    import child from './child'
    export default {
      data () {
        return {
          Msg: ''
        }
      },
      components: {
        child
      },
      methods: {
        getMsg (e) {
          this.Msg = e
        }
      }
    }
    </script>
    ``` 

  ## 3. $emit/$on: 非父子组件传值(bus)

    - 通过新建一个 bus.js 文件，使用this.$emit来进行非父子组件传值
    - 在 传值方 引入bus.js,并通过this.$emit 发布一个方法并携带需要传递的值
    - 在“值”的接受方，引入bus.js,通过this.$on 来接受传递过来的值

    ```js
    // 1. 传值方
    <template>
      <div class="child">
        <h3>兄弟组件2(传递状态给兄弟组件1)</h3>
        <div>
          <button @click="sendMsg">send message</button>
        </div>
      </div>
    </template>

    <script>
    import Bus from '@/assets/bus'
    export default {
      data () {
          return {
            title: '我是child2的数据'
          }
        },
      methods: {
        sendMsg () {
          Bus.$emit('test', this.title)
        }
      }
    }
    </script>


    // 2. 接收方
    <template>
      <div class="child">
        <h3>兄弟组件1(接收兄弟组件2的消息)</h3>
        <p>child2中通过Bus发过来的消息2: {{msg}}</p>
      </div>
    </template>

    <script>
    import Bus from '@/assets/bus'
    export default {
      data () {
        return {
          msg: ''
        }
      },
      methods: {},
      mounted () {
        Bus.$on('test', (data) => {
          this.msg = data
        })
      }
    }
    </script>

    ```

  ## 4. vuex

    - 使用state对象 来存储你需要传递的变量
    - 在你需要传递的 组件中引入 vuex 并解构出 mapGetters 来获取getters中抛出的方法 来获取传递的值
    例如： 
    
    ```js
    // 1. vuex 状态管理容器js文件
    const state = {
      searchHistoey: ['许嵩', '胡歌']
    }

    const getters = {
      searchHistoey: state => state.searchHistoey
    }


    // 2. 组件组件接受值
    import { mapGetters } from 'vuex'


    computed: {
      ...mapGetters([
        'searchHistoey'
      ])
    }


    // <!-- 搜索历史列表 -->
    <v-search-list :searches="searchHistoey"></v-search-list>

    ```

  ## 5. provide/inject： 

    - 值传递方：通过provider来提供变量；值接受方：通过inject来注入变量
    - 注意：provide 和 inject 绑定并不是可响应的。但如果你传入了一个可监听的对象，那么其对象的属性是可响应的。因此A.vue 的 name 如果改变了，B.vue 的 this.name 是不会改变的，仍然是“dhyuan”

    ```js
    // A.vue
    export default {
      provide: {
        name: 'dhyuan'
      }
    }


    // B.vue
    export default {
      inject: ['name'],
      mounted () {
        console.log(this.name);  // dhyuan
      }
    }
    ```

  ## 6. $attrs/$listeners

    - 多级组件嵌套需要传递数据时,而不涉及 中间数据处理时使用$attrs/$listeners

    ```js
    // index.vue
    <template>
      <div>
        <h2>浪里行舟</h2>
        <child-1
          :name="name"
          :age="age"
          :sex="sex"
        ></child-1>
      </div>
    </template>
    <script>
    const child-1 = () => import("./child-1.vue");
    export default {
      components: { child-1 },
      data() {
        return {
          name: "dhyuan",
          age: 18,
          sex: "boy"
        };
      }
    };
    </script>

    // 2. child-1.vue
    <template class="border">
      <div>
        <p>name: {{ name }}</p>
        <p>child-1的$attrs: {{ $attrs }}</p>
        <child-2 v-bind="$attrs"></child-2>
      </div>
    </template>
    <script>
      const child-2 = () => import("./child-2.vue");
      export default {
        components: {
          child-2
        },
        inheritAttrs: false, // 可以关闭自动挂载到组件根元素上的没有在props声明的属性
        props: {
          name: String // foo作为props属性绑定
        },
        created() {
          console.log(this.$attrs); // { "name": "dhyuan", "age": 18, "sex": "boy"}
        }
      };
    </script>

    // child-2.vue
    <template>
      <div class="border">
        <p>name: {{ name }}</p>
        <p>child-2: {{ $attrs }}</p>
      </div>
    </template>
    <script>
    export default {
      inheritAttrs: false,
      props: {
        name: String
      },
      created() {
        console.log(this.$attrs); //  { "name": "dhyuan", "age": 18, "sex": "boy"}
      }
    };
    </script>

    ```

# 总结
  - 常见使用场景可以分为三类：

  - 父子通信：
    父向子传递数据是通过 props，子向父是通过 events（$emit）；provide / inject API；$attrs/$listeners
  - 兄弟通信：
      Bus；Vuex
  - 跨级通信：
      Bus；Vuex；provide / inject API、$attrs/$listeners