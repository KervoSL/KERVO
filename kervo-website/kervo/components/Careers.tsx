import Reveal from "./Reveal";

export default function Careers() {
  return (
    <section id="careers" className="relative bg-black py-32 md:py-44 border-t border-white/10">
      <div className="mx-auto max-w-content px-6 md:px-10 text-center">
        <Reveal>
          <span className="text-[13px] tracking-wordmark uppercase text-neutral-500">Careers</span>
          <h2 className="mt-5 mx-auto text-balance text-[32px] md:text-[46px] leading-[1.2] font-semibold text-white max-w-2xl">
            We&apos;re not hiring today.
            <br />
            <span className="text-neutral-500">But we&apos;re always looking for exceptional people.</span>
          </h2>
          <p className="mt-7 mx-auto max-w-md text-neutral-400 leading-relaxed">
            If that&apos;s you, an introduction is never a bad idea. Reach out
            and tell us what you&apos;d want to build.
          </p>
          <a
            href="#contact"
            className="mt-9 inline-flex items-center rounded-full border border-white/15 text-white text-sm font-medium px-7 py-3.5 transition-colors duration-300 hover:border-white/40 hover:bg-white/5"
          >
            Say hello
          </a>
        </Reveal>
      </div>
    </section>
  );
}
