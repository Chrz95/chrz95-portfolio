import { motion, useReducedMotion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

export function Reveal({ children }: PropsWithChildren) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
