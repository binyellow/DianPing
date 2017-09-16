import React from 'react'
import Header from '../../component/Header'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'
class User extends React.Component{
    constructor(props,state){
        super(props,state);
    }
    render(){
        return(
            <div>
                <Header title="用户中心" backRouter="/"/>
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
