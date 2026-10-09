import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "./Icons";

type Variant = "primary" | "secondary" | "mint" | "ghost-light";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-kervo",
  secondary: "border border-line bg-surface text-ink hover:border-ink",
  mint: "bg-mint text-[#04120e] hover:bg-white",
  "ghost-light": "border border-white/20 text-stage-text hover:border-white/60",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "sm";
  /** Opens in a new tab and shows the external arrow. */
  external?: boolean;
  className?: string;
  onClick?: () => void;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  onClick,
}: Props) {
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-300 ${
    size === "sm" ? "px-4 py-2 text-[14px]" : "px-6 py-3.5 text-[15px]"
  } ${VARIANTS[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>
        {children}
        <ArrowUpRight
          size={size === "sm" ? 14 : 16}
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls} onClick={onClick}>
      {children}
      <ArrowRight
        size={size === "sm" ? 14 : 16}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
}
