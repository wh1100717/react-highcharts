module.exports = {
  watch: false,
  entry: {
    demo: './demo.jsx'
  },
  module: {
    loaders: [
      {test: /\.jsx$/, loader: 'jsx?harmony'}
    ]
  },
  output: {
    filename: '[name].js'
  }
};