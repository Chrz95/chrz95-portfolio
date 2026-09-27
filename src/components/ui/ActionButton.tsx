import Button from '@mui/material/Button';
import type { ComponentProps } from 'react';

type ActionButtonProps = ComponentProps<typeof Button>;

export function ActionButton({ children, variant = 'contained', ...props }: ActionButtonProps) {
  return (
    <Button variant={variant} disableElevation {...props}>
      {children}
    </Button>
  );
}
