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
  watch: {
    index(newIndex, oldIndex) {
      this.updateGlobalTestProcess(oldIndex, newIndex)
    }
  },
  methods: {
    updateGlobalTestProcess(oldIndex, newIndex) {
      //console.log('the old index is ', oldIndex)
      //console.log('the new index is ', newIndex)
      if (oldIndex !== null && newIndex !== null) {
        this.$testProcess[newIndex] = this.$testProcess[oldIndex]
        delete this.$testProcess[oldIndex]
        //console.log("this.$testProcess is ", this.$testProcess)
      }else if (oldIndex !== null && newIndex === null) {
        delete this.$testProcess[oldIndex]
        //console.log("this.$testProcess is ", this.$testProcess)
      }else if (newIndex !== null && oldIndex === null) {
        this.$testProcess[newIndex] = {'type': this.setType}
        //console.log("this.$testProcess is ", this.$testProcess)
      }
    }
  },
  created() {
    this.updateGlobalTestProcess(null, this.index)
  },
  beforeUnmount() {
    this.updateGlobalTestProcess(this.index, null)
  },
  emits: ['click']
}
</script>

<template>
  <div class="main" :style="{ backgroundColor: setColor}" @click="$emit('click')"><div hidden id="index"></div>{{ setTitle }}</div>
</template>
<style scoped>
.main {
  width: 160px;
  height: 60px;

  box-shadow: 3px 3px 3px 3px #d9d9d9;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
}
</style>
