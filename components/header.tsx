import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

interface HeaderProps {
  title?: string
}

export function Header({ title }: HeaderProps) {
  return (
    <div className="flex h-14 items-center gap-4 px-4 lg:px-6">
      {title && <h1 className="text-lg font-semibold md:text-xl unbounded">{title}</h1>}

      <div className="flex-1"></div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <ThemeToggle />
      </div>
    </div>
  )
}
