module.exports = {
  "plugins": [
    "react"
  ],
  "ecmaFeatures": {
    "jsx": true
  },
  "env": {
    "node": true,
    "browser": true
  },
  "rules": {
    "react/display-name": 2,
    "react/jsx-boolean-value": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-quotes": 2,
    "react/jsx-sort-prop-types": [2, { "ignoreCase": true }],
    "react/jsx-sort-props": [2, { "ignoreCase": true }],
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-multi-comp": false,
    "react/no-unknown-property": 2,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/require-extension": false,
    "react/self-closing-comp": 2,
    "react/sort-comp": 2,
    "react/wrap-multilines": 2
  }
};