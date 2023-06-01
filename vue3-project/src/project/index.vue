<template>
  <div class="vue_box">
    <div class="nav_box">
      <span>首页</span>
      <span>购物车</span>
      <span>订单</span>
      <span>我的</span>
    </div>
    <div class="flex_box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
}
</script>
<style lang="scss" scoped>
.vue_box {
  width: 100%;
  .nav_box {
    height: 0.49rem;
    width: 100%;
    font-size: 0.1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #aaa;
  }
}
.flex_box {
  height: 400px;
  width: 400px;
  background: red;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  div {
    height: 100px;
    width: 100px;
    background: gold;
    border: 1px solid red;
  }
}
</style>
