"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Users, Trophy, Search, Calendar, Target, Award, Flame, Heart, MessageSquare, Star } from "lucide-react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const categories = [
  { id: "all", name: "All Challenges", active: 6 },
  { id: "weekly", name: "Weekly Challenges", active: 3 },
  { id: "monthly", name: "Monthly Challenges", active: 2 },
  { id: "special", name: "Special Events", active: 1 },
]

const userActive = [
  {
    id: "gratitude-week",
    title: "7-Day Gratitude Challenge",
    progress: 4,
    totalDays: 7,
    todayComplete: true,
    streak: 4,
    participants: 12847,
    timeLeft: "3 days remaining",
  },
  {
    id: "communication-streak",
    title: "30-Day Communication Streak",
    progress: 12,
    totalDays: 30,
    todayComplete: false,
    streak: 12,
    participants: 15692,
    timeLeft: "18 days remaining",
  },
]

const allChallenges = [
  {
    id: "communication-streak",
    title: "30-Day Communication Streak",
    description: "Have a meaningful 10-minute conversation every day",
    type: "Monthly",
    category: "monthly",
    duration: "30 days",
    dailyTime: "10 min",
    difficulty: "Foundation",
    participants: 15692,
    completionRate: 73,
    timeLeft: "12 days remaining",
    badge: "Communication Champion",
    icon: MessageSquare,
    isJoined: true,
    friendsParticipating: [
      { name: "Sarah & Mike", progress: 67 },
      { name: "Emma & James", progress: 23 },
    ],
    rewards: [
      "Communication Champion Badge",
      "500 growth points",
      "Featured in success stories",
      "Free bonus program access",
    ],
  },
  {
    id: "date-night-month",
    title: "Monthly Date Night Challenge",
    description: "Plan and execute 4 creative dates this month",
    type: "Monthly",
    category: "monthly",
    duration: "30 days",
    dailyTime: "varies",
    difficulty: "Foundation",
    participants: 8923,
    completionRate: 23,
    timeLeft: "18 days remaining",
    badge: "Date Night Champion",
    icon: Heart,
    isJoined: false,
    friendsParticipating: [{ name: "Alex & Jordan", progress: 45 }],
    rewards: ["Date Night Champion Badge", "300 growth points", "Date idea collection", "Couple spotlight feature"],
  },
  {
    id: "gratitude-week",
    title: "7-Day Gratitude Challenge",
    description: "Express appreciation daily for a week",
    type: "Weekly",
    category: "weekly",
    duration: "7 days",
    dailyTime: "5 min",
    difficulty: "Foundation",
    participants: 12847,
    completionRate: 67,
    timeLeft: "3 days remaining",
    badge: "Gratitude Master",
    icon: Star,
    isJoined: true,
    friendsParticipating: [
      { name: "Chris & Taylor", progress: 85 },
      { name: "Sam & Riley", progress: 42 },
    ],
    rewards: ["Gratitude Master Badge", "200 growth points", "Gratitude journal template", "Community recognition"],
  },
  {
    id: "kindness-acts",
    title: "Random Acts of Love",
    description: "Surprise your partner with 14 small acts of kindness",
    type: "Bi-weekly",
    category: "weekly",
    duration: "14 days",
    dailyTime: "varies",
    difficulty: "Foundation",
    participants: 6784,
    completionRate: 72,
    timeLeft: "8 days remaining",
    badge: "Kindness Keeper",
    icon: Heart,
    isJoined: false,
    friendsParticipating: [],
    rewards: [
      "Kindness Keeper Badge",
      "250 growth points",
      "Acts of love inspiration guide",
      "Partner appreciation certificate",
    ],
  },
  {
    id: "tech-free-evenings",
    title: "Tech-Free Connection Challenge",
    description: "Spend 1 hour each evening without devices, focusing on each other",
    type: "Weekly",
    category: "weekly",
    duration: "7 days",
    dailyTime: "60 min",
    difficulty: "Intermediate",
    participants: 9456,
    completionRate: 58,
    timeLeft: "5 days remaining",
    badge: "Digital Detox",
    icon: Target,
    isJoined: false,
    friendsParticipating: [{ name: "Morgan & Casey", progress: 71 }],
    rewards: ["Digital Detox Badge", "300 growth points", "Offline activity guide", "Mindful connection toolkit"],
  },
  {
    id: "adventure-planning",
    title: "Adventure Planning Sprint",
    description: "Plan your next big adventure together in just 5 days",
    type: "Sprint",
    category: "special",
    duration: "5 days",
    dailyTime: "20 min",
    difficulty: "Foundation",
    participants: 3247,
    completionRate: 84,
    timeLeft: "2 days remaining",
    badge: "Adventure Architect",
    icon: Target,
    isJoined: true,
    friendsParticipating: [{ name: "Quinn & Avery", progress: 90 }],
    rewards: [
      "Adventure Architect Badge",
      "400 growth points",
      "Travel planning template",
      "Adventure inspiration guide",
    ],
  },
]

