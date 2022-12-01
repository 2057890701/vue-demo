<template>
  <div id="app">
    <input type="text" @keyup.enter="enterFn" />
    <input type="text" @keyup.esc="esc" />

    <div>演示v-if</div>
    <p class="a" v-if="age >= 18">成年了</p>
    <div class="b" v-else>还要多吃饭</div>
    <button @click="age++">+1</button>

    <div>演示v-show</div>
    <p v-show="flag">A</p>
    <div v-show="!flag">B</div>
    <button @click="flag = !flag">切换</button>

    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>

    <ul>
      <li v-for="(item, index) in list1" @click="handler(index)">
        {{ item.id }}
      </li>
    </ul>

    <ul>
      <li v-for="it in 10">{{ it }}</li>
    </ul>

    <ul>
      <li v-for="(item, k) in person" :key="k">{{k}} - {{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    enterFn() {
      console.log("enter")
    },
    esc() {
      console.log("esc")
    },
    handler(index) {
      console.log(`你点击的索引号${index}`)
    }
  },
  data() {
    return {
      flag: true,
      age: 16,
      list: [1, 2, 3, 4],
      list1: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      person: {
        name: "John",
        age: 16,
        gender: "nan"
      }
    }
  }
}
</script>

<style scoped></style>
