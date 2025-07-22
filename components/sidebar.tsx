"use client"

import type * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BookOpen,
  Home,
  Play,
  Sparkles,
  Users,
  ChevronUp,
  Bookmark,
  PlusCircle,
  ShoppingBag,
  User,
  Settings,
  LifeBuoy,
  LogOut,
  Calendar,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState, useRef, useEffect } from "react"

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const pathname = usePathname()
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const profileDropdownRef = useRef<HTMLDivElement>(null)
  const profileButtonRef = useRef<HTMLButtonElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If the click is on the button, let the onClick handler handle it
      if (profileButtonRef.current && profileButtonRef.current.contains(event.target as Node)) {
        return
      }

      // If the click is outside the dropdown, close it
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const routes = [
    {
      label: "Feed",
      icon: Home,
      href: "/feed",
      active: pathname === "/feed",
    },
    {
      label: "Plans",
      icon: BookOpen,
      href: "/plans",
      active: pathname === "/plans",
    },
    {
      label: "Experts",
      icon: Users,
      href: "/experts",
      active: pathname === "/experts",
    },
    {
      label: "Events",
      icon: Calendar,
      href: "/events",
      active: pathname === "/events",
    },
    {
      label: "Clips",
      icon: Play,
      href: "/clips",
      active: pathname === "/clips",
    },
    {
      label: "Activities",
      icon: Sparkles,
      href: "/activities",
      active: pathname === "/activities",
    },
    {
      label: "Shop",
      icon: ShoppingBag,
      href: "/shop",
      active: pathname === "/shop",
    },
  ]

  return (
    <div className={cn("flex h-full flex-col", className)}>
      <div className="p-3">
        <Button
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2"
          asChild
        >
          <Link href="/create-post">
            <PlusCircle className="h-4 w-4" />
            New Post
          </Link>
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="px-3 py-2">
          <div className="space-y-3">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-4 rounded-lg px-4 py-3 text-base transition-all hover:text-primary",
                  route.active ? "bg-primary/10 text-primary" : "text-muted-foreground",
                )}
              >
                <route.icon className={cn("h-6 w-6", route.active && "text-primary")} />
                <span>{route.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 sidebar-profile-dropdown">
        <div className="relative">
          <Button
            ref={profileButtonRef}
            variant="ghost"
            className="w-full flex items-center justify-between p-2 hover:bg-accent rounded-lg"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2 border-2 border-primary overflow-hidden">
                <AvatarImage
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="User"
                  className="object-cover"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">@johndoe</p>
              </div>
            </div>
            <ChevronUp
              className={`h-4 w-4 text-muted-foreground transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
            />
          </Button>

          {isProfileOpen && (
            <div
              className="absolute bottom-full left-0 right-0 mb-2 bg-popover rounded-lg border shadow-lg overflow-hidden z-50"
              ref={profileDropdownRef}
            >
              <div className="p-4 border-b">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 border-2 border-primary overflow-hidden">
                    <AvatarImage
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="User"
                      className="object-cover"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">@johndoe</p>
                  </div>
                </div>
              </div>

              <div className="p-2">
                <Link
                  href="/profile"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-accent text-sm"
                  onClick={() => setIsProfileOpen(false)}
                >
                  <User className="h-4 w-4" />
                  <span>View Profile</span>
                </Link>
                <Link
                  href="/bookmarks"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-accent text-sm"
                  onClick={() => setIsProfileOpen(false)}
                >
                  <Bookmark className="h-4 w-4" />
                  <span>Bookmarks</span>
                </Link>
                <Link
                  href="/settings"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-accent text-sm"
                  onClick={() => setIsProfileOpen(false)}
                >
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
                <Link
                  href="/emergency"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-accent text-sm"
                  onClick={() => setIsProfileOpen(false)}
                >
                  <LifeBuoy className="h-4 w-4" />
                  <span>Emergency</span>
                </Link>
              </div>

              <div className="border-t p-2">
                <Link
                  href="/"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-accent text-destructive text-sm"
                  onClick={() => setIsProfileOpen(false)}
                >
                  <LogOut className="h-4 w-4" />
                  <span>Log out</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
