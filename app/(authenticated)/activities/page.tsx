"use client"

import type { Metadata } from "next"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Clock,
  Users,
  Star,
  Check,
  Heart,
  MessageSquare,
  Trophy,
  Calendar,
  Shield,
  Search,
  History,
  Target,
} from "lucide-react"

// Note: This metadata would typically be set in a parent layout or using generateMetadata
const pageMetadata: Metadata = {
  title: "Activities - Lanior",
  description:
    "Lanior is the relationship wellness ecosystem that helps modern couples build thriving, lasting partnerships through expert guidance, community support, and personalized growth programs.",
}

const categories = [
  {
    id: "communication",
    name: "Communication Builders",
    description: "Improve how you connect and understand each other",
    color: "bg-blue-500",
    icon: MessageSquare,
    count: 12,
  },
  {
    id: "trust",
    name: "Trust Exercises",
    description: "Build and strengthen trust through shared experiences",
    color: "bg-green-500",
    icon: Shield,
    count: 8,
  },
  {
    id: "fun",
    name: "Fun & Games",
    description: "Playful activities to bring joy and laughter",
    color: "bg-purple-500",
    icon: Trophy,
    count: 15,
  },
  {
    id: "intimacy",
    name: "Intimacy Enhancers",
    description: "Deepen emotional and physical connection",
    color: "bg-pink-500",
    icon: Heart,
    count: 10,
  },
  {
    id: "conflict",
    name: "Conflict Resolution",
    description: "Learn to navigate disagreements healthily",
    color: "bg-orange-500",
    icon: Trophy,
    count: 6,
  },
  {
    id: "daily",
    name: "Daily Challenges",
    description: "Quick daily activities to strengthen your bond",
    color: "bg-yellow-500",
    icon: Calendar,
    count: 20,
  },
]

const featuredActivities = [
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
    icon: Shield,
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
    icon: Star,
    isNew: true,
  },
]

export default function ActivitiesPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")

  const startActivity = (activityId: string) => {
    router.push(`/activities/${activityId}`)
  }

  const viewCategory = (categoryId: string) => {
    router.push(`/activities/categories/${categoryId}`)
  }

  const filteredActivities = featuredActivities.filter((activity) => {
    const matchesSearch =
      activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || activity.category.id === selectedCategory
    const matchesDifficulty = selectedDifficulty === "all" || activity.difficulty === selectedDifficulty

    return matchesSearch && matchesCategory && matchesDifficulty
  })

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold unbounded">Relationship Activities</h1>
          <p className="text-muted-foreground mt-1">Interactive exercises to strengthen your bond</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => router.push("/activities/challenges")}>
            <Target className="h-4 w-4 mr-2" />
            Challenges
          </Button>
          <Button variant="outline" onClick={() => router.push("/activities/history")}>
            <History className="h-4 w-4 mr-2" />
            History
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search activities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="All Levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Categories Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-6 unbounded">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50"
              onClick={() => viewCategory(category.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <Badge variant="secondary" className="mt-1">
                      {category.count} activities
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured Activities */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold unbounded">Featured Activities</h2>
          <Button variant="outline" onClick={() => router.push("/activities/categories/all")}>
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredActivities.map((activity) => (
            <Card
              key={activity.id}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 flex flex-col h-[400px]"
              onClick={() => startActivity(activity.id)}
            >
              <div className="relative">
                <div className="h-32 bg-gradient-to-br from-primary/20 to-emerald-500/20 flex items-center justify-center relative overflow-hidden">
                  <activity.icon className="h-12 w-12 text-primary" />

                  {/* Status Badges and XP */}
                  <div className="absolute top-2 left-2 flex gap-1">
                    <Badge className={activity.category.color}>{activity.category.name.split(" ")[0]}</Badge>
                    {activity.difficulty && <Badge variant="outline">{activity.difficulty}</Badge>}
                    {activity.isNew && <Badge className="bg-red-500">New!</Badge>}
                  </div>

                  <div className="absolute top-2 right-2 flex items-center gap-2">
                    <div className="flex items-center gap-1 text-sm bg-background/80 backdrop-blur-sm rounded-full px-2 py-1">
                      <div className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">XP</span>
                      </div>
                      <span className="text-purple-500 font-medium">+{activity.xpReward}</span>
                    </div>
                    {/* Completion Status */}
                    {activity.isCompleted && (
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="h-5 w-5 text-white" />
                      </div>
                    )}
                  </div>

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

              <CardContent className="p-4 flex-1 flex flex-col">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-3">{activity.description}</p>

                  {/* Activity Metadata */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-3">
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
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0 mt-auto">
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

        {filteredActivities.length === 0 && (
          <Card className="p-12 text-center">
            <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No activities found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
            <Button onClick={() => setSearchQuery("")}>Clear Filters</Button>
          </Card>
        )}
      </div>
    </div>
  )
}
