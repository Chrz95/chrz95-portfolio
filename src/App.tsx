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
import { PerfectlyAverage } from '@/components/pages/PerfectlyAverage';
import { PrivacyPolicy } from '@/components/pages/PrivacyPolicy';
import { ProductProject } from '@/components/pages/ProductProject';
import { projectDetails, type ProjectDetail } from '@/config/projectDetails';
import { useColorMode } from '@/hooks/useColorMode';
import { createPortfolioTheme } from '@/theme/theme';

export default function App() {
  const { mode, toggleMode } = useColorMode();
  const theme = useMemo(() => createPortfolioTheme(mode), [mode]);
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const productProjectId = (Object.keys(projectDetails) as ProjectDetail['id'][]).find(
    (id) => path === `/projects/${id}`,
  );

  if (path === '/projects/perfectly-average/privacy-policy') {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PrivacyPolicy mode={mode} onToggleMode={toggleMode} />
      </ThemeProvider>
    );
  }

  if (path === '/projects/perfectly-average') {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PerfectlyAverage mode={mode} onToggleMode={toggleMode} />
      </ThemeProvider>
    );
  }

  if (productProjectId) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProductProject projectId={productProjectId} mode={mode} onToggleMode={toggleMode} />
      </ThemeProvider>
    );
  }

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
