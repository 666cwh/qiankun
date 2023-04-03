<template></template>
<script>
import { ref, h } from 'vue'
export default {
  setup(props, context) {
    const { attrs, slots, emit } = context
    console.log(attrs, slots.default(), props, 'contextchild')
    const attrsData = ref('context.attrs')
    setTimeout(() => {
      attrsData.value = `context.attrs:None-props属性,父组件传递给子组件参数,子组件未接受`
    }, 3000)
    const emitBtn = () => {
      emit('change')
    }
    // 虚拟dom
    return () =>
      h('div', { class: 'box' }, [
        h('div', { class: 'attrs' }, attrsData.value),
        h('div', { class: 'slots' }, slots.default()),
        h('button', { onclick: emitBtn }, 'emit'),
      ])
  },
}
</script>
<style scoped></style>
