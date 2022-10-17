import { InputHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputContainerProps {
  children: ReactNode;
}

function TextInputContainer({ children }: TextInputContainerProps) {
  return (
    <div
      className={clsx(
        'flex items-center gap-3',
        'h-12 py-4 px-3 rounded',
        'bg-gray-800',
        'text-gray-100 text-xs',
        'focus-within:ring-2 ring-cyan-400',
      )}
    >
      { children }
    </div>
  )
}

TextInputContainer.displayName = 'TextInput.Container';

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      { children }
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement> {

}

export function TextInputChild({ ...rest }: TextInputProps) {
  return (
    <input
      className={clsx(
        'bg-transparent flex-1',
        'placeholder:text-gray-400',
        'outline-none',
      )}
      {...rest}
    />
  );
}

TextInputChild.displayName = 'TextInput.Input';

export const TextInput = {
  Container: TextInputContainer,
  Input: TextInputChild,
  Icon: TextInputIcon,
}