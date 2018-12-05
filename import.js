module.exports = {
  plugins: ['import'],

  rules: {
    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/first': 'error',
    'import/no-amd': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-useless-path-segments': 'warn',
    'import/no-unresolved': 'error',
  },
}
