import react from '@vitejs/plugin-react';
import tsconfigPathsPlugin from 'vite-tsconfig-paths';
import { configDefaults, defineConfig } from 'vitest/config';

// Makes prefixed test exclusions.
const prefixed = (prefix: string, items: string[]): string[] => {
  return items.map(item => `${prefix}${item}`);
};

const testingExclusion: string[] = [
  // Default exclusions
  ...configDefaults.exclude,

  // Libraries & frameworks
  '**/.next',

  // Storybook
  '.storybook',
  '**/*.stories.{ts,tsx}',

  // Testing artifacts
  '__tests__/**/Test*.tsx',
  'app/test',

  // Testing artifacts
  './coverage',
  './app/test',
  '__tests__/{e2e,assets}',

  // Resource configs
  ...prefixed('.config/', ['.*rc', '.*rc.js', '.dev', 'helpers']),

  // Ignore configs
  '**/{next,postcss,tailwind}.config.{ts,js}',
  'mdx-components.tsx',

  './src/components/ui/DesignSystem/*',
];

export default defineConfig(({ mode }) => ({
  plugins: [react(), tsconfigPathsPlugin()],
  test: {
    environment: 'jsdom',
    exclude: testingExclusion,
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'json-summary', 'html'],
      exclude: testingExclusion,
    },
    setupFiles: ['./__tests__/setup.vitest.ts'],
  },
  define: mode === 'test' ? {} : { global: 'window' },
}));
