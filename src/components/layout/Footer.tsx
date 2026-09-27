import { Container } from '@/components/ui/Container';
import { portfolio } from '@/config/portfolio';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <div>
            <strong>Christos Zacharioudakis</strong>
            <p>Software Engineer · Athens, Greece</p>
          </div>
          <div className={styles.links}>
            {portfolio.socialLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
                <span className="srOnly"> (opens in new tab)</span>
              </a>
            ))}
            <a href="#top">Back to top ↑</a>
          </div>
          <small>© {new Date().getFullYear()} Christos Zacharioudakis</small>
        </div>
      </Container>
    </footer>
  );
}
