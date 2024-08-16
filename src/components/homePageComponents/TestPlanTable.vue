<script setup>
import { defineProps } from 'vue'
import {computed, onMounted, ref} from 'vue'
const serverUrl = 'http://127.0.0.1:8000/'

const props = defineProps({
  tableData: {
    type: Array,
    required: true,
    default: () => [
      { date: '2016-05-02', name: 'John', address: 'New York' },
      { date: '2016-05-04', name: 'Tom', address: 'Washington, D.C.' },
      { date: '2016-05-01', name: 'Jerry', address: 'Las Vegas' },
      { date: '2016-05-03', name: 'Bob', address: 'Los Angeles' }
    ]
  }
})

const search = ref('')
const filterTableData = computed(() =>
    props.tableData.filter(
        (data) =>
            !search.value ||
            data.name.toLowerCase().includes(search.value.toLowerCase())
    )
)

const goToTest = (index, row) => {
  console.log(index, row)
}

const handleEdit = (index, row) => {
  console.log(index, row)
}

const handleDelete = (index, row) => {
  fetch(serverUrl + 'testPlan/', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify({typed: 'removeTestPlan', id: row.id}), // body data type must match "Content-Type" header
  }).then(response => response.json())
      .then(data => {
        const RESULT = data.result
        console.log('Success:', RESULT);
        if(RESULT){
          this.$emitter.emit('sender', {type: 'success', title:'删除成功',  message: '已经成功删除' + row.name + '测试方案'})
        }else{
          this.$emitter.emit('sender', {type: 'warning', title:'删除失败',  message: '未能删除' + row.name + '测试方案'})
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      })
}

onMounted(() => {
  console.log('mounted')
})

</script>

<template>
  <el-table :data="filterTableData" style="width: 100%">
    <el-table-column label="名称" prop="name" />
    <el-table-column label="创建日期" prop="create_time" />
    <el-table-column label="描述" prop="description" />
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button size="small" type="primary" @click="goToTest(scope.$index, scope.row)">
          测试
        </el-button>
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
          Edit
        </el-button>
        <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
        >
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped>
</style>
