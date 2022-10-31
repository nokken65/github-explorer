export const ThemeVariants = ['light', 'dark'] as const;

export type TTheme = typeof ThemeVariants[number];
