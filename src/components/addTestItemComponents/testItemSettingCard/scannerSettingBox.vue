<script>
import pageSettingButton from "@/components/addTestItemComponents/PageSettingButton.vue";
export default {
  name: "ScannerSettingBox",
  components: {pageSettingButton},
  props: {
    cardIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      testItemSettingData: {
        stepName: "扫描二维码",
        stepIndex: 0,
        stepDescription: "记录测试样品的身份信息",
        codeLength: 0,
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
          <el-form-item label="开头的数字">
            <el-input v-model="testItemSettingData.startCode" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="二维码位数 ">
            <el-input-number v-model="testItemSettingData.codeLength"/>
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
