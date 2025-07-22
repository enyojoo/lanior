import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, Star, TrendingUp, Award, Heart } from "lucide-react"

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
    { label: "XP Points", value: "850", icon: Star, color: "text-yellow-500" },
  ]

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Your Progress</CardTitle>
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

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Upcoming Events
          </CardTitle>
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
                <h4 className="font-medium text-sm truncate">{event.title}</h4>
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

      {/* Daily Challenge */}
      <Card className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Heart className="h-5 w-5 text-pink-500" />
            Today's Challenge
          </CardTitle>
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
    </div>
  )
}
