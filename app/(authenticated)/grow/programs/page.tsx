"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, ArrowRight, ArrowLeft, Star, Target, BookOpen } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ProgramsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDuration, setSelectedDuration] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const programsData = [
    {
      id: "communication-foundations",
      title: "Communication Foundations",
      subtitle: "Build unshakeable communication habits",
      description: "Transform how you connect through 7 days of expert-guided practice",
      duration: "7 days",
      dailyCommitment: "15 min/day",
      difficulty: "Foundation",
      category: "Communication",
      expertName: "Dr. Sarah Chen",
      expertCredentials: "Licensed Marriage Therapist, 12+ years",
      expertImage: "/placeholder.svg?height=40&width=40",
      participants: 15200,
      rating: 4.8,
      reviewCount: 3247,
      completionRate: 89,
      image: "/placeholder.svg?height=200&width=350",
      skills: ["Active Listening", "Conflict Navigation", "Emotional Expression"],
      outcomes: [
        "Reduce miscommunication by 70%",
        "Feel more heard and understood",
        "Navigate conflicts with confidence",
        "Build stronger emotional connection",
      ],
      isPopular: true,
    },
    {
      id: "trust-deepening",
      title: "Trust Deepening Journey",
      subtitle: "Create unbreakable emotional safety",
      description: "Build deeper trust through vulnerability and emotional safety practices",
      duration: "21 days",
      dailyCommitment: "20 min/day",
      difficulty: "Intermediate",
      category: "Trust & Intimacy",
      expertName: "Mark Thompson",
      expertCredentials: "Relationship Coach, 8+ years",
      expertImage: "/placeholder.svg?height=40&width=40",
      participants: 8934,
      rating: 4.9,
      reviewCount: 1876,
      completionRate: 82,
      image: "/placeholder.svg?height=200&width=350",
      skills: ["Vulnerability", "Emotional Safety", "Deep Connection"],
      outcomes: [
        "Create unshakeable trust",
        "Share vulnerabilities safely",
        "Deepen emotional intimacy",
        "Build lasting security",
      ],
      isPopular: false,
    },
    {
      id: "intimacy-renaissance",
      title: "Intimacy Renaissance",
      subtitle: "Reignite passion and closeness",
      description: "Rediscover physical and emotional intimacy in your relationship",
      duration: "14 days",
      dailyCommitment: "25 min/day",
      difficulty: "Intermediate",
      category: "Intimacy",
      expertName: "Dr. Lisa Rodriguez",
      expertCredentials: "Sex & Intimacy Therapist, 10+ years",
      expertImage: "/placeholder.svg?height=40&width=40",
      participants: 12456,
      rating: 4.7,
      reviewCount: 2341,
      completionRate: 78,
      image: "/placeholder.svg?height=200&width=350",
      skills: ["Physical Intimacy", "Emotional Intimacy", "Playfulness"],
      outcomes: [
        "Reignite physical connection",
        "Deepen emotional intimacy",
        "Increase playfulness",
        "Build lasting passion",
      ],
      isPopular: true,
    },
    {
      id: "conflict-mastery",
      title: "Conflict to Connection",
      subtitle: "Transform fights into deeper understanding",
      description: "Learn to navigate disagreements and turn them into growth opportunities",
      duration: "10 days",
      dailyCommitment: "18 min/day",
      difficulty: "Intermediate",
      category: "Conflict Resolution",
      expertName: "Dr. Jennifer Kim",
      expertCredentials: "Conflict Resolution Specialist, 15+ years",
      expertImage: "/placeholder.svg?height=40&width=40",
      participants: 9876,
      rating: 4.6,
      reviewCount: 1654,
      completionRate: 85,
      image: "/placeholder.svg?height=200&width=350",
      skills: ["De-escalation", "Empathy", "Resolution"],
      outcomes: [
        "Turn conflicts into connection",
        "Reduce fight frequency by 60%",
        "Understand each other better",
        "Build conflict confidence",
      ],
      isPopular: false,
    },
    {
      id: "relationship-mastery",
      title: "Advanced Relationship Mastery",
      subtitle: "Master the art of thriving together",
      description: "Advanced practices for couples ready to reach new heights together",
      duration: "30 days",
      dailyCommitment: "30 min/day",
      difficulty: "Advanced",
      category: "Advanced Growth",
      expertName: "Dr. Michael Chang",
      expertCredentials: "Relationship Psychology PhD, 20+ years",
      expertImage: "/placeholder.svg?height=40&width=40",
      participants: 5678,
      rating: 4.8,
      reviewCount: 987,
      completionRate: 73,
      image: "/placeholder.svg?height=200&width=350",
      skills: ["Leadership", "Vision Setting", "Legacy Building"],
      outcomes: [
        "Create shared life vision",
        "Master advanced communication",
        "Build lasting legacy together",
        "Achieve relationship mastery",
      ],
      isPopular: false,
    },
    {
      id: "daily-connection",
      title: "Daily Connection Habits",
      subtitle: "Build micro-moments of connection",
      description: "Simple daily practices that compound into extraordinary connection",
      duration: "14 days",
      dailyCommitment: "10 min/day",
      difficulty: "Foundation",
      category: "Foundation Building",
      expertName: "Sarah Williams",
      expertCredentials: "Relationship Coach, 6+ years",
      expertImage: "/placeholder.svg?height=40&width=40",
      participants: 18234,
      rating: 4.7,
      reviewCount: 4123,
      completionRate: 91,
      image: "/placeholder.svg?height=200&width=350",
      skills: ["Daily Rituals", "Micro-Connections", "Consistency"],
      outcomes: [
        "Build daily connection habits",
        "Feel closer every day",
        "Create lasting rituals",
        "Strengthen your bond",
      ],
      isPopular: true,
    },
  ]

  const filteredPrograms = programsData.filter((program) => {
    const matchesSearch =
      program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.expertName.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDuration =
      selectedDuration === "all" ||
      (selectedDuration === "week" && Number.parseInt(program.duration) <= 7) ||
      (selectedDuration === "2-3weeks" &&
        Number.parseInt(program.duration) > 7 &&
        Number.parseInt(program.duration) <= 21) ||
      (selectedDuration === "month" && Number.parseInt(program.duration) > 21)
    const matchesDifficulty = selectedDifficulty === "all" || program.difficulty === selectedDifficulty
    const matchesCategory = selectedCategory === "all" || program.category === selectedCategory

    return matchesSearch && matchesDuration && matchesDifficulty && matchesCategory
  })

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Back Button and Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/grow">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to Grow</span>
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold unbounded">Growth Programs</h1>
          <p className="text-muted-foreground">Structured journeys with expert guidance for lasting transformation</p>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search programs or experts..."
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
                  <SelectItem value="week">1 week</SelectItem>
                  <SelectItem value="2-3weeks">2-3 weeks</SelectItem>
                  <SelectItem value="month">1 month+</SelectItem>
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

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Foundation Building">Foundation Building</SelectItem>
                  <SelectItem value="Communication">Communication</SelectItem>
                  <SelectItem value="Trust & Intimacy">Trust & Intimacy</SelectItem>
                  <SelectItem value="Intimacy">Intimacy</SelectItem>
                  <SelectItem value="Conflict Resolution">Conflict Resolution</SelectItem>
                  <SelectItem value="Advanced Growth">Advanced Growth</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-muted-foreground">
          Showing {filteredPrograms.length} program{filteredPrograms.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Programs Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredPrograms.map((program) => (
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
                  <AvatarImage src={program.expertImage || "/placeholder.svg"} />
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
                <span className="text-xs text-muted-foreground">{program.participants.toLocaleString()} completed</span>
              </div>

              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                Start Growing <ArrowRight className="h-3 w-3 ml-1" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPrograms.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No programs found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  )
}
