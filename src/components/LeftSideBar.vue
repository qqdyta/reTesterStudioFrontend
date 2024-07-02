<script>
export default {
  name: 'LeftSideBar',
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
  <div class="main"></div>
</template>

<style scoped>
.main {
  width: 200px;
  background-color: #ff6767;

}
</style>