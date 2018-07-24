module.exports = {
  extends: ['prettier/react'],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  },
}
