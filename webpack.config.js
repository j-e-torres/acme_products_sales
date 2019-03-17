module.exports = {
    entry: './client/index.js',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
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