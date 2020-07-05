<template>
  <div class="home">
    <h1 class="text-align-center">Vue-tree</h1>
    <vue-tree></vue-tree>
  </div>
</template>

<script>
// @ is an alias to /src
import VueTree from '@/components/VueTree.vue'

export default {
  name: 'Home',
  components: {
    VueTree
  }
}
</script>

<style lang="scss" scoped>
.text-align-center {
  text-align: center;
}
</style>
