<script>
export default {
  name: "WaitTestItemSettingBox",
  data() {
    return {
      testItemSettingData: {
        stepName: "",
        stepDescription: "",
        mode: "",
        value: "",
        COM: ""
      }
    }
  },
  methods: {
    formatTooltip(val) {
      return val + '秒'
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
          <el-form-item label="等待时间" >
              <el-slider v-model="testItemSettingData.value" show-input :format-tooltip="formatTooltip" :show-tooltip="true"/>
          </el-form-item>
        </el-col>
      </el-row>
      <br>
      <div>
        <el-row>
          <el-col :span="16">

          </el-col>
          <el-col :span="8">
            <div>
              <el-button type="primary" >保存</el-button>
              <el-button>取消</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-form>
  </div>

</template>

<style scoped>
.main {
  padding-top:30px;
  width: 80%;
}
</style>