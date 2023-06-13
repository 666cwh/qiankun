<script setup>
import { ref } from 'vue'
import { start } from 'qiankun'
//启动微应用
start()
//导航默认选中
const activeIndex = ref('2')
// 切换导航
const handleSelect = (key, keyPath) => {
  let obj = {
    1: '/vue-project',
    2: '/vue2-project',
    3: '/react-project',
    4: '/react-ts-project',
  }
  //路由跳转
  history.pushState(null, obj[key], obj[key])
}
</script>

<template>
  <div>
    <!-- 导航 -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="2">vue2</el-menu-item>
      <el-menu-item index="1">vue3-vite</el-menu-item>
      <el-menu-item index="4">react-ts</el-menu-item>
      <el-menu-item index="3">react</el-menu-item>
    </el-menu>
    <!-- vue3-vite子应用 -->
    <div id="vueProject"></div>
    <!-- vue2 -->
    <div id="vue2Project"></div>
    <!-- react -->
    <div id="reactProject"></div>
    <!-- react-ts -->
    <div id="reacttsProject"></div>
  </div>
</template>

<style scoped></style>
