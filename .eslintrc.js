// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    commonjs: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  plugins: ['html'],
  // custom rules  @see https://eslint.org/docs/rules/
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-console': 0,
  },
}
