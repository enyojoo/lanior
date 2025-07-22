"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRight, Clock, Star } from "lucide-react"
import Image from "next/image"

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
    reviewCount: 3247,
    skillsBuilt: ["Active Listening", "Conflict Navigation", "Emotional Expression"],
    expertName: "Dr. Sarah Chen",
    expertCredentials: "Licensed Marriage Therapist",
    image: "/placeholder.svg?height=200&width=400&text=Communication+Foundations",
    isEnrolled: false,
    progress: 0,
    completionRate: 89,
    category: "Communication",
    isFeatured: true,
    price: "Free",
    sessionsCount: 7,
    totalDuration: "1.75 hours",
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
    reviewCount: 1893,
    skillsBuilt: ["Vulnerability", "Emotional Reliability", "Secure Attachment"],
    expertName: "Dr. Marcus Johnson",
    expertCredentials: "Relationship Psychology PhD",
    image: "/placeholder.svg?height=200&width=400&text=Trust+Deepening",
    isEnrolled: true,
    progress: 45,
    completionRate: 82,
    category: "Trust",
    isFeatured: false,
    price: "Premium",
    sessionsCount: 21,
    totalDuration: "7 hours",
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
    reviewCount: 2156,
    skillsBuilt: ["Physical Intimacy", "Emotional Closeness", "Desire Cultivation"],
    expertName: "Dr. Elena Rodriguez",
    expertCredentials: "Certified Sex Therapist",
    image: "/placeholder.svg?height=200&width=400&text=Intimacy+Renaissance",
    isEnrolled: false,
    progress: 0,
    completionRate: 91,
    category: "Intimacy",
    isFeatured: true,
    price: "Premium",
    sessionsCount: 14,
    totalDuration: "5.8 hours",
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
    reviewCount: 1247,
    skillsBuilt: ["Conflict Resolution", "Emotional Regulation", "Compromise Skills"],
    expertName: "Dr. James Kim",
    expertCredentials: "Conflict Resolution Specialist",
    image: "/placeholder.svg?height=200&width=400&text=Conflict+Mastery",
    isEnrolled: false,
    progress: 0,
    completionRate: 76,
    category: "Conflict Resolution",
    isFeatured: false,
    price: "Premium",
    sessionsCount: 10,
    totalDuration: "5 hours",
  },
  {
    id: "financial-harmony",
    title: "Financial Harmony",
    description: "Navigate money conversations and build financial partnership",
    duration: "12 days",
    level: "Intermediate",
    timeCommitment: "20 min/day",
    participants: "4.2K couples",
    rating: 4.6,
    reviewCount: 847,
    skillsBuilt: ["Financial Communication", "Goal Alignment", "Money Mindset"],
    expertName: "Sarah Martinez, CFP",
    expertCredentials: "Certified Financial Planner & Relationship Coach",
    image: "/placeholder.svg?height=200&width=400&text=Financial+Harmony",
    isEnrolled: false,
    progress: 0,
    completionRate: 88,
    category: "Life Management",
    isFeatured: false,
    price: "Premium",
    sessionsCount: 12,
    totalDuration: "4 hours",
  },
  {
    id: "family-transition",
    title: "Family Transition Guide",
    description: "Navigate major life changes while staying connected as a couple",
    duration: "28 days",
    level: "Advanced",
    timeCommitment: "15 min/day",
    participants: "3.8K couples",
    rating: 4.8,
    reviewCount: 692,
    skillsBuilt: ["Life Transitions", "Stress Management", "Partnership Maintenance"],
    expertName: "Dr. Michelle Wang",
    expertCredentials: "Family Systems Therapist",
    image: "/placeholder.svg?height=200&width=400&text=Family+Transition",
    isEnrolled: false,
    progress: 0,
    completionRate: 73,
    category: "Life Transitions",
    isFeatured: false,
    price: "Premium",
    sessionsCount: 28,
    totalDuration: "7 hours",
  },
]

export default function ProgramsPage() {
  const [focusAreaFilter, setFocusAreaFilter] = useState("all")
  const [levelFilter, setLevelFilter] = useState("all")
  const [durationFilter, setDurationFilter] = useState("all")

  const filteredPrograms = programs.filter((program) => {
    const matchesFocusArea =
      focusAreaFilter === "all" || program.category.toLowerCase().includes(focusAreaFilter.toLowerCase())
    const matchesLevel = levelFilter === "all" || program.level.toLowerCase() === levelFilter.toLowerCase()
    const matchesDuration =
      durationFilter === "all" ||
      (durationFilter === "short" && Number.parseInt(program.duration) <= 7) ||
      (durationFilter === "medium" &&
        Number.parseInt(program.duration) >= 8 &&
        Number.parseInt(program.duration) <= 21) ||
      (durationFilter === "long" && Number.parseInt(program.duration) > 21)

    return matchesFocusArea && matchesLevel && matchesDuration
  })

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <Link href="/grow" className="hover:text-primary">
          Grow
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span>Growth Programs</span>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 unbounded">Growth Programs</h1>
          <p className="text-muted-foreground">Expert-designed pathways to build lasting relationship strength</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8 p-4 bg-muted/30 rounded-lg">
        <Select value={focusAreaFilter} onValueChange={setFocusAreaFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Focus Area" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Areas</SelectItem>
            <SelectItem value="communication">Communication</SelectItem>
            <SelectItem value="trust">Trust & Intimacy</SelectItem>
            <SelectItem value="conflict">Conflict Resolution</SelectItem>
            <SelectItem value="life">Life Management</SelectItem>
          </SelectContent>
        </Select>

        <Select value={levelFilter} onValueChange={setLevelFilter}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="foundation">Foundation</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>

        <Select value={durationFilter} onValueChange={setDurationFilter}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any Length</SelectItem>
            <SelectItem value="short">1 week</SelectItem>
            <SelectItem value="medium">2-3 weeks</SelectItem>
            <SelectItem value="long">1+ month</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPrograms.map((program) => (
          <Link key={program.id} href={`/grow/program/${program.id}`}>
            <Card className="group hover:shadow-lg transition-all cursor-pointer h-full">
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-emerald-500/20 overflow-hidden">
                <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge className="bg-black/70 text-white">{program.duration}</Badge>
                  <Badge variant="outline" className="bg-white/90">
                    {program.level}
                  </Badge>
                  {program.price === "Free" && <Badge className="bg-green-500 text-white">Free</Badge>}
                </div>
                {program.isEnrolled && (
                  <div className="absolute top-3 right-3">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <div className="text-sm font-bold text-primary">{program.progress}%</div>
                    </div>
                  </div>
                )}
                {program.isFeatured && (
                  <div className="absolute bottom-3 left-3">
                    <Badge className="bg-yellow-500 text-black">Popular</Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{program.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{program.description}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {program.timeCommitment}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    {program.rating}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="text-sm font-medium">Expert: {program.expertName}</div>
                  <div className="text-xs text-muted-foreground">{program.expertCredentials}</div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{program.participants} couples enrolled</span>
                  <Badge variant={program.isEnrolled ? "default" : "outline"}>
                    {program.isEnrolled ? `${program.progress}% Complete` : "Start Program"}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {filteredPrograms.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No programs found matching your criteria.</p>
          <Button
            variant="outline"
            className="mt-4 bg-transparent"
            onClick={() => {
              setFocusAreaFilter("all")
              setLevelFilter("all")
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
