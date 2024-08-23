<script>
/* eslint-disable */
import {ref, onMounted, onUnmounted, getCurrentInstance, markRaw} from 'vue'
import CurrentTestItemSettingBox from "@/components/addTestItemComponents/testItemSettingCard/CurrentTestItemSettingBox.vue";
import EthernetTestItemSettingBox from "@/components/addTestItemComponents/testItemSettingCard/EthernetTestItemSettingBox.vue";
import VoltageTestItemSettingBox from "@/components/addTestItemComponents/testItemSettingCard/VoltageTestItemSettingBox.vue";
import SerialTestItemSettingBox from "@/components/addTestItemComponents/testItemSettingCard/SerialTestItemSettingBox.vue";
import WaitTestItemSettingBox from "@/components/addTestItemComponents/testItemSettingCard/WaitTestItemSettingBox.vue";
import LoadTestItemSettingBox from "@/components/addTestItemComponents/testItemSettingCard/LoadTestItemSettingBox.vue";
import powerSupplySettingItem from "@/components/addTestItemComponents/testItemSettingCard/PowerSupplySettingItem.vue";
import dmmSettingBox from "@/components/addTestItemComponents/testItemSettingCard/dmmSettingBox.vue";
import DmmSettingBox from "@/components/addTestItemComponents/testItemSettingCard/dmmSettingBox.vue";
import OscGetWave from "@/components/addTestItemComponents/testItemSettingCard/oscGetWave.vue";
import loadOnSettingBox from "@/components/addTestItemComponents/testItemSettingCard/loadOnSettingBox.vue";
import loadOffSettingBox from "@/components/addTestItemComponents/testItemSettingCard/loadOffSettingBox.vue";
import powerSupplyOnSettingBox from "@/components/addTestItemComponents/testItemSettingCard/powerSupplyOnSettingBox.vue";
import powerSupplyOffSettingBox from "@/components/addTestItemComponents/testItemSettingCard/powerSupplyOffSettingBox.vue";
import testStartSettingBox from "@/components/addTestItemComponents/testItemSettingCard/testStartSettingBox.vue";
import testFinishSettingBox from "@/components/addTestItemComponents/testItemSettingCard/testFinishSettingBox.vue";
import scannerSettingBox from "@/components/addTestItemComponents/testItemSettingCard/scannerSettingBox.vue";
import SSHTestItemSettingBox from "@/components/addTestItemComponents/testItemSettingCard/SSHTestItemSettingBox.vue";

export default {
  name: "TestItemSettingBox",
  components: {
    DmmSettingBox,
    VoltageTestItemSettingBox,
    LoadTestItemSettingBox,
    powerSupplySettingItem,
    WaitTestItemSettingBox,
    SerialTestItemSettingBox,
    EthernetTestItemSettingBox,
    CurrentTestItemSettingBox,
    OscGetWave,
    loadOnSettingBox,
    loadOffSettingBox,
    powerSupplyOnSettingBox,
    powerSupplyOffSettingBox,
    testStartSettingBox,
    testFinishSettingBox,
    scannerSettingBox,
    SSHTestItemSettingBox
  },

  setup() {
    const currentComponent = ref(null)
    const currentIndex = ref(0)
    const instance = getCurrentInstance()
    const eventBus = instance.appContext.config.globalProperties.$emitter
    const setComponent = (component) => {
      if(component !== null){
        //console.log('got open setting page event', component)
        currentIndex.value = markRaw(component[1])
        currentComponent.value =markRaw({
          'voltage': VoltageTestItemSettingBox,
          'current': CurrentTestItemSettingBox,
          'dmmConfig': LoadTestItemSettingBox,
          'oscGetWave': OscGetWave,
          'loadOn': loadOnSettingBox,
          'loadOff': loadOffSettingBox,
          'powerSupplyOn': powerSupplyOnSettingBox,
          'powerSupplyOff': powerSupplyOffSettingBox,
          'wait': WaitTestItemSettingBox,
          'serialPort': SerialTestItemSettingBox,
          'ethernet': EthernetTestItemSettingBox,
          'onStart': testStartSettingBox,
          'onEnd': testFinishSettingBox,
          'scanner': scannerSettingBox,
          'SSH': SSHTestItemSettingBox
        }[component[0]])
      }else{
        currentComponent.value = null
      }
    }
    onMounted(() => {
      eventBus.on('openSettingPage', setComponent);
      eventBus.on('updateProcessData', (data) => {
        console.log('the data is ', data)
      })
    })

    onUnmounted(() => {
      eventBus.off('openSettingPage', setComponent);
    })

    return {
      currentComponent,
      currentIndex,
    }
  },
  methods:{
    cleanData(){
      this.$emitter.emit('updateProcessData', {type: 'cleanUp', data: null})
    },

    submitData(){
      this.$emitter.emit('updateProcessData', {type: 'submit', data: null})
    }

  }
}
</script>

<template>
  <div class="z-down-shadow box">
    <component class="box" :is="currentComponent" :cardIndex="currentIndex"></component>
  </div>
  <div class="submit-button-box">
    <el-row>
      <el-col :span="12">
        <el-button class="clean-button z-up-shadow" type="basic White" @click="cleanData">清除</el-button>
      </el-col>
      <el-col :span="12">
        <el-button class="submit-button z-up-shadow" type="basic White" @click="submitData">保存</el-button>
      </el-col>
    </el-row>
  </div>

</template>

<style scoped>
.box {
  padding-top: 10px;
  width: 90%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
}

.submit-button {
  margin-top: 10px;
  width: 80px;
  height: 40px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 10px 50px  50px 10px;
  border: 1px solid #ffffff;
}

.submit-button:hover {
  background-color: #ffffff;
  border: 1px solid #ffffff;
  font-size: 26px;
  font-weight: lighter;
  color: #606266
}

.clean-button {
  margin-top: 10px;
  width: 80px;
  height: 40px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 50px 10px  10px 50px;
  border: 1px solid #ffffff;
}

.clean-button:hover
{
  background-color: #ffffff;
  border: 1px solid #ffffff;
  font-size: 26px;
  font-weight: lighter;
  color: #606266
}

</style>
