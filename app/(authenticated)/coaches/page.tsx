import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Clock, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Coaches - Lanior",
  description:
    "Lanior is the relationship wellness ecosystem that helps modern couples build thriving, lasting partnerships through expert guidance, community support, and personalized growth programs.",
}

export default function CoachesPage() {
  const coaches = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      title: "Relationship Therapist",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.9,
      reviews: 127,
      location: "San Francisco, CA",
      experience: "8 years",
      specialties: ["Communication", "Conflict Resolution", "Trust Building"],
      price: "$120/session",
      availability: "Available",
      bio: "Specialized in helping couples build stronger communication patterns and resolve deep-seated conflicts.",
      sessions: 450,
    },
    {
      id: "2",
      name: "Michael Chen",
      title: "Mindfulness Coach",
      avatar:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.8,
      reviews: 89,
      location: "New York, NY",
      experience: "6 years",
      specialties: ["Mindfulness", "Emotional Intelligence", "Stress Management"],
      price: "$95/session",
      availability: "Busy",
      bio: "Integrates mindfulness practices with relationship coaching to help couples find balance and connection.",
      sessions: 320,
    },
    {
      id: "3",
      name: "Dr. Emily Rodriguez",
      title: "Clinical Psychologist",
      avatar:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.9,
      reviews: 203,
      location: "Los Angeles, CA",
      experience: "12 years",
      specialties: ["Trauma Recovery", "Attachment Issues", "Intimacy"],
      price: "$150/session",
      availability: "Available",
      bio: "Expert in trauma-informed therapy and helping couples heal from past wounds to build secure relationships.",
      sessions: 680,
    },
    {
      id: "4",
      name: "Lisa Thompson",
      title: "Life & Relationship Coach",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.7,
      reviews: 156,
      location: "Austin, TX",
      experience: "5 years",
      specialties: ["Goal Setting", "Life Transitions", "Romance"],
      price: "$85/session",
      availability: "Available",
      bio: "Passionate about helping couples navigate life changes while maintaining strong romantic connections.",
      sessions: 280,
    },
    {
      id: "5",
      name: "Dr. James Wilson",
      title: "Marriage Counselor",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.8,
      reviews: 174,
      location: "Chicago, IL",
      experience: "10 years",
      specialties: ["Pre-marital Counseling", "Family Planning", "Financial Stress"],
      price: "$110/session",
      availability: "Available",
      bio: "Specializes in preparing couples for marriage and helping them navigate major life decisions together.",
      sessions: 520,
    },
    {
      id: "6",
      name: "Anna Martinez",
      title: "Relationship Coach",
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.6,
      reviews: 92,
      location: "Miami, FL",
      experience: "4 years",
      specialties: ["Dating", "Self-Love", "Boundaries"],
      price: "$75/session",
      availability: "Available",
      bio: "Helps individuals and couples develop healthy relationship patterns and strong personal boundaries.",
      sessions: 190,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold unbounded">Coaches</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coaches.map((coach) => (
          <Card key={coach.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={coach.avatar || "/placeholder.svg"} alt={coach.name} />
                  <AvatarFallback>
                    {coach.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg">{coach.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{coach.title}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{coach.rating}</span>
                    <span className="text-sm text-muted-foreground">({coach.reviews})</span>
                  </div>
                </div>
                <Badge variant={coach.availability === "Available" ? "default" : "secondary"}>
                  {coach.availability}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{coach.bio}</p>

              <div className="flex flex-wrap gap-1">
                {coach.specialties.map((specialty) => (
                  <Badge key={specialty} variant="outline" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{coach.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{coach.experience}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{coach.sessions} sessions</span>
                </div>
                <div className="font-medium text-primary">{coach.price}</div>
              </div>

              <Button className="w-full" disabled={coach.availability !== "Available"}>
                {coach.availability === "Available" ? "Book Session" : "Unavailable"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
