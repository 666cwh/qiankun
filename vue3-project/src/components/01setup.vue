<template>
  <h1>setup</h1>
  <div>{{ name }}</div>
  <div>
    1.setup是在实例创建之前执行所以无法使用this
    <br />
    2.vue2可以使用setup中的属性(通过this.$options.setup()使用)
  </div>
</template>
<script>
export default {
  mounted() {
    this.test()
  },
  methods: {
    test() {
      this.name = 'cheng'
      console.log(
        this.name,
        this.$options.setup(),
        ' Cannot read properties of undefined'
      )
    },
  },
  setup(props, context) {
    // this.test()
    console.log(props, context, this, 'props, context')
    return {
      name: 'dell',
    }
  },
}
</script>
<style scoped></style>
