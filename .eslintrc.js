module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  rules: {
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/accessible-emoji": "off",
    "import/no-anonymous-default-export": "off",
    "prettier/prettier": "error",
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
};
