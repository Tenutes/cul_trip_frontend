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

  outputDir: 'dist',

  pwa: {
    themeColor: null,
    msTitleColor: null,
  },
};
