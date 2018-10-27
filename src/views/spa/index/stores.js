  
/**
 * Revised by peter on 2018/10/27.
 */

'use strict'

import { observable } from 'mobx'

import pageinitStore from './../../../stores/pageinit' // 页面初始化store data

class SpanIndexStore {
    @observable message = '单页面首页'
}

const stores = {
    pageinitStore,
    spanIndexStore: new SpanIndexStore(),
}

// For easier debugging
window._____APP_STATE_____ = stores;

export default stores