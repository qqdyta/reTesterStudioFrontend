<script setup>
/* eslint-disable */
import {ref, onMounted, markRaw} from 'vue'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { MiniMap } from '@vue-flow/minimap'
import StartNode from "@/components/addNewTestFlow/flowNodes/startNode.vue"
import FinshNode from "@/components/addNewTestFlow/flowNodes/finishNode.vue"
import TestNode from "@/components/addNewTestFlow/flowNodes/testNode.vue"
import emitter from "@/main";
const { onInit, onNodeDragStop, onConnect, addEdges, onNodeClick, addNodes, removeNodes, findNode, getEdges } = useVueFlow()
const dark = ref(false)
const nodeTypes = {
  start: markRaw(StartNode),
  finish: markRaw(FinshNode),
  test: markRaw(TestNode)
}

let last_add_node_id = -1

onInit((vueFlowInstance) => {
  // instance is the same as the return of `useVueFlow`
  vueFlowInstance.fitView()
})

const initialNodes = ref([])
const initialEdges = ref([])

onMounted(()=> {
  emitter.on('addNewTestProgress', (data) => {
    initialNodes.value = [...initialNodes.value, data]
    last_add_node_id = data.id
    addNodes(data)
    let edge = null
    if(data.id > 0){
      /*let source_node_id = last_add_node_id === -1 ? 0 : last_add_node_id - 1*/
      edge = {
        id: ( data.id - 1 ) + '_2_'+data.id,
        source: (data.id - 1).toString(),
        target: data.id.toString()
      }
      initialEdges.value.push(edge)
    }
    emitter.emit('updateProcessData', {type: 'add', data: data, edges:edge })
  })

  emitter.on('removeTestItem', (data) => {
    initialNodes.value.forEach((item, index) => {
      if(item.index === data){
        //initialNodes.value = initialNodes.value.filter(item => item.index !== data)
        const SHOULD_DELETE_NODE = findNode((item.id).toString())
        removeNodes(SHOULD_DELETE_NODE)
      }
    })

    initialEdges.value = initialEdges.value.filter(item => (item.source).toString() !== (data - 1).toString() && item.target !== (data - 1).toString())
  })

  emitter.on('loadTestStep', (data) => {
    console.log('the data is ', data)
    initialNodes.value = []
    initialEdges.value = []
    emitter.emit('updateProcessData', {type: 'load', processID: data.id, testStep: data.testStep, testEdge: data.edges})
    for (let i = 0; i < data.testStep.length; i++) {
      initialNodes.value = [...initialNodes.value,  data.testStep[i]]
      last_add_node_id =  data.testStep[i].id
      addNodes(data.testStep[i])
    }
    for (let i=0; i < data.edges.length; i++){
      initialEdges.value.push(data.edges[i])
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

  openSettings({'setType': node.node.setType,'index': node.node.index})
})

onConnect((connection) => {
  console.log('add New Edge', connection)
  initialEdges.value.push({
    id: connection.source + '_2_' + connection.target,
    source: connection.source,
    target: connection.target
  })
  emitter.emit('updateProcessData', {type: 'edges', edges:{
      id: connection.source + '_2_' + connection.target,
      source: connection.source,
      target: connection.target
    }})
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
