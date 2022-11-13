module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'testing-library', 'prettier'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-pascal-case': 0,
    '@typescript-eslint/naming-convention': 'off',
    'no-underscore-dangle': 'off',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  ignorePatterns: ['node_modules/', 'build', '**/*.js', 'setupTests.ts'],
};
