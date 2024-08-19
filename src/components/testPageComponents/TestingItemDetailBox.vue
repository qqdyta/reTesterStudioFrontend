<script setup>
/* eslint-disable */
import {ref, onMounted, onUnmounted, defineProps, getCurrentInstance, markRaw} from "vue";
import TestingItemCurrentDetailCard
  from "@/components/testPageComponents/testingItemDetailCard/TestingItemCurrentDetailCard.vue";
import TestingItemIperfDetailCard
  from "@/components/testPageComponents/testingItemDetailCard/TestingItemIperfDetailCard.vue";
import TestingItemLoadDetailCard
  from "@/components/testPageComponents/testingItemDetailCard/TestingItemLoadDetailCard.vue";
import TestingItemOscDetailCard
  from "@/components/testPageComponents/testingItemDetailCard/TestingItemOscDetailCard.vue";
import TestingItemPowerDetailCard
  from "@/components/testPageComponents/testingItemDetailCard/TestingItemPowerDetailCard.vue";
import TestingItemSerialDetailCard
  from "@/components/testPageComponents/testingItemDetailCard/TestingItemSerialDetailCard.vue";
import TestingItemSwitchDetailCard
  from "@/components/testPageComponents/testingItemDetailCard/TestingItemSwitchDetailCard.vue";
import TestingItemVoltageDetailCard
  from "@/components/testPageComponents/testingItemDetailCard/TestingItemVoltageDetailCard.vue";
import TestingItemETHDetailCard
  from "@/components/testPageComponents/testingItemDetailCard/TestingItemETHDetailCard.vue";
import eventBus from "@/eventBus";
import TestingItemDMMDetailCard
  from "@/components/testPageComponents/testingItemDetailCard/TestingItemDMMDetailCard.vue";
import TestingItemScannerDetailCard
  from "@/components/testPageComponents/testingItemDetailCard/TestingItemScannerDetailCard.vue";

const props = defineProps({
  testPlan: {
    type: Object,
    default: () => {
      return {}
    }
  }
})

const currentIndex = ref(0)

const currentComponent = ref(null)
const boxClass = ref(null)
const instance = getCurrentInstance()

const setComponent = (component) => {
  console.log('the component is ', component)
  eventBus.emit('openSettingPage', component)
  const TYPE_DIC = {
    'voltage':  {color: 'var(--color-dmm)', title: '电压测试', component: TestingItemVoltageDetailCard},
    'current':  {color: 'var(--color-dmm)', title: '电流测试', component: TestingItemCurrentDetailCard},
    'dmmConfig': {color: 'var(--color-dmm)', title: 'DMM设置', component: TestingItemDMMDetailCard},
    'oscilloscope':  {color: 'var(--color-oscilloscope)', title: '示波器设置', component: TestingItemOscDetailCard},
    'oscGetWave':  {color: 'var(--color-oscilloscope)', title: '测试波形', component: TestingItemOscDetailCard},
    'oscGetDelta':  {color: 'var(--color-oscilloscope)', title: '测试纹波', component: TestingItemOscDetailCard},
    'ethernet':  {color: 'var(--color-ethernet)', title: '以太网', component: TestingItemETHDetailCard},
    'serialPort':  {color: 'var(--color-serial)', title: '串口', component: TestingItemSerialDetailCard},
    'wait': {color: 'var(--color-wait)', title: '等待', component: null},
    'powerSupplySet':{color: 'var(--color-power-supply)', title: '电源设置', component: TestingItemPowerDetailCard},
    'powerSupplyOn':{color: 'var(--color-power-supply)', title: '电源开启', component: TestingItemPowerDetailCard},
    'powerSupplyOff':{color: 'var(--color-power-supply)', title: '电源关闭', component: TestingItemPowerDetailCard},
    'load': {color: 'var(--color-load)', title: '负载设置', component: TestingItemLoadDetailCard},
    'loadOn': {color: 'var(--color-load)', title: '负载开启', component: TestingItemLoadDetailCard},
    'loadOff': {color: 'var(--color-load)', title: '负载关闭', component: TestingItemLoadDetailCard},
    'onStart': {color: 'var(--color-start)', title: '测试开始',},
    'onEnd': {color: 'var(--color-end)', title: '测试结束'},
    'scanner': {color: 'var(--color-scanner)', title: '扫码输入', component: TestingItemScannerDetailCard},
  }
}

onMounted(() => {
  console.log('testingItemDetailBox mounted')
  eventBus.on('showTestingItemDetail', (data) => {
    console.log('show the testing item detail: ', data)
    currentIndex.value = data
    console.log('the test plan is ', props.testPlan)
    console.log('the target is ', props.testPlan[currentIndex.value])
    console.log('the setUp is ', props.testPlan[currentIndex.value]['setType'])
  })
})

onUnmounted(() => {
  console.log('testingItemDetailBox unmounted')
  eventBus.off('showTestingItemDetail')
})
</script>

<template>
  <div>testingItemDetailBox</div>
  <el-row>
    <el-col :span="24">
    </el-col>
  </el-row>
</template>

<style scoped>

</style>
