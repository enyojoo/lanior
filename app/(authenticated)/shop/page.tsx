import type { Metadata } from "next"
import ShopClientPage from "./ShopClientPage"

export const metadata: Metadata = {
  title: "Shop - Lanior",
  description:
    "Lanior is the relationship wellness ecosystem that helps modern couples build thriving, lasting partnerships through expert guidance, community support, and personalized growth programs.",
}

export default function ShopPage() {
  return <ShopClientPage />
}
