"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Clock,
  TrendingUp,
  Play,
  ArrowRight,
  Target,
  BookOpen,
  Zap,
  Heart,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function GrowPage() {
  const [currentPracticeIndex, setCurrentPracticeIndex] = useState(0)
  const [currentProgramIndex, setCurrentProgramIndex] = useState(0)

  // Today's Practice Data
  const todaysPractice = {
    title: "Morning Gratitude Practice",
    description: "Start your day by expressing specific appreciation for each other",
    duration: "5 min",
    difficulty: "Foundation",
    focusArea: "Connection",
    steps: [
      "Sit facing each other",
      "Take turns sharing 3 specific things you appreciate",
      "Listen without interrupting",
      "End with a meaningful hug",
    ],
  }

  // Growth Dashboard Data
  const growthStats = {
    currentStreak: 23,
    practicesCompleted: 127,
    programsFinished: 3,
    growthLevel: 8.4,
    weeklyGoal: 5,
    weeklyProgress: 3,
  }

  // Quick Growth Practices Data
  const quickPractices = [
    {
      id: 1,
      title: "2-Minute Check-In",
      description: "Quick emotional temperature check",
      duration: "2 min",
      difficulty: "Foundation",
      focusArea: "Communication",
      completionCount: 15234,
      image: "/placeholder.svg?height=120&width=200",
    },
    {
      id: 2,
      title: "Appreciation Boost",
      description: "Express one specific thing you love",
      duration: "3 min",
      difficulty: "Foundation",
      focusArea: "Connection",
      completionCount: 12847,
      image: "/placeholder.svg?height=120&width=200",
    },
    {
      id: 3,
      title: "Active Listening",
      description: "Practice deep listening skills",
      duration: "10 min",
      difficulty: "Intermediate",
      focusArea: "Communication",
      completionCount: 9876,
      image: "/placeholder.svg?height=120&width=200",
    },
    {
      id: 4,
      title: "Trust Building",
      description: "Small vulnerability exercise",
      duration: "8 min",
      difficulty: "Intermediate",
      focusArea: "Trust",
      completionCount: 7654,
      image: "/placeholder.svg?height=120&width=200",
    },
    {
      id: 5,
      title: "Conflict Resolution",
      description: "Navigate disagreements calmly",
      duration: "15 min",
      difficulty: "Advanced",
      focusArea: "Conflict",
      completionCount: 5432,
      image: "/placeholder.svg?height=120&width=200",
    },
  ]

  // Growth Programs Data
  const growthPrograms = [
    {
      id: 1,
      title: "Communication Foundations",
      subtitle: "Build unshakeable communication habits",
      duration: "7 days",
      dailyCommitment: "15 min/day",
      difficulty: "Foundation",
      expertName: "Dr. Sarah Chen",
      participants: 15200,
      rating: 4.8,
      image: "/placeholder.svg?height=160&width=280",
      skills: ["Active Listening", "Conflict Navigation", "Emotional Expression"],
    },
    {
      id: 2,
      title: "Trust Deepening Journey",
      subtitle: "Create unbreakable emotional safety",
      duration: "21 days",
      dailyCommitment: "20 min/day",
      difficulty: "Intermediate",
      expertName: "Mark Thompson",
      participants: 8934,
      rating: 4.9,
      image: "/placeholder.svg?height=160&width=280",
      skills: ["Vulnerability", "Emotional Safety", "Deep Connection"],
    },
    {
      id: 3,
      title: "Intimacy Renaissance",
      subtitle: "Reignite passion and closeness",
      duration: "14 days",
      dailyCommitment: "25 min/day",
      difficulty: "Intermediate",
      expertName: "Dr. Lisa Rodriguez",
      participants: 12456,
      rating: 4.7,
      image: "/placeholder.svg?height=160&width=280",
      skills: ["Physical Intimacy", "Emotional Intimacy", "Playfulness"],
    },
    {
      id: 4,
      title: "Advanced Relationship Mastery",
      subtitle: "Master the art of thriving together",
      duration: "30 days",
      dailyCommitment: "30 min/day",
      difficulty: "Advanced",
      expertName: "Dr. Michael Chang",
      participants: 5678,
      rating: 4.8,
      image: "/placeholder.svg?height=160&width=280",
      skills: ["Leadership", "Vision Setting", "Legacy Building"],
    },
    {
      id: 5,
      title: "Conflict to Connection",
      subtitle: "Transform fights into deeper understanding",
      duration: "10 days",
      dailyCommitment: "18 min/day",
      difficulty: "Intermediate",
      expertName: "Dr. Jennifer Kim",
      participants: 9876,
      rating: 4.6,
      image: "/placeholder.svg?height=160&width=280",
      skills: ["De-escalation", "Empathy", "Resolution"],
    },
  ]

  const visiblePractices = quickPractices.slice(currentPracticeIndex, currentPracticeIndex + 3)
  const visiblePrograms = growthPrograms.slice(currentProgramIndex, currentProgramIndex + 3)

  const nextPractices = () => {
    if (currentPracticeIndex + 3 < quickPractices.length) {
      setCurrentPracticeIndex(currentPracticeIndex + 1)
    }
  }

  const prevPractices = () => {
    if (currentPracticeIndex > 0) {
      setCurrentPracticeIndex(currentPracticeIndex - 1)
    }
  }

  const nextPrograms = () => {
    if (currentProgramIndex + 3 < growthPrograms.length) {
      setCurrentProgramIndex(currentProgramIndex + 1)
    }
  }

  const prevPrograms = () => {
    if (currentProgramIndex > 0) {
      setCurrentProgramIndex(currentProgramIndex - 1)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Today's Growth Practice Hero */}
      <Card className="mb-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Heart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold unbounded">Today's Growth Practice</h1>
              <p className="text-muted-foreground">Your daily relationship workout</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-2">{todaysPractice.title}</h2>
              <p className="text-muted-foreground mb-4">{todaysPractice.description}</p>

              <div className="flex items-center gap-4 mb-6">
                <Badge variant="secondary" className="text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  {todaysPractice.duration}
                </Badge>
                <Badge className="bg-purple-500 text-sm">{todaysPractice.difficulty}</Badge>
                <Badge variant="outline" className="text-sm">
                  {todaysPractice.focusArea}
                </Badge>
              </div>

              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Play className="h-5 w-5 mr-2" />
                Start Practice
              </Button>
            </div>

            <div className="bg-white/50 dark:bg-gray-900/50 rounded-lg p-6">
              <h3 className="font-semibold mb-4">What you'll do:</h3>
              <ol className="space-y-2">
                {todaysPractice.steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="text-sm">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Growth Dashboard */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 unbounded">
            <TrendingUp className="h-5 w-5" />
            Your Growth Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">{growthStats.currentStreak}</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-1">{growthStats.practicesCompleted}</div>
              <div className="text-sm text-muted-foreground">Practices Done</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{growthStats.programsFinished}</div>
              <div className="text-sm text-muted-foreground">Programs Finished</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-1">{growthStats.growthLevel}</div>
              <div className="text-sm text-muted-foreground">Growth Level</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-muted rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Weekly Goal Progress</span>
              <span className="text-sm text-muted-foreground">
                {growthStats.weeklyProgress}/{growthStats.weeklyGoal}
              </span>
            </div>
            <Progress value={(growthStats.weeklyProgress / growthStats.weeklyGoal) * 100} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Quick Growth Practices */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 unbounded mb-1">
                <Zap className="h-5 w-5" />
                Quick Growth Practices
              </CardTitle>
              <p className="text-sm text-muted-foreground">5-15 minute relationship boosters</p>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/grow/practices">
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </Link>
              <div className="flex gap-1">
                <Button variant="outline" size="sm" onClick={prevPractices} disabled={currentPracticeIndex === 0}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextPractices}
                  disabled={currentPracticeIndex + 3 >= quickPractices.length}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {visiblePractices.map((practice) => (
              <Card key={practice.id} className="group hover:shadow-lg transition-all duration-200 cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-t-lg flex items-center justify-center">
                  <Play className="h-8 w-8 text-purple-600 group-hover:scale-110 transition-transform" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 group-hover:text-purple-600 transition-colors">{practice.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{practice.description}</p>

                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {practice.duration}
                    </Badge>
                    <Badge className="text-xs bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                      {practice.difficulty}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {practice.completionCount.toLocaleString()} completed
                    </span>
                    <Button size="sm" variant="ghost" className="text-purple-600 hover:text-purple-700">
                      Start <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Growth Programs */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 unbounded mb-1">
                <BookOpen className="h-5 w-5" />
                Growth Programs
              </CardTitle>
              <p className="text-sm text-muted-foreground">Structured journeys with expert guidance</p>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/grow/programs">
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </Link>
              <div className="flex gap-1">
                <Button variant="outline" size="sm" onClick={prevPrograms} disabled={currentProgramIndex === 0}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextPrograms}
                  disabled={currentProgramIndex + 3 >= growthPrograms.length}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {visiblePrograms.map((program) => (
              <Card key={program.id} className="group hover:shadow-lg transition-all duration-200 cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-t-lg flex items-center justify-center">
                  <Target className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform" />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                      {program.difficulty}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {program.duration}
                    </Badge>
                  </div>

                  <h3 className="font-semibold mb-1 group-hover:text-blue-600 transition-colors">{program.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{program.subtitle}</p>

                  <div className="flex items-center gap-2 mb-3">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="text-xs">
                        {program.expertName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">{program.expertName}</span>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{program.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {program.participants.toLocaleString()} enrolled
                    </span>
                  </div>

                  <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                    Start Growing <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
