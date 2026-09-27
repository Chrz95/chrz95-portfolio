import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import { Container } from '@/components/ui/Container';
import type { ColorMode } from '@/hooks/useColorMode';
import styles from './Header.module.css';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

interface HeaderProps {
  mode: ColorMode;
  onToggleMode: () => void;
}
export function Header({ mode, onToggleMode }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const navLinks = links.map(({ label, href }) => (
    <a key={href} href={href} onClick={() => setOpen(false)}>
      {label}
    </a>
  ));
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <a className={styles.brand} href="#top" aria-label="Christos Zacharioudakis, back to top">
            <span className={styles.brandMark}>CZ</span>
            <span>
              Christos<span className={styles.brandSurname}> Zacharioudakis</span>
            </span>
          </a>
          <nav aria-label="Main navigation" className={styles.desktopNav}>
            {navLinks}
          </nav>
          <div className={styles.actions}>
            <IconButton
              onClick={onToggleMode}
              aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
              color="inherit"
              size="small"
            >
              {mode === 'dark' ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
            </IconButton>
            <IconButton
              className={styles.menuButton}
              aria-label="Open menu"
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              color="inherit"
            >
              <MenuRoundedIcon />
            </IconButton>
          </div>
        </div>
      </Container>
      <Drawer
        id="mobile-menu"
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ className: styles.drawer }}
      >
        <div className={styles.drawerTop}>
          <span>MENU</span>
          <IconButton onClick={() => setOpen(false)} aria-label="Close menu">
            <CloseRoundedIcon />
          </IconButton>
        </div>
        <nav aria-label="Mobile navigation" className={styles.mobileNav}>
          {navLinks}
        </nav>
      </Drawer>
    </header>
  );
}
