export default function LogoMark({ size = 22, className = "text-white" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor" className={className} aria-hidden="true">
      <path d="M140 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32z" />
      <path d="M249.4 236.6 388.9 96.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L214.1 181.3c-11.9 11.9-11.9 31.2 0 43.1L343.6 354c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L249.4 236.6z" />
    </svg>
  );
}
