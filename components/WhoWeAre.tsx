import Reveal from "./Reveal";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="relative bg-black py-32 md:py-44 border-t border-white/10">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Reveal>
              <span className="text-[13px] tracking-wordmark uppercase text-neutral-500">Who we are</span>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.05}>
              <p className="text-balance text-[28px] leading-[1.35] md:text-[38px] md:leading-[1.3] font-medium text-white">
                We started KERVO because most software makes a quiet promise
                and quietly breaks it. We think a product should earn trust
                the same way a well-made object does — through the parts
                nobody has to think about.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-neutral-400 text-base md:text-lg leading-relaxed max-w-2xl">
                KERVO is not a finance company, a productivity company, or a
                trading company. We are a software company — one that happens
                to build in whichever domain deserves better tools. Today
                that means personal finance and investing. Tomorrow it will
                mean something else.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 text-neutral-400 text-base md:text-lg leading-relaxed max-w-2xl">
                Every product we ship is held to the same standard: does it
                respect the person using it? Is it fast without asking why?
                Does it still make sense in five years? If the answer is no,
                we keep working.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
