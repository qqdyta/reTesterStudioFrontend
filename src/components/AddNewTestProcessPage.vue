<template>
  <div class="main-box">
    <add-new-test-item-box class="add-new-test-item-box"></add-new-test-item-box>
    <flowBox class="flow-box" :progress="component"></flowBox>
    <div class="test-item-setting-box">
      <test-item-setting-box></test-item-setting-box>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import "../assets/main.css"
import addNewTestItemBox from "@/components/addTestItemComponents/AddNewTestItemBox.vue"
import flowBox from "@/components/addNewTestFlow/flowBox.vue";
import TestItemSettingBox from "@/components/addTestItemComponents/TestItemSettingBox.vue"
import { getCurrentInstance } from "vue";
import {ElNotification} from "element-plus";
export default {
  name: 'App',
  components: {
    TestItemSettingBox,
    flowBox,
    addNewTestItemBox
  },
  data(){
    return {
      component: [],
      counter: 0,
      xPosition: 250,
      yPosition: 0
    }
  },
  mounted() {
    this.$emitter.on('addNewTestItem', (data) => {
      this.addNewTestItem(data)
    });
    this.$emitter.on('removeTestItem', (data) => {

      this.component = this.component.filter(item => item.index !== data)
    });

  },
  unmounted() {
    this.$emitter.off('addNewTestItem')
  },
  methods: {

    addNewTestItem(data) {
      let nodeType = 'test'
      if(data == 'onStart'){
        nodeType = 'start'
      }else if(data == 'onEnd'){
        nodeType = 'finish'
      }
      if(this.counter == 0 && data !== 'onStart'){
        ElNotification({
          title: '第一个节点必须是开始节点',
          message: '开始节点位于 其他 选项卡中',
          type: 'warning',
        })
      }else{
        const TEST_DATA = {
          id: this.counter++,
          setType: data,
          label: data,
          index: this.counter,
          position: {x: this.xPosition , y: this.yPosition},
          data: {label: 'TestNode' + this.counter},
          class: 'light',
          type: nodeType
        }
        this.$emitter.emit('addNewTestProgress', TEST_DATA)
        this.yPosition += 100
        this.component.push(TEST_DATA)
      }
    },
    openSettingPage(component) {
      this.$emit('openSettingPage', component)
    }
  }
}
</script>

<style scoped>
.main-box {
  flex: 1;
  width: 100%;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f0f0f0;
}

.add-new-test-item-box {
  position: absolute;
  width: 20%;
  z-index: 1;
}

.flow-box {
  position: absolute;
  z-index: 0;
}

.test-item-setting-box{
  position: absolute;
  right: 10px;
  top:10px;
  width: 25%;
  z-index: 1;
}


</style>
