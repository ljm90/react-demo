module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single"],
        "no-unused-vars": [1, {"vars": "local", "args": "none"}],
        "no-extra-semi": 1,
        "no-extra-parens": 1,
        "comma-dangle": [2, "never"],
        "semi": [2, "always"],
        "semi-spacing": [0, {"before": false, "after": true}],
        "no-multiple-empty-lines": [1, {"max": 2}],
        "no-var": 0,
        "camelcase": 2,
    }
};