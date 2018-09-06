/*eslint-env node*/

const config = {
  '*.js': ['eslint', 'prettier --write', 'git add'],
  '*.vue': ['eslint', 'git add'],
  '*.{css,scss}': ['stylelint', 'prettier --write', 'git add'],
  '*.md': ['prettier --write', 'git add'],
}

module.exports = config
