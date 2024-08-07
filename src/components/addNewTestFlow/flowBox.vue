<script setup>
/* eslint-disable */
import { ref } from 'vue'
import { VueFlow, useVueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { MiniMap } from '@vue-flow/minimap'
import { initialEdges, initialNodes } from './initial-elements.js'
import Icon from './IconBox.vue'

const { onInit, onNodeDragStop, onConnect, addEdges } = useVueFlow()

const nodes = ref(initialNodes)
const edges = ref(initialEdges)


// our dark mode toggle flag
const dark = ref(false)


onInit((vueFlowInstance) => {
  // instance is the same as the return of `useVueFlow`
  vueFlowInstance.fitView()
})


onNodeDragStop(({ event, nodes, node }) => {
  console.log('Node Drag Stop', { event, nodes, node })
})

const steps = defineProps({
  progress: {
    type: Array,
    default: ()=>{
      return [{  id: '1',
        type: 'input',
        data: { label: 'Node 1' },
        position: { x: 250, y: 0 }
      }]
    }
  }
})

onConnect((connection) => {
  addEdges(connection)
})

</script>


<template>
  <VueFlow
      :nodes="steps.progress"
      :class="{ dark }"
      class="basic-flow"
      :default-viewport="{ zoom: 1.5 }"
      :min-zoom="0.2"
      :max-zoom="4"
  >
    <Background />

    <MiniMap />


  </VueFlow>
</template>
<style scoped>
@import '@vue-flow/core/dist/style.css';
.basic-flow.dark {
  background:#2d3748;
  color:#fffffb
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
