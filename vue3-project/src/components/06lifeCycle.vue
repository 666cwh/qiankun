<template>
  <div>
    <h1>06生命周期函数</h1>
    
    // beforMount => onBeforeMount
    <br />
    // mounted => onMounted
    <br />
    // beforUpdate => onBeforeUpdate
    <br />
    // updated=>onUpdated
    <br />
    // beforeUnmount => onBeforeUnmount<br />
    // unmounted=>onUnmounted<br />
    // 新生命周期onRenderTracked:响应式依赖被重新渲染时<br />
    // 新生命周期onRenderTriggered:每次触发页面重新渲染时执行<br />
    <button @click="onbeforupdateBtn">{{ onbeforUpdateval }}</button>
  </div>
</template>
<script>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onUnmounted,
  onRenderTracked,
  onRenderTriggered,
} from 'vue'
export default {
  beforeCreate() {
    console.log('vue2生命周期----02----beforeCreate')
  },
  created() {
    console.log('vue2生命周期-----03----created')
  },
  beforeMount() {
    console.log('vue2生命周期----05----beforeMount')
  },
  mounted() {
    console.log('vue2生命周期-----07-----mounted')
  },
  beforeUpdate() {
    console.log('vue2生命周期-----09-----beforeUpdate')
    },
  updated() {
    console.log('vue2生命周期-----11-----updated')
  },
  setup() {
    // beforMount => onBeforeMount
    // mounted => onMounted
    // beforUpdate => onBeforeUpdate
    // updated=>onUpdated
    // beforeUnmount => onBeforeUnmount
    // unmounted=>onUnmounted
    // 新生命周期onRenderTracked:响应式依赖被重新渲染时
    // 新生命周期onRenderTriggered:每次触发页面重新渲染时执行

    const onbeforUpdateval = ref('onBeforupdate')

    console.log('vue3生命周期----01-----setup')
    onBeforeMount(() => {
      console.log('vue3生命周期------04-----onBeforeMount')
    })
    onRenderTracked((event) => {
      console.log('vue3新生命周期-----onRenderTracked', event)
    })
    onRenderTriggered((event) => {
      console.log('vue3新生命周期-----onRenderTriggered', event)
    })
    onMounted(() => {
      console.log('vue3生命周期------06-----onMounted')
    })
    onBeforeUpdate(() => {
      console.log('vue3生命周期----08----onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('vue3生命周期----10----onUpdated')
    })
    onUnmounted(() => {
      console.log('vue3生命周期------onUnmounted')
    })
    const onbeforupdateBtn = () => {
      onbeforUpdateval.value = 'btnonBeforupdate'
    }
    return { onbeforUpdateval, onbeforupdateBtn }
  },
}
</script>
