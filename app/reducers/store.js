import * as actionTypes from '../constants/store'
const initialState = []
export default function store(state=initialState,action) {
    switch (action.type) {
        case actionTypes.STORE_ADD:
            state.unshift(action.data);//把新的数据推到原始数组的前面
            return state;
        case actionTypes.STORE_UPDATE:
            return action.data;
        case actionTypes.STORE_RM:
            return state.filter(item=>{
                if (item.id!==action.data.id) {//判断state每一个目标与取消收藏的item的id是否一样 不一样则返回 不删除
                    return item
                }
            })
        default:
            return state;
    }
}