<script>
export default {
  name: 'TestItemSettingBox',
  data() {
    return {
      show: false,
      activeTab: 'osc'
    }
  },
  methods: {
  }
}
</script>

<template>
  <div class="box">
    <el-collapse style="background-color: #f1f2f6">
      <el-collapse-item title="测试设置">
        <el-form style="background-color: #f1f2f6">
          <el-form-item label="测试名称">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="测试描述">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="测试类型">
            <el-select>
              <el-option label="自动测试" value="auto"></el-option>
              <el-option label="手动测试" value="manual"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style scoped>
.box {
  margin: 15px;
  background-color: #f1f2f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: inset 10px 10px 20px 10px #ffffff, -2px -2px 1px 1px #ffffff, 4px 4px 6px 4px #d9d9d9;

}

</style>
