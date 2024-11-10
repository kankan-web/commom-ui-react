import { merge } from "webpack-merge";
import common from "./webpack.common.js";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
const PLUGINS = [new CleanWebpackPlugin()];
export default merge(common, {
  mode: "production",
  devtool: false,
  plugins: PLUGINS,
});
