<script setup>
import { ref } from 'vue'
//导航默认选中
const activeIndex = ref('1')
// 切换导航
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath, activeIndex)
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
      <el-menu-item index="1">vue-vite</el-menu-item>
      <el-menu-item index="2">vue2</el-menu-item>
    </el-menu>
    <!-- vue-vite子应用 -->
    <div id="vueProject"></div>
    <div id="vue2Project"></div>
  </div>
</template>

<style scoped></style>
