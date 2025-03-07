import pluginJs from '@eslint/js';
import pluginImportAlias from '@limegrass/eslint-plugin-import-alias';
import pluginImport from 'eslint-plugin-import';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import pluginPromise from 'eslint-plugin-promise';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginStorybook from 'eslint-plugin-storybook';
import pluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import pluginTsEslint from 'typescript-eslint';

export default [
  pluginJs.configs.recommended,
  ...pluginTsEslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  pluginImport.flatConfigs.recommended,
  pluginImport.flatConfigs.typescript,
  pluginPromise.configs['flat/recommended'],
  pluginJsxA11y.flatConfigs.recommended,
  pluginJsxA11y.flatConfigs.strict,
  ...pluginStorybook.configs['flat/recommended'],
  pluginPrettier,
  {
    languageOptions: {
      globals: globals.browser,
      globals: globals.builtin,
    },
    plugins: {
      'react-hooks': pluginReactHooks,
      '@limegrass/import-alias': pluginImportAlias,
      unicorn: pluginUnicorn,
    },
    rules: {
      curly: 'error',
      'react/prop-types': 'off',
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-var': 'error',
      'no-lonely-if': 'error',
      'react-hooks/rules-of-hooks': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      'tailwindcss/no-custom-classname': 'off',
      '@limegrass/import-alias/import-alias': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
          ignore: ['vite-env.d.ts'],
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      'import/no-default-export': 'off',
      'import/no-unused-modules': 'off',
      'import/unambiguous': 'off',
    },
  },
  {
    files: ['**/*.stories.tsx'],
    rules: {
      'import/no-unused-modules': 'off',
      'no-console': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
];
