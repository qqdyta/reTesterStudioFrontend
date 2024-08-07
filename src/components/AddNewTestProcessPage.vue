<template>
  <div class="main-box">
    <add-new-test-item-box class="add-new-test-item-box"></add-new-test-item-box>
    <flowBox class="flow-box" :progress="component"></flowBox>
  </div>
</template>

<script>
import "../assets/main.css"
import addNewTestItemBox from "@/components/addTestItemComponents/AddNewTestItemBox.vue"
import flowBox from "@/components/addNewTestFlow/flowBox.vue";

export default {
  name: 'App',
  components: {
    flowBox,
    addNewTestItemBox
  },
  data(){
    return {
      component: [],
      counter: 0,
      xPosition: 250,
      yPosition: 0
    }
  },
  mounted() {
    this.emitter.on('addNewTestItem', (data) => {
      console.log('addNewTestItem', data)
      this.addNewTestItem(data)
    });
    this.emitter.on('removeTestItem', (data) => {
      console.log('removeTestItem', data)
      console.log('the components is ', this.component)
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
        index: this.counter,
        position: {x: this.xPosition , y: this.yPosition},
        type: 'output',
        data: {label: 'TestNode' + this.counter},
        class: 'light'
      }
      this.yPosition += 100
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

<style>
.main-box {
  flex: 1;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f0f0f0;
}

.add-new-test-item-box {
  position: absolute;
  width: 15%;
  z-index: 1;
}

.flow-box {
  position: absolute;
  z-index: 0;
}




</style>
