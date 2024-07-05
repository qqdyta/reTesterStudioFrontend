<script>
export default {
  name: 'addTestItemCard',
  data() {
    return {
      show: false
    }
  },
  props: {
    setType: {
      type: String,
      default: 'voltage'
    },
    hasbeenAdded: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    setColor() {
      return this.$testItemDict[this.setType]['color']
    },
    setTitle() {
      return this.$testItemDict[this.setType]['title']
    }
  },
  emits: ['click']
}
</script>

<template>
<div class="main" :style="{ backgroundColor: setColor}" @click="$emit('click')">{{ setTitle }}</div>
</template>
<style scoped>
.main {
  width: 220px;
  height: 60px;
  margin: 15px;
  box-shadow: 3px 3px 3px 3px #d9d9d9;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
}
</style>