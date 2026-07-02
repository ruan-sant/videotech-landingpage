import type { ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-3xl border border-ink-100 bg-white p-6 shadow-soft transition-all duration-300',
        hover && 'hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-soft-lg',
        className,
      )}
    >
      {children}
    </div>
  );
}
