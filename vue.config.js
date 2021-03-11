module.exports = {
  // github page로 배포하는 url이 https://anjaeseongs2.github.io/vue-modern-resume/ 인 상황이므로 production은 contextPath로 지정한다.
  publicPath      : process.env.NODE_ENV === 'production' ? '/vue-modern-resume/' : '/',
  css             : { loaderOptions: { css: { url: false } } },
  configureWebpack: (config) => {
    config.module.rules = [
      ...config.module.rules,
      {
        test   : require('path').resolve(__dirname, 'node_modules/leader-line/'),
        loader : 'skeleton-loader',
        options: { procedure: (content) => `${content} export default LeaderLine` },
      },
    ]
  },
  // outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'dist',
}
