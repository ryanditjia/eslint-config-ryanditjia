module.exports = {
  extends: ['./react'].map(require.resolve),
  rules: {
    'react/no-danger': ['off'],

    // Overriding airbnb’s to ignore some Gatsby default props
    'react/prop-types': [
      'error',
      {
        ignore: ['history', 'match', 'location'],
        customValidators: [],
        skipUndeclared: false,
      },
    ],
  },
}
