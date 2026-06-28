import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const filename = fileURLToPath(import.meta.url);
const __dirname = dirname(filename);

export default {
  mode: 'development',
  target: 'web',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'), // папка, где лежит index.html
    },
    port: 8080,
    open: true,
    hot: true,
  },
};
