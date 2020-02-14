
const path = require('path'); 

const HtmlWebpackPlugin = require('html-webpack-plugin')

config = {

    entry:'./src/js/index.js',
    output:{
        filename:'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode : 'development',

    module : {
        rules : [
            {
                test : /\.html$/,
                use : 'html-loader'
            },

            {
                test : /\.scss$/,
                use : ['style-loader','css-loader','sass-loader']
            }
        ]
    },

    plugins : [
        new HtmlWebpackPlugin({
            template : './src/index.html',
            filename : 'index.html'
        }),
    ]
}; 

module.exports = config; 