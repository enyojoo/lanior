"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Play, Clock, Check, CheckCircle, ArrowLeft } from "lucide-react"
import { useRouter, useParams } from "next/navigation"

const dashboardData = {
  "trust-foundation": {
    id: "trust-foundation",
    title: "Building Trust Foundation",
    totalWeeks: 6,
    currentWeek: 3,
    completionPercentage: 45,
    streakDays: 12,
    badgesEarned: 3,
    todaysModule: {
      id: "communication-trust-1",
      title: "Honest Conversations",
      description: "Learn how to have difficult but necessary conversations that build trust.",
      estimatedTime: "20 min",
      isStarted: false,
    },
    currentWeekModules: [
      {
        id: "comm-1",
        title: "Honest Conversations",
        description: "Learn how to have difficult but necessary conversations that build trust.",
        isCompleted: false,
        isStarted: false,
        isAvailable: true,
      },
      {
        id: "comm-2",
        title: "Active Listening for Trust",
        description: "Master listening techniques that demonstrate trustworthiness.",
        isCompleted: false,
        isStarted: false,
        isAvailable: false,
      },
      {
        id: "comm-3",
        title: "Difficult Discussions",
        description: "Navigate challenging conversations while maintaining trust.",
        isCompleted: false,
        isStarted: false,
        isAvailable: false,
      },
    ],
    partner: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=50&width=50&text=AJ",
      completionPercentage: 52,
    },
    isCouplePlan: true,
  },
}

export default function PlanDashboard() {
  const router = useRouter()
  const params = useParams()
  const planId = params.planId as string
  const plan = dashboardData[planId as keyof typeof dashboardData]

  if (!plan) {
    return <div>Plan not found</div>
  }

  const { todaysModule, currentWeekModules, partner } = plan

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button variant="ghost" onClick={() => router.back()} className="mb-4">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Plan
      </Button>

      {/* Progress Overview */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold unbounded">{plan.title}</h1>
          <Badge className="bg-primary">
            Week {plan.currentWeek} of {plan.totalWeeks}
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">{plan.completionPercentage}%</div>
            <div className="text-sm text-muted-foreground">Complete</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-500 mb-1">{plan.streakDays}</div>
            <div className="text-sm text-muted-foreground">Day Streak</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-500 mb-1">{plan.badgesEarned}</div>
            <div className="text-sm text-muted-foreground">Badges Earned</div>
          </div>
        </div>

        <div className="w-full bg-muted rounded-full h-3 mb-4">
          <div
            className="h-3 rounded-full bg-gradient-to-r from-primary to-emerald-500"
            style={{ width: `${plan.completionPercentage}%` }}
          ></div>
        </div>
      </Card>

      {/* Today's Module */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 unbounded">Today's Module</h2>
        {todaysModule ? (
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
              <Play className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{todaysModule.title}</h3>
              <p className="text-sm text-muted-foreground">{todaysModule.description}</p>
              <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{todaysModule.estimatedTime}</span>
              </div>
            </div>
            <Button onClick={() => router.push(`/plans/${plan.id}/modules/${todaysModule.id}`)}>
              {todaysModule.isStarted ? "Continue" : "Start Module"}
            </Button>
          </div>
        ) : (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">All caught up!</h3>
            <p className="text-muted-foreground">Come back tomorrow for your next module.</p>
          </div>
        )}
      </Card>

      {/* Week Overview */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 unbounded">This Week's Progress</h2>
        <div className="space-y-3">
          {currentWeekModules.map((module, index) => (
            <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  module.isCompleted ? "bg-green-500" : module.isAvailable ? "bg-primary" : "bg-muted"
                }`}
              >
                {module.isCompleted ? (
                  <Check className="h-4 w-4 text-white" />
                ) : (
                  <span className="text-white text-sm">{index + 1}</span>
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-medium">{module.title}</h4>
                <p className="text-sm text-muted-foreground">{module.description}</p>
              </div>
              <Button
                variant={module.isCompleted ? "outline" : "default"}
                size="sm"
                disabled={!module.isAvailable}
                onClick={() => router.push(`/plans/${plan.id}/modules/${module.id}`)}
              >
                {module.isCompleted ? "Review" : module.isStarted ? "Continue" : "Start"}
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Partner Progress */}
      {plan.isCouplePlan && partner && (
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4 unbounded">Partner Progress</h2>
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={partner.avatar || "/placeholder.svg"} alt={partner.name} />
              <AvatarFallback>{partner.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-semibold">{partner.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-32 bg-muted rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-primary"
                    style={{ width: `${partner.completionPercentage}%` }}
                  ></div>
                </div>
                <span className="text-sm text-muted-foreground">{partner.completionPercentage}%</span>
              </div>
            </div>
            <Button variant="outline" size="sm">
              {partner.completionPercentage > plan.completionPercentage ? "Catch Up" : "Encourage"}
            </Button>
          </div>
        </Card>
      )}
    </div>
  )
}