const completedChallenges = [
  {
    id: "kindness-february",
    title: "February Kindness Challenge",
    completedDate: "2025-02-28",
    finalRank: 127,
    totalParticipants: 8934,
    badgeEarned: "Kindness Keeper",
  },
  {
    id: "communication-january",
    title: "January Communication Challenge",
    completedDate: "2025-01-31",
    finalRank: 45,
    totalParticipants: 12456,
    badgeEarned: "Communication Champion",
  },
]

export default function ChallengesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("popular")
  const [difficultyFilter, setDifficultyFilter] = useState("all")

  const filteredChallenges = allChallenges.filter((challenge) => {
    const matchesSearch =
      challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      challenge.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || challenge.category === selectedCategory
    const matchesDifficulty = difficultyFilter === "all" || challenge.difficulty.toLowerCase() === difficultyFilter

    return matchesSearch && matchesCategory && matchesDifficulty
  })

  const sortedChallenges = [...filteredChallenges].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.participants - a.participants
      case "completion":
        return b.completionRate - a.completionRate
      case "ending":
        return 0 // Would use actual end date in real app
      case "newest":
        return 0
      default:
        return 0
    }
  })

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/grow" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Grow
          </Link>
        </Button>
      </div>
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold unbounded mb-2">Community Growth Challenges</h1>
        <p className="text-muted-foreground">
          Join thousands of couples in fun, time-bound challenges that build relationship habits together
        </p>
      </div>

      {/* Active Challenges Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center bg-gradient-to-br from-purple-500/10 to-purple-500/5">
          <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <Trophy className="h-6 w-6 text-purple-500" />
          </div>
          <div className="text-2xl font-bold text-purple-500">{userActive.length}</div>
          <div className="text-sm text-muted-foreground">Active Challenges</div>
        </Card>

        <Card className="p-4 text-center bg-gradient-to-br from-orange-500/10 to-orange-500/5">
          <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <Flame className="h-6 w-6 text-orange-500" />
          </div>
          <div className="text-2xl font-bold text-orange-500">{Math.max(...userActive.map((c) => c.streak))}</div>
          <div className="text-sm text-muted-foreground">Best Streak</div>
        </Card>

        <Card className="p-4 text-center bg-gradient-to-br from-emerald-500/10 to-emerald-500/5">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <Award className="h-6 w-6 text-emerald-500" />
          </div>
          <div className="text-2xl font-bold text-emerald-500">{completedChallenges.length}</div>
          <div className="text-sm text-muted-foreground">Badges Earned</div>
        </Card>

        <Card className="p-4 text-center bg-gradient-to-br from-blue-500/10 to-blue-500/5">
          <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <Users className="h-6 w-6 text-blue-500" />
          </div>
          <div className="text-2xl font-bold text-blue-500">
            {allChallenges.reduce((sum, c) => sum + c.participants, 0).toLocaleString()}
          </div>
          <div className="text-sm text-muted-foreground">Community Members</div>
        </Card>
      </div>

      {/* My Active Challenges */}
      {userActive.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">My Active Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userActive.map((challenge) => (
              <Card key={challenge.id} className="border-primary/20 bg-primary/5">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-primary">Active</Badge>
                    <span className="text-sm text-muted-foreground">{challenge.timeLeft}</span>
                  </div>

                  <h3 className="font-semibold mb-2">{challenge.title}</h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>
                        Day {challenge.progress} of {challenge.totalDays}
                      </span>
                      <span className="flex items-center gap-1">
                        <Flame className="h-3 w-3 text-orange-500" />
                        {challenge.streak} day streak
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-primary"
                        style={{ width: `${(challenge.progress / challenge.totalDays) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-muted-foreground">
                      {challenge.participants.toLocaleString()} couples participating
                    </div>
                    <div className="flex items-center gap-1">
                      {challenge.todayComplete ? (
                        <Badge className="bg-emerald-500 text-xs">Today ✓</Badge>
                      ) : (
                        <Badge variant="outline" className="text-xs">
                          Pending
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button className="w-full">
                    {challenge.todayComplete ? "View Progress" : "Complete Today's Challenge"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search challenges..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="completion">Completion Rate</SelectItem>
                <SelectItem value="ending">Ending Soon</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
            <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="foundation">Foundation</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="text-xs">
              {category.name} ({category.active})
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={selectedCategory} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedChallenges.map((challenge) => (
              <Card
                key={challenge.id}
                className="relative overflow-hidden hover:shadow-lg transition-all cursor-pointer"
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-purple-500">{challenge.type}</Badge>
                    <span className="text-sm text-muted-foreground">{challenge.timeLeft}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <challenge.icon className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="font-semibold">{challenge.title}</h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">{challenge.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>{challenge.participants.toLocaleString()} couples growing</span>
                      <span>{challenge.completionRate}% completion</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                        style={{ width: `${challenge.completionRate}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {challenge.dailyTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {challenge.duration}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {challenge.difficulty}
                    </Badge>
                  </div>

                  {challenge.friendsParticipating.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground mb-2">Friends participating:</p>
                      <div className="space-y-1">
                        {challenge.friendsParticipating.slice(0, 2).map((friend, index) => (
                          <div key={index} className="flex items-center justify-between text-xs">
                            <span>{friend.name}</span>
                            <span className="text-muted-foreground">{friend.progress}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mb-4 p-2 bg-muted/50 rounded-lg">
                    <div className="text-xs font-medium mb-1">Rewards:</div>
                    <div className="text-xs text-muted-foreground">
                      {challenge.badge} + {challenge.rewards.length - 1} more rewards
                    </div>
                  </div>

                  <Button variant={challenge.isJoined ? "default" : "outline"} className="w-full">
                    {challenge.isJoined ? "Continue Challenge" : "Join Challenge"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {sortedChallenges.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No challenges found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4 bg-transparent"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                  setDifficultyFilter("all")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Challenge History */}
      {completedChallenges.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Challenge History</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {completedChallenges.map((challenge) => (
              <Card key={challenge.id} className="bg-muted/30">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="border-emerald-500 text-emerald-500">
                      Completed
                    </Badge>
                    <span className="text-sm text-muted-foreground">{challenge.completedDate}</span>
                  </div>

                  <h3 className="font-semibold mb-2">{challenge.title}</h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>Final Rank</span>
                      <span className="font-medium">#{challenge.finalRank}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Total Participants</span>
                      <span>{challenge.totalParticipants.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2 bg-emerald-500/10 rounded-lg">
                    <Award className="h-4 w-4 text-emerald-500" />
                    <span className="text-sm font-medium text-emerald-500">{challenge.badgeEarned}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
