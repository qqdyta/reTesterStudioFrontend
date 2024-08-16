<template>
  <div class="main-box">
    <div class="inner-box">
      <testing-item-box class="testing-item-box" :test-plan="this.testPlan"></testing-item-box>
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
  },
  data(){
    return {
      testPlan: {},
      testingItemBoxOnLoad: true
    }
  },
  mounted() {
    this.$inTesting.init(2)
    setTimeout(() => {
      const TEST_DATA = this.$inTesting.getData()
      this.testingItemBoxOnLoad = false
      this.testPlan = TEST_DATA
      console.log('dose updated?', this.testPlan)
    }, 500)
  },
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
