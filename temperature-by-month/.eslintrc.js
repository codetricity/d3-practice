module.exports = {
    "extends": "airbnb-base",
    "env": {
      "browser": true,
      "es6": true
    },
    "rules": {
      "object-curly-newline": ["error", {multiline: true}],
      "no-plusplus": ["error", {allowForLoopAfterthoughts: true}],
      "no-use-before-define": ["off"]
    },
    "globals": {
      "d3": false
    }
};