import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { NavigationBar } from "@/components/navigation-bar"
import { Toaster } from "@/components/ui/toaster"
import Image from "next/image"

export default function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={true}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-950 overflow-hidden">
        {/* Header - full width background */}
        <div className="w-full border-b fixed top-0 z-30">
          <div className="max-w-7xl mx-auto flex">
            {/* Logo area aligned with sidebar */}
            <div className="w-64 flex items-center h-14 px-4 border-r">
              <div className="flex items-center">
                {/* Light mode logo (hidden in dark mode) */}
                <Image src="/images/lanior-eng.svg" alt="Lanior Logo" width={120} height={30} className="dark:hidden" />
                {/* Dark mode logo (hidden in light mode) */}
                <Image
                  src="/images/lanior-engw.svg"
                  alt="Lanior Logo"
                  width={120}
                  height={30}
                  className="hidden dark:block"
                />
              </div>
            </div>

            {/* Header content */}
            <div className="flex-1">
              <Header />
            </div>
          </div>
        </div>

        {/* Main container */}
        <div className="max-w-7xl mx-auto flex relative">
          {/* Sidebar */}
          <aside className="fixed w-64 h-screen z-20 border-r pt-14">
            <Sidebar />
          </aside>

          {/* Content area */}
          <div className="flex-1 pl-64 pt-14">
            <main className="overflow-auto p-4 md:p-6 h-[calc(100vh-3.5rem)]">{children}</main>
          </div>
        </div>

        {/* Mobile navigation bar */}
        <div className="md:hidden">
          <NavigationBar />
        </div>

        {/* Toast notifications */}
        <Toaster />
      </div>
    </ThemeProvider>
  )
}
