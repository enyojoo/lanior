"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, Users, Star, Search, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const categories = [
  { id: "all", name: "All Programs", count: 23 },
  { id: "foundation", name: "Foundation Building", count: 8 },
  { id: "communication", name: "Communication", count: 6 },
  { id: "intimacy", name: "Intimacy & Connection", count: 5 },
  { id: "advanced", name: "Advanced Growth", count: 4 },
]

const userEnrolled = [
  {
    id: "trust-deepening",
    title: "Trust Deepening Journey",
    progress: 45,
    currentDay: 10,
    totalDays: 21,
    nextSession: "Vulnerability Practice #3",
    timeLeft: "Today at 7:00 PM",
    image: "/placeholder.svg?height=200&width=400&text=Trust+Deepening",
  },
]

const allPrograms = [
  {
    id: "communication-foundations",
    title: "Communication Foundations",
    subtitle: "Build unshakeable communication habits",
    description: "Transform how you connect through 7 days of expert-guided practice",
    duration: "7 days",
    dailyCommitment: "15 min/day",
    difficulty: "Foundation",
    category: "foundation",
    expertName: "Dr. Sarah Chen",
    expertCredentials: "Licensed Marriage Therapist, 12+ years",
    expertImage: "/placeholder.svg?height=60&width=60&text=Dr.+Sarah",
    participants: 15200,
    rating: 4.8,
    reviewCount: 3247,
    completionRate: 89,
    image: "/placeholder.svg?height=200&width=400&text=Communication+Foundations",
    skills: ["Active Listening", "Conflict Navigation", "Emotional Expression"],
    isPopular: true,
    isEnrolled: false,
  },
  {
    id: "trust-deepening",
    title: "Trust Deepening Journey",
    subtitle: "Develop unshakeable emotional safety",
    description: "Build profound trust through 3 weeks of vulnerability and connection practices",
    duration: "21 days",
    dailyCommitment: "20 min/day",
    difficulty: "Intermediate",
    category: "foundation",
    expertName: "Dr. Marcus Johnson",
    expertCredentials: "Relationship Psychology PhD, 15+ years",
    expertImage: "/placeholder.svg?height=60&width=60&text=Dr.+Marcus",
    participants: 8900,
    rating: 4.9,
    reviewCount: 1893,
    completionRate: 82,
    image: "/placeholder.svg?height=200&width=400&text=Trust+Deepening",
    skills: ["Vulnerability", "Emotional Reliability", "Secure Attachment"],
    isPopular: false,
    isEnrolled: true,
  },
  {
    id: "intimacy-renaissance",
    title: "Intimacy Renaissance",
    subtitle: "Reignite passion and connection",
    description: "Rediscover physical and emotional intimacy through expert-guided practices",
    duration: "14 days",
    dailyCommitment: "25 min/day",
    difficulty: "Intermediate",
    category: "intimacy",
    expertName: "Dr. Elena Rodriguez",
    expertCredentials: "Certified Sex Therapist, 10+ years",
    expertImage: "/placeholder.svg?height=60&width=60&text=Dr.+Elena",
    participants: 12400,
    rating: 4.7,
    reviewCount: 2156,
    completionRate: 91,
    image: "/placeholder.svg?height=200&width=400&text=Intimacy+Renaissance",
    skills: ["Physical Intimacy", "Emotional Closeness", "Desire Cultivation"],
    isPopular: true,
    isEnrolled: false,
  },
  {
    id: "conflict-mastery",
    title: "Conflict to Connection",
    subtitle: "Transform disagreements into growth",
    description: "Master the art of turning conflicts into opportunities for deeper understanding",
    duration: "10 days",
    dailyCommitment: "30 min/day",
    difficulty: "Advanced",
    category: "advanced",
    expertName: "Dr. James Kim",
    expertCredentials: "Conflict Resolution Specialist, 18+ years",
    expertImage: "/placeholder.svg?height=60&width=60&text=Dr.+James",
    participants: 6700,
    rating: 4.9,
    reviewCount: 1247,
    completionRate: 76,
    image: "/placeholder.svg?height=200&width=400&text=Conflict+Mastery",
    skills: ["Conflict Resolution", "Emotional Regulation", "Compromise Skills"],
    isPopular: false,
    isEnrolled: false,
  },
  {
    id: "financial-harmony",
    title: "Financial Harmony",
    subtitle: "Navigate money as a team",
    description: "Build financial partnership and eliminate money-related stress",
    duration: "12 days",
    dailyCommitment: "20 min/day",
    difficulty: "Intermediate",
    category: "communication",
    expertName: "Sarah Martinez, CFP",
    expertCredentials: "Certified Financial Planner & Relationship Coach",
    expertImage: "/placeholder.svg?height=60&width=60&text=Sarah+M",
    participants: 4200,
    rating: 4.6,
    reviewCount: 847,
    completionRate: 88,
    image: "/placeholder.svg?height=200&width=400&text=Financial+Harmony",
    skills: ["Financial Communication", "Goal Alignment", "Money Mindset"],
    isPopular: false,
    isEnrolled: false,
  },
  {
    id: "long-distance-love",
    title: "Long Distance Love",
    subtitle: "Maintain connection across any distance",
    description: "Strengthen your bond and intimacy despite physical separation",
    duration: "14 days",
    dailyCommitment: "18 min/day",
    difficulty: "Intermediate",
    category: "communication",
    expertName: "Dr. Alex Thompson",
    expertCredentials: "Relationship Technology Specialist",
    expertImage: "/placeholder.svg?height=60&width=60&text=Dr.+Alex",
    participants: 2100,
    rating: 4.7,
    reviewCount: 398,
    completionRate: 85,
    image: "/placeholder.svg?height=200&width=400&text=Long+Distance",
    skills: ["Remote Connection", "Digital Intimacy", "Communication Frequency"],
    isPopular: false,
    isEnrolled: false,
  },
]

