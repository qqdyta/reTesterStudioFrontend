<template>
  <div class="header-box"><HeaderBar></HeaderBar></div>
  <div class="downer">
    <div class="left-bar-box"><LeftSideBar></LeftSideBar></div>
    <div class="main-box"><addNewTestItemBox></addNewTestItemBox></div>
    <div class="main-box"><addedTestItemBox></addedTestItemBox></div>
    <div class="main-box"><TestItemSettingBox></TestItemSettingBox></div>
  </div>

</template>

<script>
import "../assets/main.css"
import HeaderBar from "@/components/HeaderBar.vue"
import addNewTestItemBox from "@/components/addTestItemComponents/AddNewTestItemBox.vue"
import addedTestItemBox from "@/components/addTestItemComponents/addedTestItemBox.vue";
import LeftSideBar from "@/components/LeftSideBar.vue"
import TestItemSettingBox from "@/components/addTestItemComponents/TestItemSettingBox.vue"

export default {
  name: 'TestPage',
  components: {
    TestItemSettingBox,
    HeaderBar,
    addNewTestItemBox,
    LeftSideBar,
    addedTestItemBox
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header-box {
  width: 100%;
  height: 5vh;
  box-shadow: inset 10px 10px 20px 10px #ffffff, -2px -2px 1px 1px #ffffff, 4px 4px 6px 4px #d9d9d9;
}

.downer {
  display: flex;
  flex: 1;
}

.main-box {
  flex: 1;
  background-color: #f0f0f0;
  height: 95vh;
}

.left-bar-box {
  width: 60px;
  height:95vh;
  box-shadow: inset 10px 10px 20px 10px #ffffff, -2px -2px 1px 1px #ffffff, 4px 4px 6px 4px #d9d9d9;
}

</style>
