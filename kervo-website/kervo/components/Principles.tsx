import { Gem, ShieldCheck, Gauge, Feather, Lightbulb, Anchor } from "lucide-react";
import Reveal from "./Reveal";

const PRINCIPLES = [
  {
    icon: Gem,
    title: "Craftsmanship",
    text: "We sweat the details other teams skip — spacing, timing, wording. It's how quality gets felt before it gets noticed.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy",
    text: "Your data belongs to you. We build local-first wherever possible and never treat information as inventory.",
  },
  {
    icon: Gauge,
    title: "Performance",
    text: "Speed is a feature we never negotiate away. If it feels slow, it isn't finished.",
  },
  {
    icon: Feather,
    title: "Simplicity",
    text: "The best interface is the one you stop noticing. We remove until only what matters remains.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "We question defaults, including our own. Good ideas get shipped; comfortable ones get challenged.",
  },
  {
    icon: Anchor,
    title: "Reliability",
    text: "Software people depend on has to simply work — every day, without drama, without excuses.",
  },
];

export default function Principles() {
  return (
    <section id="principles" className="relative bg-black py-32 md:py-44 border-t border-white/10">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <span className="text-[13px] tracking-wordmark uppercase text-neutral-500">Our principles</span>
          <h2 className="mt-5 text-balance text-[36px] md:text-[52px] leading-[1.1] font-semibold text-white max-w-2xl">
            What we refuse to compromise on.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="bg-black p-9 md:p-10">
              <p.icon size={22} strokeWidth={1.5} className="text-accent" />
              <h3 className="mt-6 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-400">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
