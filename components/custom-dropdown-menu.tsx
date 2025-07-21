"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DropdownItem {
  label: string
  onClick: () => void
  className?: string
}

interface CustomDropdownMenuProps {
  trigger: React.ReactNode
  items: DropdownItem[]
  align?: "start" | "end"
  side?: "top" | "bottom"
  className?: string
}

export function CustomDropdownMenu({
  trigger,
  items,
  align = "end",
  side = "top", // Changed default to "top" to make it a drop-up
  className,
}: CustomDropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleItemClick = (onClick: () => void) => {
    onClick()
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <div
          className={cn(
            "absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
            align === "start" ? "left-0" : "right-0",
            side === "top" ? "bottom-full mb-2" : "top-full mt-2",
            className,
          )}
          style={{
            // Add these styles to ensure the dropdown is on top
            position: "absolute",
            zIndex: 100,
          }}
        >
          {items.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={cn(
                "relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground justify-start",
                item.className,
              )}
              onClick={() => handleItemClick(item.onClick)}
            >
              {item.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}
