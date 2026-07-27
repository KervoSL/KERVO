import { Mail, Github, Linkedin } from "lucide-react";
import Reveal from "./Reveal";

const CHANNELS = [
  { label: "Email", value: "hello@kervo.com", href: "mailto:hello@kervo.com", icon: Mail },
  { label: "GitHub", value: "github.com/kervo", href: "https://github.com/investgrid", icon: Github },
  { label: "LinkedIn", value: "linkedin.com/company/kervo", href: "https://linkedin.com", icon: Linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black py-32 md:py-44 border-t border-white/10">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <span className="text-[13px] tracking-wordmark uppercase text-neutral-500">Contact</span>
          <h2 className="mt-5 text-balance text-[36px] md:text-[52px] leading-[1.1] font-semibold text-white max-w-xl">
            Let&apos;s talk.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {CHANNELS.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col justify-between gap-8 bg-black p-8 md:p-10 transition-colors duration-500 hover:bg-neutral-950"
              >
                <c.icon size={20} strokeWidth={1.5} className="text-neutral-500 group-hover:text-accent transition-colors duration-300" />
                <div>
                  <p className="text-[13px] uppercase tracking-wide text-neutral-500">{c.label}</p>
                  <p className="mt-1.5 text-white text-[15px] font-medium">{c.value}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
