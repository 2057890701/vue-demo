const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// webpack + node 环境 - 导出配置对象
module.exports = {
  devServer: {
    port: 3000,
    host: '127.0.0.1',
    open: true, //浏览器自动打开
  },
  lintOnSave: false, // 关闭eslint检查
}
