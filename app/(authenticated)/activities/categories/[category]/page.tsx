"use client"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Gift, Heart, MessageSquare, Star, Trophy, Clock, Users, Check, Calendar } from "lucide-react"

const activityCategories = {
  communication: {
    name: "💬 Communication Builders",
    description: "Improve how you connect and understand each other",
    color: "bg-blue-500",
  },
  trust: {
    name: "🤝 Trust Exercises",
    description: "Build and strengthen trust through shared experiences",
    color: "bg-green-500",
  },
  fun: {
    name: "🎮 Fun & Games",
    description: "Playful activities to bring joy and laughter",
    color: "bg-purple-500",
  },
  intimacy: {
    name: "💕 Intimacy Enhancers",
    description: "Deepen emotional and physical connection",
    color: "bg-pink-500",
  },
  conflict: {
    name: "🔧 Conflict Resolution",
    description: "Learn to navigate disagreements healthily",
    color: "bg-orange-500",
  },
  daily: {
    name: "📅 Daily Challenges",
    description: "Quick daily activities to strengthen your bond",
    color: "bg-yellow-500",
  },
}

const categoryActivities = {
  communication: [
    {
      id: "love-language-quiz",
      title: "Love Language Discovery Quiz",
      description:
        "Discover your primary love language and learn how to better connect with your partner through personalized insights.",
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
      id: "active-listening-practice",
      title: "Active Listening Challenge",
      description: "Practice truly hearing your partner through structured listening exercises and feedback sessions.",
      duration: "20 min",
      difficulty: "Intermediate",
      rating: 4.7,
      completionCount: "12.8K",
      xpReward: 60,
      isPartnerActivity: true,
      isCompleted: false,
      progress: 0,
      icon: MessageSquare,
      isNew: true,
    },
    {
      id: "emotion-sharing",
      title: "Emotion Sharing Circle",
      description: "Learn to express and validate emotions in a safe, structured environment with your partner.",
      duration: "25 min",
      difficulty: "Intermediate",
      rating: 4.6,
      completionCount: "9.4K",
      xpReward: 70,
      isPartnerActivity: true,
      isCompleted: true,
      progress: 100,
      icon: Heart,
      isNew: false,
    },
    {
      id: "conflict-communication",
      title: "Healthy Conflict Communication",
      description: "Master the art of discussing disagreements without damaging your relationship bond.",
      duration: "30 min",
      difficulty: "Advanced",
      rating: 4.5,
      completionCount: "7.2K",
      xpReward: 85,
      isPartnerActivity: true,
      isCompleted: false,
      progress: 0,
      icon: MessageSquare,
      isNew: false,
    },
  ],
  trust: [
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
      isNew: false,
    },
    {
      id: "vulnerability-practice",
      title: "Vulnerability Sharing",
      description: "Practice opening up and being vulnerable with your partner in a safe, guided environment.",
      duration: "35 min",
      difficulty: "Advanced",
      rating: 4.8,
      completionCount: "8.9K",
      xpReward: 95,
      isPartnerActivity: true,
      isCompleted: false,
      progress: 25,
      icon: Heart,
      isNew: true,
    },
    {
      id: "promise-keeping",
      title: "Promise & Commitment Tracker",
      description: "Build trust by making and keeping small daily promises to each other.",
      duration: "10 min",
      difficulty: "Beginner",
      rating: 4.7,
      completionCount: "18.5K",
      xpReward: 40,
      isPartnerActivity: true,
      isCompleted: true,
      progress: 100,
      icon: Trophy,
      isNew: false,
    },
    {
      id: "secret-sharing",
      title: "Safe Secret Sharing",
      description: "Share personal stories and secrets in a structured way that builds deeper trust.",
      duration: "45 min",
      difficulty: "Advanced",
      rating: 4.9,
      completionCount: "5.7K",
      xpReward: 110,
      isPartnerActivity: true,
      isCompleted: false,
      progress: 0,
      icon: Heart,
      isNew: false,
    },
  ],
  fun: [
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
      icon: Star,
      isNew: true,
    },
    {
      id: "couple-trivia",
      title: "Couple's Trivia Night",
      description: "Test how well you know each other with fun questions about preferences, dreams, and memories.",
      duration: "25 min",
      difficulty: "Beginner",
      rating: 4.8,
      completionCount: "22.1K",
      xpReward: 65,
      isPartnerActivity: true,
      isCompleted: true,
      progress: 100,
      icon: Star,
      isNew: false,
    },
    {
      id: "dance-challenge",
      title: "Virtual Dance Party",
      description: "Connect through movement with guided dance activities you can do together from anywhere.",
      duration: "20 min",
      difficulty: "Beginner",
      rating: 4.6,
      completionCount: "14.3K",
      xpReward: 55,
      isPartnerActivity: true,
      isCompleted: false,
      progress: 0,
      icon: Star,
      isNew: true,
    },
    {
      id: "creative-storytelling",
      title: "Creative Story Building",
      description: "Create imaginative stories together, taking turns adding to the narrative in fun ways.",
      duration: "35 min",
      difficulty: "Intermediate",
      rating: 4.5,
      completionCount: "11.7K",
      xpReward: 80,
      isPartnerActivity: true,
      isCompleted: false,
      progress: 0,
      icon: MessageSquare,
      isNew: false,
    },
  ],
  intimacy: [
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
      id: "appreciation-ritual",
      title: "Daily Appreciation Ritual",
      description: "Create a meaningful daily practice of expressing specific appreciation for your partner.",
      duration: "15 min",
      difficulty: "Beginner",
      rating: 4.9,
      completionCount: "19.8K",
      xpReward: 45,
      isPartnerActivity: true,
      isCompleted: true,
      progress: 100,
      icon: Heart,
      isNew: false,
    },
    {
      id: "touch-language",
      title: "Physical Touch Exploration",
      description: "Discover your partner's preferences for physical affection and non-sexual touch.",
      duration: "30 min",
      difficulty: "Intermediate",
      rating: 4.7,
      completionCount: "7.4K",
      xpReward: 75,
      isPartnerActivity: true,
      isCompleted: false,
      progress: 60,
      icon: Heart,
      isNew: false,
    },
    {
      id: "dream-sharing",
      title: "Future Dreams & Goals",
      description: "Share your deepest dreams and create aligned goals for your relationship's future.",
      duration: "50 min",
      difficulty: "Advanced",
      rating: 4.8,
      completionCount: "6.2K",
      xpReward: 120,
      isPartnerActivity: true,
      isCompleted: false,
      progress: 0,
      icon: Star,
      isNew: true,
    },
  ],
  conflict: [
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
      isNew: false,
    },
    {
      id: "anger-management",
      title: "Anger De-escalation Techniques",
      description: "Master techniques to cool down heated moments and return to productive conversation.",
      duration: "20 min",
      difficulty: "Intermediate",
      rating: 4.6,
      completionCount: "8.9K",
      xpReward: 65,
      isPartnerActivity: true,
      isCompleted: false,
      progress: 0,
      icon: Heart,
      isNew: true,
    },
    {
      id: "compromise-workshop",
      title: "Win-Win Solution Finding",
      description: "Practice finding solutions where both partners feel heard and satisfied with outcomes.",
      duration: "35 min",
      difficulty: "Advanced",
      rating: 4.7,
      completionCount: "5.4K",
      xpReward: 95,
      isPartnerActivity: true,
      isCompleted: false,
      progress: 0,
      icon: Trophy,
      isNew: false,
    },
    {
      id: "forgiveness-practice",
      title: "Forgiveness & Healing",
      description: "Learn healthy ways to forgive, apologize, and move forward from relationship hurts.",
      duration: "45 min",
      difficulty: "Advanced",
      rating: 4.8,
      completionCount: "4.1K",
      xpReward: 110,
      isPartnerActivity: true,
      isCompleted: true,
      progress: 100,
      icon: Heart,
      isNew: false,
    },
  ],
  daily: [
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
      isNew: false,
    },
    {
      id: "daily-check-in",
      title: "Relationship Check-In",
      description: "A quick daily ritual to stay connected and address any concerns before they grow.",
      duration: "10 min",
      difficulty: "Beginner",
      rating: 4.8,
      completionCount: "31.5K",
      xpReward: 30,
      isPartnerActivity: true,
      isCompleted: false,
      progress: 0,
      icon: MessageSquare,
      isNew: false,
    },
    {
      id: "affirmation-exchange",
      title: "Daily Affirmation Exchange",
      description: "Start or end each day by sharing one positive affirmation about your partner.",
      duration: "3 min",
      difficulty: "Beginner",
      rating: 4.7,
      completionCount: "28.9K",
      xpReward: 20,
      isPartnerActivity: true,
      isCompleted: false,
      progress: 0,
      icon: Heart,
      isNew: true,
    },
    {
      id: "mindful-moment",
      title: "Mindful Connection Moment",
      description: "Take a few minutes each day to be fully present with your partner without distractions.",
      duration: "8 min",
      difficulty: "Beginner",
      rating: 4.6,
      completionCount: "17.2K",
      xpReward: 35,
      isPartnerActivity: true,
      isCompleted: false,
      progress: 0,
      icon: Calendar,
      isNew: false,
    },
  ],
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const router = useRouter()
  const category = params.category as keyof typeof categoryActivities
  const categoryInfo = activityCategories[category]
  const activities = categoryActivities[category] || []

  const startActivity = (activityId: string) => {
    router.push(`/activities/${activityId}`)
  }

  if (!categoryInfo) {
    return <div>Category not found</div>
  }

  return (
    <div className="space-y-6">
      {/* Back Navigation */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold unbounded">{categoryInfo.name}</h1>
          <p className="text-muted-foreground">{categoryInfo.description}</p>
        </div>
      </div>

      {/* Activities Grid - Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activities.map((activity) => (
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
                  <Badge className={categoryInfo.color}>{categoryInfo.name}</Badge>
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
