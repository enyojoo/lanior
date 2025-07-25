"use client"

import type React from "react"

import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <div className="w-64 flex-shrink-0">
          <div className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] border-r bg-background">
            <Sidebar />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
        </div>
      </div>
    </div>
  )
}
