const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package.json')
module.exports = defineConfig({
//   publicPath: '',
  transpileDependencies: ['common'],
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
  devServer: {
    port: 7777,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
})
