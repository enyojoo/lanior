"use client"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ArrowLeft,
  Clock,
  Star,
  Users,
  Check,
  Heart,
  MessageSquare,
  Gift,
  Trophy,
  Calendar,
  Wrench,
} from "lucide-react"

const categoryData = {
  communication: {
    name: "💬 Communication Builders",
    description: "Improve how you connect and understand each other",
    color: "bg-blue-500",
    icon: MessageSquare,
    activities: [
      {
        id: "love-language-quiz",
        title: "Love Language Discovery Quiz",
        description: "Discover your primary love language and learn how to better connect with your partner.",
        duration: "15 min",
        difficulty: "Beginner",
        rating: 4.8,
        completionCount: "15.2K",
        xpReward: 50,
        isPartnerActivity: true,
        isCompleted: false,
        progress: 0,
        icon: Heart,
      },
      {
        id: "active-listening",
        title: "Active Listening Practice",
        description: "Learn and practice the art of truly hearing your partner.",
        duration: "20 min",
        difficulty: "Beginner",
        rating: 4.7,
        completionCount: "12.8K",
        xpReward: 60,
        isPartnerActivity: true,
        isCompleted: false,
        progress: 0,
        icon: MessageSquare,
      },
      {
        id: "nonverbal-communication",
        title: "Reading Body Language",
        description: "Understand the unspoken messages in your relationship.",
        duration: "25 min",
        difficulty: "Intermediate",
        rating: 4.6,
        completionCount: "9.4K",
        xpReward: 70,
        isPartnerActivity: true,
        isCompleted: false,
        progress: 0,
        icon: MessageSquare,
      },
      {
        id: "difficult-conversations",
        title: "Navigating Difficult Topics",
        description: "Learn to discuss challenging subjects with grace and understanding.",
        duration: "35 min",
        difficulty: "Advanced",
        rating: 4.5,
        completionCount: "7.2K",
        xpReward: 85,
        isPartnerActivity: true,
        isCompleted: false,
        progress: 0,
        icon: MessageSquare,
      },
    ],
  },
  trust: {
    name: "🤝 Trust Exercises",
    description: "Build and strengthen trust through shared experiences",
    color: "bg-green-500",
    icon: Heart,
    activities: [
      {
        id: "trust-fall-exercise",
        title: "Virtual Trust Building",
        description: "Build trust through guided exercises designed to strengthen your emotional connection.",
        duration: "20 min",
        difficulty: "Intermediate",
        rating: 4.6,
        completionCount: "12.3K",
        xpReward: 60,
        isPartnerActivity: true,
        isCompleted: false,
        progress: 0,
        icon: Heart,
      },
      {
        id: "vulnerability-practice",
        title: "Sharing Vulnerabilities",
        description: "Create deeper intimacy through guided vulnerability exercises.",
        duration: "30 min",
        difficulty: "Advanced",
        rating: 4.7,
        completionCount: "8.9K",
        xpReward: 80,
        isPartnerActivity: true,
        isCompleted: false,
        progress: 0,
        icon: Heart,
      },
    ],
  },
  fun: {
    name: "🎮 Fun & Games",
    description: "Playful activities to bring joy and laughter",
    color: "bg-purple-500",
    icon: Star,
    activities: [
      {
        id: "memory-lane-game",
        title: "Memory Lane Challenge",
        description: "Take turns sharing favorite memories together and create new ones through guided storytelling.",
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
        id: "couple-trivia",
        title: "How Well Do You Know Each Other?",
        description: "Test your knowledge about your partner with fun and revealing questions.",
        duration: "20 min",
        difficulty: "Beginner",
        rating: 4.8,
        completionCount: "15.6K",
        xpReward: 55,
        isPartnerActivity: true,
        isCompleted: false,
        progress: 0,
        icon: Star,
      },
    ],
  },
  intimacy: {
    name: "💕 Intimacy Enhancers",
    description: "Deepen emotional and physical connection",
    color: "bg-pink-500",
    icon: Gift,
    activities: [
      {
        id: "intimacy-builder",
        title: "Emotional Intimacy Deepener",
        description: "Strengthen your emotional bond through vulnerability exercises and deep conversation prompts.",
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
      {
        id: "physical-connection",
        title: "Reconnecting Physically",
        description: "Gentle exercises to rebuild physical intimacy and connection.",
        duration: "25 min",
        difficulty: "Intermediate",
        rating: 4.6,
        completionCount: "6.8K",
        xpReward: 75,
        isPartnerActivity: true,
        isCompleted: false,
        progress: 0,
        icon: Gift,
      },
    ],
  },
  conflict: {
    name: "🔧 Conflict Resolution",
    description: "Learn to navigate disagreements healthily",
    color: "bg-orange-500",
    icon: Wrench,
    activities: [
      {
        id: "conflict-resolution",
        title: "Healthy Disagreement Practice",
        description: "Learn to navigate conflicts constructively with guided scenarios and communication techniques.",
        duration: "25 min",
        difficulty: "Advanced",
        rating: 4.5,
        completionCount: "6.8K",
        xpReward: 80,
        isPartnerActivity: true,
        isCompleted: false,
        progress: 0,
        icon: Trophy,
      },
      {
        id: "anger-management",
        title: "Managing Emotions in Conflict",
        description: "Learn to stay calm and constructive during heated discussions.",
        duration: "30 min",
        difficulty: "Advanced",
        rating: 4.4,
        completionCount: "5.2K",
        xpReward: 85,
        isPartnerActivity: true,
        isCompleted: false,
        progress: 0,
        icon: Wrench,
      },
    ],
  },
  daily: {
    name: "📅 Daily Challenges",
    description: "Quick daily activities to strengthen your bond",
    color: "bg-yellow-500",
    icon: Calendar,
    activities: [
      {
        id: "gratitude-practice",
        title: "Daily Gratitude Exchange",
        description: "Share three things you appreciate about each other in this simple but powerful daily practice.",
        duration: "5 min",
        difficulty: "Beginner",
        rating: 4.9,
        completionCount: "23.1K",
        xpReward: 25,
        isPartnerActivity: true,
        isCompleted: true,
        progress: 100,
        icon: Star,
      },
      {
        id: "daily-check-in",
        title: "Relationship Check-In",
        description: "A quick daily conversation to stay connected and aligned.",
        duration: "10 min",
        difficulty: "Beginner",
        rating: 4.8,
        completionCount: "18.7K",
        xpReward: 30,
        isPartnerActivity: true,
        isCompleted: false,
        progress: 0,
        icon: Calendar,
      },
    ],
  },
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const router = useRouter()
  const category = categoryData[params.category as keyof typeof categoryData]

  if (!category) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Category Not Found</h2>
        <Button onClick={() => router.push("/activities")}>Back to Activities</Button>
      </div>
    )
  }

  const startActivity = (activityId: string) => {
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
          <h1 className="text-2xl font-bold unbounded">{category.name}</h1>
          <p className="text-muted-foreground">{category.description}</p>
        </div>
      </div>

      {/* Category Stats */}
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <div className={`p-4 rounded-full ${category.color}`}>
            <category.icon className="h-8 w-8 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold">{category.activities.length} Activities Available</h2>
            <p className="text-muted-foreground">
              Strengthen your relationship through {category.name.toLowerCase()} focused exercises
            </p>
          </div>
        </div>
      </Card>

      {/* Activities Grid - Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {category.activities.map((activity) => (
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
                  <Badge className={category.color}>{category.name}</Badge>
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
  )
}
