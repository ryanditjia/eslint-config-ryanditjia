# eslint-config-artycurate

This is an ESLint config with airbnb’s rules as base, prettier override, and optional config to play well with Gatsby development.

## Install

`npx install-peerdeps --dev eslint-config-artycurate`

## Usage

Create a `.eslintrc.js` file at the root of your project and paste the following:

```js
module.exports = {
  extends: [
    'artycurate',
    'artycurate/gatsby', // optional for Gatsby development
  ],
  rules: {
    // your custom rules here
  }
}
```
