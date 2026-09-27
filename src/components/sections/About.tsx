import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { portfolio } from '@/config/portfolio';
import styles from './sections.module.css';

export function About() {
  return (
    <Section id="about" number="01" title="A practical mind for complex products.">
      <Reveal>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <p>
              I’m Christos, a software engineer based in Athens. My work sits where interface
              quality, product needs, and engineering performance meet.
            </p>
            <p>
              At Accenture, assigned to Eurobank, I’ve helped deliver digital banking features,
              modernize React applications, and improve the tooling that teams rely on every day. I
              enjoy turning complicated workflows into clear experiences and helping other engineers
              do their best work.
            </p>
          </div>
          <div className={styles.aboutAside}>
            <span className={styles.smallLabel}>A LITTLE MORE CONTEXT</span>
            <div>
              <strong>Engineering + data</strong>
              <p>
                An MEng in Electrical & Computer Engineering and an M.Sc. in Data Science & Machine
                Learning.
              </p>
            </div>
            <div>
              <strong>People + process</strong>
              <p>
                Code reviews, onboarding, and Agile facilitation for a cross-functional team of 10.
              </p>
            </div>
            <a href={`mailto:${portfolio.email}`}>
              Let’s connect <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
