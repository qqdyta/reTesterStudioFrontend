<template>
  <ul v-loading="props.onLoad" class="infinite-list" style="overflow: auto">
    <el-row v-for="step in props.testPlan" :key="step.id" class="infinite-list-item" @click="showTestingItemDetail(step.id)">
      <el-col :span="16">{{ step['data']['stepName'] }}</el-col>
      <el-col :span="8" style="cursor: pointer;border-left: 1px solid #676767;  align-items: center; text-align: center">等待测试</el-col>
    </el-row>
  </ul>
</template>

<script setup>
/* eslint-disable */
import {defineProps} from 'vue'
import eventBus from "@/eventBus";

const props = defineProps({
  testPlanId: {
    type: Number,
    default: 0
  },
  testPlanDescription: {
    type: String,
    default: ''
  },
  testPlan: {
    type: Object,
    default: () => {
      return {}
    }
  },

  onLoad: {
    type: Boolean,
    default: true
  },
  testPlanName: {
    type: String,
    default: ''
  }
})

function showTestingItemDetail(stepID){
  eventBus.emit('showTestingItemDetail', stepID)
}
</script>

<style>
.infinite-list {
  height: 600px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>
