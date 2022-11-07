module.exports = {
  extends: [
    'prettier',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  plugins: [
    'prettier',
    'react',
    '@typescript-eslint',
    'testing-library',
    'react-hooks',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: { 'react/react-in-jsx-scope': 'off' },
  ignorePatterns: ['node_modules/', 'build', '**/*.js', 'setupTests.ts'],
};
