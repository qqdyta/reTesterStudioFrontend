<script>
import PageSettingButton from "@/components/addTestItemComponents/PageSettingButton.vue";

export default {
  name: "OscGetWave",
  components: { PageSettingButton },
  props: {
    cardIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      testItemSettingData: {
        stepName: "示波器测试",
        stepIndex: 0,
        stepDescription: "采集信息",
        isMeasureData: false,
        scriptName: '',
        lowLimit: 0,
        highLimit: 0,
        startCode: ''
      }
    }
  },
  mounted() {
    console.log('Start beforeMount')
    this.$emitter.on('getProcessData', (data) => {
      console.log('Start getProcessData is ', data, this.cardIndex, data.cardIndex, this.cardIndex === data.index)
      const INDEX = data.cardIndex
      if(this.cardIndex === INDEX){
        console.log('the data.data.data is ', data.data.data)
        this.testItemSettingData = data.data.data
      }
    })
    console.log(' Start mounted')
    this.$emitter.emit('updateProcessData', {type: 'get', CardIndex: this.cardIndex, currentTestData: this.testItemSettingData})
  },
  unmounted() {
    console.log('Start unmounted')
    this.$emitter.off('getProcessData')
  },
  watch: {
    testItemSettingData: {
      handler(val) {
        console.log('current test item setting data is ', val)
      },
      deep: true
    }
  },
}
</script>

<template>
  <div class="main">
    <el-form :model="testItemSettingData" label-width="auto" style="max-width: 600px">
      <el-row>
        <el-col :span="24">
          <el-form-item label="测试名称">
            <el-input v-model="testItemSettingData.stepName" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="测试描述">
            <el-input v-model="testItemSettingData.stepDescription" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="测试内容">
            <el-switch v-model="testItemSettingData.isMeasureData" active-text="测量频率" inactive-text="测量波形" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="下限">
            <el-input v-model="testItemSettingData.lowLimit" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="上限">
            <el-input v-model="testItemSettingData.highLimit"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="脚本选择">
            <el-select v-model="testItemSettingData.scriptName" placeholder="please select ini file">
              <el-option label="Test_Cmd_AC_Vpp" value="Test_Cmd_AC_Vpp" />
              <el-option label="Test_Cmd_DC_1KHz" value="Test_Cmd_DC_1KHz" />
              <el-option label="Test_Cmd_SaveScreep" value="Test_Cmd_SaveScreep" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <div>
        <el-row>
          <el-col :span="24">
            <page-setting-button :cardIndex="this.cardIndex" :process-data="this.testItemSettingData"></page-setting-button>
          </el-col>
        </el-row>
      </div>
    </el-form>
  </div>
</template>

<style scoped>
.main{
  margin: 20px;
  width: 92%;
}
</style>
