<template>
  <div class="main-box">
    <div class="inner-box">
      <testing-item-box class="testing-item-box" :test-plan="this.testPlan" :testPlanId="this.testPlanId" :test-plan-name="this.testPlanName" :test-plan-description="this.testPlanDescription" :on-load="this.testingItemBoxOnLoad"></testing-item-box>
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
      testingItemBoxOnLoad: true,
      testPlanId: 0,
      testPlanName: '',
      testPlanDescription: ''
    }
  },
  beforeMount() {
    this.$inTesting.init(9)
    setTimeout(() => {
      const TEST_DATA = this.$inTesting.getData()
      this.testingItemBoxOnLoad = false
      this.testPlan = TEST_DATA[0]['testStep']
      this.testPlanId = TEST_DATA[0]['id']
      console.log('the testPlanID is ' + this.testPlanId)
      this.testPlanName = TEST_DATA[0]['name']
      this.testPlanDescription = TEST_DATA[0]['description']
      console.log('dose updated?', this.testPlan, TEST_DATA[0])
    }, 100)
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
