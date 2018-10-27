/**
 * Revised by peter on 2018/10/27.
 */

'use strict'

import appLocaleData from 'react-intl/locale-data/zh'
import messages from './json/zh.json'

const appLocale = {
    locale: 'zh',
    formats: {
        money: {
            currency: 'CNY',
        }
    },
    data: appLocaleData,
}

appLocale.messages = messages

export default appLocale