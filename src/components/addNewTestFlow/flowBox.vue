<script setup>
/* eslint-disable */
import {ref, getCurrentInstance, onMounted, markRaw} from 'vue'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { MiniMap } from '@vue-flow/minimap'
import StartNode from "@/components/addNewTestFlow/flowNodes/startNode.vue"
import emitter from "@/main";
const { onInit, onNodeDragStop, onConnect, addEdges, onNodeClick, addNodes } = useVueFlow()

const dark = ref(false)
const nodeTypes = {
  start: markRaw(StartNode)
}






onInit((vueFlowInstance) => {
  // instance is the same as the return of `useVueFlow`
  vueFlowInstance.fitView()
})


onNodeDragStop(({ event, nodes, node }) => {
  console.log('Node Drag Stop', { event, nodes, node })
})

const initialNodes = ref([])
const initialEdges = ref([])
onMounted(()=> {
  emitter.on('addNewTestProgress', (data) => {
    console.log('addNewTestProgress', data)
    initialNodes.value = [...initialNodes.value, data]
    console.log('the node is ', initialNodes.value)
    addNodes(data)
    console.log('the data is ', data)
    if(data.id > 0){
      initialEdges.value.push({
        id: ( data.id - 1 ) + '_2_'+data.id,
        source: (data.id - 1).toString(),
        target: data.id.toString()
      })
      console.log('the edges is ', initialEdges.value)
    }
  })
})

const openSettings = (component) => {
  emitter.emit('openSettingPage', [component.setType, component.index])
}


const steps = defineProps({
  progress: {
    type: Array,
    default: ()=>{
      return []
    }
  }
})

const nodes = ref(steps.progress)

onNodeClick((node) => {
  console.log('Node Click', node.node)
  console.log('the setting is ', node.node.setType)
  openSettings({'setType': node.node.setType,'index': node.node.index})
})

onConnect((connection) => {
  addEdges(connection)
})

</script>
<template>
  <VueFlow
      :nodes="initialNodes"
      :class="{ dark }"
      :edges="initialEdges"
      class="basic-flow"
      :default-viewport="{ zoom: 1.5 }"
      :min-zoom="0.2"
      :max-zoom="4"
      :nodeTypes="nodeTypes"
      :on-node-click="onNodeClick"
  >
    <Background />
    <MiniMap class="mini-map"/>
  </VueFlow>
</template>
<style scoped>
@import '@vue-flow/core/dist/style.css';
.basic-flow.dark {
  background:#2d3748;
  color:#fffffb
}

.mini-map{
  position:absolute;
  margin: 0px;
  padding: 0px;
  right:0;
  bottom:20px;
  width:200px;
  height:100px;
  border-radius:5px;
  background:#fffffb

}

.basic-flow.dark .vue-flow__node {
  background:#4a5568;
  color:#fffffb
}

.basic-flow.dark .vue-flow__node.selected {
  background:#333;
  box-shadow:0 0 0 2px #2563eb
}

.basic-flow .vue-flow__controls {
  display:flex;
  flex-wrap:wrap;
  justify-content:center
}

.basic-flow.dark .vue-flow__controls {
  border:1px solid #FFFFFB
}

.basic-flow .vue-flow__controls .vue-flow__controls-button {
  border:none;
  border-right:1px solid #eee
}

.basic-flow .vue-flow__controls .vue-flow__controls-button svg {
  height:100%;
  width:100%
}

.basic-flow.dark .vue-flow__controls .vue-flow__controls-button {
  background:#333;
  fill:#fffffb;
  border:none
}

.basic-flow.dark .vue-flow__controls .vue-flow__controls-button:hover {
  background:#4d4d4d
}

.basic-flow.dark .vue-flow__edge-textbg {
  fill:#292524
}

.basic-flow.dark .vue-flow__edge-text {
  fill:#fffffb
}
</style>
