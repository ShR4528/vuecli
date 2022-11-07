//const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/vue-pages/'
  : '/'
  
  //publicPath: '/vue-pages/',
  //transpileDependencies: true
}
