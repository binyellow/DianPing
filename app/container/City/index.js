import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {update} from '../../actions/userinfo.js'
import Header from '../../component/Header'
import CurrentCity from '../../component/CurrentCity'
import CityList from '../../component/CityList'
import {CITYNAME} from '../../config/localStoreKey.js'
import LocalStore from '../../util/localStore.js'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList changeFn={this.changeCity.bind(this)}/>
            </div>
        )
    }
    changeCity(newCity){
        if (newCity==null) {
            return
        }
        //修改Redux
        const userinfo = this.props.userinfo
        userinfo.cityName = newCity
        this.props.update(userinfo)
        //修改localStorage
        localStorage.setItem(CITYNAME,newCity)
        window.history.back()
    }
    // componentDidMount(){
    //     console.log(this.props.userinfo);
    //     console.log(this.props.update);
    // }
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
export default connect(mapStateToProps,mapDispatchToProps)(City)
