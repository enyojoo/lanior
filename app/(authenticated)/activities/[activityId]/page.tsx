"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Play, Clock, Star, Users, Check, Heart, MessageSquare, Gift, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activitiesData = {
  "love-language-quiz": {
    id: "love-language-quiz",
    title: "Love Language Discovery Quiz",
    description:
      "Discover your primary love language and learn how to better connect with your partner through personalized insights.",
    fullDescription:
      "Understanding your love language is crucial for building a strong, lasting relationship. This comprehensive quiz will help you identify whether you primarily express and receive love through Words of Affirmation, Acts of Service, Receiving Gifts, Quality Time, or Physical Touch. By understanding both your and your partner's love languages, you can communicate love more effectively and feel more loved in return.",
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
    outcomes: [
      "Identify your primary love language",
      "Understand how you best receive love",
      "Learn your partner's love language",
      "Get personalized tips for your relationship",
      "Receive a detailed compatibility report",
    ],
    stepsPreview: [
      {
        title: "Personal Assessment",
        description: "Answer questions about your preferences and reactions to different expressions of love.",
      },
      {
        title: "Partner Scenarios",
        description: "Consider how you would want your partner to show love in various situations.",
      },
      {
        title: "Results & Insights",
        description: "Discover your love language and get personalized relationship advice.",
      },
    ],
    reviews: [
      {
        user: { name: "Sarah M.", avatar: "/placeholder-user.jpg" },
        rating: 5,
        comment:
          "This quiz completely changed how my partner and I communicate love. We understand each other so much better now!",
      },
      {
        user: { name: "Mike R.", avatar: "/placeholder-user.jpg" },
        rating: 5,
        comment: "Eye-opening experience. I never realized I was showing love in ways my partner didn't appreciate.",
      },
    ],
  },
  "gratitude-practice": {
    id: "gratitude-practice",
    title: "Daily Gratitude Exchange",
    description: "Share three things you appreciate about each other in this simple but powerful daily practice.",
    fullDescription:
      "Gratitude is one of the most powerful tools for strengthening relationships. This daily practice helps couples focus on the positive aspects of their relationship and express appreciation regularly. Research shows that couples who practice gratitude together report higher relationship satisfaction and stronger emotional bonds.",
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
    outcomes: [
      "Develop a daily gratitude habit",
      "Increase positive communication",
      "Strengthen emotional connection",
      "Build appreciation for your partner",
      "Create lasting positive memories",
    ],
    stepsPreview: [
      {
        title: "Reflection Time",
        description: "Take a moment to think about what you appreciate about your partner today.",
      },
      {
        title: "Share & Listen",
        description: "Take turns sharing your gratitude with each other.",
      },
      {
        title: "Celebrate Together",
        description: "Acknowledge the positive feelings and connection you've created.",
      },
    ],
    reviews: [
      {
        user: { name: "Emma L.", avatar: "/placeholder-user.jpg" },
        rating: 5,
        comment: "Such a simple but powerful practice. It's become our favorite part of the day!",
      },
    ],
  },
}

const relatedActivities = [
  {
    id: "communication-styles",
    title: "Communication Styles Assessment",
    duration: "20 min",
    icon: MessageSquare,
  },
  {
    id: "relationship-goals",
    title: "Relationship Goals Setting",
    duration: "25 min",
    icon: Trophy,
  },
  {
    id: "intimacy-builder",
    title: "Emotional Intimacy Builder",
    duration: "30 min",
    icon: Gift,
  },
]

export default function ActivityDetailPage({ params }: { params: { activityId: string } }) {
  const router = useRouter()
  const [activity, setActivity] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const activityData = activitiesData[params.activityId as keyof typeof activitiesData]
    if (activityData) {
      setActivity(activityData)
    }
    setLoading(false)
  }, [params.activityId])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!activity) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Activity Not Found</h2>
        <Button onClick={() => router.push("/activities")}>Back to Activities</Button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Back Navigation */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold">{activity.title}</h1>
          <p className="text-muted-foreground">
            {activity.category.name} • {activity.duration} • {activity.difficulty}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Activity Preview */}
          <Card className="overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-primary/20 to-emerald-500/20 flex items-center justify-center relative">
              <activity.icon className="h-24 w-24 text-primary" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <Button
                  size="lg"
                  className="h-16 w-16 rounded-full"
                  onClick={() => router.push(`/activities/${activity.id}/play`)}
                >
                  <Play className="h-8 w-8" />
                </Button>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-4 right-4">
                <Badge className="bg-black/50 text-white">
                  <Clock className="h-3 w-3 mr-1" />
                  {activity.duration}
                </Badge>
              </div>
            </div>
          </Card>

          {/* Activity Description */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">About This Activity</h2>
            <p className="text-muted-foreground mb-6">{activity.fullDescription}</p>

            {/* What You'll Learn */}
            <div className="space-y-3">
              <h3 className="font-semibold">What You'll Experience:</h3>
              <ul className="space-y-2">
                {activity.outcomes?.map((outcome: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Activity Steps Preview */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">How It Works</h2>
            <div className="space-y-4">
              {activity.stepsPreview?.map((step: any, index: number) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Reviews Section */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">What Others Say</h2>
            <div className="space-y-4">
              {activity.reviews?.map((review: any, index: number) => (
                <div key={index} className="border-b pb-4 last:border-b-0">
                  <div className="flex items-center gap-3 mb-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={review.user.avatar || "/placeholder.svg"} alt={review.user.name} />
                      <AvatarFallback>{review.user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-sm">{review.user.name}</div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${i < review.rating ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{review.comment}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Activity Info Card */}
          <Card className="p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="text-2xl font-bold text-purple-500">+{activity.xpReward}</div>
              </div>
              <div className="text-sm text-muted-foreground">XP Points Reward</div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Duration</span>
                <span className="text-sm font-medium">{activity.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Difficulty</span>
                <span className="text-sm font-medium">{activity.difficulty}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Participants</span>
                <span className="text-sm font-medium">{activity.isPartnerActivity ? "You + Partner" : "Solo"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Completed by</span>
                <span className="text-sm font-medium">{activity.completionCount} people</span>
              </div>
            </div>

            <Button
              className="w-full h-12 text-base mb-4"
              onClick={() => router.push(`/activities/${activity.id}/play`)}
            >
              {activity.isCompleted ? "Play Again" : activity.progress > 0 ? "Continue Activity" : "Start Activity"}
            </Button>

            {activity.isPartnerActivity && (
              <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Partner Activity</span>
                </div>
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  This activity is designed to be done together with your partner for the best experience.
                </p>
              </div>
            )}
          </Card>

          {/* Related Activities */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Similar Activities</h3>
            <div className="space-y-3">
              {relatedActivities?.map((related, index) => (
                <div
                  key={index}
                  className="flex gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                  onClick={() => router.push(`/activities/${related.id}`)}
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <related.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{related.title}</h4>
                    <p className="text-xs text-muted-foreground">{related.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
