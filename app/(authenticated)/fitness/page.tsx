"use client"
import { Play, Clock, Trophy, Flame, Target, Users, Heart, MessageSquare, Shield, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function FitnessPage() {
  // Mock data - in real app this would come from API
  const stats = {
    workoutsCompleted: 47,
    currentStreak: 12,
    currentLevel: 8,
    programsCompleted: 3,
  }

  const todaysWorkout = {
    title: "Morning Connection Boost",
    duration: "10 min",
    focusArea: "Communication",
    isCompleted: false,
  }

  const userInProgram = true

  const quickWorkouts = [
    {
      id: "gratitude-boost",
      title: "Morning Gratitude Boost",
      description: "Start your day by expressing appreciation for each other",
      duration: "5 min",
      difficulty: "Beginner",
      focusArea: "Connection",
      icon: Heart,
      xpReward: 25,
      isPartnerWorkout: true,
    },
    {
      id: "communication-check",
      title: "Daily Communication Check-in",
      description: "Quick check-in to stay emotionally connected",
      duration: "10 min",
      difficulty: "Beginner",
      focusArea: "Communication",
      icon: MessageSquare,
      xpReward: 35,
      isPartnerWorkout: true,
    },
    {
      id: "trust-builder",
      title: "Trust Building Exercise",
      description: "Strengthen trust through vulnerability practice",
      duration: "15 min",
      difficulty: "Intermediate",
      focusArea: "Trust",
      icon: Shield,
      xpReward: 50,
      isPartnerWorkout: true,
    },
    {
      id: "conflict-resolution",
      title: "Conflict Resolution Drill",
      description: "Practice healthy disagreement techniques",
      duration: "12 min",
      difficulty: "Advanced",
      focusArea: "Communication",
      icon: MessageSquare,
      xpReward: 60,
      isPartnerWorkout: true,
    },
    {
      id: "intimacy-builder",
      title: "Intimacy Connection",
      description: "Deepen physical and emotional intimacy",
      duration: "8 min",
      difficulty: "Beginner",
      focusArea: "Intimacy",
      icon: Heart,
      xpReward: 40,
      isPartnerWorkout: true,
    },
    {
      id: "stress-relief",
      title: "Couple Stress Relief",
      description: "Release tension together with mindful exercises",
      duration: "15 min",
      difficulty: "Intermediate",
      focusArea: "Wellness",
      icon: Zap,
      xpReward: 45,
      isPartnerWorkout: true,
    },
  ]

  const programs = [
    {
      id: "communication-bootcamp",
      title: "Communication Bootcamp",
      description: "Build unshakeable communication skills in 7 days",
      duration: "7 days",
      difficulty: "Beginner",
      timeCommitment: "15 min/day",
      participants: "15.2K couples",
      rating: 4.8,
      strengthAreas: ["Active Listening", "Conflict Resolution", "Emotional Expression"],
      image: "/placeholder.jpg",
      isEnrolled: false,
      progress: 0,
    },
    {
      id: "trust-foundation",
      title: "Trust Foundation Program",
      description: "Build unbreakable trust over 3 weeks of focused training",
      duration: "21 days",
      difficulty: "Intermediate",
      timeCommitment: "20 min/day",
      participants: "8.9K couples",
      rating: 4.9,
      strengthAreas: ["Vulnerability", "Reliability", "Emotional Safety"],
      image: "/placeholder.jpg",
      isEnrolled: true,
      progress: 45,
    },
    {
      id: "intimacy-mastery",
      title: "Intimacy Mastery",
      description: "Deepen your physical and emotional connection",
      duration: "14 days",
      difficulty: "Advanced",
      timeCommitment: "25 min/day",
      participants: "12.1K couples",
      rating: 4.7,
      strengthAreas: ["Physical Intimacy", "Emotional Bonding", "Romance"],
      image: "/placeholder.jpg",
      isEnrolled: false,
      progress: 0,
    },
    {
      id: "conflict-mastery",
      title: "Conflict Resolution Mastery",
      description: "Turn disagreements into opportunities for growth",
      duration: "10 days",
      difficulty: "Intermediate",
      timeCommitment: "18 min/day",
      participants: "6.7K couples",
      rating: 4.6,
      strengthAreas: ["Healthy Arguing", "Compromise", "Understanding"],
      image: "/placeholder.jpg",
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
      title: "Communication Streak",
      description: "Have meaningful conversations for 30 days straight",
      type: "Monthly",
      timeLeft: "12 days left",
      participants: 15632,
      completion: 78,
      isJoined: true,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      {/* Hero Section - Today's Workout */}
      <div className="bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">💪 Today's Relationship Workout</h2>
            {userInProgram ? (
              <>
                <p className="text-muted-foreground mb-3">{todaysWorkout.title}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {todaysWorkout.duration}
                  </span>
                  <Badge>{todaysWorkout.focusArea}</Badge>
                </div>
              </>
            ) : (
              <>
                <p className="text-muted-foreground mb-3">5-Minute Morning Connection</p>
                <p className="text-sm">Start your day by strengthening your bond</p>
              </>
            )}
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-2">
              <Play className="h-10 w-10 text-primary" />
            </div>
            <Button size="lg">START WORKOUT</Button>
          </div>
        </div>
      </div>

      {/* Fitness Stats Dashboard */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="p-4 text-center bg-gradient-to-br from-emerald-500/10 to-emerald-500/5">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <Trophy className="h-6 w-6 text-emerald-500" />
          </div>
          <div className="text-2xl font-bold text-emerald-500">{stats.workoutsCompleted}</div>
          <div className="text-sm text-muted-foreground">Workouts Done</div>
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
            <Target className="h-6 w-6 text-blue-500" />
          </div>
          <div className="text-2xl font-bold text-blue-500">{stats.currentLevel}</div>
          <div className="text-sm text-muted-foreground">Fitness Level</div>
        </Card>

        <Card className="p-4 text-center bg-gradient-to-br from-purple-500/10 to-purple-500/5">
          <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <Users className="h-6 w-6 text-purple-500" />
          </div>
          <div className="text-2xl font-bold text-purple-500">{stats.programsCompleted}</div>
          <div className="text-sm text-muted-foreground">Programs Done</div>
        </Card>
      </div>

      {/* Quick Workouts Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">⚡ Quick Workouts</h2>
        <p className="text-muted-foreground mb-6">5-15 minute relationship exercises you can do anytime</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickWorkouts.map((workout) => (
            <Card key={workout.id} className="group hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <workout.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{workout.duration}</div>
                    <Badge variant="outline" className="mt-1">
                      {workout.difficulty}
                    </Badge>
                  </div>
                </div>

                <h3 className="font-semibold mb-2">{workout.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{workout.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Heart className="h-3 w-3" />
                    <span>{workout.focusArea}</span>
                  </div>
                  <Button size="sm" className="group-hover:bg-primary group-hover:text-white">
                    START
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Fitness Programs Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">🏋️ Fitness Programs</h2>
        <p className="text-muted-foreground mb-6">Structured training programs to build relationship strength</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <Card key={program.id} className="overflow-hidden hover:shadow-lg transition-all cursor-pointer">
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-emerald-500/20">
                <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge className="bg-black/70 text-white">{program.duration}</Badge>
                  <Badge variant="outline" className="bg-white/90">
                    {program.difficulty}
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
                  <h4 className="font-medium text-sm">You'll Build:</h4>
                  <div className="flex flex-wrap gap-1">
                    {program.strengthAreas.map((area, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  {program.isEnrolled ? "CONTINUE PROGRAM" : "START PROGRAM"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Community Challenges Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">🎯 Community Challenges</h2>
        <p className="text-muted-foreground mb-6">Join thousands of couples building stronger relationships</p>

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
                    <span>{challenge.participants.toLocaleString()} couples joined</span>
                    <span>{challenge.completion}% complete</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      style={{ width: `${challenge.completion}%` }}
                    />
                  </div>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  {challenge.isJoined ? "CONTINUE CHALLENGE" : "JOIN CHALLENGE"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