export default function ProgramsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("popular")
  const [durationFilter, setDurationFilter] = useState("all")
  const [difficultyFilter, setDifficultyFilter] = useState("all")

  const filteredPrograms = allPrograms.filter((program) => {
    const matchesSearch =
      program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || program.category === selectedCategory
    const matchesDuration =
      durationFilter === "all" ||
      (durationFilter === "short" && Number.parseInt(program.duration) <= 7) ||
      (durationFilter === "medium" &&
        Number.parseInt(program.duration) > 7 &&
        Number.parseInt(program.duration) <= 14) ||
      (durationFilter === "long" && Number.parseInt(program.duration) > 14)
    const matchesDifficulty = difficultyFilter === "all" || program.difficulty.toLowerCase() === difficultyFilter

    return matchesSearch && matchesCategory && matchesDuration && matchesDifficulty
  })

  const sortedPrograms = [...filteredPrograms].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.participants - a.participants
      case "rating":
        return b.rating - a.rating
      case "duration":
        return Number.parseInt(a.duration) - Number.parseInt(b.duration)
      case "newest":
        return 0
      default:
        return 0
    }
  })

  const recommendedPrograms = allPrograms
    .filter((p) => p.isPopular)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)

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
        <h1 className="text-3xl font-bold unbounded mb-2">Growth Programs</h1>
        <p className="text-muted-foreground">
          Expert-designed pathways to systematically strengthen your relationship over time
        </p>
      </div>

      {/* Currently Enrolled */}
      {userEnrolled.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Currently Enrolled</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userEnrolled.map((program) => (
              <Card key={program.id} className="border-primary/20 bg-primary/5">
                <div className="relative h-32 bg-gradient-to-br from-primary/20 to-emerald-500/20">
                  <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                  <div className="absolute top-3 right-3">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <div className="text-sm font-bold text-primary">{program.progress}%</div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">{program.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>
                        Day {program.currentDay} of {program.totalDays}
                      </span>
                      <span>{program.progress}% complete</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="h-2 rounded-full bg-primary" style={{ width: `${program.progress}%` }} />
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-medium">Next: {program.nextSession}</p>
                    <p className="text-sm text-muted-foreground">{program.timeLeft}</p>
                  </div>
                  <Button className="w-full">Continue Program</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Recommended for You */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recommended for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedPrograms.map((program) => (
            <Card key={program.id} className="group hover:shadow-lg transition-all cursor-pointer">
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-emerald-500/20">
                <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge className="bg-black/70 text-white">{program.duration}</Badge>
                  <Badge variant="outline" className="bg-white/90">
                    {program.difficulty}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge className="bg-orange-500">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Recommended
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-1">{program.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{program.subtitle}</p>

                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={program.expertImage || "/placeholder.svg"} alt={program.expertName} />
                    <AvatarFallback>
                      {program.expertName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-xs font-medium">{program.expertName}</p>
                    <p className="text-xs text-muted-foreground">{program.expertCredentials}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {program.dailyCommitment}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                    {program.rating}
                  </span>
                </div>

                <Button className="w-full">Start Growing</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search programs..."
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
                <SelectItem value="short">&lt;= 1 week</SelectItem>
                <SelectItem value="medium">1-2 weeks</SelectItem>
                <SelectItem value="long">&gt; 2 weeks</SelectItem>
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
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="text-xs">
              {category.name} ({category.count})
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={selectedCategory} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedPrograms.map((program) => (
              <Card key={program.id} className="overflow-hidden hover:shadow-lg transition-all cursor-pointer">
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-emerald-500/20">
                  <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge className="bg-black/70 text-white">{program.duration}</Badge>
                    <Badge variant="outline" className="bg-white/90">
                      {program.difficulty}
                    </Badge>
                  </div>
                  {program.isPopular && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-orange-500">Popular</Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-1">{program.title}</h3>
                  <p className="text-sm text-primary mb-2">{program.subtitle}</p>
                  <p className="text-muted-foreground mb-4">{program.description}</p>

                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={program.expertImage || "/placeholder.svg"} alt={program.expertName} />
                      <AvatarFallback>
                        {program.expertName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{program.expertName}</p>
                      <p className="text-xs text-muted-foreground">{program.expertCredentials}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {program.dailyCommitment}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {program.participants.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      {program.rating} ({program.reviewCount})
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <h4 className="font-medium text-sm">Skills You'll Develop:</h4>
                    <div className="flex flex-wrap gap-1">
                      {program.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-muted-foreground">{program.completionRate}% completion rate</div>
                    <Button variant="outline" size="sm">
                      Preview Program
                    </Button>
                  </div>

                  <Button className="w-full" size="lg">
                    {program.isEnrolled ? "Continue Growing" : "Start Growing"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {sortedPrograms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No programs found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4 bg-transparent"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                  setDurationFilter("all")
                  setDifficultyFilter("all")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
