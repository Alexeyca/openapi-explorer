module.exports = {
  env: {
    commonjs: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'commonjs',
            targets: {
              esmodules: true,
              android: '80',
              chrome: '85',
              edge: '87',
              firefox: '84',
              ios: '13',
              node: '14',
              opera: '72',
              safari: '14',
              samsung: '14'
            },
            bugfixes: true
          }
        ]
      ],
      plugins: [
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-optional-chaining',
        ['@babel/plugin-transform-modules-commonjs', { loose: true, }],
        [
          'template-html-minifier', {
            modules: {
              'lit-html': ['html'],
              'lit-element': [
                'html',
                { name: 'css', encapsulation: 'style' }
              ]
            },
            htmlMinifier: {
              collapseWhitespace: true,
              conservativeCollapse: true,
              removeComments: true,
              caseSensitive: true,
              minifyCSS: true
            }
          }
        ]
      ]
    },
    es: {

      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              esmodules: true,
              android: '80',
              chrome: '85',
              edge: '87',
              firefox: '84',
              ios: '13',
              node: '14',
              opera: '72',
              safari: '14',
              samsung: '14'
            },
            bugfixes: true
          }
        ]
      ],
      plugins: [
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-optional-chaining',
        [
          'template-html-minifier', {
            modules: {
              'lit-html': ['html'],
              'lit-element': [
                'html',
                { name: 'css', encapsulation: 'style' }
              ]
            },
            htmlMinifier: {
              collapseWhitespace: true,
              conservativeCollapse: true,
              removeComments: true,
              caseSensitive: true,
              minifyCSS: true
            }
          }
        ]
      ]
    },
    browser: {
      sourceType: 'unambiguous', // https://github.com/webpack/webpack/issues/4039#issuecomment-419284940
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              esmodules: true,
              android: '80',
              chrome: '85',
              edge: '87',
              firefox: '84',
              ios: '13',
              node: '14',
              opera: '72',
              safari: '14',
              samsung: '14'
            },
            bugfixes: true
          }
        ]
      ],
      plugins: [
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-optional-chaining',
        [
          'template-html-minifier', {
            modules: {
              'lit-html': ['html'],
              'lit-element': [
                'html',
                { name: 'css', encapsulation: 'style' }
              ]
            },
            htmlMinifier: {
              collapseWhitespace: true,
              conservativeCollapse: true,
              removeComments: true,
              caseSensitive: true,
              minifyCSS: true
            }
          }
        ]
      ]
    },
  },
};
