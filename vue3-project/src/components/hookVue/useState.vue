<template>
    <div>
        <h1>01.useState------ref/reactive</h1>
        <button @click="() => {
            like++
        }
            ">
            {{ like }}
        </button>
        <button @click="() => {
            obj.name = obj.name + obj.age
        }
            ">
            {{ obj.name }}
        </button>
        <h1>useEffect----watchEffect</h1>
        <button @click="() => { like++ }">useEffect----watchEffect{{ like }}----不清除副作用</button>
        <button id="myBtn">useEffect----watchEffect----清除副作用</button>
        <span>x:{{ positions.x }},y:{{ positions.y }}</span>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, watchEffect } from 'vue'
// useStarte----ref/reactive
let like = ref(1)
let obj = reactive({ name: 'zhangsan', age: '12' })

//useEffect------watchEffect----不清除副作用
watchEffect(() => {
    document.title = `${like.value}`
})
//useEffect------watchEffect----清除副作用
let positions = reactive({ x: 0, y: 0 })
watchEffect(() => {
    const updateMouse = (e: MouseEvent) => {
        console.log(e)
        positions.x = e.clientX
        positions.y = e.clientY
    }

    document.getElementById('myBtn')?.addEventListener('click', updateMouse)
}, {flush: 'post'})
</script>
