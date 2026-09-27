import { Section } from '@/components/ui/Section';
import { SurfaceCard } from '@/components/ui/SurfaceCard';
import { Reveal } from '@/components/ui/Reveal';
import { portfolio } from '@/config/portfolio';
import styles from './sections.module.css';

export function Skills() {
  return (
    <Section
      id="skills"
      number="02"
      title="The toolkit behind the work."
      description="Tools I use to build, test, ship, and improve software."
      className={styles.tintSection}
    >
      <div className={styles.skillsGrid}>
        {portfolio.skillGroups.map((group, index) => (
          <Reveal key={group.title}>
            <SurfaceCard className={styles.skillCard}>
              <div className={styles.skillCardHead}>
                <span>0{index + 1}</span>
                <h3>{group.title}</h3>
              </div>
              <div className={styles.skillTags}>
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
