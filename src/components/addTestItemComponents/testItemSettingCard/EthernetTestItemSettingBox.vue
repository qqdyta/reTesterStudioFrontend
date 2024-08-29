<script>
import pageSettingButton from "@/components/addTestItemComponents/PageSettingButton.vue";
export default {
  name: "EthernetTestItemSettingBox",
  components: {
    pageSettingButton
  },
  props: {
    cardIndex: {
      type: Number,
      default: 0
    }
  },
  watch: {
    testItemSettingData: {
      deep: true
    }
  },
  data() {
    return {
      testItemSettingData: {
        stepName: "开机检查",
        stepIndex: 0,
        stepDescription: "捕捉串口信息",
        isLoginByVID: false,
        VID:'',
        PID:'',
        COM: 0,
        baudRate: 115200,
        keyWords:''
      },
      isLogInWithVID: false
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
  }
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
          <el-form-item label="测试端口">
            <el-input v-model="testItemSettingData.COM">
              <template #prepend>COM</template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="串口识别">
            <el-switch v-model="testItemSettingData.isLoginByVID" active-text="通过COM口" inactive-text="通过VID与PID" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="VID :">
            <el-input v-model="testItemSettingData.VID" :disabled="testItemSettingData.isLoginByVID" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="PID :">
            <el-input v-model="testItemSettingData.PID" :disabled="testItemSettingData.isLoginByVID" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="COM : ">
            <el-input v-model="testItemSettingData.COM" :disabled="!testItemSettingData.isLoginByVID" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-col :span="24">
            <el-form-item label="关键词">
              <el-input show-word-limit maxlength="64" type="textarea" v-model="testItemSettingData.keyWords" />
            </el-form-item>
          </el-col>
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
