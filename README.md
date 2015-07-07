# React/JSX linting

This is a baseline configuration for linting React/JSX files using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) (which is required).

#### Usage

```sh
npm install --save-dev eslint-plugin-react

npm install --save-dev https://github.com/360incentives/eslint-config-react.git
#or
npm install --save-dev git+ssh://git@github.com/360incentives/eslint-config-react.git

```

and in your root `.eslintrc` file add `react` to your list of extends (recommended that this is used in conjunction with the [baseline](https://github.com/360incentives/eslint-config-base) config file

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
