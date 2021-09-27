module.exports = {
  devServer: {
    proxy: {
      "/V1": {
        target: "http://localhost:8080",
        changeOrigin: true,
        pathRewrite: {
          "^/V1": "",
        },
      },
      "/V2": {
        target: "https://typio.github.io/music-browser/",
        changeOrigin: true,
        pathRewrite: {
          "^/V2": "",
        },
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
};
