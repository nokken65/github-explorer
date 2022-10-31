import transformerDirectives from '@unocss/transformer-directives';
import { defineConfig } from 'unocss';
import { type Theme, presetUno } from 'unocss/preset-uno';
import presetTheme from 'unocss-preset-theme';

export default defineConfig({
  theme: {
    colors: {
      primary: {
        DEFAULT: '#22c55e',
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
      },
    },
  },
  presets: [presetUno({ dark: 'class' }), presetTheme<Theme>({ theme: {} })],
  transformers: [transformerDirectives()],
});