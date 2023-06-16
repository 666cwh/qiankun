<script setup lang="ts">
import Project from './project/index.vue'
import setUp from './components/01setup.vue'
import refReactive from './components/02ref-reactive.vue'
import context from './components/03context/03context.vue'
import todoList from './components/04todolist.vue'
import Computed from './components/05computed.vue'
import lifecycle from './components/06lifeCycle.vue'
import Ref from './components/07refProvideInject/index.vue'
import Vuexleft from './components/08vuex/index.vue'
import Promise from './components/09promise/index.vue'
import designMode from './components/010designMode.vue'
import arithmetic from './components/011arithmetic.vue'
import userState from './components/hookVue/useState.vue'
</script>

<template>
    <div>
        <Project></Project>
        <userState></userState>
        <hr />
        <setUp></setUp>
        <refReactive></refReactive>
        <context></context>
        <todoList></todoList>
        <Computed></Computed>
        <lifecycle></lifecycle>
        <Ref></Ref>
        <hr />
        <Vuexleft></Vuexleft>
        <Promise></Promise>
        <designMode></designMode>
        <arithmetic></arithmetic>
    </div>
</template>

<style scoped>
hr {
    margin: 50px 0;
}
</style>
