"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Home, MoreHorizontal, Play, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export function NavigationBar() {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Feed",
      href: "/",
      icon: Home,
    },
    {
      name: "Games",
      href: "/games",
      icon: Sparkles,
    },
    {
      name: "Plans",
      href: "/plans",
      icon: BookOpen,
    },
    {
      name: "Clips",
      href: "/clips",
      icon: Play,
    },
    {
      name: "More",
      href: "/more",
      icon: MoreHorizontal,
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around bg-black text-white py-2 border-t border-gray-800">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center px-3 py-1",
              isActive ? "text-white" : "text-gray-400",
            )}
          >
            <item.icon className="h-6 w-6 mb-1" />
            <span className="text-xs">{item.name}</span>
          </Link>
        )
      })}
    </div>
  )
}

