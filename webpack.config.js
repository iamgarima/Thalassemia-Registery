const path = require('path');
const webpack = require('webpack');

//const prod = process.argv.indexOf('-p') !== -1;

const config = {
  entry: ['./public/app/main.js'],
  output: {
    path: path.resolve('./build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-3']
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader : 'file-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};


// config.plugins = config.plugins||[];
// if (prod) {
//   config.plugins.push(new webpack.DefinePlugin({
//       process: {
//         env: {
//           NODE_ENV: JSON.stringify("production")
//         }
//       }
//   }));
//   config.plugins.push(new webpack.optimize.UglifyJsPlugin({
//       compress: { warnings: false }
//   }));
// } else {
//   config.plugins.push(new webpack.DefinePlugin({
//       process: {
//         env: {
//           NODE_ENV: JSON.stringify("")
//         }
//       }
//   }));
// }

module.exports = config;
