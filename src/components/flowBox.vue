<script>
export default {
  name: "flowBox",
  components: {
    PageSettingButton
  },
  props: {
    cardIndex: {
      type: Number,
      default: 0
    }
  },
  emits: ['click'],
  data() {
    return {
      testItemSettingData: {
        stepName: "",
        stepDescription: "",
        mode: "",
        value: "",
        COM: ""
      }
    }
  },
  methods: {
    formatTooltip(val) {
      return val + '秒'
    }
  }

}
</script>

<template>
<div></div>
</template>

<style scoped>

</style>
