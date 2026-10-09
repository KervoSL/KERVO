import Image from "next/image";

type FrameProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/** Browser window around a real MoneyNest screenshot (1440×900). */
export function BrowserFrame({ src, alt, sizes, priority, className = "" }: FrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-stage-line bg-stage-2 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.7)] md:rounded-2xl ${className}`}
    >
      <div className="flex h-6 items-center gap-1.5 border-b border-stage-line px-3 md:h-8 md:px-4" aria-hidden="true">
        <span className="h-1.5 w-1.5 rounded-full bg-white/15 md:h-2 md:w-2" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/15 md:h-2 md:w-2" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/15 md:h-2 md:w-2" />
      </div>
      <Image
        src={src}
        alt={alt}
        width={1440}
        height={900}
        sizes={sizes}
        priority={priority}
        className="block h-auto w-full"
      />
    </div>
  );
}

/** Phone around a real MoneyNest mobile screenshot (780×1688). */
export function PhoneFrame({ src, alt, sizes, priority, className = "" }: FrameProps) {
  return (
    <div
      className={`rounded-[1.7rem] border border-white/15 bg-[#05070c] p-1.5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] md:rounded-[2.2rem] md:p-2 ${className}`}
    >
      <div className="overflow-hidden rounded-[1.3rem] md:rounded-[1.75rem]">
        <Image
          src={src}
          alt={alt}
          width={780}
          height={1688}
          sizes={sizes}
          priority={priority}
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}
