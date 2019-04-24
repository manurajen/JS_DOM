const path = require('path');

module.exports = {
  entry: {
    index: './index.js',
    library: './src/js/library.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname,'./public/dist')
  },
  mode: 'none',
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
      
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/dist'),
    compress: true,
    port: 9000
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};
