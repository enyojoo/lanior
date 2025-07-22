"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Search, Play, ArrowRight, ArrowLeft, Heart } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function PracticesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDuration, setSelectedDuration] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [selectedFocus, setSelectedFocus] = useState("all")

  const practicesData = [
    {
      id: "gratitude-boost",
      title: "Morning Gratitude Practice",
      description: "Start your day by expressing specific appreciation for each other",
      duration: "5 min",
      difficulty: "Foundation",
      focusArea: "Connection",
      completionCount: 47382,
      rating: 4.8,
      isPartnerRequired: true,
      isPopular: true,
      steps: [
        "Sit facing each other",
        "Take turns sharing 3 specific things you appreciate",
        "Listen without interrupting",
        "End with a meaningful hug",
      ],
    },
    {
      id: "active-listening",
      title: "Deep Listening Exercise",
      description: "Practice giving your partner your complete, undivided attention",
      duration: "10 min",
      difficulty: "Foundation",
      focusArea: "Communication",
      completionCount: 35621,
      rating: 4.9,
      isPartnerRequired: true,
      isPopular: true,
      steps: [
        "Choose a comfortable, quiet space",
        "Set a timer for 5 minutes each",
        "One person shares while the other listens",
        "Switch roles and repeat",
      ],
    },
    {
      id: "trust-fall",
      title: "Trust Building Exercise",
      description: "Small vulnerability practice to deepen emotional safety",
      duration: "8 min",
      difficulty: "Intermediate",
      focusArea: "Trust",
      completionCount: 28934,
      rating: 4.7,
      isPartnerRequired: true,
      isPopular: false,
      steps: [
        "Share something you've been hesitant to say",
        "Listen with compassion",
        "Acknowledge their courage",
        "Express appreciation for their trust",
      ],
    },
    {
      id: "conflict-resolution",
      title: "Gentle Conflict Navigation",
      description: "Transform disagreements into deeper understanding",
      duration: "15 min",
      difficulty: "Advanced",
      focusArea: "Conflict Resolution",
      completionCount: 19847,
      rating: 4.6,
      isPartnerRequired: true,
      isPopular: false,
      steps: [
        "Take a pause to breathe",
        'Share your perspective using "I" statements',
        "Listen to understand, not to respond",
        "Find common ground together",
      ],
    },
    {
      id: "appreciation-shower",
      title: "Appreciation Shower",
      description: "Flood your partner with specific, heartfelt appreciation",
      duration: "7 min",
      difficulty: "Foundation",
      focusArea: "Connection",
      completionCount: 41256,
      rating: 4.8,
      isPartnerRequired: true,
      isPopular: true,
      steps: [
        "Set a timer for 3 minutes",
        "One partner shares continuous appreciation",
        "Switch roles for 3 minutes",
        "End with a long hug",
      ],
    },
    {
      id: "future-visioning",
      title: "Future Visioning Together",
      description: "Align on your shared dreams and aspirations",
      duration: "20 min",
      difficulty: "Intermediate",
      focusArea: "Vision",
      completionCount: 15632,
      rating: 4.9,
      isPartnerRequired: true,
      isPopular: false,
      steps: [
        "Each person shares their individual dreams",
        "Identify overlapping aspirations",
        "Create a shared vision statement",
        "Plan one small step toward it",
      ],
    },
  ]

  const filteredPractices = practicesData.filter((practice) => {
    const matchesSearch =
      practice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      practice.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDuration =
      selectedDuration === "all" ||
      (selectedDuration === "short" && Number.parseInt(practice.duration) <= 5) ||
      (selectedDuration === "medium" &&
        Number.parseInt(practice.duration) > 5 &&
        Number.parseInt(practice.duration) <= 15) ||
      (selectedDuration === "long" && Number.parseInt(practice.duration) > 15)
    const matchesDifficulty = selectedDifficulty === "all" || practice.difficulty === selectedDifficulty
    const matchesFocus = selectedFocus === "all" || practice.focusArea === selectedFocus

    return matchesSearch && matchesDuration && matchesDifficulty && matchesFocus
  })

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Back Button and Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link href="/grow">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Grow
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold unbounded">Quick Growth Practices</h1>
          <p className="text-muted-foreground">5-20 minute relationship boosters you can do anytime</p>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search practices..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex gap-3">
              <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Durations</SelectItem>
                  <SelectItem value="short">≤ 5 min</SelectItem>
                  <SelectItem value="medium">6-15 min</SelectItem>
                  <SelectItem value="long">15+ min</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Foundation">Foundation</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedFocus} onValueChange={setSelectedFocus}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Focus Area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Areas</SelectItem>
                  <SelectItem value="Communication">Communication</SelectItem>
                  <SelectItem value="Connection">Connection</SelectItem>
                  <SelectItem value="Trust">Trust</SelectItem>
                  <SelectItem value="Conflict Resolution">Conflict Resolution</SelectItem>
                  <SelectItem value="Vision">Vision</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-muted-foreground">
          Showing {filteredPractices.length} practice{filteredPractices.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Practices Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPractices.map((practice) => (
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

      {filteredPractices.length === 0 && (
        <div className="text-center py-12">
          <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No practices found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  )
}
