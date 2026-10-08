import IconButton from '@mui/material/IconButton';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import { Container } from '@/components/ui/Container';
import type { ColorMode } from '@/hooks/useColorMode';
import styles from './subpages.module.css';

interface SubpageHeaderProps {
  mode: ColorMode;
  onToggleMode: () => void;
  backHref: string;
  backLabel: string;
}

export function SubpageHeader({ mode, onToggleMode, backHref, backLabel }: SubpageHeaderProps) {
  return (
    <header id="top" className={styles.subpageHeader}>
      <Container>
        <div className={styles.headerInner}>
          <a className={styles.brand} href="/" aria-label="Christos Zacharioudakis portfolio home">
            <span className={styles.brandMark}>CZ</span>
            <span>Christos Zacharioudakis</span>
          </a>
          <div className={styles.headerActions}>
            <a className={styles.backLink} href={backHref}>
              {backLabel}
            </a>
            <IconButton
              onClick={onToggleMode}
              aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
              color="inherit"
              size="small"
            >
              {mode === 'dark' ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
            </IconButton>
          </div>
        </div>
      </Container>
    </header>
  );
}
