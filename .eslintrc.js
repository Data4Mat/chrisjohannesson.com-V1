module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/function-component-definition': [2, {
      namedComponents: ['function-declaration', 'function-expression', 'arrow-function'],
      unnamedComponents: 'arrow-function',
    }],
    semi: 2,
    'no-extra-semi': 2,
    'linebreak-style': ['error', 'windows'],
  },
};
