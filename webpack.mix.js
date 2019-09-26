const mix = require('laravel-mix');
require('laravel-mix-merge-manifest');

mix.setPublicPath('../../public').mergeManifest();

mix.js(__dirname + '/Resources/assets/js/app.js', 'modules/core/app.js')
    .sass( __dirname + '/Resources/assets/sass/app.scss', 'modules/core/app.css');

if (mix.inProduction()) {
    mix.version();
}

mix.webpackConfig({
  plugins: [
    // new BundleAnalyzerPlugin(),
    // new CleanWebpackPlugin({
    //     cleanStaleWebpackAssets: false,
    //     cleanOnceBeforeBuildPatterns: ['pulblic/css/*', 'public/js/*'],
    // }),
    // new VuetifyLoaderPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      // 'vue$': 'vue/dist/vue.esm.js',
      '~': path.join(__dirname, 'Resources/assets/js'),
    }
  },
  output: {
    chunkFilename: 'modules/core/js/[name].[chunkhash].js',
    publicPath:  mix.config.hmr ? '//localhost:8080' : '/'
  }
})
