import { createTheme } from '@mui/material/styles';
import type { ColorMode } from '@/hooks/useColorMode';

export function createPortfolioTheme(mode: ColorMode) {
  return createTheme({
    palette: {
      mode,
      primary: { main: mode === 'dark' ? '#82adff' : '#2157ca' },
      secondary: { main: mode === 'dark' ? '#9fe6df' : '#057d83' },
      background: {
        default: mode === 'dark' ? '#0a1424' : '#f5f8fd',
        paper: mode === 'dark' ? '#142236' : '#ffffff',
      },
      text: {
        primary: mode === 'dark' ? '#f2f6ff' : '#172438',
        secondary: mode === 'dark' ? '#afc0d9' : '#55657c',
      },
      divider: mode === 'dark' ? 'rgba(183,205,240,.15)' : 'rgba(28,56,93,.13)',
    },
    shape: { borderRadius: 18 },
    typography: {
      fontFamily:
        'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      h1: { fontWeight: 750, letterSpacing: '-.062em', lineHeight: 1.05 },
      h2: { fontWeight: 730, letterSpacing: '-.045em', lineHeight: 1.12 },
      h3: { fontWeight: 700, letterSpacing: '-.035em' },
      button: { textTransform: 'none', fontWeight: 650, letterSpacing: 0 },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: 12, minHeight: 46, paddingInline: 21, boxShadow: 'none' },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: { backgroundImage: 'none', border: '1px solid var(--line)', boxShadow: 'none' },
        },
      },
      MuiChip: { styleOverrides: { root: { fontWeight: 600 } } },
      MuiTextField: { defaultProps: { variant: 'outlined' } },
    },
  });
}
