/**
 * Revised by peter on 2018/10/27.
 */

'use strict'

// 获取客户端语言
export const getClientLang = function getClientLang() {
    let currentLang = navigator.language // 判断除IE外其他浏览器使用语言
    if(!currentLang) { // 判断IE浏览器使用语言
        currentLang = navigator.browserLanguage
    }
    return currentLang
}