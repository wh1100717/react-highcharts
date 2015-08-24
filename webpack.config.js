module.exports = {
  watch: false,
  entry: {
    index: './index.jsx',
    highstock: './highstock.jsx',
    more: './more.jsx'
  },
  module: {
    loaders: [
      {test: /\.jsx$/, loader: 'jsx?harmony'}
    ]
  },
  externals: {
    'react/addons': 'react/addons',
    'react': 'react'
  },

  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'Highcharts'
  }
};