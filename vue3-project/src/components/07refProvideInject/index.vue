<template>
  <div>
    <h1>07.ref/provide/inject</h1>
    <div ref="hello">ref</div>
    <Child></Child>
  </div>
</template>
<script>
import Child from './child.vue'
import { provide, ref, onMounted } from 'vue'
export default {
  components: {
    Child,
  },
  setup() {
    provide('name', 'cheng')
    const hello = ref(null)
    onMounted(() => {
      console.log(hello.value)
    })
    return { hello }
  },
}
</script>
