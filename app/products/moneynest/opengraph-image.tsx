import { productOg, ogSize } from "@/lib/og";

export const alt = "MoneyNest — personal finance in one place";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return productOg({
    name: "MoneyNest",
    line: "Personal finance, in one place.",
    badge: "A product by Kervo",
    icon: "products/moneynest.png",
    iconMime: "image/png",
  });
}
