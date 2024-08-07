
<template>
  <div class="header-box"><HeaderBar></HeaderBar></div>
  <div class="downer">
    <div class="left-bar-box"><LeftSideBar></LeftSideBar></div>
    <div class="right-box">
      <add-new-test-process-page class="add-new-test-process-page"></add-new-test-process-page>
    </div>
  </div>

</template>

<script>
import "./assets/main.css"
import HeaderBar from "@/components/HeaderBar.vue"
import LeftSideBar from "@/components/LeftSideBar.vue"
import addNewTestProcessPage from "@/components/AddNewTestProcessPage.vue";
export default {
  name: 'App',
  components: {
    addNewTestProcessPage,
    HeaderBar,
    LeftSideBar,
  },
  data(){
    return {
      component: [],
      counter: 0,
    }
  },
  /*(setup() {
    const currentComponent = ref(null)
    const currentIndex = ref(0)
    const instance = getCurrentInstance()
    const eventBus = instance.appContext.config.globalProperties.emitter
    const setComponent = (component) => {
      if(component !== null){
        console.log('got open setting page event', component)
        currentIndex.value = component[1]
        currentComponent.value = {
          'voltage': VoltageTestItemSettingBox,
          'current': CurrentTestItemSettingBox,
          'dmmConfig': LoadTestItemSettingBox,
          'oscGetWave': OscGetWave,
          'loadOn': loadOnSettingBox,
          'loadOff': loadOffSettingBox,
          'powerSupplyOn': powerSupplyOnSettingBox,
          'powerSupplyOff': powerSupplyOffSettingBox,
          'wait': WaitTestItemSettingBox,
          'serialPort': SerialTestItemSettingBox,
          'ethernet': EthernetTestItemSettingBox,
        }[component[0]]
      }else{
        currentComponent.value = null
      }
    }
    onMounted(() => {
      eventBus.on('openSettingPage', setComponent);
    })

    onUnmounted(() => {
      eventBus.off('openSettingPage', setComponent);
    })

    return {
      currentComponent,
      currentIndex
    }
  },*/
  mounted() {
    this.emitter.on('addNewTestItem', (data) => {
      console.log('addNewTestItem', data)
      this.addNewTestItem(data)
    });
    this.emitter.on('removeTestItem', (data) => {
      console.log('removeTestItem', data)
      console.log('the components is ', this.component)
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
      console.log('the components is ', this.component)
    },
    openSettingPage(component) {
      console.log('the component is ', component)
      this.$emit('openSettingPage', component)
    }
  }
}
</script>


<!--
<template>
  <div class="header-box"><HeaderBar></HeaderBar></div>
  <div class="downer">
    <div class="left-bar-box"><LeftSideBar></LeftSideBar></div>
    <div class="main-box"><addNewTestItemBox></addNewTestItemBox></div>
    <div class="main-box"><addedTestItemBox :component="this.component" :counter="this.counter"></addedTestItemBox></div>
    <div class="main-box"><TestItemSettingBox></TestItemSettingBox></div>
  </div>

</template>

<script>
import "./assets/main.css"
import HeaderBar from "@/components/HeaderBar.vue"
import addNewTestItemBox from "@/components/addTestItemComponents/AddNewTestItemBox.vue"
import addedTestItemBox from "@/components/addTestItemComponents/addedTestItemBox.vue";
import LeftSideBar from "@/components/LeftSideBar.vue"
import TestItemSettingBox from "@/components/addTestItemComponents/TestItemSettingBox.vue"
export default {
  name: 'App',
  components: {
    TestItemSettingBox,
    HeaderBar,
    addNewTestItemBox,
    LeftSideBar,
    addedTestItemBox
  },
  data(){
    return {
      component: [],
      counter: 0,
    }
  },
  /*(setup() {
    const currentComponent = ref(null)
    const currentIndex = ref(0)
    const instance = getCurrentInstance()
    const eventBus = instance.appContext.config.globalProperties.emitter
    const setComponent = (component) => {
      if(component !== null){
        console.log('got open setting page event', component)
        currentIndex.value = component[1]
        currentComponent.value = {
          'voltage': VoltageTestItemSettingBox,
          'current': CurrentTestItemSettingBox,
          'dmmConfig': LoadTestItemSettingBox,
          'oscGetWave': OscGetWave,
          'loadOn': loadOnSettingBox,
          'loadOff': loadOffSettingBox,
          'powerSupplyOn': powerSupplyOnSettingBox,
          'powerSupplyOff': powerSupplyOffSettingBox,
          'wait': WaitTestItemSettingBox,
          'serialPort': SerialTestItemSettingBox,
          'ethernet': EthernetTestItemSettingBox,
        }[component[0]]
      }else{
        currentComponent.value = null
      }
    }
    onMounted(() => {
      eventBus.on('openSettingPage', setComponent);
    })

    onUnmounted(() => {
      eventBus.off('openSettingPage', setComponent);
    })

    return {
      currentComponent,
      currentIndex
    }
  },*/
  mounted() {
    this.emitter.on('addNewTestItem', (data) => {
      console.log('addNewTestItem', data)
      this.addNewTestItem(data)
    });
    this.emitter.on('removeTestItem', (data) => {
      console.log('removeTestItem', data)
      console.log('the components is ', this.component)
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
      console.log('the components is ', this.component)
    },
    openSettingPage(component) {
      console.log('the component is ', component)
      this.$emit('openSettingPage', component)
    }
  }
}
</script>
-->

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
