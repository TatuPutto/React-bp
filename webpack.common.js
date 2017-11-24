const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        /*new CleanWebpackPlugin(['dist']),
        /new HtmlWebpackPlugin({
            title: 'Common'
        })*/
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: [
                        'react-html-attrs',
                        'transform-class-properties',
                        'transform-decorators-legacy'
                    ],
                },
        },
        {test: /\.html$/, loader: 'file-loader?name=[name].[ext]'},
        {test: /\.css$/, loader: 'style-loader!css-loader'},
        {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
        {test: /\.json$/, loader: 'json-loader'}
    ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
