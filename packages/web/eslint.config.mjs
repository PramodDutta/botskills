import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';

// Next's shareable config is still published in the legacy format; FlatCompat
// bridges it into ESLint 9 flat config. Extend here rather than in package.json
// so the rules are visible in one place.
const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) });

const config = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      // The bots catalogue route strips fields by destructuring them into unused
      // names; underscore-prefixed bindings are the idiom for "deliberately unused".
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
  {
    // Generated registry and article bodies: 460+ files of prose in template
    // literals. Linting them costs minutes and finds nothing a gate does not.
    ignores: [
      '.next/**',
      'next-env.d.ts',
      'src/app/blog/posts/**',
      'test-results/**',
      'playwright-report/**',
    ],
  },
];

export default config;
