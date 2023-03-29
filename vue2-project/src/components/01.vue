<template>
  <div>
    <h1>生命周期</h1>
    <div id="root">生命周期dom渲染</div>
    <div id="newname">{{ name }}</div>
    <el-button type="primary" @click="newData">更新数据</el-button>
  </div>
</template>
<script>
export default {
  name: 'lifeCycle',
  data() {
    return {
      name: '实例创建',
    }
  },
  methods: {
    newData() {
      this.name = '更新数据'
    },
  },
  beforeCreate() {
    console.log('beforeCreate----实例生成之前执行', this.name)
  },
  created() {
    console.log('created----实例生成之后', this.name)
  },
  beforeMount() {
    console.log(
      'beforeMount----组件内容被渲染到页面之前',
      document.getElementById('root')
    )
  },
  mounted() {
    console.log(
      'monted----组件内容被渲染到页面之后',
      document.getElementById('root')
    )
  },
  beforeUpdate() {
    console.log('beforeUpdate----data数据变化时执行')
  },
  updated() {
    console.log('updated----data数据变化,同时页面完成更新后')
  },
}
</script>
<style scoped></style>
