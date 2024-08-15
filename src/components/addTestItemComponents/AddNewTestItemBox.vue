<script>
import addTestItemCard from "@/components/addTestItemComponents/addTestItemCard.vue"
export default {
  name: 'addNewTestItemBox',
  components: {
    addTestItemCard
  },
  data() {
    return {
      show: false,
      activeTab: 'osc',
      cards: [
        {key: '采集', setType:'osc', item: ['oscGetWave', 'voltage', "current"]},
        {key: '电源', setType:'psld', item: ['loadOn', 'loadOff', 'powerSupplyOn', 'powerSupplyOff']},
        {key: '接口', setType:'spnw', item: ['serialPort', 'ethernet']},
        {key: '其他', setType:'other', item: ['wait', 'onStart', 'onEnd']},
      ]
    }
  },
  methods: {
    addNewTestItem(data) {
      console.log(data)
      this.emitter.emit('addNewTestItem', data)
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
    <el-tabs  v-model="activeTab" class="demo-tabs">
      <el-tab-pane v-for="(group, index) in this.cards" :key="index" :label="group['key']" :name="group.setType">
        <addTestItemCard class="add-test-item-card" v-for="(item, index) in group['item']" :key="index" :setType="item" @click="addNewTestItem(item)"></addTestItemCard>
      </el-tab-pane>
    </el-tabs>
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
.add-test-item-card{
   margin-top: 15px;
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
.main {
  width: 90%;
  overflow-x: auto;
  white-space: nowrap;
  scroll-behavior: smooth; /* 平滑滚动 */
}
.demo-tabs {
  display: inline-block; /* 确保tabs内容不会换行 */
}

/* 自定义滚动条样式 */
.main::-webkit-scrollbar {
  height: 14px; /* 滚动条高度 */
}

.main::-webkit-scrollbar-track {
  background: #e1e1e1; /* 滚动条轨道颜色 */
  border-radius: 7px; /* 圆角 */
}

.main::-webkit-scrollbar-thumb {
  background: #888; /* 滚动条滑块颜色 */
  border-radius: 7px; /* 圆角 */
}

.main::-webkit-scrollbar-thumb:hover {
  background: #555; /* 滑块悬停颜色 */
}

.demo-tabs {
  display: inline-block; /* 确保tabs内容不会换行 */
}


.item-card {
  width: 220px;
  margin: 15px;
}


</style>
