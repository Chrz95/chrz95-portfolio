import { useCallback, useEffect, useState } from 'react';

export type ColorMode = 'light' | 'dark';
const storageKey = 'christos-portfolio-color-mode';

function getInitialMode(): ColorMode {
  if (typeof window === 'undefined') return 'dark';
  try {
    const saved = window.localStorage.getItem(storageKey);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    /* Storage can be unavailable in private browsing. */
  }
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function useColorMode() {
  const [mode, setMode] = useState<ColorMode>(getInitialMode);
  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    document.documentElement.style.colorScheme = mode;
    try {
      window.localStorage.setItem(storageKey, mode);
    } catch {
      /* Keep the in-memory preference. */
    }
  }, [mode]);
  const toggleMode = useCallback(
    () => setMode((current) => (current === 'dark' ? 'light' : 'dark')),
    [],
  );
  return { mode, toggleMode };
}
