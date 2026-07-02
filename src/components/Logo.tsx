import clsx from 'clsx';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

export default function Logo({ className, dark = false }: LogoProps) {
  return (
    <span
      className={clsx(
        'text-lg leading-none font-extrabold tracking-tight',
        dark ? 'text-white' : 'text-ink-900',
        className,
      )}
    >
      Video<span className="text-brand-500">Tech</span>
    </span>
  );
}
