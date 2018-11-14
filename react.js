module.exports = {
  extends: ['prettier/react'],
  plugins: ['react-hooks'],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    // Annoying. Support for this rule is deprecated anyway.
    'jsx-a11y/label-has-for': ['off'],
    'react-hooks/rules-of-hooks': ['error'],
  },
}
