module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ['airbnb-base', 'plugin:chai-friendly/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'comma-dangle': 0,
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2
  },
  plugins: ['chai-friendly']
};
