// 'use strict'
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

const isProduction = process.env.NODE_ENV === 'production'
// const cdn = {
//   css: [],clear

//   js: [
//     'https://cdn.bootcss.com/vue/2.6.1/vue.runtime.min.js',
//     'https://cdn.bootcss.com/vue-router/3.2.0/vue-router.min.js',
//     'https://cdn.bootcss.com/vuex/3.6.2/vuex.min.js',
//     'https://cdn.bootcss.com/axios/0.21.1/axios.min.js',
//   ],
// }

module.exports = {
  // mode: process.env.NODE_ENV,
  publicPath: './',
  outputDir: 'dist',
  productionSourceMap: true,
  configureWebpack: (config) => {
    config.entry.app = './src/main.ts' //入口文件
    if (isProduction) {
      console.log(isProduction, 'isProduction')
      // 用cdn方式引入
      // config.externals = {
      //   vue: 'Vue',
      //   vuex: 'Vuex',
      //   'vue-router': 'VueRouter',
      //   axios: 'axios',
      // }
      config.mode = 'production'

      //打包文件大小配置
      config['performance'] = {
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000,
      }
    }
  },

  chainWebpack: (config) => {
    // 路径别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@image', resolve('src/assets/image'))

    // 修复热更新模块
    config.resolve.symlinks(true)
    // 生产环境注入cdn
    config.plugin('html').tap((args) => {
      // args[0].cdn = cdn
      args[0].title = '网站管理后台'
      return args
    })

    if (isProduction) {
      // 移除 prefetch 插件
      config.plugins.delete('prefetch')

      // 移除 preload 插件
      config.plugins.delete('preload')

      // 压缩代码
      config.optimization.minimize(true)

      // 分割代码
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial', // only package third parties that are initially dependent
          },
          elementUI: {
            name: 'chunk-elementPlus',
            priority: 20,
            test: /[\\/]node_modules[\\/]_?element-plus(.*)/,
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      })
      config.optimization.runtimeChunk('single')
    }

    config.module.rule('vue').use('vue-loader').loader('vue-loader')

    // 压缩图片
    // config.module
    //   .rule('image')
    //   .use('image-webpack-loader')
    //   .loader('image-webpack-loader')
    //   .options({
    //     mozjpeg: { progressive: true, quality: 65 },
    //     optipng: { enabled: false },
    //     pngquant: { quality: '65-90', speed: 4 },
    //     gifsicle: { interlaced: false },
    //     webp: { quality: 75 },
    //   })

    const svgRule = config.module.rule('svg')
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear()
    // 添加要替换的 loader
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => Object.assign(options, { limit: 1024 }))

    // sass 处理
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach((item) => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // 全局变量文件路径，只有一个时可将数组省去
          resources: ['./src/theme/index.scss'],
        })
        .end()
    })
  },
}
