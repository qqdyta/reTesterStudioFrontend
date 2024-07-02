<script>
import addTestItemCard from "@/components/addTestItemComponents/addTestItemCard.vue"
export default {
  name: 'addNewTestItemBox',
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
  }
}
</script>

<template>
<div class="box">
  <div class="title">
    添加新测试项目
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
  box-shadow: inset 10px 10px 20px 10px #ffffff, -2px -2px 1px 1px #ffffff, 4px 4px 6px 4px #d9d9d9;

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