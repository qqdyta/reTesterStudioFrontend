/*eslint-disable*/
/*
* 测试步骤的格式是一个列表，列表的每一项都是一个对象，其中包括了步骤的描述和步骤的执行函数
* 每一步都有一个固定的ID，每次新增和删除的时候都要对数组进行更新，保证ID的唯一性
* 包括当前端的EDGE发生变化的时候也是
*
* */

import emitter from "@/main";

class TestProcess {
    constructor() {
        this.testData = []
        this.edges = []
        emitter.on('updateProcessData', (data) => {
            console.log('updateProcessData: ', data)
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
        const URL = 'http://127.0.0.1:8000/processAdd/'
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
        return response; //
    }

    cleanUpData(){
        this.testData = []
    }
}

const TEST_PROGRESS = new TestProcess()
