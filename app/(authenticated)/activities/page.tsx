"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Gift, Heart, MessageSquare, Star, Trophy, Clock, Users, Check, Calendar, ArrowRight } from "lucide-react"
import { SidebarContent } from "@/components/sidebar-content"

const activityCategories = [
  {
    id: "communication",
    name: "💬 Communication Builders",
    color: "bg-blue-500",
    description: "Improve how you connect and understand each other",
    icon: MessageSquare,
    activityCount: 24,
  },
  {
    id: "trust",
    name: "🤝 Trust Exercises",
    color: "bg-green-500",
    description: "Build and strengthen trust through shared experiences",
    icon: Heart,
    activityCount: 18,
  },
  {
    id: "fun",
    name: "🎮 Fun & Games",
    color: "bg-purple-500",
    description: "Playful activities to bring joy and laughter",
    icon: Star,
    activityCount: 32,
  },
  {
    id: "intimacy",
    name: "💕 Intimacy Enhancers",
    color: "bg-pink-500",
    description: "Deepen emotional and physical connection",
    icon: Gift,
    activityCount: 16,
  },
  {
    id: "conflict",
    name: "🔧 Conflict Resolution",
    color: "bg-orange-500",
    description: "Learn to navigate disagreements healthily",
    icon: Trophy,
    activityCount: 12,
  },
  {
    id: "daily",
    name: "📅 Daily Challenges",
    color: "bg-yellow-500",
    description: "Quick daily activities to strengthen your bond",
    icon: Calendar,
    activityCount: "Daily",
  },
]

