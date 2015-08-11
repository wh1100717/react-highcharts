module.exports = {
    watch: true,
    entry: {
        app: './app.jsx'
    },
    module: {
        loaders: [
            {test: /\.jsx$/, loader: 'jsx?harmony'}
        ]
    },
    output: {
        path: 'dist',
        filename: '[name].js'
    }
};