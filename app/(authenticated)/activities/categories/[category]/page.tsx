"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Clock, Star, Users } from "lucide-react"

// Mock data for activities in a category
const categoryActivities = [
  {
    id: "deep-conversation",
    title: "Deep Conversation Starters",
    description:
      "Explore meaningful topics that bring you closer together through thoughtful questions and active listening exercises.",
    difficulty: "Beginner",
    duration: "15-30 min",
    xpReward: 50,
    rating: 4.8,
    completions: 1247,
    participants: [
      { id: 1, name: "Alex", avatar: "/placeholder-user.jpg" },
      { id: 2, name: "Sam", avatar: "/placeholder-user.jpg" },
    ],
    category: "Communication",
  },
  {
    id: "active-listening",
    title: "Active Listening Challenge",
    description:
      "Practice truly hearing your partner through structured listening exercises that improve understanding and empathy.",
    difficulty: "Intermediate",
    duration: "20-25 min",
    xpReward: 75,
    rating: 4.9,
    completions: 892,
    participants: [
      { id: 1, name: "Jordan", avatar: "/placeholder-user.jpg" },
      { id: 2, name: "Casey", avatar: "/placeholder-user.jpg" },
    ],
    category: "Communication",
  },
  {
    id: "conflict-resolution",
    title: "Healthy Disagreement Practice",
    description:
      "Learn to navigate disagreements constructively while maintaining respect and understanding for each other's perspectives.",
    difficulty: "Advanced",
    duration: "30-45 min",
    xpReward: 100,
    rating: 4.7,
    completions: 634,
    participants: [
      { id: 1, name: "Taylor", avatar: "/placeholder-user.jpg" },
      { id: 2, name: "Morgan", avatar: "/placeholder-user.jpg" },
    ],
    category: "Communication",
  },
  {
    id: "love-languages",
    title: "Love Languages Discovery",
    description:
      "Discover and understand each other's love languages to improve how you express and receive affection.",
    difficulty: "Beginner",
    duration: "25-35 min",
    xpReward: 60,
    rating: 4.9,
    completions: 1456,
    participants: [
      { id: 1, name: "Riley", avatar: "/placeholder-user.jpg" },
      { id: 2, name: "Avery", avatar: "/placeholder-user.jpg" },
    ],
    category: "Communication",
  },
  {
    id: "daily-check-in",
    title: "Daily Connection Ritual",
    description:
      "Establish a daily practice of checking in with each other's emotional state and sharing highlights from your day.",
    difficulty: "Beginner",
    duration: "10-15 min",
    xpReward: 30,
    rating: 4.6,
    completions: 2103,
    participants: [
      { id: 1, name: "Quinn", avatar: "/placeholder-user.jpg" },
      { id: 2, name: "Sage", avatar: "/placeholder-user.jpg" },
    ],
    category: "Communication",
  },
  {
    id: "appreciation-exercise",
    title: "Gratitude & Appreciation",
    description:
      "Practice expressing specific appreciation for your partner's actions, qualities, and contributions to your relationship.",
    difficulty: "Beginner",
    duration: "15-20 min",
    xpReward: 40,
    rating: 4.8,
    completions: 1789,
    participants: [
      { id: 1, name: "Drew", avatar: "/placeholder-user.jpg" },
      { id: 2, name: "Blake", avatar: "/placeholder-user.jpg" },
    ],
    category: "Communication",
  },
]

const categoryInfo = {
  name: "Communication Builders",
  description: "Improve how you connect and understand each other",
  totalActivities: categoryActivities.length,
  color: "bg-blue-500",
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const router = useRouter()
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)

  const filteredActivities = selectedDifficulty
    ? categoryActivities.filter((activity) => activity.difficulty === selectedDifficulty)
    : categoryActivities

  const startActivity = (activityId: string) => {
    router.push(`/activities/${activityId}`)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500"
      case "Intermediate":
        return "bg-yellow-500"
      case "Advanced":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => router.back()} className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold unbounded">{categoryInfo.name}</h1>
          <Badge variant="secondary" className="text-sm">
            {categoryInfo.totalActivities} activities
          </Badge>
        </div>
      </div>

      <p className="text-muted-foreground">{categoryInfo.description}</p>

      {/* Filter Buttons */}
      <div className="flex gap-2">
        <Button
          variant={selectedDifficulty === null ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedDifficulty(null)}
        >
          All
        </Button>
        <Button
          variant={selectedDifficulty === "Beginner" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedDifficulty("Beginner")}
        >
          Beginner
        </Button>
        <Button
          variant={selectedDifficulty === "Intermediate" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedDifficulty("Intermediate")}
        >
          Intermediate
        </Button>
        <Button
          variant={selectedDifficulty === "Advanced" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedDifficulty("Advanced")}
        >
          Advanced
        </Button>
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredActivities.map((activity) => (
          <Card key={activity.id} className="group hover:shadow-lg transition-all h-[400px] flex flex-col">
            <CardContent className="p-6 flex-1 flex flex-col">
              {/* Header with badges and XP */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-2">
                  <Badge className={getDifficultyColor(activity.difficulty)}>{activity.difficulty}</Badge>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-primary">+{activity.xpReward} XP</div>
                </div>
              </div>

              {/* Title and Description */}
              <div className="flex-1 space-y-3">
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{activity.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
              </div>

              {/* Metadata Row */}
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {activity.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {activity.rating}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {activity.completions}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {activity.participants.map((participant, index) => (
                    <Avatar key={participant.id} className="h-6 w-6 border-2 border-background">
                      <AvatarImage src={participant.avatar || "/placeholder.svg"} alt={participant.name} />
                      <AvatarFallback className="text-xs">{participant.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            </CardContent>

            <CardFooter className="p-6 pt-0">
              <Button className="w-full" onClick={() => startActivity(activity.id)}>
                Start Activity
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
