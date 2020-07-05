<template>
  <div class="home">
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
