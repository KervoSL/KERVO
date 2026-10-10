type IconProps = { className?: string; size?: number };

export const KERVO_MARK_PATH =
  "M61.04 14.52L59.44 15.19L57.90 16.20L52.34 21.89L27.18 48.33L26.17 49.67L25.37 51.67L25.17 53.01L25.17 54.02L25.50 55.89L26.24 57.56L27.04 58.63L56.43 89.22L57.50 90.23L58.63 91.03L60.31 91.83L62.32 92.30L83.94 92.24L84.47 91.97L84.87 91.57L85.21 90.83L85.14 89.69L84.67 88.89L50.67 54.82L50.20 53.88L50.20 53.01L50.80 51.87L85.07 17.54L85.54 16.47L85.48 15.53L85.27 15.06L84.81 14.52L83.94 14.12L62.85 14.12ZM18.07 0.00L17.00 0.60L2.74 11.98L1.81 12.92L1.00 14.06L0.20 16.06L0.00 17.34L0.00 82.60L0.20 84.07L0.60 85.34L1.41 86.81L2.68 88.29L16.87 99.46L18.01 100.00L18.74 100.00L19.68 99.60L20.35 98.86L20.55 98.26L20.55 1.61L20.21 0.80L19.54 0.20L19.01 0.00Z";

export function KMark({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={(size * 85.54) / 100}
      height={size}
      viewBox="0 0 85.54 100"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d={KERVO_MARK_PATH} />
    </svg>
  );
}

export function ArrowRight({ className, size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export function ArrowUpRight({ className, size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" />
    </svg>
  );
}

export function Check({ className, size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m3 8.5 3.2 3.2L13 4.8" />
    </svg>
  );
}
