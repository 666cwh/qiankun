<script setup>
import setUp from './components/01setup.vue'
import refReactive from './components/02ref-reactive.vue'
import context from './components/03context/03context.vue'
import todoList from './components/04todolist.vue'
import Computed from './components/05computed.vue'
import lifecycle from './components/06lifeCycle.vue'
</script>

<template>
  <div>
    <setUp></setUp>
    <refReactive></refReactive>
    <context></context>
    <todoList></todoList>
    <Computed></Computed>
    <lifecycle></lifecycle>
  </div>
</template>

<style scoped></style>
