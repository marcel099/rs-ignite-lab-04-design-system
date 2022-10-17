import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ asChild, children }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'w-full py-4 px-3 rounded',
        'bg-cyan-500 transition-colors hover:bg-cyan-400',
        'focus:ring-2 ring-white',
        'font-semibold text-black text-sm',
      )}
    >
      { children }
    </Comp>
  );
}