import type { Metadata } from "next"
import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { NavigationBar } from "@/components/navigation-bar"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: {
    template: "%s - Lanior",
    default: "Lanior: Where Relationships Thrive",
  },
  description:
    "Lanior is the relationship wellness ecosystem that helps modern couples build thriving, lasting partnerships through expert guidance, community support, and personalized growth programs.",
}

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <Header />
      <Sidebar />
      <NavigationBar />
      {children}
      <Toaster />
    </ThemeProvider>
  )
}
