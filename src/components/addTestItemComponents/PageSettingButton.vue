<script>
export default {
  name: "PageSettingButton",
  props: {
    cardIndex: {
      type: Number,
      default: 0
    },
    processData:{
      type: Object
    }
  },
  methods: {
    removeMe() {
      this.$emitter.emit('removeTestItem', this.cardIndex)
      this.$emitter.emit('updateProcessData', {type: 'delete', data: this.processData, index: this.cardIndex})
    },
    updateProcessData() {
      this.$emitter.emit('updateProcessData', {type: 'save', data: this.processData, index: this.cardIndex})
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
          <el-button type="primary" @click="updateProcessData" >保存</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>

</style>
