/**
 *
 * @author fuyg
 * @date  2018-09-07
 */

module.exports = {
  presets: [
    [
      'env',
      {
        modules: false,
        targets: {
          browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
        },
      },
    ],
    'stage-2',
  ],
  plugins: ['transform-runtime'],
  env: {
    test: {
      presets: ['env', 'stage-2'],
      plugins: ['transform-es2015-modules-commonjs', 'dynamic-import-node'],
    },
  },
}
