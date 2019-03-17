module.exports = {
    entry: './client/index.js',
    output: {
        path: __dirname,
        filename: './client/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                loader: 'babel-loader'
            }
        ]
    }
}