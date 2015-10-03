module.exports = {
  "plugins": [
    "react"
  ],
  "ecmaFeatures": {
    "jsx": true
  },
  "env": {
    "node": true
  },
  "rules": {
    "react/display-name": 2,
    "react/jsx-boolean-value": 2,
    "react/jsx-no-undef": 2,
    "jsx-quotes": [2, "prefer-single"],
    "react/jsx-sort-prop-types": [2, { "ignoreCase": true }],
    "react/jsx-sort-props": [2, { "ignoreCase": true }],
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-multi-comp": 0,
    "react/no-unknown-property": 2,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/require-extension": 0,
    "react/self-closing-comp": 2,
    "react/sort-comp": 2,
    "react/wrap-multilines": 2
  }
};
