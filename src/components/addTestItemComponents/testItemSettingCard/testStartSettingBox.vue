<script>
import PageSettingButton from "@/components/addTestItemComponents/PageSettingButton.vue";

export default {
  name: "testStartSettingBox",
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
        testName: "产品测试",
        stepIndex: 0,
        testDescription: "测试描述",
      }
    }
  }
}
</script>

<template>
  <div class="main">
    <el-form :model="testItemSettingData" label-width="auto" style="max-width: 600px">
      <el-row>
        <el-col :span="24">
          <el-form-item label="测试名称">
            <el-input v-model="testItemSettingData.testName" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="测试描述">
            <el-input v-model="testItemSettingData.testDescription" />
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
