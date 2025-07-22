"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  MessageSquare,
  Shield,
  RefreshCw,
  Users,
  Umbrella,
  Target,
  Star,
  Smile,
  Trophy,
  Flame,
  TrendingUp,
  Clock,
  Play,
  Award,
} from "lucide-react"
import Image from "next/image"

const stats = {
  activitiesCompleted: 127,
  currentStreak: 23,
  relationshipScore: 8.4,
  programsCompleted: 3,
}

const todaysActivity = {
  title: "Morning Gratitude Practice",
  description: "Start your day by expressing appreciation for each other",
  duration: "5 min",
  focusArea: "Connection",
}

const quickPractices = [
  {
    id: "gratitude-boost",
    title: "Morning Gratitude Practice",
    description: "Start your day by expressing appreciation for each other",
    duration: "5 min",
    level: "Foundation",
    focusArea: "Connection",
    icon: Heart,
    completedCount: 47382,
  },
  {
    id: "communication-check",
    title: "Daily Check-in",
    description: "Stay emotionally connected with a structured conversation",
    duration: "10 min",
    level: "Foundation",
    focusArea: "Communication",
    icon: MessageSquare,
    completedCount: 52194,
  },
  {
    id: "trust-builder",
    title: "Vulnerability Practice",
    description: "Strengthen emotional safety through guided sharing",
    duration: "15 min",
    level: "Intermediate",
    focusArea: "Trust",
    icon: Shield,
    completedCount: 23847,
  },
  {
    id: "conflict-reset",
    title: "Conflict Reset Ritual",
    description: "Quickly de-escalate tension and reconnect after disagreements",
    duration: "8 min",
    level: "Intermediate",
    focusArea: "Conflict Resolution",
    icon: RefreshCw,
    completedCount: 18293,
  },
  {
    id: "intimacy-booster",
    title: "Connection Moment",
    description: "Simple practice to increase physical and emotional closeness",
    duration: "12 min",
    level: "Foundation",
    focusArea: "Intimacy",
    icon: Users,
    completedCount: 34782,
  },
  {
    id: "stress-support",
    title: "Stress Support Check",
    description: "Help each other manage daily stress and challenges",
    duration: "7 min",
    level: "Foundation",
    focusArea: "Support",
    icon: Umbrella,
    completedCount: 29384,
  },
  {
    id: "dream-sharing",
    title: "Future Dreams Conversation",
    description: "Align on goals and dreams for your relationship and life",
    duration: "20 min",
    level: "Advanced",
    focusArea: "Future Planning",
    icon: Target,
    completedCount: 15647,
  },
  {
    id: "appreciation-express",
    title: "Specific Appreciation",
    description: "Practice giving detailed, meaningful appreciation",
    duration: "6 min",
    level: "Foundation",
    focusArea: "Appreciation",
    icon: Star,
    completedCount: 41923,
  },
  {
    id: "playfulness-break",
    title: "Playful Connection",
    description: "Bring more fun and laughter into your relationship",
    duration: "10 min",
    level: "Foundation",
    focusArea: "Fun",
    icon: Smile,
    completedCount: 38472,
  },
]

