<template>
  <ul v-infinite-scroll="load" v-loading="props.onLoad" class="infinite-list" style="overflow: auto">
    <el-row v-for="step in props.testPlan" :key="step.id" class="infinite-list-item" @click="showTestingItemDetail">
      <el-col :span="18">{{ i }}</el-col>
      <el-col :span="6">成功</el-col>
    </el-row>

  </ul>
</template>

<script setup>
import {ref, defineProps, watch} from 'vue'
const count = ref(0)
const load = () => {
  count.value += 2
}

const props = defineProps({
  testPlan: {
    type: Object,
    default: () => {
      return {step:[]}
    },
    onLoad: {
      type: Boolean,
      default: true
    }
  }
})

watch(() => props.testPlan, (newVal) => {
  console.log('the new value is ', newVal)
})

watch(() => props.onLoad, (newVal) => {
  console.log('the new value is ', newVal)
})


function showTestingItemDetail(){
  console.log('show the testing item detail')
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
