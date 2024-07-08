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
      activeTab: 'osc'
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
    <el-tabs  v-model="activeTab" class="demo-tabs"  >
      <el-tab-pane label="信号" name="osc">
        <!-- <addTestItemCard class="item-card"  :setType="'oscilloscope'"  @click="addNewTestItem('oscilloscope')"></addTestItemCard> -->
        <addTestItemCard class="item-card"  :setType="'oscGetWave'"  @click="addNewTestItem('oscGetWave')"></addTestItemCard>
        <!-- <addTestItemCard class="item-card"  :setType="'oscGetDelta'"  @click="addNewTestItem('oscGetDelta')"></addTestItemCard>  -->
        <addTestItemCard class="item-card"  :setType="'voltage'"  @click="addNewTestItem('voltage')"></addTestItemCard>
        <addTestItemCard class="item-card"  :setType="'current'"  @click="addNewTestItem('current')"></addTestItemCard>
        <!--<addTestItemCard class="item-card"  :setType="'dmmConfig'"  @click="addNewTestItem('dmmConfig')"></addTestItemCard> -->
      </el-tab-pane>
      <el-tab-pane label="电源" name="psld">
        <!-- <addTestItemCard class="item-card"  :setType="'load'"  @click="addNewTestItem('load')"></addTestItemCard> -->
        <addTestItemCard class="item-card"  :setType="'loadOn'"  @click="addNewTestItem('loadOn')"></addTestItemCard>
        <addTestItemCard class="item-card"  :setType="'loadOff'"  @click="addNewTestItem('loadOff')"></addTestItemCard>
        <!--<addTestItemCard class="item-card"  :setType="'powerSupplySet'"  @click="addNewTestItem('powerSupplySet')"></addTestItemCard> -->
        <addTestItemCard class="item-card"  :setType="'powerSupplyOn'"  @click="addNewTestItem('powerSupplyOn')"></addTestItemCard>
        <addTestItemCard class="item-card"  :setType="'powerSupplyOff'"  @click="addNewTestItem('powerSupplyOff')"></addTestItemCard>

      </el-tab-pane>
      <el-tab-pane label="接口" name="spnw">
        <addTestItemCard class="item-card"  :setType="'serialPort'"  @click="addNewTestItem('serialPort')"></addTestItemCard>
        <addTestItemCard class="item-card"  :setType="'ethernet'"  @click="addNewTestItem('ethernet')"></addTestItemCard>
      </el-tab-pane>
      <el-tab-pane label="其他" name="other">
        <addTestItemCard class="item-card"  :setType="'wait'"  @click="addNewTestItem('wait')"></addTestItemCard>
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