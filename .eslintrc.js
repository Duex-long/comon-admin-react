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
    "import/extensions":0,
    "import/no-unresolved":0,
    "import/no-extraneous-dependencies":0
  },
  plugins: [
    'react',
    "react-hooks",
    '@typescript-eslint',
  ],


};
