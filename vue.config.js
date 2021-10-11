const px2rem = require("postcss-px2rem");
// 配置postcs-px2rem
const postcss = px2rem({
  // 设计稿等分之后的值  等分的比例同页面rem的比例一致
  remUnit: 37.5, //基准大小 baseSize，需要和rem.js中单位rem值占比一样相同
});

module.exports = {
  runtimeCompiler: true,
  lintOnSave: false, //关闭Eslint规则
  css: {
    // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [postcss],
      },
    },
  },
};
/* let path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  runtimeCompiler: true,
  lintOnSave: false, //关闭Eslint规则
  configureWebpack: {
    // 当前配置需要写入该选项中
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": resolve("src"), // 设置文件查找路径，可简写文件查找路径
        components: resolve("src/components"),
      },
    },
  },
}; */
