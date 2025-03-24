import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{js,jsx}'],
    plugins: { react: pluginReact },
    rules: {
      'react/react-in-jsx-scope': 'off', // "React must be in scope" 오류 비활성화
    },
    settings: {
      react: {
        version: 'detect', // 자동으로 설치된 React 버전 감지
      },
    },
  },
]);
