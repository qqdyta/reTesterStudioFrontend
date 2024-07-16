<template>
  <div class="box">
      <div class="title">
        已添加测试项目
      </div>
      <div class="main" v-for="(item, index) in component" :key="item.id">
        <addTestItemCard :setType="item.setType" :hasbeenAdded="true" :index="index" @click="openSettings(item)"></addTestItemCard>
      </div>
  </div>
</template>

<script>
import addTestItemCard from "@/components/addTestItemComponents/addTestItemCard.vue";
import {getCurrentInstance} from "vue";

export default {
  name: 'addedNewTestItemBox',
  components: {
    addTestItemCard
  },
  props: {
    component: [],
    counter: {
      default:0
    }
  },
  watch: {
    component: {
      handler: function (val) {
        console.log('the child component is ', val)
      },
      deep: true
    }
  },
  setup() {
    const instance = getCurrentInstance()
    const openSettings = (component) => {
      const eventBus =instance.appContext.config.globalProperties.emitter
      eventBus.emit('openSettingPage', [component.setType, component.index])
    }
    return {
      openSettings,
    }
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