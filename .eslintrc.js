module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      // vos options existantes...
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
      // vos extensions existantes...
    ],
    root: true,
    env: {
      // vos environnements...
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
      '@typescript-eslint/no-unsafe-call': 'off',
      // autres règles existantes...
    },
  };