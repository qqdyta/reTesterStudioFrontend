<script>

import {MessageBox} from "@element-plus/icons-vue";

export default {
  name: 'LeftSideBar',
  components: {MessageBox},
  setup() {

  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    openMainPage() {
      this.$emitter.emit('settingRightBox', ['home'])
      console.log('openMainPage')
    },
    openTestPage() {
      this.$emitter.emit('settingRightBox', ['test'])
      console.log('openTestPage')
    },
    openAddPage() {
      this.$emitter.emit('settingRightBox', ['add'])
      console.log('openAddPage')
    },
    openLOGPage() {
      this.$emitter.emit('settingRightBox', ['log'])
      console.log('openLOGPage')
    },
    openSettingPage() {
      this.$emitter.emit('settingRightBox', ['set'])
      console.log('openSettingPage')
    }
  }
}
</script>

<template class="main">
  <div class="main">
    <div>
      <div class="menu-option">
        <div class="menu-icon-box" @click="openMainPage">
          <el-icon :size="30" ><House /></el-icon>
        </div>
        <div class="menu-icon-text" >主 页</div>
      </div>
    </div>
    <div>
      <div class="menu-option">
        <div class="menu-icon-box" @click="openTestPage">
          <el-icon :size="30" ><Aim /></el-icon>
        </div>
        <div class="menu-icon-text">测 试</div>
      </div>
    </div>

    <div>
      <div class="menu-option">
        <div class="menu-icon-box" @click="openAddPage">
          <el-icon :size="30" ><Edit /></el-icon>
        </div>
        <div class="menu-icon-text">新 增</div>
      </div>
    </div>

    <div>
      <div class="menu-option">
        <div class="menu-icon-box" @click="openLOGPage">
          <el-icon :size="30" ><MessageBox /></el-icon>
        </div>
        <div class="menu-icon-text">L O G</div>
      </div>
    </div>

    <div>
      <div class="menu-option">
        <div class="menu-icon-box" @click="openSettingPage">
          <el-icon :size="30" ><Setting /></el-icon>
        </div>
        <div class="menu-icon-text">设 置</div>
      </div>
    </div>
  </div>


</template>

<style scoped>
.menu-icon-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:60px;
}

.menu-option {
  margin-top: 20px;
  cursor: pointer;
}

.menu-option:hover {
  background-color: #e1e1e1;
  box-shadow: 0px 0px 20px 20px #e1e1e1;
}

.menu-icon-text {
  font-size: 12px;
  margin-top: 5px;
  text-align: center;
  cursor: pointer;
}


</style>
