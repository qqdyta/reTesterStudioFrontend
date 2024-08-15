<template>
  <div>HelloWorld</div>
</template>

<script>
import "../assets/main.css"

export default {
  name: 'TestPage',
  components: {

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
