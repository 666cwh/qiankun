<template>
  <div>
    <h1>context</h1>
    <Child app="app" @change="change">slots:插槽</Child>
  </div>
</template>
<script>
import Child from './child.vue'
import { reactive, toRefs } from 'vue'
export default {
  components: { Child },
  setup(props, context) {
    const change = () => {
      alert('父组件')
    }
    return { change }
  },
}
</script>
<style scoped></style>
