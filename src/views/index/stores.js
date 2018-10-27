/**
 * Revised by peter on 2018/10/27.
 */

'use strict'

import { observable } from 'mobx'
import pageinitStore from './../../stores/pageinit' // 页面初始化store data

class IndexStore {
    @observable message = '首页'
}

const stores = {
    pageinitStore,
    indexStore: new IndexStore(),
}

// For easier debugging
window._____APP_STATE_____ = stores;

export default stores