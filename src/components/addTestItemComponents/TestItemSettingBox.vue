<script>
/* eslint-disable */
import CurrentTestItemSettingBox from "@/components/addTestItemComponents/CurrentTestItemSettingBox.vue";
import EthernetTestItemSettingBox from "@/components/addTestItemComponents/EthernetTestItemSettingBox.vue";
import VoltageTestItemSettingBox from "@/components/addTestItemComponents/VoltageTestItemSettingBox.vue";
import SerialTestItemSettingBox from "@/components/addTestItemComponents/SerialTestItemSettingBox.vue";
import WaitTestItemSettingBox from "@/components/addTestItemComponents/WaitTestItemSettingBox.vue";

export default {
  name: "TestItemSettingBox",
  components: {VoltageTestItemSettingBox},
}
</script>

<template>
<div class="z-down-shadow box">
  <VoltageTestItemSettingBox></VoltageTestItemSettingBox>
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