const programs = [
  {
    id: "communication-foundations",
    title: "Communication Foundations",
    description: "Build strong communication habits in just one week",
    duration: "7 days",
    level: "Foundation",
    timeCommitment: "15 min/day",
    participants: "15.2K couples",
    rating: 4.8,
    skillsBuilt: ["Active Listening", "Conflict Navigation", "Emotional Expression"],
    expertName: "Dr. Sarah Chen",
    expertCredentials: "Licensed Marriage Therapist",
    image: "/placeholder.svg?height=200&width=400&text=Communication+Foundations",
    isEnrolled: false,
    progress: 0,
  },
  {
    id: "trust-deepening",
    title: "Trust Deepening Journey",
    description: "Develop unshakeable emotional safety over 3 weeks of guided practice",
    duration: "21 days",
    level: "Intermediate",
    timeCommitment: "20 min/day",
    participants: "8.9K couples",
    rating: 4.9,
    skillsBuilt: ["Vulnerability", "Emotional Reliability", "Secure Attachment"],
    expertName: "Dr. Marcus Johnson",
    expertCredentials: "Relationship Psychology PhD",
    image: "/placeholder.svg?height=200&width=400&text=Trust+Deepening",
    isEnrolled: true,
    progress: 45,
  },
  {
    id: "intimacy-renaissance",
    title: "Intimacy Renaissance",
    description: "Reignite passion and deepen physical and emotional intimacy",
    duration: "14 days",
    level: "Intermediate",
    timeCommitment: "25 min/day",
    participants: "12.4K couples",
    rating: 4.7,
    skillsBuilt: ["Physical Intimacy", "Emotional Closeness", "Desire Cultivation"],
    expertName: "Dr. Elena Rodriguez",
    expertCredentials: "Certified Sex Therapist",
    image: "/placeholder.svg?height=200&width=400&text=Intimacy+Renaissance",
    isEnrolled: false,
    progress: 0,
  },
  {
    id: "conflict-mastery",
    title: "Conflict to Connection",
    description: "Transform disagreements into opportunities for deeper understanding",
    duration: "10 days",
    level: "Advanced",
    timeCommitment: "30 min/day",
    participants: "6.7K couples",
    rating: 4.9,
    skillsBuilt: ["Conflict Resolution", "Emotional Regulation", "Compromise Skills"],
    expertName: "Dr. James Kim",
    expertCredentials: "Conflict Resolution Specialist",
    image: "/placeholder.svg?height=200&width=400&text=Conflict+Mastery",
    isEnrolled: false,
    progress: 0,
  },
]

const challenges = [
  {
    id: "gratitude-week",
    title: "7-Day Gratitude Challenge",
    description: "Express appreciation daily for a week",
    type: "Weekly",
    timeLeft: "3 days left",
    participants: 12847,
    completion: 67,
    isJoined: true,
  },
  {
    id: "date-night-month",
    title: "Monthly Date Night Challenge",
    description: "Plan and execute 4 creative dates this month",
    type: "Monthly",
    timeLeft: "18 days left",
    participants: 8923,
    completion: 23,
    isJoined: false,
  },
  {
    id: "communication-streak",
    title: "30-Day Communication Streak",
    description: "Have a meaningful conversation every day for 30 days",
    type: "Monthly",
    timeLeft: "12 days left",
    participants: 15692,
    completion: 45,
    isJoined: true,
  },
]

