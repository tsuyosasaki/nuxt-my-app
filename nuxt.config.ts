
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src:'~assets/css/style.sass', lang: 'sass' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-sass-resources-loader', [
      '@/assets/sass/foundation/variable.scss',
      '@/assets/sass/foundation/mixin.scss',
    ]]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // extend(config, ctx) {
    // },
    babel: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: { ie: 11, uglify: true },
            useBuiltIns: 'usage'
          }
        ]
      ],
      plugins: [
        '@babel/transform-runtime',
        '@babel/plugin-syntax-dynamic-import'
      ]
    },
    vendor: [ 'babel-polyfill' ],
  },
  srcDir: 'src/'
}
