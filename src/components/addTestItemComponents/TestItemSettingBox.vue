<script>
/* eslint-disable */
import { ref, onMounted, onUnmounted, getCurrentInstance  } from 'vue'
import CurrentTestItemSettingBox from "@/components/addTestItemComponents/CurrentTestItemSettingBox.vue";
import EthernetTestItemSettingBox from "@/components/addTestItemComponents/EthernetTestItemSettingBox.vue";
import VoltageTestItemSettingBox from "@/components/addTestItemComponents/VoltageTestItemSettingBox.vue";
import SerialTestItemSettingBox from "@/components/addTestItemComponents/SerialTestItemSettingBox.vue";
import WaitTestItemSettingBox from "@/components/addTestItemComponents/WaitTestItemSettingBox.vue";
import LoadTestItemSettingBox from "@/components/addTestItemComponents/LoadTestItemSettingBox.vue";
import powerSupplySettingItem from "@/components/addTestItemComponents/PowerSupplySettingItem.vue";
import dmmSettingBox from "@/components/addTestItemComponents/dmmSettingBox.vue";
import DmmSettingBox from "@/components/addTestItemComponents/dmmSettingBox.vue";
import OscGetWave from "@/components/addTestItemComponents/oscGetWave.vue";
import loadOnSettingBox from "@/components/addTestItemComponents/loadOnSettingBox.vue";
import loadOffSettingBox from "@/components/addTestItemComponents/loadOffSettingBox.vue";
import powerSupplyOnSettingBox from "@/components/addTestItemComponents/powerSupplyOnSettingBox.vue";
import powerSupplyOffSettingBox from "@/components/addTestItemComponents/powerSupplyOffSettingBox.vue";



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
    const instance = getCurrentInstance()
    const eventBus = instance.appContext.config.globalProperties.emitter
    const setComponent = (component) => {
      console.log('got open setting page event', component)
      currentComponent.value = {
        'voltage': VoltageTestItemSettingBox,
        'current': CurrentTestItemSettingBox,
        'dmmConfig': LoadTestItemSettingBox,
        'loadOn': loadOnSettingBox,
        'loadOff': loadOffSettingBox,
        'powerSupplyOn': powerSupplyOnSettingBox,
        'powerSupplyOff': powerSupplyOffSettingBox,
        'wait': WaitTestItemSettingBox,
        'serialPort': SerialTestItemSettingBox,
        'ethernet': EthernetTestItemSettingBox,
      }[component]


/*
            if(component === 'voltage'){
        currentComponent.value = VoltageTestItemSettingBox
      }else if(component === 'current') {
        currentComponent.value = CurrentTestItemSettingBox
      }else if(component === 'dmmConfig') {
        currentComponent.value = LoadTestItemSettingBox
      }else if(component === 'loadOn') {
        currentComponent.value = loadOnSettingBox
      }else if(component === 'loadOff') {
        currentComponent.value = loadOffSettingBox
      }else if(component === 'powerSupplySet') {
        currentComponent.value = powerSupplySettingItem
      }else if(component === 'powerSupplyOn') {
        currentComponent.value = powerSupplyOnSettingBox
      }else if(component === 'powerSupplyOn') {
        currentComponent.value = powerSupplyOffSettingBox
      }else if(component === 'wait') {
        currentComponent.value = WaitTestItemSettingBox
      }else if(component === 'serialPort') {
        currentComponent.value = SerialTestItemSettingBox
      }else if(component === 'ethernet') {
        currentComponent.value = EthernetTestItemSettingBox
      }



      if(component === 'voltage'){
        currentComponent.value = VoltageTestItemSettingBox
      }else if(component === 'current') {
        currentComponent.value = CurrentTestItemSettingBox
      }else if(component === 'dmmConfig') {
        currentComponent.value = LoadTestItemSettingBox
      }else if(component === 'powerSupplySet') {
        currentComponent.value = powerSupplySettingItem
      }else if(component === 'load') {
        currentComponent.value = LoadTestItemSettingBox
      }else if(component === 'powerSupplySet') {
        currentComponent.value = powerSupplySettingItem
      }*/
    }
    onMounted(() => {
      eventBus.on('openSettingPage', setComponent);
    })

    onUnmounted(() => {
      eventBus.off('openSettingPage', setComponent);
    })

    return {
      currentComponent,
    }
  }
}
</script>

<template>
<div class="z-down-shadow box">
<component :is="currentComponent"></component>

</div>
</template>

<style scoped>
.box {
  margin: 15px;
  width: 75vh;
  height: 88vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
}

</style>