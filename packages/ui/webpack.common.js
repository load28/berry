const path = require('path');
const webpack = require("webpack");
const { ModuleFederationPlugin } = webpack.container;

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
      },
      {
        test: /\.module\.scss$/i,
        use: [
          'style-loader', // 스타일을 DOM에 추가하는 로더
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: `@import "./src/styles.scss";`,
            },
          },
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'ui',
      filename: 'remoteEntry.js',
      exposes: {
        './LoginPage': './src/pages/login/LoginPage.tsx',
      }
    })
  ],
};
