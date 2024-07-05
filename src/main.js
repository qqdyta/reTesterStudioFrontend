import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt';
import { reactive } from "vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const emitter = mitt();
const app = createApp(App)
app.use(ElementPlus)
const testItemSettingData = reactive({
    stepName: '',
    stepDescription: '',
    stepMessage: '',
    valueData:{}
})

app.config.globalProperties.testItemSettingData = testItemSettingData


const testItemDict = {
    'voltage':  {color: 'var(--color-voltage)', title: '电压测试'},
    'current':  {color: 'var(--color-current)', title: '电流测试'},
    'oscilloscope':  {color: 'var(--color-oscilloscope)', title: '示波器'},
    'ethernet':  {color: 'var(--color-ethernet)', title: '以太网'},
    'serialPort':  {color: 'var(--color-serial)', title: '串口'},
    'wait': {color: 'var(--color-wait)', title: '等待'},
    'powerSupply':{'color': 'var(--color-power-supply)', title: '数字电源'},
    //'dmmConfig': {'color': 'var(--color-load)', title: '电子负载'},
    //'OSCConfig': {'color': 'var(--color-load)', title: '电子负载'},

    'load': {'color': 'var(--color-load)', title: '电子负载'}
}

app.config.globalProperties.$testItemDict = testItemDict
app.config.globalProperties.emitter = emitter;
app.mount('#app')
