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
            if(TYPE == 'remove'){
                this.deleteProcess(data)
            }else if( TYPE == 'save' ){
                this.updateProcess(data)
            }else if( TYPE == 'add' ){
                this.addProcess(data)
            }else if(TYPE == 'edge'){
                this.updateEdge()
            }
        })
    }

    addProcess(data){
        const DATA = data.data
        this.testData.push(DATA)
        console.log('the test data is: ', this.testData)
    }

    deleteProcess(data){

    }

    updateProcess(data){

    }

    updateEdge(){

    }
}

const TEST_PROGRESS = new TestProcess()
