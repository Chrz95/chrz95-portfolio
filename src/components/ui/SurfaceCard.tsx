import Card from '@mui/material/Card';
import type { PropsWithChildren } from 'react';
import styles from './ui.module.css';

interface SurfaceCardProps extends PropsWithChildren {
  className?: string;
}
export function SurfaceCard({ children, className = '' }: SurfaceCardProps) {
  return <Card className={`${styles.card} ${className}`}>{children}</Card>;
}
