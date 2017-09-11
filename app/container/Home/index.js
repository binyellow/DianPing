import React from 'react'
import {Link} from 'react-router'
import HomeHeader from '../../component/HomeHeader'
import Category from '../../component/Category'
import AD from './subpage/AD.js'
import {connect} from 'react-redux'
import List from './subpage/List.js'
//<Link to='/list'>to List</Link>
class Home extends React.Component{
    render(){
        return(
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <Category/>
                <div style={{height:'15px'}}></div>
                <AD/>
                <List cityName={this.props.userinfo.cityName}/>

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
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
