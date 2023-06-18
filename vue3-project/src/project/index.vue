<template>
    <div class="vue_box">
        <ButtonEle></ButtonEle>
    </div>
</template>
<script>
import ButtonEle from './src/Button/button.vue'
export default {
    components: {
        ButtonEle
    },
    setup () { },
}
</script>
<style lang="scss" scoped>
.vue_box {
    width: 100%;
    height: calc(100vh);
}
</style>
