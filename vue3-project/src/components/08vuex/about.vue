<template>
    <div>About----{{ myName }}</div>
    <div>{{ name }}</div>
    <button @click="aboutBtn">about</button>
</template>
<script>
import { useStore } from 'vuex'
import { toRef } from 'vue';
export default ({
    computed: {
        myName () {
            return this.$store.state.name
        }
    },
    setup () {
        const store  = useStore()
        const { name } = toRef(store.state)
        const aboutBtn = () => {
            store.commit('changes','about')
        }
        return {
            name,
            aboutBtn
        }
    },
})
</script>
