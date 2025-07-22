"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, Clock } from "lucide-react"
import { useRouter, useParams } from "next/navigation"

const progressData = {
  "trust-foundation": {
    id: "trust-foundation",
    title: "Building Trust Foundation",
    completionPercentage: 45,
    streakDays: 12,
    totalTimeSpent: 8.5,
    badgesEarned: 3,
    weeklyProgressData: [
      { week: "Week 1", completion: 100 },
      { week: "Week 2", completion: 100 },
      { week: "Week 3", completion: 45 },
      { week: "Week 4", completion: 0 },
      { week: "Week 5", completion: 0 },
      { week: "Week 6", completion: 0 },
    ],
    achievements: [
      { name: "First Steps", icon: "🎯", earned: true, earnedDate: new Date("2024-01-15") },
      { name: "Week Warrior", icon: "⚡", earned: true, earnedDate: new Date("2024-01-22") },
      { name: "Streak Master", icon: "🔥", earned: true, earnedDate: new Date("2024-01-28") },
      { name: "Trust Builder", icon: "🏗️", earned: false, earnedDate: null },
      { name: "Communication Pro", icon: "💬", earned: false, earnedDate: null },
      { name: "Plan Completer", icon: "🏆", earned: false, earnedDate: null },
    ],
    weeks: [
      {
        title: "Understanding Trust",
        modules: [
          { title: "The Science of Trust", isCompleted: true, isStarted: true, completedDate: new Date("2024-01-15") },
          { title: "Trust vs. Blind Faith", isCompleted: true, isStarted: true, completedDate: new Date("2024-01-16") },
          {
            title: "Personal Trust Assessment",
            isCompleted: true,
            isStarted: true,
            completedDate: new Date("2024-01-17"),
          },
        ],
      },
      {
        title: "Building Blocks",
        modules: [
          {
            title: "Consistency and Reliability",
            isCompleted: true,
            isStarted: true,
            completedDate: new Date("2024-01-22"),
          },
          {
            title: "Transparency Practices",
            isCompleted: true,
            isStarted: true,
            completedDate: new Date("2024-01-23"),
          },
          {
            title: "Accountability Systems",
            isCompleted: true,
            isStarted: true,
            completedDate: new Date("2024-01-24"),
          },
        ],
      },
      {
        title: "Communication for Trust",
        modules: [
          { title: "Honest Conversations", isCompleted: false, isStarted: true, completedDate: null },
          { title: "Active Listening for Trust", isCompleted: false, isStarted: false, completedDate: null },
          { title: "Difficult Discussions", isCompleted: false, isStarted: false, completedDate: null },
        ],
      },
      {
        title: "Rebuilding After Betrayal",
        modules: [
          { title: "Processing Hurt", isCompleted: false, isStarted: false, completedDate: null },
          { title: "Forgiveness Process", isCompleted: false, isStarted: false, completedDate: null },
          { title: "Creating New Agreements", isCompleted: false, isStarted: false, completedDate: null },
        ],
      },
      {
        title: "Maintaining Trust",
        modules: [
          { title: "Daily Trust Practices", isCompleted: false, isStarted: false, completedDate: null },
          { title: "Trust Check-ins", isCompleted: false, isStarted: false, completedDate: null },
          { title: "Preventing Future Issues", isCompleted: false, isStarted: false, completedDate: null },
        ],
      },
      {
        title: "Trust Mastery",
        modules: [
          { title: "Vulnerability and Trust", isCompleted: false, isStarted: false, completedDate: null },
          { title: "Trust in Intimacy", isCompleted: false, isStarted: false, completedDate: null },
          { title: "Your Trust Action Plan", isCompleted: false, isStarted: false, completedDate: null },
        ],
      },
    ],
  },
}

export default function ProgressPage() {
  const router = useRouter()
  const params = useParams()
  const planId = params.planId as string
  const progressStats = progressData[planId as keyof typeof progressData]

  if (!progressStats) {
    return <div>Progress data not found</div>
  }

  const formatDate = (date: Date | null) => {
    if (!date) return ""
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  }

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button variant="ghost" onClick={() => router.back()} className="mb-4">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Dashboard
      </Button>

      <h1 className="text-3xl font-bold unbounded">Progress Analytics</h1>

      {/* Progress Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-primary">{progressStats.completionPercentage}%</div>
          <div className="text-sm text-muted-foreground">Plan Complete</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-emerald-500">{progressStats.streakDays}</div>
          <div className="text-sm text-muted-foreground">Day Streak</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-purple-500">{progressStats.totalTimeSpent}</div>
          <div className="text-sm text-muted-foreground">Hours Invested</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-orange-500">{progressStats.badgesEarned}</div>
          <div className="text-sm text-muted-foreground">Badges Earned</div>
        </Card>
      </div>

      {/* Weekly Progress Chart */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 unbounded">Weekly Progress</h2>
        <div className="space-y-2">
          {progressStats.weeklyProgressData.map((week, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-16 text-sm font-medium">{week.week}</div>
              <div className="flex-1 bg-muted rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-primary to-emerald-500"
                  style={{ width: `${week.completion}%` }}
                ></div>
              </div>
              <div className="w-12 text-sm text-muted-foreground">{week.completion}%</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Achievement Badges */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 unbounded">Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {progressStats.achievements.map((achievement, index) => (
            <div
              key={index}
              className={`text-center p-3 rounded-lg border ${
                achievement.earned ? "bg-primary/10 border-primary" : "bg-muted border-muted"
              }`}
            >
              <div className={`text-2xl mb-1 ${achievement.earned ? "" : "grayscale opacity-50"}`}>
                {achievement.icon}
              </div>
              <div className="text-sm font-medium">{achievement.name}</div>
              {achievement.earned && achievement.earnedDate && (
                <div className="text-xs text-muted-foreground mt-1">Earned {formatDate(achievement.earnedDate)}</div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Module Completion Timeline */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 unbounded">Learning Journey</h2>
        <div className="space-y-4">
          {progressStats.weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="border-l-2 border-muted pl-4 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
              <h3 className="font-semibold">
                Week {weekIndex + 1}: {week.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                {week.modules.map((module, moduleIndex) => (
                  <div
                    key={moduleIndex}
                    className={`p-2 rounded text-sm ${
                      module.isCompleted
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : module.isStarted
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {module.isCompleted ? (
                        <Check className="h-3 w-3" />
                      ) : module.isStarted ? (
                        <Clock className="h-3 w-3" />
                      ) : (
                        <div className="w-3 h-3 rounded-full border"></div>
                      )}
                      <span>{module.title}</span>
                    </div>
                    {module.completedDate && (
                      <div className="text-xs mt-1 opacity-70">Completed {formatDate(module.completedDate)}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
