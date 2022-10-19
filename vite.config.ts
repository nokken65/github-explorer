import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    svgrPlugin({
      include: 'src/**/*.svg',
      svgrOptions: { memo: true, svgo: true, icon: true, exportType: 'named' },
    }),
    react(),
    tsconfigPaths(),
  ],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'effector-vendor': [
            'effector',
            'effector-react',
            '@effector/reflect',
          ],
          'router-vendor': ['atomic-router', 'atomic-router-react', 'history'],
          'nextui-vendor': ['@nextui-org/react', 'next-themes'],
          'other-vendor': ['react-hotkeys-hook', 'myzod', 'dayjs'],
          'api-vendor': ['@urql/core', 'graphql'],
          'forms-vendor': ['react-hook-form'],
        },
      },
    },
  },
  server: {
    host: true,
    port: 3000,
    hmr: true,
  },
  clearScreen: false,
  root: '.',
});
