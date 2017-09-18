import React from 'react'
import {CITYNAME} from '../config/localStoreKey.js'
import LocalStore from '../util/localStore.js'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userInfoActionsFromOtherFile from '../actions/userinfo.js'

class APP extends React.Component{
    constructor(props,state){
        super(props,state);
        this.state={
            initDone:false
        }
    }
    render(){
        return(
            <div>{
                this.state.initDone?this.props.children:<div>加载中</div>
            }</div>
        )
    }
    componentDidMount(){
        let cityName = LocalStore.getItem(CITYNAME);
        if (cityName == null) {
            cityName='北京'
        }
        // console.log(cityName);
        this.props.userInfoActions.update({cityName:cityName})
        this.setState({
            initDone:true
        })
    }
}
function mapStateToProps(state){
    return {

    }
}
function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(APP)
