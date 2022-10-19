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
  build: { sourcemap: true },
  server: {
    host: true,
    port: 3000,
    hmr: true,
  },
  clearScreen: false,
  root: '.',
});
