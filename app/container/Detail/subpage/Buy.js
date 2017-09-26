import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActionsFromFile from '../../../actions/store'
import BuyAndStore from '../../../component/BuyAndStore'
import {hashHistory} from 'react-router'

class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isStore: false
        }
    }
    render() {
        return (
            <div>
                <BuyAndStore isStore={this.state.isStore} buyHandle={this.buyHandle.bind(this)} 
                storeHandle={this.storeHandle.bind(this)}/>
            </div>
        )
    }
    componentDidMount(){
        // console.log(123, this.props.storeActions)
        this.checkStoreState()
    }
    //检查商品是否收藏
    checkStoreState(){
        const id = this.props.id;
        // console.log(id);
        const store = this.props.store;
        // console.log(store);
        //判断store中的item有没有已经收藏的和当前id一样的商品
        store.some(item=>{
            if (item.id==id) {
                this.setState({
                    isStore:true
                })
                return true
            }
        })
    }
    //购买事件
    buyHandle(){
        const loginFlag = this.loginCheck()
        if (!loginFlag) {
            return            
        }

        //购买操作
        const id = this.props.id;
        console.log(id)
        const storeActions = this.props.storeActions;
        if (this.state.isStore) {
            //被收藏则取消收藏
            storeActions.rm({id:id});
        } else{
            storeActions.add({id:id});
        }
        //修改状态
        this.setState({
            isStore:!this.state.isStore
        })
        //跳转到用户主页
        hashHistory.push("/user/"+encodeURIComponent(id))
    }
    //收藏事件
    storeHandle(){
        const loginFlag = this.loginCheck();
        if (!loginFlag) {
            return
        }

        const id = this.props.id;
        // console.log(id);
        const storeActions = this.props.storeActions;
        if (this.state.isStore) {
            //被收藏则取消收藏
            storeActions.rm({id:id});
        } else{
            storeActions.add({id:id});
        }
        //修改状态
        this.setState({
            isStore:!this.state.isStore
        })
    }
    //验证登录
    loginCheck(){
        const id = this.props.id;
        const userinfo = this.props.userinfo;
        if (!userinfo.username) {
            //如果没登录则跳转到登录页面
            hashHistory.push("/login/"+encodeURIComponent("/detail/"+id));
            return false;
        }
        return true;
    }
}
function mapStateToProps(state){
    return {
        userinfo:state.userinfo,
        store:state.store
    }
}
function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Buy)