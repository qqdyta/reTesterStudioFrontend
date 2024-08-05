<script>
import PageSettingButton from "@/components/addTestItemComponents/PageSettingButton.vue";

export default {
  name: "OscGetWave",
  components: {PageSettingButton},
  props: {
    cardIndex: {
      type: Number,
      default: 0
    }
  },
  emits: ['click'],
  data() {
    return {
      show: false
    }
  }
}
</script>

<template>
<div>oScGetWave</div>
  <el-row>
    <el-col :span="24">
      <page-setting-button :cardIndex="this.cardIndex"></page-setting-button>
    </el-col>
  </el-row>
</template>

<style scoped>

</style>