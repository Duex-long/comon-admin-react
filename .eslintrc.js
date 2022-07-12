module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['react-app', 'airbnb-base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/first': 0,

  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],


};
