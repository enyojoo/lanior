import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bookmarks - Lanior",
  description:
    "Lanior is the relationship wellness ecosystem that helps modern couples build thriving, lasting partnerships through expert guidance, community support, and personalized growth programs.",
}

export default function BookmarksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
