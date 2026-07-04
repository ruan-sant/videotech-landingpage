import type { AnchorHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type Variant = 'primary' | 'secondary' | 'dark' | 'ghost';
type Size = 'md' | 'lg';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand-500 text-white shadow-brand hover:bg-brand-600 hover:-translate-y-0.5 focus-visible:outline-brand-500',
  secondary:
    'bg-white text-ink-900 ring-1 ring-ink-200 hover:ring-ink-300 hover:-translate-y-0.5 shadow-soft focus-visible:outline-ink-900',
  dark: 'bg-ink-900 text-white hover:bg-ink-800 hover:-translate-y-0.5 focus-visible:outline-white',
  ghost: 'bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/15 hover:-translate-y-0.5 focus-visible:outline-white',
};

const sizeClasses: Record<Size, string> = {
  md: 'px-5 py-3 text-sm',
  lg: 'px-7 py-4 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className,
  ...rest
}: ButtonProps) {
  return (
    <a
      className={clsx(
        'group inline-flex items-center justify-center gap-2 rounded-full text-center font-semibold transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...rest}
    >
      {children}
      {icon && (
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>
      )}
    </a>
  );
}
