<template>
  <div class="header-box"><HeaderBar></HeaderBar></div>
  <div class="downer">
    <div class="left-bar-box"><LeftSideBar></LeftSideBar></div>
    <div class="right-box">
      <component :is="currentComponent"  class="add-new-test-process-page"></component>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import "./assets/main.css"
import HeaderBar from "@/components/HeaderBar.vue"
import LeftSideBar from "@/components/LeftSideBar.vue"
import addNewTestProcessPage from "@/components/AddNewTestProcessPage.vue"
import HomePage from "@/components/HomePage.vue"
import LogPage from "@/components/LogPage.vue"
import TestPage from "@/components/TestPage.vue";
import settingPage from "@/components/settingPage.vue";
import {ref, onMounted, onUnmounted, getCurrentInstance, markRaw} from 'vue'

export default {
  name: 'App',
  components: {
    addNewTestProcessPage,
    HeaderBar,
    LeftSideBar,
    HomePage,
    LogPage,
    TestPage,
    settingPage
  },
  data(){
    return {
      component: [],
      counter: 0,
    }
  },
  mounted() {
    this.emitter.on('addNewTestItem', (data) => {
      this.addNewTestItem(data)
    });
    this.emitter.on('removeTestItem', (data) => {
      //const TARGET_INDEX = this.component.findIndex(item => item.index === data)

      this.component = this.component.filter(item => item.index !== data)

    });
  },
  unmounted() {
    this.emitter.off('addNewTestItem')
  },
  methods: {
    addNewTestItem(data) {
      const TEST_DATA = {
        id: this.counter++,
        setType: data,
        index: this.counter
      }
      this.component.push(TEST_DATA)
      //console.log('the components is ', this.component)
    },
    openSettingPage(component) {
      console.log('the component is ', component)
      this.$emit('openSettingPage', component)
    }
  },
  setup(){
    const currentComponent = ref(null)
    const boxClass = ref(null)
    const instance = getCurrentInstance()
    const eventBus = instance.appContext.config.globalProperties.emitter
    const setComponent = (component) => {
      if(component !== null){
        console.log('got open setting page event', component[0])
        currentComponent.value = markRaw({
          'home': HomePage,
          'log': LogPage,
          'test': TestPage,
          'add': addNewTestProcessPage,
          'set': settingPage
        }[component[0]])
      }
    }

    onMounted(() => {
      eventBus.on('settingRightBox', setComponent);
    })

    onUnmounted(() => {
      eventBus.off('settingRightBox', setComponent);
    })

    return {
      boxClass,
      currentComponent
    }
  }
}
</script>

<style>

.add-new-test-process-page {
  width: 170vh;
  height: 95vh;
}

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

.left-bar-box{
  width: 100vh;
}


.left-bar-box {
  width: 60px;
  height:95vh;
  box-shadow: inset 10px 10px 20px 10px #ffffff, -2px -2px 1px 1px #ffffff, 4px 4px 6px 4px #d9d9d9;
}
</style>
