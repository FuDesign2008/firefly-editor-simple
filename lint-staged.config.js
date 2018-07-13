/**
 *
 * @author fuyg
 * @date  2018-07-13
 */

module.exports = {
  '*.{json,css,md}': ['prettier --write', 'git add'],
  'src/**/*.js': ['eslint', 'prettier --write', 'git add'],
}
