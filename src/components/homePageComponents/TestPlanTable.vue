<script setup>
import { defineProps, getCurrentInstance } from 'vue'
import {computed, onMounted, ref} from 'vue'
import { ElNotification } from 'element-plus'

const { proxy } = getCurrentInstance()
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
  fetch(proxy.$serverUrl + 'testPlan/', {
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
          ElNotification({
            title: '删除成功',
            message: '测试记录已经被删除',
            type: 'success',
          })
          setTimeout(()=>{
            proxy.$emitter.emit('updateAllProcessData');
          }, 1000)
        }else{
          ElNotification({
            title: '删除失败',
            message: '服务器错误，请联系开发者',
            type: 'error',
          })
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      })
}

const handleExport = (index, row) => {
  fetch(proxy.$serverUrl + 'testPlan/', {
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
    body: JSON.stringify({typed: 'export', id: row.id}), // body data type must match "Content-Type" header
  }).then(response => {
    return response.blob()
  }).then(blob => {
    const link = document.createElement('a');
    document.body.appendChild(link);
    link.style.display = 'none';

    // 设置 URL 和 MIME 类型
    const url = window.URL.createObjectURL(blob);
    link.href = url;
    link.setAttribute('download', 'filename.ext'); // 更改这里的文件名和扩展名
    // 触发点击
    link.click();

    // 清理 URL 对象
    window.URL.revokeObjectURL(url);
  }).catch((error) => {
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
        <el-button size="small" type="success" @click="handleExport(scope.$index, scope.row)">
          导出
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
