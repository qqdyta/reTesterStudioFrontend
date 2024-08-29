<script>
/* eslint-disable */
import { ElMessage } from 'element-plus'
import PageSettingButton from "@/components/addTestItemComponents/PageSettingButton.vue";
export default {
  name: "SSHTestItemSettingBox",
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
        stepName: "SSH",
        channel: 0,
        stepType: "SSH",
        stepIndex: 0,
        stepDescription: "远程测试",
        needBackMessage: true,
        backMessage: '',
        needOtherMessage: false,
        otherMessage: '',
        needUploadFile: false,
        range: 0,  //         0: 0.1V | 1: 1V  | 2: 10V  | 3: 100V
        accuracy: 0.1,  //    0: 3.00E-5 |  1: 2.00E-5 | 2: 1.5E-6
        limitMin: 0,
        scriptFile: null,
        fileList:[],
        limitMax: 10,
        Voltage: 0,
        CurrentLimit: 0,
        fileName:'',
        COM: 0
      }
    }
  },
  watch: {
    testItemSettingData: {
      handler(val) {
        console.log('current test item setting data is ', val)
      },
      deep: true
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
  methods: {
    handleSuccess(response, file, fileList) {
      console.log(response, file, fileList);
    },
    beforeUpload(file) {
      console.log(file);
      return true;
    },
    handleFileChange(file, fileList) {

      console.log('the file is ', file.raw)
      const READER = new FileReader()
      READER.readAsText(file.raw)
      READER.onload = (e) => {
        console.log('the file content is ', e.target.result)
      }
      console.log('the file is ', this.testItemSettingData.scriptFile)
      const FORM_DATA = new FormData();
      FORM_DATA.append('file', file.raw);
      //FORM_DATA.append('fileName', file.name);
      FORM_DATA.append('stepIndex', this.testItemSettingData.stepIndex);
      FORM_DATA.append('cardIndex', this.cardIndex);
      FORM_DATA.append('setType', 'tempScirptFile')
      fetch('http://127.0.0.1:8000/' + 'uploadFile/', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: FORM_DATA
      }).then(response => response.json())
          .then(data => {
            console.log('got the server data: ', data.data)
          })

    }
  }
}
</script>

<template>
  <div class="main">
    <el-form :model="testItemSettingData" label-width="auto" style="max-width: 600px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="测试名称">
            <el-input v-model="testItemSettingData.stepName" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="&nbsp;&nbsp;&nbsp;电源通道">
            <el-select v-model="testItemSettingData.channel">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
              <el-option label="3" value="3"></el-option>
              <el-option label="4" value="4"></el-option>
              <el-option label="5" value="5"></el-option>
              <el-option label="6" value="6"></el-option>
              <el-option label="7" value="7"></el-option>
              <el-option label="8" value="8"></el-option>
              <el-option label="9" value="9"></el-option>
              <el-option label="10" value="10"></el-option>
              <el-option label="11" value="11"></el-option>
              <el-option label="12" value="12"></el-option>
            </el-select>
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
          <el-form-item label="返回信息">
            <el-switch v-model="testItemSettingData.needBackMessage" active-text=不需要 inactive-text="需要" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="信息内容">
            <el-input v-model="testItemSettingData.backMessage" :disabled="testItemSettingData.needBackMessage" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="其他程序">
            <el-switch v-model="testItemSettingData.needOtherMessage" active-text="不需要" inactive-text="需要" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="程序内容">
            <el-input v-model="testItemSettingData.otherMessage" :disabled="testItemSettingData.needOtherMessage"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="上传文件">
            <el-switch v-model="testItemSettingData.needUploadFile" active-text="不需要" inactive-text="需要" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="上传文件">
            <el-upload
                :auto-upload="false"
                :disabled="testItemSettingData.needUploadFile"
                :on-success="handleSuccess"
                :before-upload="beforeUpload"
                :file-list="testItemSettingData.fileList"
                :on-change="handleFileChange"
                v-model="testItemSettingData.scriptFile"
                >
              <el-button type="primary">选择脚本</el-button>
            </el-upload>
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

</style>
