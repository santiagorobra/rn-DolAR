module.exports = {
  root: true,
  env: {
    'react-native/react-native': true,
  },
  extends: [
    '@react-native-community',
    'airbnb',
    'prettier',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  globals: {
    fetch: true,
    __DEV__: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    jsx: true,
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
        '@typescript-eslint/no-shadow': ['error'],
        'array-callback-return': 'off',
        'no-param-reassign': 0,
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'no-console': ['warn', {allow: ['warn', 'error']}],
        'no-debugger': 'error',
        'no-var': 'warn',
        'no-trailing-spaces': 'warn',
        'eol-last': 'warn',
        'no-underscore-dangle': 'off',
        'global-require': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
        'react/require-default-props': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-filename-extension': ['warn', {extensions: ['.tsx', '.jsx']}],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': [
          'warn',
          {
            additionalHooks: '(useStyle|useFlatStyle)',
          },
        ],
      },
    },
  ],
};
