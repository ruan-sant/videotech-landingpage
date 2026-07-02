interface IconProps {
  className?: string;
}

export default function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.55c0-.86.24-1.44 1.47-1.44h1.57V4.46A21 21 0 0 0 14.1 4.3c-2.24 0-3.78 1.37-3.78 3.87v2.16H7.75v2.96h2.57V21h3.18Z" />
    </svg>
  );
}
