/* eslint-disable no-undef */
module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'settings': {
    'react': {
      'version': 'latest',
    },
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'indent': [
      'warn',
      2,
      { 'SwitchCase': 1 },
    ],
    'quotes': [
      'warn',
      'single',
    ],
    'semi': [
      'warn',
      'always',
    ],
    'comma-dangle': [
      'warn',
      'only-multiline',
    ],
  },
};
