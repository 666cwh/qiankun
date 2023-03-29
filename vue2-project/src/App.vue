<template>
  <div>
    <lifeCycle></lifeCycle>
    <setUp></setUp>
  </div>
</template>

<script>
import lifeCycle from './components/01.vue'
import setUp from './components/01setup.vue'
export default {
  name: 'App',
    components: {
        lifeCycle,
        setUp
  }
}
</script>

<style>
</style>
