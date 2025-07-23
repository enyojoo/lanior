import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Account Access - Lanior",
  description:
    "Access Lanior's relationship wellness ecosystem to build thriving partnerships through expert guidance and community support",
}

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={true}>
      {children}
      <Toaster />
    </ThemeProvider>
  )
}
