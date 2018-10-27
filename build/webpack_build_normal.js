/**
 * Revised by peter on 2018/10/27.
 */

'use strict'

const webpack = require('webpack')
const webpackConfig = require('./webpack_server_normal_config')

webpack(webpackConfig, function (err, status) {
    if (err) {
        throw err
    }
})