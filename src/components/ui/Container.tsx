import type { PropsWithChildren } from 'react';
import styles from './ui.module.css';

export function Container({ children }: PropsWithChildren) {
  return <div className={styles.container}>{children}</div>;
}
