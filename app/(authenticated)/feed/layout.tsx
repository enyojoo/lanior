import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lanior: Where Relationships Thrive",
  description:
    "Lanior is the relationship wellness ecosystem that helps modern couples build thriving, lasting partnerships through expert guidance, community support, and personalized growth programs.",
}

export default function FeedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
