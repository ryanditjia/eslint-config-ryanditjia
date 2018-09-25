# eslint-config-ryanditjia

This config is three things:

1.  Extends the strict [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).
2.  Turns off the rules that have to do with formatting, leaving it to [Prettier](https://github.com/prettier/eslint-plugin-prettier) to handle.
3.  Exposes optional React (`ryanditjia/react`), Gatsby (`ryanditjia/gatsby`), and Jest (`ryanditjia/jest`) configs.

## Install

`npx install-peerdeps --dev eslint-config-ryanditjia`

## Usage

### Create config file (required)

Create a `.eslintrc.js` file at the root of your project and paste the following:

```js
module.exports = {
  extends: [
    'ryanditjia',
    'ryanditjia/gatsby', // optional config for Gatsby development, extends ryanditjia/react by default
    'ryanditjia/react', // optional config for React development, not needed if you are already extending ryanditjia/gatsby
    'ryanditjia/jest', // optional config for Jest testing
  ],
  rules: {
    // your custom rules here
  },
}
```

### Ignore files and directories (optional)

Next, still at the root of your project, create a `.eslintignore` file listing the files and directories that you want ignored by ESLint.

```sh
node_modules
public
.cache
your_additional_folder
```

### Run ESLint and Prettier with script

In your `package.json`, add the following scripts:

```json
{
  "format": "prettier --write \"*.js\" \"src/**/*.js\"",
  "lint": "eslint ./ --ext .js --ext .jsx"
}
```

### Run ESLint and Prettier in your code editor

In VSCode, install the ESLint (by Dirk Baeumer) and Prettier (by Esben Petersen) extensions.
