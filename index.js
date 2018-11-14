module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  rules: {
    // experiment: overriding Airbnb’s error as warn
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],
    // experiment: overriding Prettier’s error as warn
    'prettier/prettier': 'warn',
  },
}
