module.exports = {
  lintOnSave: false,
  productionSourceMap: false,

  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/assets/scss/include.scss";
        `,
      },
    },
  },

  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(args => {
        args.compilerOptions.whitespace = 'preserve';
      });
    config.plugins.delete('prefetch');
  },

  outputDir: 'dist',

  pwa: {
    themeColor: null,
    msTitleColor: null,
  },
};
