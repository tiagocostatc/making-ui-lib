var path = require('path');

module.exports = {
    context: path.join(__dirname, "src"),
    entry: './client.js',
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
    output: {
        path: __dirname + "/public/",
        filename: "client.min.js"
    }
};