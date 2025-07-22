"use client"

import { useState } from "react"
import Link from "next/link"
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
  ChevronRight,
} from "lucide-react"

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
    rating: 4.9,
    reviewCount: 2847,
    tags: ["Morning Routine", "Appreciation", "Daily"],
    difficulty: 1,
    bestTime: "Morning",
    requires: "Both partners",
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
    rating: 4.8,
    reviewCount: 3156,
    tags: ["Daily Routine", "Emotional Connection", "Check-in"],
    difficulty: 1,
    bestTime: "Evening",
    requires: "Both partners",
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
    rating: 4.7,
    reviewCount: 1892,
    tags: ["Vulnerability", "Deep Connection", "Trust Building"],
    difficulty: 2,
    bestTime: "Evening",
    requires: "Both partners",
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
    rating: 4.6,
    reviewCount: 1247,
    tags: ["Conflict Resolution", "Reset", "De-escalation"],
    difficulty: 2,
    bestTime: "As needed",
    requires: "Both partners",
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
    rating: 4.8,
    reviewCount: 2156,
    tags: ["Intimacy", "Physical Connection", "Closeness"],
    difficulty: 1,
    bestTime: "Evening",
    requires: "Both partners",
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
    rating: 4.5,
    reviewCount: 1834,
    tags: ["Stress Management", "Support", "Care"],
    difficulty: 1,
    bestTime: "Evening",
    requires: "Both partners",
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
    rating: 4.9,
    reviewCount: 987,
    tags: ["Goals", "Future Planning", "Dreams", "Alignment"],
    difficulty: 3,
    bestTime: "Weekend",
    requires: "Both partners",
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
    rating: 4.7,
    reviewCount: 2456,
    tags: ["Appreciation", "Recognition", "Gratitude"],
    difficulty: 1,
    bestTime: "Anytime",
    requires: "Both partners",
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
    rating: 4.6,
    reviewCount: 2134,
    tags: ["Playfulness", "Fun", "Laughter", "Joy"],
    difficulty: 1,
    bestTime: "Anytime",
    requires: "Both partners",
  },
]

export default function PracticesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [focusAreaFilter, setFocusAreaFilter] = useState("all")
  const [durationFilter, setDurationFilter] = useState("all")

  const filteredPractices = quickPractices.filter((practice) => {
    const matchesSearch =
      practice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      practice.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFocusArea =
      focusAreaFilter === "all" || practice.focusArea.toLowerCase().includes(focusAreaFilter.toLowerCase())
    const matchesDuration =
      durationFilter === "all" ||
      (durationFilter === "5" && practice.duration.includes("5")) ||
      (durationFilter === "10" && practice.duration.includes("10")) ||
      (durationFilter === "15" && Number.parseInt(practice.duration) >= 15)

    return matchesSearch && matchesFocusArea && matchesDuration
  })

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Link href="/grow" className="hover:text-primary">
          Grow
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span>Quick Practices</span>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 unbounded">Quick Growth Practices</h1>
          <p className="text-muted-foreground">5-15 minute activities to nurture your relationship daily</p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Input
            placeholder="Search practices..."
            className="w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select value={focusAreaFilter} onValueChange={setFocusAreaFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Focus Area" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Areas</SelectItem>
              <SelectItem value="communication">Communication</SelectItem>
              <SelectItem value="trust">Trust</SelectItem>
              <SelectItem value="intimacy">Intimacy</SelectItem>
              <SelectItem value="connection">Connection</SelectItem>
              <SelectItem value="support">Support</SelectItem>
              <SelectItem value="fun">Fun</SelectItem>
            </SelectContent>
          </Select>
          <Select value={durationFilter} onValueChange={setDurationFilter}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any Time</SelectItem>
              <SelectItem value="5">5 min</SelectItem>
              <SelectItem value="10">10 min</SelectItem>
              <SelectItem value="15">15+ min</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Practices Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPractices.map((practice) => (
          <Link key={practice.id} href={`/grow/practice/${practice.id}`}>
            <Card className="group hover:shadow-lg transition-all cursor-pointer h-full">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center">
                    <practice.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-muted-foreground">{practice.duration}</div>
                    <Badge variant="outline" className="mt-1">
                      {practice.level}
                    </Badge>
                  </div>
                </div>

                <h3 className="font-semibold text-lg mb-2">{practice.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{practice.description}</p>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Heart className="h-4 w-4" />
                    <span>{practice.focusArea}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    <span className="text-sm font-medium">{practice.rating}</span>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground mb-4">
                  {practice.completedCount.toLocaleString()} couples have grown with this
                </div>

                <Button className="w-full group-hover:bg-primary/90">Start Practice</Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {filteredPractices.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No practices found matching your criteria.</p>
          <Button
            variant="outline"
            className="mt-4 bg-transparent"
            onClick={() => {
              setSearchTerm("")
              setFocusAreaFilter("all")
              setDurationFilter("all")
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  )
}
