<template>
  <div class="main-box">
    <div class="inner-box">
      <testing-item-box class="testing-item-box"></testing-item-box>
    </div>
  </div>
</template>

<script>
import "../assets/main.css"
import TestingItemBox from "@/components/testPageComponents/TestingItemBox.vue";
export default {
  name: 'TestPage',
  components: {
    TestingItemBox
  }
}
</script>

<style scoped>

.main-box {
  flex: 1;
  background-color: #f0f0f0;
  height: 95vh;
}

.inner-box {
  padding: 15px;
}

.testing-item-box{
  width: 30%;
}

::-webkit-scrollbar-button {
  display: none
}

::-webkit-scrollbar-corner {
  background-color: transparent; /* 隐藏角落区域 */
}
</style>
