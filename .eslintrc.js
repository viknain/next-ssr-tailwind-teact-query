module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaVersion: 2020
  },
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', 'stories/*'],
  extends: ['eslint:recommended'],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: [
        '**/*.ts',
        '**/*.tsx',
        '**/components/**/**/*.ts',
        '**/components/**/**/*.tsx',
        '**/components/**/**/**/*.tsx'
      ],
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended' // Prettier plugin
      ],
      rules: {
        'react/prop-types': 'off',

        // No need to import React when using Next.js
        'react/react-in-jsx-scope': 'off',

        // This rule is not compatible with Next.js's <Link /> components
        'jsx-a11y/anchor-is-valid': 'off',

        // Why would you want unused vars?
        '@typescript-eslint/no-unused-vars': ['error'],

        // I suggest this setting for requiring return types on functions only where useful
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true
          }
        ],
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto'
          },
          { usePrettierrc: true }
        ] // Includes .prettierrc.js rules
      }
    }
  ]
}
