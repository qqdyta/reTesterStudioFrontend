<script>
import PageSettingButton from "@/components/addTestItemComponents/PageSettingButton.vue";

export default {
  name: "WaitTestItemSettingBox",
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
          <el-col :span="24">
            <page-setting-button :cardIndex="this.cardIndex"></page-setting-button>
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