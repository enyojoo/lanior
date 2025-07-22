"use client"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageSquare, Users, Star, ChevronRight, Play, Lightbulb } from "lucide-react"

const practiceData = {
  "gratitude-boost": {
    id: "gratitude-boost",
    title: "Morning Gratitude Practice",
    description: "Start your day by expressing appreciation for each other",
    duration: "5 min",
    level: "Foundation",
    focusArea: "Connection",
    icon: Heart,
    completedCount: 47382,
    rating: 4.9,
    reviewCount: 2847,
    bestTime: "Morning",
    requires: "Both partners",
    steps: [
      {
        title: "Sit together comfortably",
        description: "Find a quiet space where you can face each other without distractions",
      },
      {
        title: "Take turns sharing",
        description: "Each person shares 3 specific things they're grateful for about their partner",
      },
      {
        title: "Be specific and present",
        description: "Focus on specific actions, qualities, or moments from the past week",
      },
      {
        title: "End with connection",
        description: "Close with a hug, kiss, or moment of eye contact to seal the connection",
      },
    ],
    tips: [
      'Be specific rather than general - "I loved how you made me coffee this morning" vs "You\'re nice"',
      "Make eye contact while sharing to deepen the emotional connection",
      "If this becomes routine, try focusing on different categories each day (actions, qualities, memories)",
    ],
    relatedPractices: [
      {
        id: "appreciation-express",
        title: "Evening Appreciation",
        duration: "8 min",
        focusArea: "Connection",
        icon: Star,
      },
      {
        id: "communication-check",
        title: "Daily Check-in",
        duration: "10 min",
        focusArea: "Communication",
        icon: MessageSquare,
      },
    ],
  },
}

export default function PracticeDetailPage() {
  const params = useParams()
  const practiceId = params.id as string
  const practice = practiceData[practiceId as keyof typeof practiceData]

  if (!practice) {
    return (
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-2">Practice Not Found</h1>
          <p className="text-muted-foreground mb-4">The practice you're looking for doesn't exist.</p>
          <Link href="/grow/practices">
            <Button>Browse All Practices</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/grow" className="hover:text-primary">
          Grow
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/grow/practices" className="hover:text-primary">
          Quick Practices
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span>{practice.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                <practice.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="outline">{practice.level}</Badge>
                  <span className="text-sm text-muted-foreground">{practice.duration}</span>
                </div>
                <h1 className="text-2xl font-bold mb-2">{practice.title}</h1>
                <p className="text-muted-foreground mb-4">{practice.description}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    {practice.focusArea}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    {practice.rating} ({practice.reviewCount.toLocaleString()} reviews)
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {practice.completedCount.toLocaleString()} couples completed
                  </span>
                </div>
              </div>
            </div>
            <Button size="lg" className="w-full mt-6">
              <Play className="h-5 w-5 mr-2" />
              Begin Practice
            </Button>
          </div>

          {/* Practice Steps */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">How It Works</h2>
              <div className="space-y-4">
                {practice.steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-primary">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Expert Tips */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Expert Tips</h2>
              <div className="space-y-3">
                {practice.tips.map((tip, index) => (
                  <div key={index} className="flex gap-3">
                    <Lightbulb className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Practice Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Duration</span>
                  <span className="text-sm font-medium">{practice.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Level</span>
                  <span className="text-sm font-medium">{practice.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Focus Area</span>
                  <span className="text-sm font-medium">{practice.focusArea}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Best Time</span>
                  <span className="text-sm font-medium">{practice.bestTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Requires</span>
                  <span className="text-sm font-medium">{practice.requires}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Practices */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Similar Practices</h3>
              <div className="space-y-3">
                {practice.relatedPractices.map((relatedPractice) => (
                  <Link key={relatedPractice.id} href={`/grow/practice/${relatedPractice.id}`}>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                      <relatedPractice.icon className="h-8 w-8 bg-primary/20 rounded p-1.5 text-primary" />
                      <div>
                        <div className="text-sm font-medium">{relatedPractice.title}</div>
                        <div className="text-xs text-muted-foreground">
                          {relatedPractice.duration} • {relatedPractice.focusArea}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
