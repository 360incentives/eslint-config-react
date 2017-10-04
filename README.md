# React/JSX linting

This is a baseline configuration for linting React/JSX files using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) (which is required).

#### Versions

  - __v1__ - for `eslint` < 1.4 and `eslint-plugin-react` < 3
  - __v2__ - for `eslint` >= 1.4 / < 2.0 and `eslint-plugin-react` >= 3 / < 4
  - __v3__ - for `eslint` >= 2.0 and `eslint-plugin-react` >= 4
  - __v4__ - for `eslint` >= 3.0 and `eslint-plugin-react` >= 6
  - __v5__ - for `eslint` >= 4.0 and `eslint-plugin-react` >= 7


#### Usage

```sh
npm install --save-dev eslint-plugin-react

# to always get latest version
npm install --save-dev 360incentives/eslint-config-react

# to set to a specific version (see Versions above)
npm install --save-dev 360incentives/eslint-config-react#v1

```

and in your root `.eslintrc` file add `react` to your list of extends (recommended that this is used in conjunction with the [eslint-config-base](https://github.com/360incentives/eslint-config-base) baseline config file)

json style:
```json
{
    "extends": ["base", "react"]
}
```

yaml style:
```yaml
---
extends:
- base
- react
```

### Using Babel for more than just JSX (ie. ES7)?

consider using the [babel-eslint](https://github.com/babel/babel-eslint) parser
