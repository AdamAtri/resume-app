module.exports = (function(){
  const env = process.env.NODE_ENV;
  return {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "rules": {
      "linebreak-style": [
          "error",
          "unix"
      ],
      "semi": [
          "error",
          "always"
      ],
      "no-console": env === 'production' ? 2 : 1,
    },
    "globals": {
      "$": false,
      "_": false,
      "Bb": false, // Backbone
      "Mn": false, // Marionette
      "IS_PROD": false, // environment boolean
      "TESTVIEW": false, // view-testing
      "VIEWARGS": false, // view-testing
    }
  }
})();
