import { productOg, ogSize } from "@/lib/og";

export const alt = "TradeVault — coming soon";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return productOg({
    name: "TradeVault",
    line: "Capital, operations and trading accounts.",
    badge: "Coming soon · A product by Kervo",
    icon: "products/tradevault.svg",
    iconMime: "image/svg+xml",
  });
}
