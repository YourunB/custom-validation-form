import path from 'path';

export default {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    publicPath: '/',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.module\.s[ac]ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/,
        exclude: /\.module\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },      
    ],
  },
  devServer: {
    static: {
      directory: path.join('dist'),
    },
    compress: true,
    port: 3000,
    open: true,
  },
};
