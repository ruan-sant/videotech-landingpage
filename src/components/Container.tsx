import type { ReactNode } from 'react';
import clsx from 'clsx';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section';
}

export default function Container({ children, className, as = 'div' }: ContainerProps) {
  const Tag = as;
  return <Tag className={clsx('mx-auto w-full max-w-7xl px-6 lg:px-10', className)}>{children}</Tag>;
}
