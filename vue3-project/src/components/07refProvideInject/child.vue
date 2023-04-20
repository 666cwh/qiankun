<template>
  <div>123{{ name }}</div>
</template>
<script>
import { inject } from 'vue'
export default {
  setup() {
    const name = inject('name', 'hello')
    return {
      name,
    }
  },
}
</script>
