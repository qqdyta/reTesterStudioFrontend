<script setup>
/* eslint-disable */
import { Position, Handle, useVueFlow } from '@vue-flow/core'
import { computed, inject, defineProps } from 'vue';

// props were passed from the slot using `v-bind="customNodeProps"`
const props = defineProps(['label'])

const $testItemDict = inject('$testItemDict')

const computedBackgroundColor = computed(() => {
  return $testItemDict[props.label]['color']
})

const computedTitle = computed(() => {
  return $testItemDict[props.label]['title']
})

//const { onNodeClick } = useVueFlow()



</script>

<template>
  <div class="node-box" :style="{backgroundColor: computedBackgroundColor}">
    <div>{{ computedTitle }}</div>
    <Handle type="source" class="vue-flow__handle_bottom" :style="{backgroundColor: computedBackgroundColor}" :position="Position.Bottom" />
  </div>
</template>
<style scoped>

.node-box{
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 180px;
  height: 60px;
  font-size: 16px;
}

.vue-flow__handle_top {
  height:10px;
  width:15px;
  border-radius:5px;
}

.vue-flow__handle_bottom {
  height:5px;
  width:15px;
  border-radius:4px;
}

</style>
