export default [
  {
    ignores: ['dist', 'build', 'node_modules'],
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
      },
    },
    rules: {
      'prefer-const': 'warn',
      'no-var': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
]
