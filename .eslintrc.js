module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:import/warnings',
    'eslint:recommended',
    'plugin:storybook/recommended',
  ],
  env: {
    browser: true, // If you're using JSX in a web application
  },
  ignorePatterns: ['*enums.ts', '*.test.tsx', 'react-app-env.d.ts'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', 'import', '@typescript-eslint', 'jsx-a11y'],
  rules: {
    'import/no-named-as-default-member': 0,
    'react/prop-types': 'error',
    'no-console': 'warn',
    'no-alert': 'warn',
    'no-unreachable': 'error',
    'react/jsx-no-undef': ['off'],
    'no-undef': 'off',
    'no-unused-vars': ['error', { args: 'none' }],
    '@typescript-eslint/no-duplicate-imports': 'error',
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-expressions': 'off',
    'require-await': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
      },
    ],
    eqeqeq: 2,
    'jsx-a11y/alt-text': [
      'error',
      {
        elements: ['img', 'object', 'area', 'input[type="image"]'],
        img: ['Image'],
        object: ['Object'],
        area: ['Area'],
        'input[type="image"]': ['InputImage'],
      },
    ],
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'off',
  },
};
