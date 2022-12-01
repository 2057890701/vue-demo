<!--
<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <h2>{{ obj.name }}</h2>
    <h3>{{ obj.age >= 18 ? "已成年" : "为成年" }}</h3>
    <h4>{{ arr[2] }}</h4>
    <a v-bind:href="url">到百度</a>
    <img :src="imgUrl" />
    <img src="@/assets/logo.png" />
    <div class="logo">1111</div>
  </div>
</template>
-->

<!-- <script>

  const vm = {
    data: function () {
      return {
        msg: "Hello Vue",
        arr: [1, 2, 3],
        obj: {
          name: "Vue",
          age: 18,
        },
        url: "http://www.baidu.com/",
        imgUrl: "//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
      };
    },

  }
  console.log(vm)

export default vm
</script> -->

<!-- <style scoped>
.logo {
  height: 300px;
  background: url(//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png) no-repeat;
  }
</style> -->

<template>
  <div>
    <!-- vue指令:   v-on事件绑定 -->
    <h2>你要买商品的数量: {{ count }}</h2>
    <button v-on:click="count = count + 1">增加1</button><br>
    <button v-on:click="addFn">增加1个</button><br>
    <button v-on:click="addCountFn(5, $event)">一次加5件</button><br>

    <button @click="subFn">减少</button><br />
    <div @click="father">
     <!-- @click.stop 阻止事件冒泡 -->
      <button @click.stop="son">儿子按钮</button>
    </div><br>
     <!-- @click.once once修饰符修饰的事件：本质就是在事件处理函数内部，执行了removeEventListener 
     只执行一次的事件, 执行一次后通过 removeEventListener() 删除了事件 -->
    <button @click.once="count += 10">这是仅支持一次的按钮</button>
    <a @click.prevent="one" href="http://www.baidu.com">到百度</a> <br />
    <a @click="two(10, $event)" href="http://www.baidu.com">到百度</a>
  </div>
</template>

<script>
export default {
  // ...其他省略
  data() {
    return { count: 1 }
  },
  methods: {
    addFn() {
      this.count++
    },
    addCountFn(num, e) {
      console.log(e)
      this.count += num
    },
    subFn() {
      this.count--
    },
    one() {
      this.count++
    },
    two(num, e) {
      e.preventDefault()
    },
    father() { 
      console.log('父元素触发了')
    },
    son() {
      console.log('子元素出发了')
    }
  }
}
</script>

 <style scoped></style> -->



