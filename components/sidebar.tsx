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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Home,
  Calendar,
  Video,
  ShoppingBag,
  Bookmark,
  Settings,
  LogOut,
  User,
  ChevronUp,
  Heart,
  Activity,
  Target,
  UserCheck,
  PlusCircle,
} from "lucide-react"

const navigation = [
  { name: "Feed", href: "/feed", icon: Home },
  { name: "Coaches", href: "/coaches", icon: UserCheck },
  { name: "Sessions", href: "/sessions", icon: Calendar },
  { name: "Videos", href: "/videos", icon: Video },
  { name: "Activities", href: "/activities/challenges", icon: Activity },
  { name: "Grow", href: "/grow", icon: Target },
  { name: "Shop", href: "/shop", icon: ShoppingBag },
  { name: "Bookmarks", href: "/bookmarks", icon: Bookmark },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-background border-r transition-all duration-300",
        isCollapsed ? "w-16" : "w-64",
      )}
    >
      {/* Logo */}
      <div className="p-4 border-b">
        <Link href="/feed" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5 text-primary-foreground" />
          </div>
          {!isCollapsed && <span className="font-bold text-xl">Lanior</span>}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent",
                isCollapsed && "justify-center",
              )}
            >
              <item.icon className="w-5 h-5" />
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          )
        })}

        <div className="pt-4 border-t">
          <Link
            href="/create-post"
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-muted-foreground hover:text-foreground hover:bg-accent",
              isCollapsed && "justify-center",
            )}
          >
            <PlusCircle className="w-5 h-5" />
            {!isCollapsed && <span>Create Post</span>}
          </Link>
        </div>
      </nav>

      {/* User Menu */}
      <div className="p-4 border-t">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={cn("w-full justify-start gap-3 h-auto p-3", isCollapsed && "justify-center")}
            >
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              {!isCollapsed && (
                <>
                  <div className="flex-1 text-left">
                    <div className="text-sm font-medium">John Doe</div>
                    <div className="text-xs text-muted-foreground">@johndoe</div>
                  </div>
                  <ChevronUp className="w-4 h-4" />
                </>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem asChild>
              <Link href="/u/johndoe" className="flex items-center gap-2">
                <User className="w-4 h-4" />
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
