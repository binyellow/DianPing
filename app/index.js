import React from 'react';
import {render} from 'react-dom'
import RouteMap from './router'
import { hashHistory } from 'react-router'
import configureStore from './store/configureStore.js'
import {Provider} from 'react-redux'
import './static/css/common.less'
import './static/css/font.css'

// import Perf from 'react-addons-perf'
//
// if (__DEV__) {
//     window.Perf = Perf
// }
const store = configureStore()
render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,document.getElementById('root')
)
