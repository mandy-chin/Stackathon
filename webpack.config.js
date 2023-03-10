const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};


// module.exports = {
//   entry: './src/index.js',
//   mode: 'development',
//   output: {
//     path: __dirname + '/public',
//     filename: "bundle.js"
//   },
//   target: 'web',
//   devServer: {
//     port: '3000',
//     static: {
//       directory: path.join(__dirname, 'public')
// },
//     open: true,
//     hot: true,
//     liveReload: true,
//   },
  // resolve: {
  //   extensions: ['.js', '.jsx', '.json'],
  // },
  // module: {
  //   rules: [
  //     {
  //       test: /\.(js|jsx)$/, 
  //       exclude: /node_modules/, 
  //       use: 'babel-loader', 
  //     },
  //     {
  //       test: /\.css$/i,
  //       use: ['style-loader', 'css-loader', 'postcss-loader'],
  //     },
  //   ],
  // },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: path.join(__dirname, 'public', 'index.html')
  //   })
  // ]
// };