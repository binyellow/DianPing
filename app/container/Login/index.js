import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../../component/Header'
import {hashHistory} from 'react-router'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import LoginComponent from '../../component/Login'

class Login extends React.Component{
    constructor(props,state){
        super(props,state);
        this.state = {
            checking:true
        }
    }
    render(){
        return(
            <div>
                <Header title="登录"/>
                {
                    this.state.checking
                    ?<div>{this.props.userinfo.cityName}</div>
                    :<LoginComponent loginHandle={this.loginHandle.bind(this)}/>
                }
            </div>
        )
    }
    componentDidMount(){
        this.doCheck()
    }
    //登录之后页面跳转操作
    loginHandle(username){
        const actions = this.props.userInfoActions;
        let userinfo = this.props.userinfo;
        userinfo.username = username;
        actions.update(userinfo);//更新用户信息
        //跳转操作
        const params = this.props.params;
        const router = params.router;
        if (router) {
            hashHistory.push(router)
        } else {
            this.goUserPage()
        }
    }
    doCheck(){
        const userinfo = this.props.userinfo;
        if (userinfo.username) {
            //已经登录
            this.goUserPage()
        } else {
            this.setState({
                checking:false
            })
        }
    }
    goUserPage(){
        hashHistory.push("/user")
    }
}
function mapStateToProps(state){
    return {
        userinfo:state.userinfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)
