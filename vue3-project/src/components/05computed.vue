<template>
  <div>
    <h1>05.computed/watch/watchEffect</h1>
    <button @click="computedBtn">{{ computedVal }}</button>
    <div>{{ computedValue }}</div>
    <br />
    watch: 1.具备惰性 2.参数可以拿到原始的值,和当前值
    3.可以侦听多个数据变化,用一个侦听器承载
    <br />
    <input v-model="watchName.name" />
    <input v-model="watchName.age" />
    <br />
    watchEffect: 1,立即执行,没有惰性
    2.不需要传递侦听的内容,自动感知代码依赖,不需要传递很多参数,只要传递一个回调函数
    3.不能获取之前数据的值
    <br />
    <input v-model="namewatchEffect.name" />
  </div>
</template>
<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'
export default {
  setup() {
    // computed
    let computedVal = ref(0)
    let computedBtn = () => {
      computedVal.value += 1
    }
    let computedValue = computed(() => {
      return computedVal.value + 2
    })

    //watch
    const watchName = reactive({ name: 'cheng', age: '123' })
    watch(
      [() => watchName.name, () => watchName.age],
      ([newval, newage], [oldval, oldage]) => {
        console.log('watch监听', newval, oldval)
        console.log('watch监听', newage, oldage)
      },
      {
        immediate: true,
      }
    )

    // watchEffect
    const namewatchEffect = reactive({ name: 'cheng' })
    const stop = watchEffect(() => {
      console.log('watchEffect', namewatchEffect.name)
      //5秒后停止侦听
    //   setTimeout(() => {
    //     stop()
    //   }, 5000)
    })
    return {
      computedVal,
      computedBtn,
      computedValue,

      watchName,

      namewatchEffect,
    }
  },
}
</script>
