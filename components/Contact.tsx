import { Mail, Github } from "lucide-react";
import Reveal from "./Reveal";
import { CONTACT_EMAIL, EXTERNAL_LINKS } from "@/lib/site";

const CHANNELS = [
  { label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, icon: Mail },
  { label: "GitHub", value: "github.com/KervoSL", href: EXTERNAL_LINKS.github, icon: Github },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black py-28 md:py-40 border-t border-white/10 scroll-mt-16">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <span className="text-[13px] tracking-wordmark uppercase text-neutral-500">Contact</span>
          <h2 className="mt-5 text-balance text-[32px] sm:text-[40px] md:text-[52px] leading-[1.1] font-semibold text-white max-w-xl">
            Let&apos;s talk.
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {CHANNELS.map((c, i) => {
            const external = c.href.startsWith("http");
            return (
              <Reveal key={c.label} delay={i * 0.06} className="bg-black">
                <a
                  href={c.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex h-full min-h-[168px] flex-col justify-between gap-8 p-8 md:p-10 transition-colors duration-500 hover:bg-neutral-950"
                >
                  <c.icon size={20} strokeWidth={1.5} className="text-neutral-500 group-hover:text-accent transition-colors duration-300" />
                  <div>
                    <p className="text-[13px] uppercase tracking-wide text-neutral-500">{c.label}</p>
                    <p className="mt-1.5 text-white text-[15px] font-medium break-all">{c.value}</p>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
