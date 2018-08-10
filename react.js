module.exports = {
  extends: ['prettier/react'],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    // Annoying. Support for this rule is deprecated anyway.
    'jsx-a11y/label-has-for': ['off'],
  },
}
