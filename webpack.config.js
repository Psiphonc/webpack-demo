const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "index.html"
});
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const vuePlugin = new VueLoaderPlugin();
module.exports = {
  mode: "development",
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js"
  },
  plugins: [htmlPlugin, vuePlugin],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
        //limit用来设置字节数，只有小于limit值的图片，才会转换
        //为base64图片
        use: "url-loader?limit=16950"
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        //exclude为排除项，意思是不要处理node_modules中的js文件
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      }
    ]
  }
};
