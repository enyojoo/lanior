import type { Metadata } from "next"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin, Calendar, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Coaches - Lanior",
  description:
    "Lanior is the relationship wellness ecosystem that helps modern couples build thriving, lasting partnerships through expert guidance, community support, and personalized growth programs.",
}

export default function CoachesPage() {
  const coaches = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Licensed Marriage & Family Therapist",
      specialties: ["Communication", "Conflict Resolution", "Intimacy"],
      rating: 4.9,
      reviews: 127,
      experience: "12 years",
      location: "San Francisco, CA",
      price: 150,
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Specializing in helping couples build stronger communication patterns and resolve conflicts constructively.",
      availability: "Available this week",
      languages: ["English", "Spanish"],
      isVerified: true,
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      title: "Clinical Psychologist",
      specialties: ["Anxiety", "Depression", "Couples Therapy"],
      rating: 4.8,
      reviews: 89,
      experience: "8 years",
      location: "New York, NY",
      price: 175,
      avatar:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Helping individuals and couples navigate mental health challenges while strengthening their relationships.",
      availability: "Next available: Feb 20",
      languages: ["English", "Mandarin"],
      isVerified: true,
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      title: "Relationship Coach",
      specialties: ["Dating", "Self-Love", "Boundaries"],
      rating: 4.7,
      reviews: 156,
      experience: "6 years",
      location: "Austin, TX",
      price: 120,
      avatar:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Empowering individuals to build healthy relationships starting with themselves.",
      availability: "Available today",
      languages: ["English"],
      isVerified: true,
    },
    {
      id: 4,
      name: "James Wilson",
      title: "Life & Relationship Coach",
      specialties: ["Goal Setting", "Personal Growth", "Communication"],
      rating: 4.6,
      reviews: 203,
      experience: "10 years",
      location: "Los Angeles, CA",
      price: 135,
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Supporting individuals and couples in achieving their relationship and personal development goals.",
      availability: "Available this week",
      languages: ["English"],
      isVerified: false,
    },
    {
      id: 5,
      name: "Dr. Lisa Martinez",
      title: "Family Therapist",
      specialties: ["Family Dynamics", "Parenting", "Blended Families"],
      rating: 4.9,
      reviews: 94,
      experience: "15 years",
      location: "Chicago, IL",
      price: 160,
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Specializing in family systems and helping parents maintain strong partnerships while raising children.",
      availability: "Next available: Feb 18",
      languages: ["English", "Spanish"],
      isVerified: true,
    },
    {
      id: 6,
      name: "Sarah Thompson",
      title: "Certified Relationship Coach",
      specialties: ["Trust Building", "Infidelity Recovery", "Emotional Intelligence"],
      rating: 4.8,
      reviews: 67,
      experience: "5 years",
      location: "Seattle, WA",
      price: 125,
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Helping couples rebuild trust and develop emotional intelligence for lasting relationships.",
      availability: "Available tomorrow",
      languages: ["English"],
      isVerified: true,
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
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg">{coach.name}</h3>
                    {coach.isVerified && (
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{coach.title}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium ml-1">{coach.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({coach.reviews} reviews)</span>
                  </div>
                </div>
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

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{coach.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{coach.availability}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div>
                  <span className="text-lg font-bold">${coach.price}</span>
                  <span className="text-sm text-muted-foreground">/session</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Message
                  </Button>
                  <Button size="sm">Book Session</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
