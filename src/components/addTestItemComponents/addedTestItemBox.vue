<template>
  <div class="box">
      <div class="title">
        已添加测试项目
      </div>
      <div class="main" v-for="(component, index) in components" :key="component.id">
        <addTestItemCard :setType="component.setType" :hasbeenAdded="true" :index="index" @click="openSettings(component)"></addTestItemCard>
      </div>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue';
import addTestItemCard from "@/components/addTestItemComponents/addTestItemCard.vue";

export default {
  name: 'addedNewTestItemBox',
  components: {
    addTestItemCard
  },
  data() {
    return {
      components: [],
      counter: 0,
    };
  },
  setup() {
    const instance = getCurrentInstance()
    const openSettings = (component) => {
      const eventBus =instance.appContext.config.globalProperties.emitter
      console.log('the index is ', component.index)
      console.log('the id is ', component.id)
      eventBus.emit('openSettingPage', [component.setType, component.index])
    }
    return {
      openSettings,
    }
  },

  mounted() {
    this.emitter.on('addNewTestItem', (data) => {
      this.addNewTestItem(data)
    });
    this.emitter.on('removeTestItem', (data) => {
      console.log('removeTestItem', data)
      this.components = this.components.filter(item => item.index !== data)

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
      this.components.push(TEST_DATA)
      console.log('the components is ', this.components)
    },
    openSettingPage(component) {
      console.log('the component is ', component)
      this.$emit('openSettingPage', component)
    },

  }
}
</script>

<style scoped>
.box {
  margin: 15px;
  width: 300px;
  height: 88vh;
  background-color: #f1f2f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: inset 4px 4px 8px 4px #d9d9d9, inset -4px -4px 8px 4px #ffffff, -4px -4px 4px 4px #f3f3f3;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  height: 6vh;
}
</style>