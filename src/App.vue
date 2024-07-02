<template>
  <div class="header-box"><HeaderBar></HeaderBar></div>
  <div class="downer">
    <div class="left-bar-box"><LeftSideBar></LeftSideBar></div>
    <div class="main-box"><addNewTestItemBox></addNewTestItemBox></div>
    <div class="main-box"><addedTestItemBox></addedTestItemBox></div>
  </div>

</template>

<script>
import "./assets/main.css"
import HeaderBar from "@/components/HeaderBar.vue"
import addNewTestItemBox from "@/components/addTestItemComponents/AddNewTestItemBox.vue"
import addedTestItemBox from "@/components/addTestItemComponents/addedTestItemBox.vue";
import LeftSideBar from "@/components/LeftSideBar.vue"

export default {
  name: 'App',
  components: {
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
  height: 6vh;
  background-color: #6aee3d;
}

.downer {
  display: flex;
  flex: 1;
}

.main-box {
  flex: 1;
  height: 92vh;
  background-color: #f0f0f0;
}

.left-bar-box {
  width: 200px;
  height:92vh;
  background-color: #ff6767;
}

</style>
