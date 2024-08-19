<template>
  <div class="main-box">
    <el-row>
      <el-col :span="6">
        <el-row>
          <el-col :span="24">
            <div class="inner-box">
              <testing-item-box :test-plan="this.testPlan" :testPlanId="this.testPlanId" :test-plan-name="this.testPlanName" :test-plan-description="this.testPlanDescription" :on-load="this.testingItemBoxOnLoad"></testing-item-box>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-button type="primary" class="startTestButton">开 始 测 试</el-button>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="18">
        <el-row>
          <el-col :span="24">
            <div class="testing-item-detail-box-box">
              <TestingItemDetailBox class="testing-item-detail-box" :test-plan="this.testPlan"></TestingItemDetailBox>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import "../assets/main.css"
import TestingItemBox from "@/components/testPageComponents/TestingItemBox.vue";
import TestingItemDetailBox from "@/components/testPageComponents/TestingItemDetailBox.vue";
export default {
  name: 'TestPage',
  components: {
    TestingItemBox,
    TestingItemDetailBox
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

.testing-item-detail-box{
  color: #9b59b6;
}
.testing-item-detail-box-box{
  height: 95vh;
}

.startTestButton{
  width: 80%;
  margin-top: 10px;
  font-size: 20px;
  height: 60px;
}


::-webkit-scrollbar-button {
  display: none
}

::-webkit-scrollbar-corner {
  background-color: transparent; /* 隐藏角落区域 */
}
</style>
