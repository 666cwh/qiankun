<template>
    <div>
        <h1>08vuex</h1>
        <h3>01router-link</h3>
        <router-link to="/">list</router-link>
        <br />
        <router-link to="/about">about</router-link>
        <div @click="routerBtn">this.$router/this.$route</div>
        <router-view></router-view>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const routerBtn = () => {
    console.log(router, route)
    router.push('/about')
}
</script>
<style></style>
