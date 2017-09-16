import * as storeTypes from '../constants/store.js'

export function update(data){//导出默认的function只能导出一个
    return{
        type: storeTypes.STORE_UPDATE,
        data    //ES6中 = data:data
    }
}

export function add(item){
    return {
        type: storeTypes.STORE_ADD,
        data:item
    }
}

export function rm(item){
    return {
        type: storeTypes.STORE_RM,
        data: item
    }
}