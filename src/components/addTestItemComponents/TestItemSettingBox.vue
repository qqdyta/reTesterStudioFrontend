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
export default {
  name: "TestItemSettingBox",
  components: {
    DmmSettingBox,
    VoltageTestItemSettingBox,
    LoadTestItemSettingBox,
    powerSupplySettingItem,
    WaitTestItemSettingBox
  },
  /*
  setup() {
    const currentComponent = ref(null)
    const instance = getCurrentInstance()
    const eventBus = instance.appContext.config.globalProperties.emitter
    const setComponent = (component) => {
      console.log('got open setting page event', component)
      currentComponent.value = component;
      return {
        'voltage': VoltageTestItemSettingBox,
        'current': CurrentTestItemSettingBox,
        'dmmConfig': LoadTestItemSettingBox,
      }[component]

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
      }
    }
    onMounted(() => {
      eventBus.on('openSettingPage', setComponent);
    });

    onUnmounted(() => {
      eventBus.on('openSettingPage', setComponent);
    });
    return {
      currentComponent,
    }
  }
  */
}
</script>

<template>
<div class="z-down-shadow box">
<!-- <component :is="currentComponent"></component>  -->
<dmm-setting-box />
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