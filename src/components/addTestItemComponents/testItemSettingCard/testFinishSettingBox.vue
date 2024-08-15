<script>
import PageSettingButton from "@/components/addTestItemComponents/PageSettingButton.vue";

export default {
  name: "testFinishSettingBox",
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
        stepName: "电压测试",
        channel: 0,
        stepType: "电压测试",
        stepIndex: 0,
        stepDescription: "电压测试描述",
        isDC: true,
        range: 0,  //         0: 0.1V | 1: 1V  | 2: 10V  | 3: 100V
        accuracy: 0.1,  //    0: 3.00E-5 |  1: 2.00E-5 | 2: 1.5E-6
        limitMin: 0,
        limitMax: 10,
      }
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
            <el-input v-model="testItemSettingData.stepName"/>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="&nbsp;&nbsp;&nbsp;测试通道">
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
        <el-col :span="12">
          <el-form-item label="类型">
            <el-switch v-model="testItemSettingData.isDC" active-text="直流" inactive-text="交流" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="测试类型">
            <el-input v-model="testItemSettingData.stepType" disabled />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="量程">
            <el-select v-model="testItemSettingData.range" placeholder="请选择">
              <el-option label="0.1V" value="0"></el-option>
              <el-option label="1V" value="1"></el-option>
              <el-option label="10V" value="2"></el-option>
              <el-option label="100V" value="3"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="精度">
            <el-select v-model="testItemSettingData.accuracy" placeholder="请选择">
              <el-option label="3.00E-5" value="0"></el-option>
              <el-option label="2.00E-5" value="1"></el-option>
              <el-option label="1.5E-6" value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="最小值">
            <el-input-number v-model="testItemSettingData.limitMin" controls-position="right" :min="0" :max="100" :step="0.1" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="最大值">
            <el-input-number v-model="testItemSettingData.limitMax" controls-position="right" :min="0" :max="100" :step="0.1" />
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
.main {
  padding-top:30px;
}
</style>