export default function GrowPage() {
  const router = useRouter()
  const [userInProgram] = useState(true)

  const startPractice = (practiceId: string) => {
    router.push(`/grow/practice/${practiceId}`)
  }

  const startProgram = (programId: string) => {
    router.push(`/grow/program/${programId}`)
  }

  const joinChallenge = (challengeId: string) => {
    router.push(`/grow/challenge/${challengeId}`)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold unbounded mb-2">Grow Your Relationship</h1>
        <p className="text-lg text-muted-foreground">
          What the gym does for your body, Lanior does for your relationship
        </p>
      </div>

      {/* Today's Growth Practice Hero */}
      <div className="bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Today's Growth Practice</h2>
            {userInProgram ? (
              <>
                <p className="text-muted-foreground mb-3">{todaysActivity.title}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {todaysActivity.duration}
                  </span>
                  <Badge>{todaysActivity.focusArea}</Badge>
                </div>
              </>
            ) : (
              <>
                <p className="text-muted-foreground mb-3">5-Minute Morning Connection</p>
                <p className="text-sm">Start your day by nurturing your bond</p>
              </>
            )}
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-2">
              <Play className="h-10 w-10 text-primary" />
            </div>
            <Button size="lg">Begin Growth</Button>
          </div>
        </div>
      </div>

      {/* Growth Dashboard */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="p-4 text-center bg-gradient-to-br from-emerald-500/10 to-emerald-500/5">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <Trophy className="h-6 w-6 text-emerald-500" />
          </div>
          <div className="text-2xl font-bold text-emerald-500">{stats.activitiesCompleted}</div>
          <div className="text-sm text-muted-foreground">Growth Sessions</div>
        </Card>

        <Card className="p-4 text-center bg-gradient-to-br from-orange-500/10 to-red-500/5">
          <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <Flame className="h-6 w-6 text-orange-500" />
          </div>
          <div className="text-2xl font-bold text-orange-500">{stats.currentStreak}</div>
          <div className="text-sm text-muted-foreground">Day Streak</div>
        </Card>

        <Card className="p-4 text-center bg-gradient-to-br from-blue-500/10 to-blue-500/5">
          <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <TrendingUp className="h-6 w-6 text-blue-500" />
          </div>
          <div className="text-2xl font-bold text-blue-500">{stats.relationshipScore}</div>
          <div className="text-sm text-muted-foreground">Growth Level</div>
        </Card>

        <Card className="p-4 text-center bg-gradient-to-br from-purple-500/10 to-purple-500/5">
          <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <Award className="h-6 w-6 text-purple-500" />
          </div>
          <div className="text-2xl font-bold text-purple-500">{stats.programsCompleted}</div>
          <div className="text-sm text-muted-foreground">Programs Completed</div>
        </Card>
      </div>

      {/* Quick Growth Practices */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Quick Growth Practices</h2>
        <p className="text-muted-foreground mb-6">5-15 minute activities to nurture and grow your relationship daily</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickPractices.map((practice) => (
            <Card
              key={practice.id}
              className="group hover:shadow-lg transition-all cursor-pointer"
              onClick={() => startPractice(practice.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <practice.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{practice.duration}</div>
                    <Badge variant="outline" className="mt-1">
                      {practice.level}
                    </Badge>
                  </div>
                </div>

                <h3 className="font-semibold mb-2">{practice.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{practice.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Heart className="h-3 w-3" />
                    <span>{practice.focusArea}</span>
                  </div>
                  <Button size="sm" className="group-hover:bg-primary group-hover:text-white">
                    Grow
                  </Button>
                </div>

                <div className="mt-3 text-xs text-muted-foreground">
                  {practice.completedCount.toLocaleString()} couples have grown with this
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Growth Programs */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Growth Programs</h2>
        <p className="text-muted-foreground mb-6">
          Structured pathways designed by experts to grow specific relationship strengths over time
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <Card
              key={program.id}
              className="overflow-hidden hover:shadow-lg transition-all cursor-pointer"
              onClick={() => startProgram(program.id)}
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-emerald-500/20">
                <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge className="bg-black/70 text-white">{program.duration}</Badge>
                  <Badge variant="outline" className="bg-white/90">
                    {program.level}
                  </Badge>
                </div>
                {program.isEnrolled && (
                  <div className="absolute top-3 right-3">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <div className="text-lg font-bold text-primary">{program.progress}%</div>
                    </div>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">{program.title}</h3>
                <p className="text-muted-foreground mb-4">{program.description}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {program.timeCommitment}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {program.participants}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    {program.rating}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <h4 className="font-medium text-sm">Areas You'll Grow:</h4>
                  <div className="flex flex-wrap gap-1">
                    {program.skillsBuilt.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                  <div className="text-sm font-medium mb-1">Expert-Designed</div>
                  <div className="text-xs text-muted-foreground">
                    Created by {program.expertName}, {program.expertCredentials}
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  {program.isEnrolled ? "Continue Growing" : "Start Growing"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Community Growth Challenges */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Community Growth Challenges</h2>
        <p className="text-muted-foreground mb-6">
          Join thousands of couples committed to growing stronger relationships together
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {challenges.map((challenge) => (
            <Card key={challenge.id} className="relative overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-purple-500">{challenge.type}</Badge>
                  <span className="text-sm text-muted-foreground">{challenge.timeLeft}</span>
                </div>

                <h3 className="font-semibold mb-2">{challenge.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{challenge.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>{challenge.participants.toLocaleString()} couples growing</span>
                    <span>{challenge.completion}% average completion</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      style={{ width: `${challenge.completion}%` }}
                    />
                  </div>
                </div>

                <Button variant="outline" className="w-full bg-transparent" onClick={() => joinChallenge(challenge.id)}>
                  {challenge.isJoined ? "Continue Growing" : "Join Growth"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
