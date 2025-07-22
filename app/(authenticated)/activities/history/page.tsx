"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Clock, Star, Trophy, Calendar, Heart, MessageSquare, Gift, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const activityHistory = [
  {
    id: "gratitude-practice",
    title: "Daily Gratitude Exchange",
    category: { name: "Daily Challenge", color: "bg-yellow-500" },
    completedAt: "2024-01-20T10:30:00",
    duration: "4 min",
    xpEarned: 25,
    rating: 5,
    icon: Star,
    partnerParticipated: true,
  },
  {
    id: "love-language-quiz",
    title: "Love Language Discovery Quiz",
    category: { name: "Communication", color: "bg-blue-500" },
    completedAt: "2024-01-19T19:15:00",
    duration: "12 min",
    xpEarned: 50,
    rating: 5,
    icon: Heart,
    partnerParticipated: true,
  },
  {
    id: "memory-lane-game",
    title: "Memory Lane Challenge",
    category: { name: "Fun & Games", color: "bg-purple-500" },
    completedAt: "2024-01-18T20:45:00",
    duration: "28 min",
    xpEarned: 75,
    rating: 4,
    icon: MessageSquare,
    partnerParticipated: true,
  },
  {
    id: "trust-fall-exercise",
    title: "Virtual Trust Building",
    category: { name: "Trust Exercises", color: "bg-green-500" },
    completedAt: "2024-01-17T16:20:00",
    duration: "18 min",
    xpEarned: 60,
    rating: 4,
    icon: Heart,
    partnerParticipated: true,
  },
  {
    id: "intimacy-builder",
    title: "Emotional Intimacy Deepener",
    category: { name: "Intimacy Enhancers", color: "bg-pink-500" },
    completedAt: "2024-01-15T21:00:00",
    duration: "35 min",
    xpEarned: 90,
    rating: 5,
    icon: Gift,
    partnerParticipated: true,
  },
]

const stats = {
  totalActivities: 12,
  totalXP: 850,
  currentStreak: 7,
  favoriteCategory: "Communication",
}

export default function ActivityHistoryPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")
  const [sortBy, setSortBy] = useState("recent")

  const filteredHistory = activityHistory
    .filter(
      (activity) =>
        activity.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterCategory === "all" || activity.category.name.toLowerCase().includes(filterCategory.toLowerCase())),
    )
    .sort((a, b) => {
      if (sortBy === "recent") {
        return new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
      } else if (sortBy === "rating") {
        return b.rating - a.rating
      } else if (sortBy === "xp") {
        return b.xpEarned - a.xpEarned
      }
      return 0
    })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const playAgain = (activityId: string) => {
    router.push(`/activities/${activityId}`)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => router.push("/activities")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold unbounded">Activity History</h1>
          <p className="text-muted-foreground">Track your relationship building journey</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center bg-gradient-to-br from-emerald-500/10 to-emerald-500/5">
          <div className="text-2xl font-bold text-emerald-500">{stats.totalActivities}</div>
          <div className="text-sm text-muted-foreground">Total Activities</div>
        </Card>
        <Card className="p-4 text-center bg-gradient-to-br from-purple-500/10 to-purple-500/5">
          <div className="text-2xl font-bold text-purple-500">{stats.totalXP}</div>
          <div className="text-sm text-muted-foreground">Total XP</div>
        </Card>
        <Card className="p-4 text-center bg-gradient-to-br from-yellow-500/10 to-yellow-500/5">
          <div className="text-2xl font-bold text-yellow-500">{stats.currentStreak}</div>
          <div className="text-sm text-muted-foreground">Day Streak</div>
        </Card>
        <Card className="p-4 text-center bg-gradient-to-br from-blue-500/10 to-blue-500/5">
          <div className="text-sm font-bold text-blue-500">{stats.favoriteCategory}</div>
          <div className="text-sm text-muted-foreground">Favorite Category</div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search activities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="communication">Communication</SelectItem>
              <SelectItem value="trust">Trust Exercises</SelectItem>
              <SelectItem value="fun">Fun & Games</SelectItem>
              <SelectItem value="intimacy">Intimacy</SelectItem>
              <SelectItem value="daily">Daily Challenges</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="xp">Most XP</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Activity History List */}
      <div className="space-y-4">
        {filteredHistory.map((activity) => (
          <Card key={`${activity.id}-${activity.completedAt}`} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <activity.icon className="h-6 w-6 text-primary" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{activity.title}</h3>
                    <Badge className={activity.category.color}>{activity.category.name}</Badge>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(activity.completedAt)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {activity.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Trophy className="h-3 w-3" />+{activity.xpEarned} XP
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < activity.rating ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {activity.partnerParticipated && (
                    <div className="flex -space-x-2">
                      <Avatar className="h-6 w-6 border-2 border-background">
                        <AvatarImage src="/placeholder-user.jpg" alt="You" />
                        <AvatarFallback>Y</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-6 w-6 border-2 border-background">
                        <AvatarImage src="/placeholder-user.jpg" alt="Partner" />
                        <AvatarFallback>P</AvatarFallback>
                      </Avatar>
                    </div>
                  )}

                  <Button variant="outline" size="sm" onClick={() => playAgain(activity.id)}>
                    Play Again
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredHistory.length === 0 && (
        <Card className="p-12 text-center">
          <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No activities found</h3>
          <p className="text-muted-foreground mb-4">
            {searchTerm || filterCategory !== "all"
              ? "Try adjusting your search or filters"
              : "Start your first activity to see your history here"}
          </p>
          <Button onClick={() => router.push("/activities")}>Browse Activities</Button>
        </Card>
      )}
    </div>
  )
}
