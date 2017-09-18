import React from 'react'
import Header from '../../component/Header'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
import UserInfo from '../../component/UserInfo'
import OrderList from './subpage/OrderList'
class User extends React.Component{
    constructor(props,state){
        super(props,state);
    }
    render(){
        const userinfo = this.props.userinfo
        // console.log(userinfo.username)
        // console.log(userinfo.cityName)
        return(
            <div>
                <Header title="用户中心" backRouter="/"/>
                <UserInfo username={userinfo.username} city={userinfo.cityName}/>
                <OrderList username={userinfo.username}/>
            </div>
        )
    }
    componentDidMount(){
        if (!this.props.userinfo.username) {
            hashHistory.push("/login")
        }
    }
}
function mapStateToProps(state){
    return {
        userinfo:state.userinfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        // userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(User)
