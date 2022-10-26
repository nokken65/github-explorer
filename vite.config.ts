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
            'effector-storage',
            'patronum',
          ],
          'router-vendor': ['atomic-router', 'atomic-router-react', 'history'],
          'api-vendor': ['@farfetched/core', '@farfetched/zod'],
          'rsuite-vendor': ['rsuite'],
          'other-vendor': [
            'react-hotkeys-hook',
            'zod',
            'dayjs',
            'clsx',
            'flat',
          ],
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
