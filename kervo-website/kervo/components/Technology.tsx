import Reveal from "./Reveal";

const STACK = [
  "TypeScript",
  "Next.js",
  "Supabase",
  "PostgreSQL",
  "Cloudflare",
  "Vercel",
  "Applied AI",
  "Modern Web APIs",
];

export default function Technology() {
  return (
    <section className="relative bg-black py-32 md:py-44 border-t border-white/10">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <span className="text-[13px] tracking-wordmark uppercase text-neutral-500">Technology</span>
          <h2 className="mt-5 text-balance text-[36px] md:text-[52px] leading-[1.1] font-semibold text-white max-w-2xl">
            Built on a foundation made to last.
          </h2>
          <p className="mt-6 max-w-xl text-neutral-400 text-base md:text-lg leading-relaxed">
            We choose boring, proven infrastructure so the interesting work
            can happen everywhere else.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {STACK.map((tech, i) => (
            <Reveal key={tech} delay={i * 0.04} className="group bg-black px-6 py-10 flex items-center justify-center text-center transition-colors duration-500 hover:bg-neutral-950">
              <span className="text-sm md:text-[15px] font-medium text-neutral-400 group-hover:text-white transition-colors duration-300">
                {tech}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
