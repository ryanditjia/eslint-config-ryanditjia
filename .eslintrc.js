module.exports = {
  root: true,
  parser: "babel-eslint",
  extends: ["airbnb", "plugin:prettier/recommended", "prettier/react"],
  env: {
    browser: true
  },
  rules: {
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx"]
      }
    ],
    // Gatsby often needs this
    "react/no-danger": ["off"],

    // Overriding airbnb’s to ignore some Gatsby default props
    "react/prop-types": [
      "error",
      {
        ignore: ["history", "match", "location"],
        customValidators: [],
        skipUndeclared: false
      }
    ]
  }
};
