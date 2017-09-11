import React from 'react'
import {connect} from 'react-redux'
import Header from '../../component/Header'

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
                    :<div>请先登录</div>
                }
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        userinfo:state.userinfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        update:(city)=>{
            dispatch(update(city))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)
