"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Gift, Heart, MessageSquare, Star, Trophy, Clock, Calendar, ArrowRight } from "lucide-react"

const activityCategories = [
  {
    id: "communication",
    name: "Communication Builders",
    color: "bg-blue-500",
    description: "Improve how you connect and understand each other",
    icon: MessageSquare,
    activityCount: 24,
  },
  {
    id: "trust",
    name: "Trust Exercises",
    color: "bg-green-500",
    description: "Build and strengthen trust through shared experiences",
    icon: Heart,
    activityCount: 18,
  },
  {
    id: "fun",
    name: "Fun & Games",
    color: "bg-purple-500",
    description: "Playful activities to bring joy and laughter",
    icon: Star,
    activityCount: 32,
  },
  {
    id: "intimacy",
    name: "Intimacy Enhancers",
    color: "bg-pink-500",
    description: "Deepen emotional and physical connection",
    icon: Gift,
    activityCount: 16,
  },
  {
    id: "conflict",
    name: "Conflict Resolution",
    color: "bg-orange-500",
    description: "Learn to navigate disagreements healthily",
    icon: Trophy,
    activityCount: 12,
  },
  {
    id: "daily",
    name: "Daily Challenges",
    color: "bg-yellow-500",
    description: "Quick daily activities to strengthen your bond",
    icon: Calendar,
    activityCount: "Daily",
  },
]

const dailyChallenge = {
  id: "daily-appreciation",
  title: "Express Daily Appreciation",
  description: "Share one specific thing you appreciate about your partner today and why it matters to you.",
  category: "Daily Challenge",
  duration: "5 min",
  xpReward: 25,
  icon: Heart,
}

const userStats = {
  completedActivities: 12,
  currentStreak: 7,
  xpPoints: 850,
  level: 3,
}

export default function ActivitiesPage() {
  const router = useRouter()
  const [hasActivityHistory, setHasActivityHistory] = useState(true)

  const startActivity = (activityId: string) => {
    router.push(`/activities/${activityId}`)
  }

  const navigateToCategory = (categoryId: string) => {
    router.push(`/activities/categories/${categoryId}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold unbounded">Activities & Games</h1>
      </div>

      {/* Daily Challenge Hero */}
      <div className="p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Today's Challenge</h2>
            <p className="text-muted-foreground mb-4">{dailyChallenge.description}</p>
            <div className="flex items-center gap-2">
              <Badge className="bg-purple-500">{dailyChallenge.category}</Badge>
              <span className="text-sm text-muted-foreground">
                <Clock className="inline h-3 w-3 mr-1" />
                {dailyChallenge.duration}
              </span>
            </div>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center mb-2">
              <Trophy className="h-10 w-10 text-purple-500" />
            </div>
            <Button onClick={() => startActivity(dailyChallenge.id)}>Start Challenge</Button>
          </div>
        </div>
      </div>

      {/* User Stats Dashboard */}
      {hasActivityHistory && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4 text-center bg-gradient-to-br from-emerald-500/10 to-emerald-500/5">
            <div className="text-2xl font-bold text-emerald-500">{userStats.completedActivities}</div>
            <div className="text-sm text-muted-foreground">Activities Completed</div>
          </Card>
          <Card className="p-4 text-center bg-gradient-to-br from-purple-500/10 to-purple-500/5">
            <div className="text-2xl font-bold text-purple-500">{userStats.currentStreak}</div>
            <div className="text-sm text-muted-foreground">Day Streak</div>
          </Card>
          <Card className="p-4 text-center bg-gradient-to-br from-pink-500/10 to-pink-500/5">
            <div className="text-2xl font-bold text-pink-500">{userStats.xpPoints}</div>
            <div className="text-sm text-muted-foreground">XP Points</div>
          </Card>
          <Card className="p-4 text-center bg-gradient-to-br from-yellow-500/10 to-yellow-500/5">
            <div className="text-2xl font-bold text-yellow-500">{userStats.level}</div>
            <div className="text-sm text-muted-foreground">Current Level</div>
          </Card>
        </div>
      )}

      {/* Category Navigation - Full Width */}
      <div>
        <h2 className="text-xl font-bold mb-6">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activityCategories.map((category) => (
            <Card
              key={category.id}
              className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 group h-48 flex flex-col"
              onClick={() => navigateToCategory(category.id)}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-1 text-center space-y-3">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{category.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-sm font-medium text-muted-foreground">
                    {typeof category.activityCount === "number"
                      ? `${category.activityCount} activities`
                      : category.activityCount}
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
