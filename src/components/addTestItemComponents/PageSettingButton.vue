<script>
export default {
  name: "PageSettingButton",
  props: {
    cardIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    removeMe() {
      console.log('removeMe', this.cardIndex)
      this.emitter.emit('removeTestItem', this.cardIndex)
    }
  },
  emits: ['click', 'removeTestItem']
}

</script>

<template>
  <div>
    <el-row>
      <el-col :span="16">
        <el-button type="danger" @click="removeMe">删除此步骤</el-button>
      </el-col>
      <el-col :span="8">
        <div>
          <el-button type="primary" >保存</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>

</style>
