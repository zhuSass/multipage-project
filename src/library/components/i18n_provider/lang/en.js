/**
 * Revised by peter on 2018/10/27.
 */

'use strict'

import appLocaleData from 'react-intl/locale-data/en'
import messages from './json/en.json'

const appLocale = {
    locale: 'en',
    formats: {
        money: {
            currency: 'USD',
        }
    },
    data: appLocaleData,
}

appLocale.messages = messages

export default appLocale