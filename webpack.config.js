module.exports = {
    entry: './src/canechair-utilities.js',
    output: {
        path: __dirname + '/lib',
        filename: 'canechair-utilities.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.scss/, loaders: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    }
}