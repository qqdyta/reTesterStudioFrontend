<template>
<div class="main-box">
  <el-row style="background-color: #f0f0f0">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <div class="test-plan-table-box">
        <test-plan-table style="background-color: #f0f0f0" class="test-plan-table" :table-data="tableData"></test-plan-table>
      </div>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
  <br>
  <br>
  <br>
  <el-row>
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <el-card style="max-width: 800px">
        <template #header>
          <div class="card-header">
            <span>临时开发日志</span>
          </div>
        </template>
        前端代码库：<el-text tag="ins">https://github.com/qqdyta/reTesterStudioFrontend.git</el-text><br>
        服务器代码库： <el-text tag="ins">https://gitee.com/seeed-te/file-server.git</el-text> <el-text tag="b">retest&nbsp;&nbsp;</el-text>分支<br><br>
        目前能用的页面就是<el-text tag="b">主页</el-text>和<el-text tag="b">新增</el-text>两个页面，其他的都还在制作中
      </el-card>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
</div>


</template>

<script>
import "../assets/main.css"
import TestPlanTable from "@/components/homePageComponents/TestPlanTable.vue";
export default {
  name: ' HomePage',
  components: {
    TestPlanTable
  },
  data(){
    return {
      component: [],
      tableData: [
        { date: '2016-05-02', name: 'John', address: 'New York' },
        { date: '2016-05-04', name: 'Tom', address: 'Washington, D.C.' },
        { date: '2016-05-01', name: 'Jerry', address: 'Las Vegas' },
        { date: '2016-05-03', name: 'Bob', address: 'Los Angeles' }
      ],
      counter: 0,
    }
  },
  methods: {
    getData(){
      fetch(this.$serverUrl + 'testPlan/', {
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
        body: JSON.stringify({typed: 'getTestPlanList'}), // body data type must match "Content-Type" header
      }).then(response => response.json())
          .then(data => {
            console.log('Success:', data);
            this.tableData = data.data
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }
  },
  mounted() {
    this.getData()
    this.$emitter.on('updateAllProcessData', () => {
      this.getData()
    })
  }
}
</script>

<style scoped>

.main-box {
  flex: 1;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f0f0f0;
  padding-top: 20px;

}
</style>
