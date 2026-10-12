import type { ReactNode } from "react";
import { LEGAL_UPDATED_ES, LEGAL_UPDATED_ISO } from "@/lib/legal";

/** Visible marker for data the owner still has to provide. */
export function Pending({ children }: { children: ReactNode }) {
  return (
    <mark className="rounded bg-[#fff3c4] px-1 font-medium text-[#6b4e00]">{children}</mark>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line pt-8">
      <h2 className="t-h3">{title}</h2>
      <div className="t-body mt-4 space-y-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}

/** Shared shell for legal documents (Spanish). */
export default function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div lang="es" className="container-x pb-24 pt-14 md:pb-32 md:pt-24">
      <div className="max-w-[44rem]">
        <h1 className="t-display !text-[clamp(2.25rem,1.4rem+3.6vw,4rem)]">{title}</h1>
        <p className="mt-4 text-[15px] text-muted">
          Última actualización: <time dateTime={LEGAL_UPDATED_ISO}>{LEGAL_UPDATED_ES}</time>
        </p>
        <p className="t-lead mt-8">{intro}</p>

        <p className="mt-8 rounded-2xl border border-line bg-surface px-5 py-4 text-[15px] leading-relaxed text-muted">
          Texto pendiente de revisión por un profesional jurídico. Los datos marcados como{" "}
          <Pending>[PENDIENTE: …]</Pending> deben ser completados por el titular antes del
          lanzamiento. No constituye asesoramiento jurídico ni garantiza por sí solo el cumplimiento
          normativo.
        </p>

        <div className="mt-12 space-y-10">{children}</div>
      </div>
    </div>
  );
}
