/**
 * Revised by peter on 2018/10/27.
 */

'use strict'

import React, { Component } from "react"
import ReactDOM from "react-dom"
import {FormattedMessage} from 'react-intl'
import {Provider,observer,inject} from 'mobx-react'

import I18nProvider from './../../library/components/i18n_provider/index'
import stores from "./stores"

import './index.scss'

@inject('indexStore')
@observer
class IndexWrap extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    render() {
        let {message} = this.props.indexStore

        return (<div className="index-wrap">
        <FormattedMessage id={message}/>    
    </div>)
    }
}


ReactDOM.render(<Provider {...stores}>
    <I18nProvider>
        <IndexWrap/>
    </I18nProvider>
</Provider>,
document.getElementById('app'))


  
