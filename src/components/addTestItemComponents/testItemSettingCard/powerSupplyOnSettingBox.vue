<script>
import PageSettingButton from "@/components/addTestItemComponents/PageSettingButton.vue";

export default {
  name: "PowerSupplyOnSettingBox",
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
        id: 0,
        stepName: "电源开启",
        channel: 0,
        stepType: "powerSupplyOn",
        stepIndex: 0,
        stepDescription: "电压测试描述",
        isCurrentLimit: true,
        range: 0,  //         0: 0.1V | 1: 1V  | 2: 10V  | 3: 100V
        accuracy: 0.1,  //    0: 3.00E-5 |  1: 2.00E-5 | 2: 1.5E-6
        limitMin: 0,
        limitMax: 10,
        Voltage: 0,
        CurrentLimit: 0,
        COM: 0
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
          <el-form-item label="测试端口">
            <el-input v-model="testItemSettingData.COM">
              <template #prepend>COM</template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="电流限制">
            <el-switch v-model="testItemSettingData.isCurrentLimit" active-text="无" inactive-text="有" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="电压">
            <el-input-number step="0.1" v-model="testItemSettingData.Voltage" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="电流下限">
            <el-input-number v-model="testItemSettingData.limitMin" :disabled="testItemSettingData.isDC" controls-position="right" :min="0" :max="30" :step="0.1" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="电流上限">
            <el-input-number v-model="testItemSettingData.limitMax" :disabled="testItemSettingData.isDC" controls-position="right" :min="0" :max="30" :step="0.1" />
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
