/**
 * Revised by peter on 2018/10/27.
 */

'use strict'

import React, {Component} from "react"

import  {Provider,observer,inject} from 'mobx-react'

import I18nProvider from './../../../library/components/i18n_provider/index'
import history from './../../../library/history/index'
import stores from "./stores"

import './index.scss'

@inject('pageinitStore')
@inject('spanIndexStore')
@observer
class SpaIndexWrap extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {formatMessage} = this.props.pageinitStore.intl
        let {message} = this.props.spanIndexStore

        return <div className={'spanindex-wrap'}>
            {formatMessage({id: message,})}
        </div>
    }
}

export default class RechargeWrap extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Provider {...stores}>
            <I18nProvider>
                <SpaIndexWrap/>
            </I18nProvider>
        </Provider>
    }
}


