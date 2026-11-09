import { ButtonLink } from "@/components/ui/Button";

export default function ClosingCta({
  title = "Interested in what we are building?",
}: {
  title?: string;
}) {
  return (
    <section className="border-t border-line">
      <div className="container-x section">
        <div className="relative isolate overflow-hidden rounded-[1.75rem] border border-line px-6 py-12 md:rounded-[2.25rem] md:px-14 md:py-16">
          <div className="hero-backdrop absolute inset-0 -z-10" aria-hidden="true" />
          <div className="grid items-end gap-10 md:grid-cols-12">
            <h2 className="t-h2 md:col-span-7">{title}</h2>
            <div className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">
              <ButtonLink href="/contact">Get in touch</ButtonLink>
              <ButtonLink href="/about" variant="secondary">
                About Kervo
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
