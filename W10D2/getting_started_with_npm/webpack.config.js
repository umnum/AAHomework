var path = require('path');

module.exports = {
    entry: "./entry.jsx",
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
            }
        ]
    },
    output: {
        path: path.resolve(__dirname),
        filename: "bundle.js"
    }
}