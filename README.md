# React/JSX linting

This is a baseline configuration for linting React/JSX files using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) (which is required).

#### Usage

```sh
npm i eslint-plugin-react -D
npm i 360incentives/eslint-config-react -D
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
