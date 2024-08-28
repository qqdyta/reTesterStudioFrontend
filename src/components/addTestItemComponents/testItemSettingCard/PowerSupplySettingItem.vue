<script>
export default {
  name: "PowerSupplySettingItem",
  data() {
    return {
      testItemSettingData: {
        stepName: "数字电源设置",
        COM: 0,
        stepType: "数字电源",
        stepIndex: 0,
        stepDescription: "设置数字电源",
        mode: 'CC',
        value: 1
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
          <el-form-item label="&nbsp;&nbsp;&nbsp;串口号">
            <el-select v-model="testItemSettingData.COM">
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
          <el-form-item label="测试模式">
            <el-select v-model="testItemSettingData.mode" placeholder="请选择">
              <el-option label="CC" value="CC"></el-option>
              <el-option label="CR" value="CR"></el-option>
              <el-option label="CW" value="CW"></el-option>
              <el-option label="CV" value="CV"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="&nbsp;&nbsp;&nbsp;负载电流">
            <el-input v-model="testItemSettingData.value">
              <template #append>A</template>
            </el-input>

          </el-form-item>
        </el-col>
      </el-row>
      <div>
        <el-row>
          <el-col :span="12">

          </el-col>
          <el-col :span="12">
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
}
</style>
