import { createApp, warn } from 'vue'
import App from './App.vue'
import mitt from 'mitt';
import { reactive } from "vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'



const app = createApp(App)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}


// Filter out the specific warning message
warn.__proto__.filter = (msg) => {
    if (msg.includes('Vue received a Component that was made a reactive object')) {
        return false;
    }
    return true;
};


const emitter = mitt();
export default emitter
app.config.globalProperties.emitter = emitter;


const testItemSettingData = reactive({
    stepName: '',
    stepDescription: '',
    stepMessage: '',
    valueData:{}
})
app.config.globalProperties.testItemSettingData = testItemSettingData




const TEST_ITEM_DICT = {
    'voltage':  {color: 'var(--color-dmm)', title: '电压测试'},
    'current':  {color: 'var(--color-dmm)', title: '电流测试'},
    'dmmConfig': {color: 'var(--color-dmm)', title: 'DMM设置'},
    'oscilloscope':  {color: 'var(--color-oscilloscope)', title: '示波器设置'},
    'oscGetWave':  {color: 'var(--color-oscilloscope)', title: '测试波形'},
    'oscGetDelta':  {color: 'var(--color-oscilloscope)', title: '测试纹波'},
    'ethernet':  {color: 'var(--color-ethernet)', title: '以太网'},
    'serialPort':  {color: 'var(--color-serial)', title: '串口'},
    'wait': {color: 'var(--color-wait)', title: '等待'},
    'powerSupplySet':{color: 'var(--color-power-supply)', title: '电源设置'},
    'powerSupplyOn':{color: 'var(--color-power-supply)', title: '电源开启'},
    'powerSupplyOff':{color: 'var(--color-power-supply)', title: '电源关闭'},
    'load': {color: 'var(--color-load)', title: '负载设置'},
    'loadOn': {color: 'var(--color-load)', title: '负载开启'},
    'loadOff': {color: 'var(--color-load)', title: '负载关闭'},
    'onStart': {color: 'var(--color-start)', title: '测试开始'},
    'onEnd': {color: 'var(--color-end)', title: '测试结束'},
}
app.config.globalProperties.$testItemDict = TEST_ITEM_DICT
app.provide('$testItemDict', TEST_ITEM_DICT);

let testItemProcess = []
app.config.globalProperties.$testProcess = testItemProcess


app.mount('#app')
require('./data')
