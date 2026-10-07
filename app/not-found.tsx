import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black px-6 text-center pt-[76px]">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div className="relative">
        <span className="text-[13px] tracking-wordmark uppercase text-neutral-500">404</span>
        <h1 className="mt-5 text-[40px] md:text-[56px] font-semibold text-white leading-tight">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-5 text-neutral-400 max-w-sm mx-auto">
          The link may be broken, or the page may have moved. Let&apos;s get
          you back to solid ground.
        </p>
        <Link
          href="/"
          className="mt-9 inline-flex items-center rounded-full bg-white text-black text-sm font-medium px-7 py-3.5 transition-colors duration-300 hover:bg-accent hover:text-white"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
