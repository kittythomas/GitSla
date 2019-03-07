module.exports = {
    "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true,
      "jest": true,
    },
    "parserOptions": {
      "sourceType": "module"
    },
    "rules": {
      "indent": ["error", 2],
      "linebreak-style": ["error","unix"],
      "quotes": ["error","single"],
      "semi": ["error","always"],
      "no-console": ["warn", { "allow": ["info", "error"] }]
    }
  };
  