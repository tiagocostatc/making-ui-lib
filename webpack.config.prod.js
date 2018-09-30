const pkg = require("./package.json");
let libraryName = pkg.name;
var path = require('path');

module.exports = {
    entry: './src/index',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-react','@babel/preset-env']
                }
            }
        ]
    },
    output : {
        path : __dirname + "/lib",
        filename : libraryName + '.min.js',
        library : libraryName,
        libraryTarget : "umd",
        umdNamedDefine : true
    }
}