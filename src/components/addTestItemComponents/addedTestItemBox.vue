<script>
import addTestItemCard from "@/components/addTestItemComponents/addTestItemCard.vue"
export default {
  name: 'addedNewTestItemBox',
  components: {
    addTestItemCard
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
    }
  },
  created() {
    this.$bus.$on('add-new-test-item', (type) => {
      console.log(type)
    })
  }
}
</script>

<template>
  <div class="box">
    <div class="title">
      已添加测试项目
    </div>
    <div class="main">
      <addTestItemCard :setType="'voltage'"></addTestItemCard>
      <addTestItemCard :setType="'current'"></addTestItemCard>
      <addTestItemCard :setType="'serialPort'"></addTestItemCard>
      <addTestItemCard :setType="'ethernet'"></addTestItemCard>
      <addTestItemCard :setType="'oscilloscope'"></addTestItemCard>
      <addTestItemCard :setType="'wait'"></addTestItemCard>
    </div>
  </div>
</template>

<style scoped>
.box {
  margin: 15px;
  width: 300px;
  height: 88vh;
  background-color: #f1f2f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: inset 4px 4px 8px 4px #d9d9d9, inset -4px -4px 8px 4px #ffffff, -4px -4px 4px 4px #f3f3f3;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  height: 6vh;
}
</style>