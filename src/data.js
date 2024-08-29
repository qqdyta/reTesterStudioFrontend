/*eslint-disable*/
/*
* 测试步骤的格式是一个列表，列表的每一项都是一个对象，其中包括了步骤的描述和步骤的执行函数
* 每一步都有一个固定的ID，每次新增和删除的时候都要对数组进行更新，保证ID的唯一性
* 包括当前端的EDGE发生变化的时候也是
*
* */

import emitter from "@/main";
import { ElNotification } from 'element-plus'


class TestProcess {

    constructor() {
        this.testData = []
        this.edges = []
        emitter.on('updateProcessData', (data) => {
            console.log('updateProcessData: ', data)
            console.log('the this.testData is : ', this.testData)
            const TYPE = data.type
            console.log('the type is: ', TYPE)
            if(TYPE == 'delete'){
                this.deleteProcess(data)
            }else if( TYPE == 'save' ){
                this.updateProcess(data)
            }else if( TYPE == 'add' ){
                this.addProcess(data)
            }else if(TYPE == 'edge'){
                this.updateEdge()
            }else if(TYPE == 'submit'){
                this.submitData().then((data) => {
                    console.log('the submit data is: ', data)
                })
            }else if(TYPE == 'get'){
                console.log('is a get', data.CardIndex)
                const INDEX = data.CardIndex
                this.testData.forEach((item) => {
                    if(item['index'] == INDEX){
                        Object.keys(data.currentTestData).forEach((key) => {
                            if(item.data[key] == undefined){
                                item.data[key] = data.currentTestData[key]
                            }
                        })
                        emitter.emit('getProcessData', {cardIndex: INDEX, data: item})
                    }
                })
            }
        })
    }

    addProcess(data){
        const DATA = data.data
        this.testData.push(DATA)
        console.log('the test data is: ', this.testData)
    }

    deleteProcess(data){
        console.log('the should delete data is: ', data)
        const INDEX = data.index
        this.testData.forEach((item) => {
            if(item['index'] == INDEX){
                const INDEX = this.testData.indexOf(item)
                this.testData.splice(INDEX, 1)
            }
        })
        console.log('the test data is: ', this.testData)
    }

    updateProcess(data){
        const INDEX = data.index
        this.testData.forEach((item) => {
            if(item['index'] == INDEX){
                item['data'] = data.data
            }
        })
        console.log('the test data is: ', this.testData)
    }

    updateEdge(){

    }

    async submitData(){

        let fileData = []
        this.testData.forEach(item=>{
            if(Object.keys(item.data).length < 2 && item.setType !== 'onEnd'){
                fileData.push(item)
            }
        })

        const ALL_DATA_LENGTH = this.testData.length
        const FILE_DATA_LENGTH = fileData.length
        if(fileData.length > 0){
            ElNotification({
                type: 'warning',
                title: '有卡片没有填写信息',
                message: `有${FILE_DATA_LENGTH}个卡片没有填写信息`
            })
        }else{

            const LAST_ITEM_TYPE = this.testData[ALL_DATA_LENGTH - 1].setType
            if(LAST_ITEM_TYPE !== 'onEnd'){
                ElNotification({
                    type: 'warning',
                    title: '测试流程没有结束',
                    message: `流程的最后必须以 结束 卡片结束`
                })
            }else{
                const URL = 'http://127.0.0.1:8000/' + 'processAdd/'
                const response = await fetch(URL, {
                    method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    mode: 'cors', // no-cors, *cors, same-origin
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: 'same-origin', // include, *same-origin, omit
                    headers: {
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    redirect: 'follow', // manual, *follow, error
                    referrerPolicy: 'no-referrer', // no-referrer, *client
                    body: JSON.stringify(this.testData), // body data type must match "Content-Type" header
                });
                console.log('the response is: ', response)
                const responseData = await response.json()
                console.log('the response data is: ', responseData)
                const RESULT = responseData['result']
                RESULT ? notify_success('新增测试方案成功') : notify_warning('新增测试方案失败')
                return response; //
            }
        }
    }

    cleanUpData(){
        this.testData = []
    }
}

const TEST_PROGRESS = new TestProcess()


function notify_success(title, message = null){
    ElNotification({
        title: title,
        message: message === null ? '操作成功' : message,
        type: 'success',
    })
}

function notify_warning(title, message = null){
    ElNotification({
        title: title,
        message: message === null ? '操作失败' : message,
        type: 'warning',
    })
}



class Sender {

    constructor() {
        emitter.on('sender', (data) => {
            console.log('the sender data is: ', data)
            const TYPE = data.type
            if(TYPE == 'success'){
                this.notify_success(data.title, data.message)
            }else{
                this.notify_warning(data.title, data.message)
            }
        })
    }

    notify_warning(title, message = null){
        ElNotification({
            title: title,
            message: message === null ? '操作失败' : message,
            type: 'warning',
        })
    }

    notify_success(title, message = null){
        ElNotification({
            title: title,
            message: message === null ? '操作成功' : message,
            type: 'success',
        })
    }
}

const SENDER = new Sender()

