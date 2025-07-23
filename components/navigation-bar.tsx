import type React from "react"
import { Home, Calendar, Users, ShoppingBag, TrendingUp } from "lucide-react"

interface NavItem {
  name: string
  href: string
  icon: React.ComponentType
}

const navItems = [
  { name: "Feed", href: "/feed", icon: Home },
  { name: "Grow", href: "/grow", icon: TrendingUp },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Experts", href: "/experts", icon: Users },
  { name: "Shop", href: "/shop", icon: ShoppingBag },
]

interface NavigationBarProps {
  className?: string
}

const NavigationBar: React.FC<NavigationBarProps> = ({ className }) => {
  return (
    <nav className={`flex items-center justify-between p-4 ${className}`}>
      {/* Logo */}
      <div className="text-xl font-bold">My App</div>

      {/* Navigation Items */}
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <a href={item.href} className="flex items-center space-x-2">
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* User Profile (Placeholder) */}
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Profile</button>
      </div>
    </nav>
  )
}

export { NavigationBar }