const sampleActivities = [
  {
    id: "love-language-quiz",
    title: "Love Language Discovery Quiz",
    description:
      "Discover your primary love language and learn how to better connect with your partner through personalized insights.",
    category: { id: "communication", name: "Communication", color: "bg-blue-500" },
    duration: "15 min",
    difficulty: "Beginner",
    rating: 4.8,
    completionCount: "15.2K",
    xpReward: 50,
    isPartnerActivity: true,
    isCompleted: false,
    progress: 0,
    icon: Heart,
    estimatedTime: 15,
    steps: 25,
    isNew: false,
  },
  {
    id: "gratitude-practice",
    title: "Daily Gratitude Exchange",
    description: "Share three things you appreciate about each other in this simple but powerful daily practice.",
    category: { id: "daily", name: "Daily Challenge", color: "bg-yellow-500" },
    duration: "5 min",
    difficulty: "Beginner",
    rating: 4.9,
    completionCount: "23.1K",
    xpReward: 25,
    isPartnerActivity: true,
    isCompleted: true,
    progress: 100,
    icon: Star,
    isNew: false,
  },
  {
    id: "memory-lane-game",
    title: "Memory Lane Challenge",
    description: "Take turns sharing favorite memories together and create new ones through guided storytelling.",
    category: { id: "fun", name: "Fun & Games", color: "bg-purple-500" },
    duration: "30 min",
    difficulty: "Intermediate",
    rating: 4.7,
    completionCount: "8.9K",
    xpReward: 75,
    isPartnerActivity: true,
    isCompleted: false,
    progress: 45,
    icon: MessageSquare,
    isNew: true,
  },
  {
    id: "trust-fall-exercise",
    title: "Virtual Trust Building",
    description: "Build trust through guided exercises designed to strengthen your emotional connection.",
    category: { id: "trust", name: "Trust Exercises", color: "bg-green-500" },
    duration: "20 min",
    difficulty: "Intermediate",
    rating: 4.6,
    completionCount: "12.3K",
    xpReward: 60,
    isPartnerActivity: true,
    isCompleted: false,
    progress: 0,
    icon: Heart,
    isNew: false,
  },
  {
    id: "conflict-resolution",
    title: "Healthy Disagreement Practice",
    description: "Learn to navigate conflicts constructively with guided scenarios and communication techniques.",
    category: { id: "conflict", name: "Conflict Resolution", color: "bg-orange-500" },
    duration: "25 min",
    difficulty: "Advanced",
    rating: 4.5,
    completionCount: "6.8K",
    xpReward: 80,
    isPartnerActivity: true,
    isCompleted: false,
    progress: 0,
    icon: Trophy,
    isNew: false,
  },
  {
    id: "intimacy-builder",
    title: "Emotional Intimacy Deepener",
    description: "Strengthen your emotional bond through vulnerability exercises and deep conversation prompts.",
    category: { id: "intimacy", name: "Intimacy Enhancers", color: "bg-pink-500" },
    duration: "40 min",
    difficulty: "Intermediate",
    rating: 4.8,
    completionCount: "9.1K",
    xpReward: 90,
    isPartnerActivity: true,
    isCompleted: false,
    progress: 0,
    icon: Gift,
    isNew: true,
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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [hasActivityHistory, setHasActivityHistory] = useState(true)

  const filteredActivities = selectedCategory
    ? sampleActivities.filter((activity) => activity.category.id === selectedCategory)
    : sampleActivities

  const startActivity = (activityId: string) => {
    router.push(`/activities/${activityId}`)
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Category Navigation */}
          <div>
            <h2 className="text-xl font-bold mb-4">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activityCategories.map((category) => (
                <Card
                  key={category.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedCategory === category.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-full ${category.color}`}>
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                        <div className="text-xs text-muted-foreground mt-1">
                          {typeof category.activityCount === "number"
                            ? `${category.activityCount} activities`
                            : category.activityCount}
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Activities Grid */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                {selectedCategory
                  ? `${activityCategories.find((c) => c.id === selectedCategory)?.name} Activities`
                  : "All Activities"}
              </h2>
              {selectedCategory && (
                <Button variant="outline" size="sm" onClick={() => setSelectedCategory(null)}>
                  Show All
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 gap-6">
              {filteredActivities.map((activity) => (
                <Card
                  key={activity.id}
                  className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary/50"
                  onClick={() => startActivity(activity.id)}
                >
                  <div className="relative">
                    <div className="h-32 bg-gradient-to-br from-primary/20 to-emerald-500/20 flex items-center justify-center relative overflow-hidden">
                      <activity.icon className="h-12 w-12 text-primary" />

                      {/* Status Badges */}
                      <div className="absolute top-2 left-2 flex gap-1">
                        <Badge className={activity.category.color}>{activity.category.name}</Badge>
                        {activity.difficulty && <Badge variant="outline">{activity.difficulty}</Badge>}
                        {activity.isNew && <Badge className="bg-red-500">New!</Badge>}
                      </div>

                      {/* Completion Status */}
                      {activity.isCompleted && (
                        <div className="absolute top-2 right-2">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <Check className="h-5 w-5 text-white" />
                          </div>
                        </div>
                      )}

                      {/* Partner Activity Indicator */}
                      {activity.isPartnerActivity && (
                        <div className="absolute bottom-2 left-2">
                          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                            <Users className="h-3 w-3 mr-1" />
                            Partner Activity
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{activity.description}</p>

                    {/* Activity Metadata */}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {activity.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                        {activity.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {activity.completionCount}
                      </span>
                    </div>

                    {/* XP Reward */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-sm">
                        <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">XP</span>
                        </div>
                        <span className="text-purple-500 font-medium">+{activity.xpReward} XP</span>
                      </div>
                      {activity.isPartnerActivity && (
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
                    </div>

                    {/* Progress Indicator */}
                    {activity.progress > 0 && activity.progress < 100 && (
                      <div className="mb-4">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Progress</span>
                          <span>{activity.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-primary to-emerald-500"
                            style={{ width: `${activity.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </CardContent>

                  <CardFooter className="p-4 pt-0">
                    <Button
                      className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                      onClick={(e) => {
                        e.stopPropagation()
                        startActivity(activity.id)
                      }}
                    >
                      {activity.isCompleted ? "Play Again" : activity.progress > 0 ? "Continue" : "Start Activity"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div>
          <SidebarContent />
        </div>
      </div>
    </div>
  )
}
