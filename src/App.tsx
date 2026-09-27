import { useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';
import { useColorMode } from '@/hooks/useColorMode';
import { createPortfolioTheme } from '@/theme/theme';

export default function App() {
  const { mode, toggleMode } = useColorMode();
  const theme = useMemo(() => createPortfolioTheme(mode), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <a className="skipLink" href="#main">
        Skip to content
      </a>
      <Header mode={mode} onToggleMode={toggleMode} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
