<script setup>
/* eslint-disable */
import {defineProps} from 'vue'

const props = defineProps({
  testPlanId: {
    type: Number,
    default: 0
  },
  testPlanDetail: {
    type: Object,
    default: () => {
      return {}
    }
  }
})



</script>

<template>
<div>LoadOne</div>
</template>

<style scoped>

</style>
