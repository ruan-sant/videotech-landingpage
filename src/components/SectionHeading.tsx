import clsx from 'clsx';
import FadeIn from './FadeIn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={clsx(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
      )}
    >
      {eyebrow && (
        <span
          className={clsx(
            'inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase',
            light
              ? 'bg-white/10 text-brand-300'
              : 'bg-brand-50 text-brand-700',
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          'max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl',
          light ? 'text-white' : 'text-ink-900',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            'max-w-xl text-base leading-relaxed text-balance sm:text-lg',
            light ? 'text-ink-300' : 'text-ink-500',
          )}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}
