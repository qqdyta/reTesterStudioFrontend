<script>
/* eslint-disable */
import { ref, onMounted, onUnmounted, getCurrentInstance  } from 'vue'
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
  },

  setup() {
    const currentComponent = ref(null)
    const currentIndex = ref(0)
    const instance = getCurrentInstance()
    const eventBus = instance.appContext.config.globalProperties.emitter
    const setComponent = (component) => {
      if(component !== null){
        console.log('got open setting page event', component)
        currentIndex.value = component[1]
        currentComponent.value = {
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
        }[component[0]]
      }else{
        currentComponent.value = null
      }
    }
    onMounted(() => {
      eventBus.on('openSettingPage', setComponent);
    })

    onUnmounted(() => {
      eventBus.off('openSettingPage', setComponent);
    })

    return {
      currentComponent,
      currentIndex
    }
  },

}
</script>

<template>
  <div class="z-down-shadow box">
    <component class="box" :is="currentComponent" :cardIndex="currentIndex"></component>
  </div>
  <div class="submit-button-box">
    <el-row>
      <el-col :span="12"></el-col>
      <el-col :span="12">
        <el-button class="submit-button z-up-shadow" type="basic White">保存</el-button>
      </el-col>
    </el-row>
  </div>

</template>

<style scoped>
.box {
  margin: 15px;
  width: 40vh;
  height: 40vh;
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

</style>
