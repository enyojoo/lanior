"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Star } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CoachesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("all")
  const [selectedRating, setSelectedRating] = useState("all")

  const coaches = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Relationship Therapy",
      rating: 4.9,
      reviews: 234,
      sessions: 1250,
      experience: "15+ years",
      price: "$120/session",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Specialized in couples therapy with a focus on communication and conflict resolution.",
      badges: ["Top Rated", "Verified"],
    },
    {
      id: 2,
      name: "Mark Thompson",
      specialty: "Communication Coach",
      rating: 4.8,
      reviews: 189,
      sessions: 890,
      experience: "12+ years",
      price: "$95/session",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Expert in helping couples develop effective communication strategies.",
      badges: ["Certified", "Popular"],
    },
    {
      id: 3,
      name: "Lisa Chen",
      specialty: "Intimacy Counselor",
      rating: 4.9,
      reviews: 156,
      sessions: 670,
      experience: "10+ years",
      price: "$110/session",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Focuses on rebuilding intimacy and emotional connection in relationships.",
      badges: ["Specialist", "Top Rated"],
    },
    {
      id: 4,
      name: "Dr. Michael Rodriguez",
      specialty: "Family Therapy",
      rating: 4.7,
      reviews: 298,
      sessions: 1450,
      experience: "18+ years",
      price: "$135/session",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Comprehensive family therapy with expertise in blended families and parenting.",
      badges: ["Expert", "Verified"],
    },
  ]

  const specialties = [
    "Relationship Therapy",
    "Communication Coach",
    "Intimacy Counselor",
    "Family Therapy",
    "Marriage Counseling",
    "Dating Coach",
  ]

  const filteredCoaches = coaches.filter((coach) => {
    const matchesSearch =
      coach.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coach.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSpecialty = selectedSpecialty === "all" || coach.specialty === selectedSpecialty
    const matchesRating =
      selectedRating === "all" ||
      (selectedRating === "4.5+" && coach.rating >= 4.5) ||
      (selectedRating === "4.0+" && coach.rating >= 4.0)

    return matchesSearch && matchesSpecialty && matchesRating
  })

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Coaches" />

      <div className="flex-1 p-6">
        {/* Search and Filters */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search coaches by name or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex gap-4 flex-wrap">
            <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
              <SelectTrigger className="w-[200px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Specialties</SelectItem>
                {specialties.map((specialty) => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedRating} onValueChange={setSelectedRating}>
              <SelectTrigger className="w-[150px]">
                <Star className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ratings</SelectItem>
                <SelectItem value="4.5+">4.5+ Stars</SelectItem>
                <SelectItem value="4.0+">4.0+ Stars</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            Showing {filteredCoaches.length} of {coaches.length} coaches
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCoaches.map((coach) => (
            <Card key={coach.id} className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16 border-2 border-primary">
                    <AvatarImage src={coach.image || "/placeholder.svg"} alt={coach.name} />
                    <AvatarFallback>
                      {coach.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{coach.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{coach.specialty}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{coach.rating}</span>
                      <span className="text-sm text-muted-foreground">({coach.reviews})</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {coach.badges.map((badge) => (
                    <Badge key={badge} variant="secondary" className="text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4">{coach.bio}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Experience:</span>
                    <span className="font-medium">{coach.experience}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Sessions:</span>
                    <span className="font-medium">{coach.sessions}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="font-medium text-primary">{coach.price}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" size="sm">
                    Book Session
                  </Button>
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCoaches.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No coaches found matching your criteria.</p>
            <Button
              variant="outline"
              className="mt-4 bg-transparent"
              onClick={() => {
                setSearchQuery("")
                setSelectedSpecialty("all")
                setSelectedRating("all")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
