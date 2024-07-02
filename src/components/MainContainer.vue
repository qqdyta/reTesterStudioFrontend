<script>
export default {
  name: 'MainContainer',
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
<el-main class="main">
hello

</el-main>
</template>

<style scoped>
.main {
  height: 100%;

}
</style>