<script setup>
/* eslint-disable */
import { Position, Handle, useVueFlow } from '@vue-flow/core'
import { computed, inject, defineProps } from 'vue';

// props were passed from the slot using `v-bind="customNodeProps"`
const props = defineProps(['label'])

const $testItemDict = inject('$testItemDict')

const computedBackgroundColor = computed(() => {
  console.log('the props is ', props)
  return $testItemDict[props.label]['color']
})

const computedTitle = computed(() => {
  return $testItemDict[props.label]['title']
})

const { onNodeClick } = useVueFlow()

onNodeClick(({node}) => {
  console.log('Node Click', node)
})

</script>

<template>
  <div class="node-box" :style="{backgroundColor: computedBackgroundColor}">
    <Handle type="target" :position="Position.Top" />
    <div>{{ computedTitle }}</div>
    <Handle type="source" :position="Position.Bottom" />
  </div>
</template>
<style scoped>
.node-box{
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 220px;
  height: 80px;
}

</style>
