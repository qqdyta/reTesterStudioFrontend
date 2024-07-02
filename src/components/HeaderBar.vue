<script>
export default {
  name: 'HeaderBar',
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
    }
  }
}
</script>

<template>
<el-header class="main">
hello
</el-header>

</template>

<style scoped>
.main {
  height: 60px;
}
</style>