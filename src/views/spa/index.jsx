/**
 * Revised by peter on 2018/10/27.
 */

'use strict'

import React, { Component } from "react"
import ReactDOM from "react-dom"
import {
    Router,
    Route,
    withRouter,
} from 'react-router-dom'
import Loadable from 'react-loadable'

import history from './../../library/history/index'
import * as tools from './../../library/tools/index'

// 异步加载封装
const LoadIndexWrap = Loadable({ // 首页
    loader: () => import('./index/index'),
    loading: () => null,
})

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
                <Route exact path="/" component={LoadIndexWrap}/>
        </div>
    }
}

const WithRouterComponent = withRouter(App)

class SpaWrap extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <Router  history={history}>
            <WithRouterComponent/>
        </Router>
    }
}

ReactDOM.render(<SpaWrap/>,
    document.getElementById('app'))