<template>
    <div>list---{{ myName }}</div>
    <div>{{ name }}</div>
    <button @click="nameBtn">list</button>
</template>
<script>
import { toRefs } from 'vue'
import { useStore } from 'vuex'
export default {
    computed: {
        myName () {
            return this.$store.state.name
        },
    },
    methods: {
        nameBtn () {
            // this.$store.state.name = 123
            // this.$store.dispatch('change')
            this.$store.commit('changes', 'list')
        },
    },
    setup () {
        const store = useStore()
        const { name } = toRefs(store.state)
        return { name }
    },
}
</script>
