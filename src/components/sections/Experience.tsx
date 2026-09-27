import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { portfolio } from '@/config/portfolio';
import styles from './sections.module.css';

export function Experience() {
  return (
    <Section
      id="experience"
      number="04"
      title="Experience, with impact."
      className={styles.tintSection}
    >
      <div className={styles.experienceList}>
        {portfolio.experience.map((item) => (
          <Reveal key={item.company}>
            <article className={styles.experienceItem}>
              <div className={styles.experienceMeta}>
                <span>{item.period}</span>
                <small>{item.location}</small>
              </div>
              <div>
                <h3>{item.role}</h3>
                <strong>{item.company}</strong>
                <p>{item.description}</p>
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <div className={styles.education}>
        <span className={styles.smallLabel}>EDUCATION</span>
        <div>
          {portfolio.education.map((item) => (
            <div className={styles.educationItem} key={item.degree}>
              <span>{item.period}</span>
              <div>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
                <small>{item.detail}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
