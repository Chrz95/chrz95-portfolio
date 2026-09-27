import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import Button from '@mui/material/Button';
import { ActionButton } from '@/components/ui/ActionButton';
import { Container } from '@/components/ui/Container';
import { portfolio } from '@/config/portfolio';
import styles from './sections.module.css';

export function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <Container>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>
              <span className={styles.statusDot} /> SOFTWARE ENGINEER · ATHENS, GREECE
            </span>
            <h1 id="hero-title">
              Building for <em>people.</em>
              <br />
              Engineering for <em>scale.</em>
            </h1>
            <p className={styles.heroIntro}>{portfolio.intro}</p>
            <div className={styles.heroActions}>
              <ActionButton href="#projects" endIcon={<ArrowOutwardRoundedIcon />}>
                Explore my work
              </ActionButton>
              <Button
                component="a"
                href={portfolio.cvPath}
                download="Christos-Zacharioudakis-CV.pdf"
                variant="outlined"
                endIcon={<DownloadRoundedIcon />}
              >
                Download CV
              </Button>
            </div>
            <div className={styles.heroSocial}>
              {portfolio.socialLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label} ↗<span className="srOnly"> (opens in new tab)</span>
                </a>
              ))}
            </div>
          </div>
          <div
            className={styles.heroVisual}
            aria-label="Engineering focus: thoughtful interfaces, measurable performance, and dependable delivery"
          >
            <div className={styles.orbitOne} />
            <div className={styles.orbitTwo} />
            <div className={styles.heroPanel}>
              <div className={styles.panelTop}>
                <span className={styles.panelDots}>
                  <i />
                  <i />
                  <i />
                </span>
                <span>ENGINEERING / 2026</span>
              </div>
              <div className={styles.panelBody}>
                <span className={styles.panelTiny}>FOCUS AREAS</span>
                <div className={styles.panelWord}>
                  Design.
                  <br />
                  Build.
                  <br />
                  <span>Improve.</span>
                </div>
                <div className={styles.panelLines}>
                  <span>01&nbsp;&nbsp; Thoughtful interfaces</span>
                  <span>02&nbsp;&nbsp; Faster, leaner systems</span>
                  <span>03&nbsp;&nbsp; Collaborative delivery</span>
                </div>
              </div>
            </div>
            <div className={styles.metricBadge}>
              <strong>50%</strong>
              <span>
                faster builds
                <br />
                in e-banking migration
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
