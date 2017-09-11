import React from 'react'
import './style.less'
import {Link,hashHistory} from 'react-router'
import SearchInput from '../SearchInput'
class HomeHeader extends React.Component{
    constructor(props,state){
        super(props,state);
        
    }
    render(){
        return(
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                        <span>{this.props.cityName}</span>
                        &nbsp;
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <Link to="/login">
                        <i className="icon-user"></i>
                    </Link>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
    enterHandle(value){
        hashHistory.push('/search/all/'+encodeURIComponent(value))
    }
}
export default HomeHeader
