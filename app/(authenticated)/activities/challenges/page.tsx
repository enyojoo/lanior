"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Clock,
  Trophy,
  Calendar,
  Heart,
  MessageSquare,
  Gift,
  Star,
  Flame,
  Target,
  Users,
  CheckCircle,
} from "lucide-react"

const dailyChallenges = [
  {
    id: "daily-appreciation",
    title: "Express Daily Appreciation",
    description: "Share one specific thing you appreciate about your partner today",
    duration: "5 min",
    xpReward: 25,
    icon: Heart,
    isCompleted: false,
    streak: 7,
  },
  {
    id: "mindful-moment",
    title: "Mindful Moment Together",
    description: "Spend 3 minutes in mindful presence with your partner",
    duration: "3 min",
    xpReward: 20,
    icon: Star,
    isCompleted: true,
    streak: 4,
  },
  {
    id: "quality-question",
    title: "Quality Question of the Day",
    description: "Ask your partner a meaningful question and listen actively",
    duration: "10 min",
    xpReward: 30,
    icon: MessageSquare,
    isCompleted: false,
    streak: 12,
  },
]

const weeklyChallenges = [
  {
    id: "date-night-planning",
    title: "Plan Your Dream Date",
    description: "Collaborate to plan a special date night for this week",
    duration: "30 min",
    xpReward: 100,
    icon: Gift,
    isCompleted: false,
    progress: 60,
    daysLeft: 3,
    participants: 2847,
  },
  {
    id: "gratitude-journal",
    title: "Shared Gratitude Journal",
    description: "Write in a shared gratitude journal every day this week",
    duration: "5 min/day",
    xpReward: 150,
    icon: Heart,
    isCompleted: false,
    progress: 85,
    daysLeft: 1,
    participants: 1923,
  },
  {
    id: "communication-challenge",
    title: "No-Phone Communication Week",
    description: "Spend quality time together without phones for 1 hour each day",
    duration: "1 hour/day",
    xpReward: 200,
    icon: MessageSquare,
    isCompleted: true,
    progress: 100,
    daysLeft: 0,
    participants: 3421,
  },
]

const monthlyGoals = [
  {
    id: "love-language-mastery",
    title: "Love Language Mastery",
    description: "Complete all love language activities and practice daily",
    xpReward: 500,
    icon: Heart,
    progress: 75,
    daysLeft: 12,
    requirements: [
      { task: "Complete Love Language Quiz", completed: true },
      { task: "Practice Words of Affirmation daily", completed: true },
      { task: "Plan Quality Time activities", completed: true },
      { task: "Give thoughtful gifts", completed: false },
      { task: "Show physical affection", completed: false },
    ],
  },
  {
    id: "communication-expert",
    title: "Communication Expert",
    description: "Master all communication-building activities",
    xpReward: 750,
    icon: MessageSquare,
    progress: 45,
    daysLeft: 18,
    requirements: [
      { task: "Complete Active Listening Practice", completed: true },
      { task: "Finish Conflict Resolution Training", completed: false },
      { task: "Practice Daily Check-ins", completed: true },
      { task: "Master Non-Violent Communication", completed: false },
      { task: "Complete Empathy Building Exercises", completed: false },
    ],
  },
]

const userStats = {
  currentStreak: 7,
  longestStreak: 23,
  challengesCompleted: 45,
  totalXP: 2340,
}

