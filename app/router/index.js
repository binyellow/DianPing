import {Router,Route,IndexRoute} from 'react-router'
import React from 'react'
import APP from '../container'
import Detail from '../container/Detail'
import Home from '../container/Home'
import List from '../container/List'
import NotFound from '../container/NotFound'
import City from '../container/City'
import Search from '../container/Search'
import Login from '../container/Login'
import User from '../container/User'
//<Route path="/list" component={List}></Route>
class RouteMap extends React.Component{
    render(){
        return(
            <Router history={this.props.history}>
                <Route path="/" component={APP}>
                    <IndexRoute component={Home}></IndexRoute>
                    <Route path='/city' component={City}/>
                    <Route path="/search/:category(/:keyword)" component={Search}/>
                    <Route path="/detail/:id" component={Detail}></Route>
                    <Route path="/login(/:router)" component={Login}/>
                    <Route path="/user(/:id)" component={User}/>
                    <Route path="*" component={NotFound}></Route>
                </Route>
            </Router>
        )
    }
}
export default RouteMap
