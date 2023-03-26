module.exports = {
  extends: ['eslint:recommended'],
  plugins: [],
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  globals: {
    browser: 'readonly'
  }
}