export default function ChallengesPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<"daily" | "weekly" | "monthly">("daily")

  const startChallenge = (challengeId: string) => {
    router.push(`/activities/${challengeId}`)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => router.push("/activities")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold unbounded">Daily & Weekly Challenges</h1>
          <p className="text-muted-foreground">Build consistent habits for a stronger relationship</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center bg-gradient-to-br from-orange-500/10 to-red-500/5">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Flame className="h-5 w-5 text-orange-500" />
            <div className="text-2xl font-bold text-orange-500">{userStats.currentStreak}</div>
          </div>
          <div className="text-sm text-muted-foreground">Current Streak</div>
        </Card>
        <Card className="p-4 text-center bg-gradient-to-br from-yellow-500/10 to-orange-500/5">
          <div className="text-2xl font-bold text-yellow-500">{userStats.longestStreak}</div>
          <div className="text-sm text-muted-foreground">Longest Streak</div>
        </Card>
        <Card className="p-4 text-center bg-gradient-to-br from-green-500/10 to-emerald-500/5">
          <div className="text-2xl font-bold text-green-500">{userStats.challengesCompleted}</div>
          <div className="text-sm text-muted-foreground">Challenges Done</div>
        </Card>
        <Card className="p-4 text-center bg-gradient-to-br from-purple-500/10 to-blue-500/5">
          <div className="text-2xl font-bold text-purple-500">{userStats.totalXP}</div>
          <div className="text-sm text-muted-foreground">Challenge XP</div>
        </Card>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2">
        <Button variant={activeTab === "daily" ? "default" : "outline"} onClick={() => setActiveTab("daily")}>
          Daily Challenges
        </Button>
        <Button variant={activeTab === "weekly" ? "default" : "outline"} onClick={() => setActiveTab("weekly")}>
          Weekly Challenges
        </Button>
        <Button variant={activeTab === "monthly" ? "default" : "outline"} onClick={() => setActiveTab("monthly")}>
          Monthly Goals
        </Button>
      </div>

      {/* Daily Challenges */}
      {activeTab === "daily" && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold">Today's Challenges</h2>
            <Badge variant="outline">Reset in 8 hours</Badge>
          </div>

          {dailyChallenges.map((challenge) => (
            <Card key={challenge.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      challenge.isCompleted ? "bg-green-500" : "bg-primary/20"
                    }`}
                  >
                    {challenge.isCompleted ? (
                      <CheckCircle className="h-6 w-6 text-white" />
                    ) : (
                      <challenge.icon className="h-6 w-6 text-primary" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{challenge.title}</h3>
                      {challenge.streak > 0 && (
                        <div className="flex items-center gap-1">
                          <Flame className="h-4 w-4 text-orange-500" />
                          <span className="text-sm font-medium text-orange-500">{challenge.streak}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{challenge.description}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {challenge.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Trophy className="h-3 w-3" />+{challenge.xpReward} XP
                      </span>
                    </div>
                  </div>

                  <Button
                    variant={challenge.isCompleted ? "outline" : "default"}
                    onClick={() => startChallenge(challenge.id)}
                    disabled={challenge.isCompleted}
                  >
                    {challenge.isCompleted ? "Completed" : "Start"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Weekly Challenges */}
      {activeTab === "weekly" && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Target className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold">This Week's Challenges</h2>
            <Badge variant="outline">Resets Monday</Badge>
          </div>

          {weeklyChallenges.map((challenge) => (
            <Card key={challenge.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      challenge.isCompleted ? "bg-green-500" : "bg-primary/20"
                    }`}
                  >
                    {challenge.isCompleted ? (
                      <CheckCircle className="h-6 w-6 text-white" />
                    ) : (
                      <challenge.icon className="h-6 w-6 text-primary" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{challenge.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {challenge.daysLeft > 0 ? `${challenge.daysLeft} days left` : "Completed"}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{challenge.description}</p>

                    {/* Progress Bar */}
                    <div className="mb-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Progress</span>
                        <span>{challenge.progress}%</span>
                      </div>
                      <Progress value={challenge.progress} className="h-2" />
                    </div>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {challenge.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Trophy className="h-3 w-3" />+{challenge.xpReward} XP
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {challenge.participants.toLocaleString()} participating
                      </span>
                    </div>
                  </div>

                  <Button
                    variant={challenge.isCompleted ? "outline" : "default"}
                    onClick={() => startChallenge(challenge.id)}
                    disabled={challenge.isCompleted}
                  >
                    {challenge.isCompleted ? "Completed" : challenge.progress > 0 ? "Continue" : "Start"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Monthly Goals */}
      {activeTab === "monthly" && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold">Monthly Goals</h2>
            <Badge variant="outline">January 2024</Badge>
          </div>

          {monthlyGoals.map((goal) => (
            <Card key={goal.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <goal.icon className="h-6 w-6 text-primary" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <CardTitle className="text-lg">{goal.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {goal.daysLeft} days left
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{goal.description}</p>

                    {/* Progress Bar */}
                    <div className="mb-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Overall Progress</span>
                        <span>{goal.progress}%</span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <Trophy className="h-4 w-4 text-yellow-500" />
                      <span className="font-medium text-yellow-500">+{goal.xpReward} XP</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-2">
                  <h4 className="font-medium text-sm mb-2">Requirements:</h4>
                  {goal.requirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center ${
                          req.completed ? "bg-green-500" : "bg-muted"
                        }`}
                      >
                        {req.completed && <CheckCircle className="h-3 w-3 text-white" />}
                      </div>
                      <span className={req.completed ? "text-muted-foreground line-through" : ""}>{req.task}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
