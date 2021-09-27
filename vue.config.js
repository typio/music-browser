module.exports = {
  devServer: { proxy: "https://typio.github.io/" },
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
};
