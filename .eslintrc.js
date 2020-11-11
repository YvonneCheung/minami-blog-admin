module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    eqeqeq: 'off',
    indent: 'off',
    'no-eval': 'off', // 禁止使用eval
    'no-undef': 'off', // 不能有未定义的变量
    'no-unused-vars': 'off',
    "prefer-const":'off',
    "rules": {
      "indent": ["error", 4],
      "no-console": 0,
      "no-unused-vars": 0,
      "linebreak-style": ["error", "unix"],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "curly": ["error", "all"],
      "default-case": "error",
      "no-else-return": "error",
      "no-empty-function": "error",
      "no-implicit-coercion": "error",
      "no-invalid-this": "error",
      "no-loop-func": "error",
      "no-multi-spaces": "error",
      "no-new-func": "error",
      "no-useless-return": "error",
      "no-path-concat": "error",
      "array-bracket-spacing": ["error", "always"],
      "block-spacing": ["error", "always"],
      "brace-style": ["error", "1tbs"],
      "camelcase": "error",
      "comma-dangle": ["error", "always-multiline"],
      "comma-spacing": ["error", { "before": false, "after": true }],
      "comma-style": ["error", "last"],
      "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
      "lines-around-comment": ["error", { "beforeBlockComment": true }],
      "newline-before-return": 0,
      "no-multi-assign": "error",
      "new-cap": [
          "error",
          {
              "newIsCap": true,
              "capIsNew": false
          }
      ],
      "no-multiple-empty-lines": [
          "error",
          {
              "max": 2
          }
      ],
      "no-shadow-restricted-names": "error",
      "no-undef-init": 2,
      "keyword-spacing": "error",
      "space-before-blocks": ["error", "always"],
      "space-before-function-paren":["error", "always"],
      "space-unary-ops": ["error", { "words": true, "nonwords": false }],
      "spaced-comment": "error",
      "space-infix-ops": "error",
      "prefer-const": "error"
  }
  },
  plugins: ['vue', 'prettier','stylelint-prettier'],
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
