"use client";

import { usePathname } from "next/navigation";
import Newsletter from "@/components/ui/Newsletter";

// Product pages carry their own, product-specific sign-up. Showing the general one as well
// would put two near-identical forms on the same screen.
const OWN_FORM = ["/products/moneynest", "/products/tradevault"];

export default function FooterNewsletter() {
  const pathname = usePathname();
  if (OWN_FORM.some((p) => pathname === p || pathname.startsWith(`${p}/`))) return null;
  return (
    <div className="relative grid gap-8 mb-14 border-b border-line pb-14 md:mb-16 md:grid-cols-12 md:gap-12 md:pb-16">
      <div className="md:col-span-6">
        <h2 className="t-h3 max-w-[16em]">News from Kervo, in your inbox.</h2>
        <p className="t-body mt-3 max-w-[28rem]">
          Updates on MoneyNest, TradeVault and the products we build next.
        </p>
      </div>
      <div className="md:col-span-5 md:col-start-8">
        <Newsletter />
      </div>
    </div>
  );
}
