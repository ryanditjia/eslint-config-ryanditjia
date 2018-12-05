# eslint-config-ryanditjia

This config is two things:

1.  Heavily inspired by [eslint-config-react-app](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app).
2.  Turns off the rules that have to do with formatting, leaving it to [Prettier](https://github.com/prettier/eslint-plugin-prettier) to handle.

## Install

`npx install-peerdeps --dev eslint-config-ryanditjia`

## Usage

### Create config file (required)

Create a `.eslintrc.js` file at the root of your project and paste the following:

```js
module.exports = {
  extends: ['ryanditjia'],
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
