import type { PropsWithChildren } from 'react';
import { Container } from '@/components/ui/Container';
import styles from './ui.module.css';

interface SectionProps extends PropsWithChildren {
  id: string;
  number: string;
  title: string;
  description?: string;
  className?: string;
}

export function Section({
  id,
  number,
  title,
  description,
  children,
  className = '',
}: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${className}`} aria-labelledby={`${id}-title`}>
      <Container>
        <div className={styles.sectionHeading}>
          <span className={styles.kicker}>
            {number} / {id.toUpperCase()}
          </span>
          <h2 id={`${id}-title`}>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        {children}
      </Container>
    </section>
  );
}
