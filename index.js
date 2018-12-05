module.exports = {
  root: true,

  parser: 'babel-eslint',

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: ['./base.js', './import.js', './react.js', './prettier.js'],
}
