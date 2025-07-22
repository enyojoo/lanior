"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
  Search,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"

const allPractices = [
  {
    id: "gratitude-boost",
    title: "Morning Gratitude Practice",
    description: "Start your day by expressing specific appreciation for each other",
    duration: "5 min",
    difficulty: "Foundation",
    focusArea: "Connection",
    category: "communication",
    completionCount: 47382,
    rating: 4.8,
    isPartnerRequired: true,
    isPopular: true,
    icon: Heart,
  },
  {
    id: "communication-check",
    title: "Daily Check-in",
    description: "Stay emotionally connected with a structured conversation",
    duration: "10 min",
    difficulty: "Foundation",
    focusArea: "Communication",
    category: "communication",
    completionCount: 52194,
    rating: 4.9,
    isPartnerRequired: true,
    icon: MessageSquare,
  },
  {
    id: "trust-builder",
    title: "Vulnerability Practice",
    description: "Strengthen emotional safety through guided sharing",
    duration: "15 min",
    difficulty: "Intermediate",
    focusArea: "Trust",
    category: "trust",
    completionCount: 23847,
    rating: 4.7,
    isPartnerRequired: true,
    icon: Shield,
  },
  {
    id: "conflict-reset",
    title: "Conflict Reset Ritual",
    description: "Quickly de-escalate tension and reconnect after disagreements",
    duration: "8 min",
    difficulty: "Intermediate",
    focusArea: "Conflict Resolution",
    category: "conflict",
    completionCount: 18293,
    rating: 4.8,
    isPartnerRequired: true,
    icon: RefreshCw,
  },
  {
    id: "intimacy-booster",
    title: "Connection Moment",
    description: "Simple practice to increase physical and emotional closeness",
    duration: "12 min",
    difficulty: "Foundation",
    focusArea: "Intimacy",
    category: "intimacy",
    completionCount: 34782,
    rating: 4.6,
    isPartnerRequired: true,
    icon: Users,
  },
  {
    id: "stress-support",
    title: "Stress Support Check",
    description: "Help each other manage daily stress and challenges",
    duration: "7 min",
    difficulty: "Foundation",
    focusArea: "Support",
    category: "support",
    completionCount: 29384,
    rating: 4.7,
    isPartnerRequired: true,
    icon: Umbrella,
  },
  {
    id: "dream-sharing",
    title: "Future Dreams Conversation",
    description: "Align on goals and dreams for your relationship and life",
    duration: "20 min",
    difficulty: "Advanced",
    focusArea: "Future Planning",
    category: "communication",
    completionCount: 15647,
    rating: 4.9,
    isPartnerRequired: true,
    icon: Target,
  },
  {
    id: "appreciation-express",
    title: "Specific Appreciation",
    description: "Practice giving detailed, meaningful appreciation",
    duration: "6 min",
    difficulty: "Foundation",
    focusArea: "Appreciation",
    category: "communication",
    completionCount: 41923,
    rating: 4.8,
    isPartnerRequired: true,
    icon: Star,
  },
  {
    id: "playfulness-break",
    title: "Playful Connection",
    description: "Bring more fun and laughter into your relationship",
    duration: "10 min",
    difficulty: "Foundation",
    focusArea: "Fun",
    category: "fun",
    completionCount: 38472,
    rating: 4.7,
    isPartnerRequired: true,
    icon: Smile,
  },
]

export default function PracticesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("popular")
  const [durationFilter, setDurationFilter] = useState("all")
  const [difficultyFilter, setDifficultyFilter] = useState("all")

  const filteredPractices = allPractices.filter((practice) => {
    const matchesSearch =
      practice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      practice.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDuration =
      durationFilter === "all" ||
      (durationFilter === "short" && Number.parseInt(practice.duration) <= 10) ||
      (durationFilter === "medium" &&
        Number.parseInt(practice.duration) > 10 &&
        Number.parseInt(practice.duration) <= 15) ||
      (durationFilter === "long" && Number.parseInt(practice.duration) > 15)
    const matchesDifficulty = difficultyFilter === "all" || practice.difficulty.toLowerCase() === difficultyFilter

    return matchesSearch && matchesDuration && matchesDifficulty
  })

  const sortedPractices = [...filteredPractices].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.completionCount - a.completionCount
      case "rating":
        return b.rating - a.rating
      case "duration":
        return Number.parseInt(a.duration) - Number.parseInt(b.duration)
      case "newest":
        return 0 // Would use actual date in real app
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
        <h1 className="text-3xl font-bold unbounded mb-2">Quick Growth Practices</h1>
        <p className="text-muted-foreground">
          Build relationship strength with focused 5-20 minute activities designed by experts
        </p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search practices..."
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
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="duration">Duration</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
            <Select value={durationFilter} onValueChange={setDurationFilter}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Durations</SelectItem>
                <SelectItem value="short">&lt;= 10 min</SelectItem>
                <SelectItem value="medium">11-15 min</SelectItem>
                <SelectItem value="long">&gt; 15 min</SelectItem>
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

      {/* Practices Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedPractices.map((practice) => (
          <Card key={practice.id} className="group hover:shadow-lg transition-all cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <practice.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{practice.duration}</div>
                  <Badge variant="outline" className="mt-1">
                    {practice.difficulty}
                  </Badge>
                </div>
              </div>

              <h3 className="font-semibold mb-2">{practice.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{practice.description}</p>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Heart className="h-3 w-3" />
                  <span>{practice.focusArea}</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                  <span>{practice.rating}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-xs text-muted-foreground">
                  {practice.completionCount.toLocaleString()} completed
                </div>
                <Button size="sm" className="group-hover:bg-primary group-hover:text-white">
                  Start Practice
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {sortedPractices.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No practices found matching your criteria.</p>
          <Button
            variant="outline"
            className="mt-4 bg-transparent"
            onClick={() => {
              setSearchQuery("")
              setDurationFilter("all")
              setDifficultyFilter("all")
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  )
}
