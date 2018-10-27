/**
 * Revised by PETER on 2018/10/27.
 */

'use strict'

/** Server Environment Config **/
let node_custom_env
if (process.env.NODE_CUSTOM_ENV !== 'production' && process.env.NODE_CUSTOM_ENV !== 'staging') {
    node_custom_env = 'development'
} else {
    node_custom_env = process.env.NODE_CUSTOM_ENV
}
exports.node_custom_env = node_custom_env
exports.node_app_name = 'multipage-project'
exports.pc_html_file_names = ['']

/**
 * Clientweb API Domain Config
 */
if (node_custom_env === 'production') {
    exports.node_api_host = 'http://xxx.cn'
    exports.node_api_port = 80
    exports.node_api_router = ''
}
else if (node_custom_env === 'staging') {
    exports.node_api_host = 'http://xxx.cn'
    exports.node_api_port = 80
    exports.node_api_router = ''
}
else {
    exports.node_api_host = 'http://xxx.cn'
    exports.node_api_port = 80
    exports.node_api_router = ''
}

/**
 * Clientweb Hosting Domain Config
 */
if (node_custom_env === 'production') {
    exports.node_web_file_path = './public/production/'
}
else if (node_custom_env === 'staging') {
    exports.node_web_file_path = './public/staging/'
}
else {
}


