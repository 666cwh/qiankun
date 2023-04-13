<template>
  <div>
    <h1>todolist</h1>
    <input :value="inputVal" @input="inputChange" />
    <button @click="inputBtn">提交</button>
    <div v-for="(item, index) in listVal" :key="index">{{ item }}</div>
  </div>
</template>
<script>
import { ref, reactive } from 'vue'
export default {
  setup() {
    const inputVal = ref('')
    const inputChange = (e) => {
      inputVal.value = e.target.value
    }
    const listVal = reactive([])
    const inputBtn = () => {
      listVal.push(inputVal.value)
    }
    return { inputVal, inputChange, listVal, inputBtn }
  },
}
</script>
<style scoped></style>
