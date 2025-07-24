"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Home,
  Users,
  Calendar,
  Video,
  ShoppingBag,
  User,
  Settings,
  LogOut,
  ChevronDown,
  Heart,
  TrendingUp,
  Gamepad2,
  Bookmark,
  Plus,
  Menu,
  X,
} from "lucide-react"

const navigationItems = [
  { name: "Feed", href: "/feed", icon: Home },
  { name: "Coaches", href: "/coaches", icon: Users },
  { name: "Sessions", href: "/sessions", icon: Calendar },
  { name: "Videos", href: "/videos", icon: Video },
  { name: "Grow", href: "/grow", icon: TrendingUp },
  { name: "Activities", href: "/activities/challenges", icon: Gamepad2 },
  { name: "Shop", href: "/shop", icon: ShoppingBag },
]

const quickLinks = [
  { name: "Bookmarks", href: "/bookmarks", icon: Bookmark },
  { name: "Create Post", href: "/create-post", icon: Plus },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className={cn("flex flex-col h-full bg-background border-r", isCollapsed ? "w-16" : "w-64")}>
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <Link href="/feed" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">Lanior</span>
            </Link>
          )}
          <Button variant="ghost" size="sm" onClick={() => setIsCollapsed(!isCollapsed)} className="p-2">
            {isCollapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
          return (
            <Link key={item.name} href={item.href}>
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className={cn("w-full justify-start", isCollapsed && "px-2")}
              >
                <item.icon className="w-5 h-5" />
                {!isCollapsed && <span className="ml-3">{item.name}</span>}
              </Button>
            </Link>
          )
        })}

        {!isCollapsed && (
          <>
            <div className="pt-4">
              <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Quick Links</h3>
              <div className="mt-2 space-y-1">
                {quickLinks.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link key={item.name} href={item.href}>
                      <Button variant={isActive ? "secondary" : "ghost"} className="w-full justify-start">
                        <item.icon className="w-4 h-4" />
                        <span className="ml-3">{item.name}</span>
                      </Button>
                    </Link>
                  )
                })}
              </div>
            </div>
          </>
        )}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={cn("w-full justify-start p-2", isCollapsed && "px-2")}>
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              {!isCollapsed && (
                <>
                  <div className="ml-3 text-left">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">@johndoe</p>
                  </div>
                  <ChevronDown className="w-4 h-4 ml-auto" />
                </>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/u/johndoe">
                <User className="w-4 h-4 mr-2" />
                View Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="w-4 h-4 mr-2" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
