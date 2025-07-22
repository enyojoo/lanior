"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Trophy, Share2, Download, Heart, MessageSquare, Gift, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from "@/components/ui/use-toast"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const activityResults = {
  "love-language-quiz": {
    completionTime: "12 min",
    xpReward: 50,
    insights: [
      {
        title: "Your Primary Love Language: Words of Affirmation",
        description:
          "You feel most loved when your partner expresses their feelings through spoken or written words. Compliments, encouragement, and verbal appreciation mean the world to you.",
        recommendation:
          "Ask your partner to be more vocal about their appreciation for you. Share specific examples of words that make you feel loved.",
      },
      {
        title: "Secondary Love Language: Quality Time",
        description: "You also value undivided attention and meaningful conversations with your partner.",
        recommendation: "Schedule regular one-on-one time without distractions like phones or TV.",
      },
    ],
    chartData: [
      { category: "Words of Affirmation", score: 85 },
      { category: "Quality Time", score: 72 },
      { category: "Physical Touch", score: 45 },
      { category: "Acts of Service", score: 38 },
      { category: "Receiving Gifts", score: 25 },
    ],
  },
  "gratitude-practice": {
    completionTime: "4 min",
    xpReward: 25,
    insights: [
      {
        title: "Gratitude Shared Successfully",
        description:
          "You and your partner successfully shared appreciation for each other. This practice strengthens your emotional bond.",
        recommendation: "Try to make this a daily habit. Even small expressions of gratitude can have a big impact.",
      },
    ],
  },
}

const recommendedActivities = [
  {
    id: "communication-styles",
    title: "Communication Styles Assessment",
    description: "Learn how you and your partner communicate differently",
    icon: MessageSquare,
  },
  {
    id: "relationship-goals",
    title: "Relationship Goals Setting",
    description: "Align your future plans and dreams together",
    icon: Trophy,
  },
  {
    id: "intimacy-builder",
    title: "Emotional Intimacy Builder",
    description: "Deepen your emotional connection",
    icon: Gift,
  },
  {
    id: "daily-check-in",
    title: "Daily Relationship Check-in",
    description: "Build a habit of regular relationship maintenance",
    icon: Heart,
  },
]

export default function ActivityResultsPage({ params }: { params: { activityId: string } }) {
  const router = useRouter()
  const { toast } = useToast()
  const [showConfetti, setShowConfetti] = useState(true)

  const results = activityResults[params.activityId as keyof typeof activityResults]

  useEffect(() => {
    // Hide confetti after 3 seconds
    const timer = setTimeout(() => setShowConfetti(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (!results) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Results Not Found</h2>
        <Button onClick={() => router.push("/activities")}>Back to Activities</Button>
      </div>
    )
  }

  const shareToFeed = () => {
    toast({
      title: "Shared to Feed",
      description: "Your activity completion has been shared with your community!",
    })
  }

  const downloadResults = () => {
    toast({
      title: "Download Started",
      description: "Your results are being prepared for download.",
    })
  }

  const generateCompatibilityInsight = () => {
    return "You both value emotional connection and communication, which creates a strong foundation for your relationship. Focus on expressing appreciation through words and spending quality time together."
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-950/20 dark:to-blue-950/20">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Celebration Header */}
        <div className="text-center py-8">
          <div className="relative mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="h-12 w-12 text-white" />
            </div>
            {showConfetti && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-4xl animate-bounce">🎉</div>
              </div>
            )}
          </div>

          <h1 className="text-3xl font-bold mb-2">Activity Completed! 🎉</h1>
          <p className="text-lg text-muted-foreground mb-4">
            {params.activityId === "love-language-quiz" ? "Love Language Discovery Quiz" : "Daily Gratitude Exchange"}
          </p>

          <div className="flex items-center justify-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-500">+{results.xpReward}</div>
              <div className="text-sm text-muted-foreground">XP Earned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-500">{results.completionTime}</div>
              <div className="text-sm text-muted-foreground">Time Taken</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-500">Together</div>
              <div className="text-sm text-muted-foreground">Partner Activity</div>
            </div>
          </div>
        </div>

        {/* Activity Insights */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Your Insights</h2>
          <div className="space-y-4">
            {results.insights?.map((insight, index) => (
              <div key={index} className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">{insight.title}</h3>
                <p className="text-sm text-muted-foreground">{insight.description}</p>
                {insight.recommendation && (
                  <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      💡 <strong>Recommendation:</strong> {insight.recommendation}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Results Visualization */}
        {results.chartData && (
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Your Results</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={results.chartData}>
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="score" fill="#045FA5" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        )}

        {/* Partner Comparison */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Partner Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <Avatar className="h-16 w-16 mx-auto mb-3">
                <AvatarImage src="/placeholder-user.jpg" alt="You" />
                <AvatarFallback>Y</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold mb-2">Your Results</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Words of Affirmation</span>
                  <span className="font-medium">85%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Quality Time</span>
                  <span className="font-medium">72%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Physical Touch</span>
                  <span className="font-medium">45%</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Avatar className="h-16 w-16 mx-auto mb-3">
                <AvatarImage src="/placeholder-user.jpg" alt="Partner" />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold mb-2">Partner's Results</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Quality Time</span>
                  <span className="font-medium">78%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Physical Touch</span>
                  <span className="font-medium">65%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Words of Affirmation</span>
                  <span className="font-medium">52%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg">
            <h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-2">Compatibility Insights</h4>
            <p className="text-sm text-pink-600 dark:text-pink-400">{generateCompatibilityInsight()}</p>
          </div>
        </Card>

        {/* Share Results */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Share Your Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="outline" onClick={shareToFeed} className="flex items-center gap-2 bg-transparent">
              <Share2 className="h-4 w-4" />
              Share to Feed
            </Button>
            <Button variant="outline" onClick={downloadResults} className="flex items-center gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              Download Results
            </Button>
          </div>
        </Card>

        {/* Next Steps */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">What's Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recommendedActivities.map((activity, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg hover:bg-muted cursor-pointer transition-colors"
                onClick={() => router.push(`/activities/${activity.id}`)}
              >
                <div className="flex items-center gap-3">
                  <activity.icon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-semibold">{activity.title}</h3>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto" />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <Button variant="outline" onClick={() => router.push("/activities")}>
            Browse More Activities
          </Button>
          <Button onClick={() => router.push(`/activities/${params.activityId}/play`)}>Play Again</Button>
        </div>
      </div>
    </div>
  )
}
