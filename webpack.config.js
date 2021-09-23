const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:"development",
    plugins:[
        new htmlWebpackPlugin({
            title:"首页",
            template:'./src/index.html',
            filename:'index.html'
        })
    ]
}