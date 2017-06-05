module.exports = {
  entry: './src/js/index.js',
  output: {
    path: __dirname + '/outbak',
    filename: 'bundle.js'

  },

  module: {
    loaders:[
      { 
        test: /\.css$/, 
        loader: 'style-loader!css-loader' 
      },
    ]
  }

}