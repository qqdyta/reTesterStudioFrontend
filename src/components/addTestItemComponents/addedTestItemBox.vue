<template>
  <div class="box">
    <div class="title">
      已添加测试项目
    </div>
    <div class="main" >
      <addTestItemCard ></addTestItemCard>
    </div>
  </div>
</template>

<script>
import addTestItemCard from "@/components/addTestItemComponents/addTestItemCard.vue";

export default {
  name: 'addedNewTestItemBox',
  components: {
    addTestItemCard
  },
  data() {
    return {
      components: [],
      counter: 0
    };
  },
  mounted() {
    this.emitter.on('addNewTestItem', (data) => {
      console.log("another compoten get the data: ", data)
    })
  }
}
</script>

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