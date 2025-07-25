"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, TrendingUp, Award } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function SidebarContent() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Virtual Date Night Ideas",
      date: "Tonight 8:00 PM",
      attendees: 234,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      title: "Communication Workshop",
      date: "Tomorrow 7:00 PM",
      attendees: 156,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      title: "Relationship Goals Setting",
      date: "Sat 2:00 PM",
      attendees: 89,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const quickStats = [
    { label: "Activities Completed", value: "12", icon: Award, color: "text-emerald-500" },
    { label: "Current Streak", value: "7", icon: TrendingUp, color: "text-purple-500" },
    { label: "XP Points", value: "850", icon: TrendingUp, color: "text-yellow-500" },
  ]

  const featuredExperts = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Relationship Therapy",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Mark Thompson",
      specialty: "Communication Coach",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Lisa Chen",
      specialty: "Intimacy Counselor",
      image: "/placeholder.svg?height=40&width=40",
    },
  ]

  const trendingPrograms = [
    {
      id: 1,
      title: "30-Day Communication Challenge",
      participants: 1234,
      duration: "30 days",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      title: "Date Night Mastery",
      participants: 856,
      duration: "14 days",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      title: "Conflict Resolution",
      participants: 642,
      duration: "21 days",
      image: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Daily Challenge - First */}
      <Card className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20">
        <CardHeader>
          <CardTitle className="text-lg unbounded">Today's Challenge</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Share one specific thing you appreciate about your partner today
            </p>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">
                <Clock className="h-3 w-3 mr-1" />5 min
              </Badge>
              <Badge className="bg-purple-500 text-xs">+25 XP</Badge>
            </div>
            <Button size="sm" className="w-full bg-pink-500 hover:bg-pink-600">
              Start Challenge
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Your Lanior Progress - Second */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg unbounded">Your Lanior Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {quickStats.map((stat, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
              <span className={`font-bold ${stat.color}`}>{stat.value}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Featured Experts - Third */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg unbounded">Featured Experts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {featuredExperts.map((expert) => (
            <div key={expert.id} className="flex gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors">
              <Avatar className="h-10 w-10 border-2 border-primary">
                <AvatarImage src={expert.image || "/placeholder.svg"} alt={expert.name} />
                <AvatarFallback>
                  {expert.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm truncate">{expert.name}</h4>
                <p className="text-xs text-muted-foreground">{expert.specialty}</p>
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full bg-transparent" size="sm">
            View All Experts
          </Button>
        </CardContent>
      </Card>

      {/* Trending Plans - Fourth */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg unbounded">Trending Programs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {trendingPrograms.map((program) => (
            <div key={program.id} className="flex gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors">
              <img
                src={program.image || "/placeholder.svg"}
                alt={program.title}
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm">{program.title}</h4>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                  <Users className="h-3 w-3" />
                  <span>{program.participants} joined</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <Clock className="h-3 w-3" />
                  <span>{program.duration}</span>
                </div>
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full bg-transparent" size="sm">
            View All Programs
          </Button>
        </CardContent>
      </Card>

      {/* Upcoming Events - Last */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg unbounded">Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="flex gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors">
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm">{event.title}</h4>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                  <Clock className="h-3 w-3" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <Users className="h-3 w-3" />
                  <span>{event.attendees} attending</span>
                </div>
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full bg-transparent" size="sm">
            View All Events
          </Button>
        </CardContent>
      </Card>

      {/* Add Footer at the end */}
      <div className="border-t pt-6 mt-6">
        <div className="space-y-4 text-xs text-muted-foreground">
          <div className="flex flex-wrap gap-2">
            <a href="#" className="hover:text-foreground transition-colors">
              About
            </a>
            <span>·</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Help
            </a>
            <span>·</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Blog
            </a>
            <span>·</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Careers
            </a>
            <span>·</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Press
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Use
            </a>
            <span>·</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Contact Us
            </a>
             <p className="pt-2">© 2025 Easner, Inc.</p>
          </div>
          <div className="space-y-2">
          </div>
        </div>
      </div>
    </div>
  )
}
