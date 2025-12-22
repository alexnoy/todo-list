 const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'development',
   module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },        
      ],
    },
   devtool: 'inline-source-map',
   devServer: {
     static: './dist',
     watchFiles: ['./src/template.html', './src/style.css'],
   },
 });