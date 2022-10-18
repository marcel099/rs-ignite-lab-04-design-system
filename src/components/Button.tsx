import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({
  asChild, children, className, ...rest
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'w-full py-3 px-4 rounded',
        'bg-cyan-500 transition-colors hover:bg-cyan-400',
        'focus:ring-2 ring-white',
        'font-semibold text-black text-sm',
        className
      )}
      {...rest}
    >
      { children }
    </Comp>
  );
}