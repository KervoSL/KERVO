import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-x pb-32 pt-24 md:pt-36">
      <p className="text-[15px] text-muted">Error 404</p>
      <h1 className="t-display mt-4 max-w-[10em]">This page does not exist.</h1>
      <p className="t-lead mt-7 max-w-[30rem]">
        The link may be broken, or the page may have moved.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/products" variant="secondary">
          Our products
        </ButtonLink>
      </div>
    </section>
  );
}
