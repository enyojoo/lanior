import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, MapPin, Users, Share2, Bookmark, Check, Wifi } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function SessionDetailPage({ params }: { params: { id: string } }) {
  // Sample session data - in a real app, this would be fetched based on the ID
  const session = {
    id: params.id,
    title: "Building Trust Workshop",
    description:
      "A comprehensive 2-hour interactive workshop focused on building and maintaining trust in relationships. This session will provide you with practical techniques and exercises that you can apply immediately to strengthen the foundation of your relationship.",
    longDescription: `
      Trust is the cornerstone of any healthy relationship. In this workshop, you'll learn:
      
      • How to identify trust issues before they become major problems
      • Practical communication techniques to rebuild broken trust
      • Daily habits that strengthen trust over time
      • How to create a safe space for vulnerability in your relationship
      • Tools for maintaining trust during difficult times
      
      This interactive session includes group discussions, partner exercises, and personalized feedback from our expert facilitator.
    `,
    date: "2025-04-15T18:00:00",
    endDate: "2025-04-15T20:00:00",
    location: {
      type: "offline" as const,
      address: "123 Relationship Center, New York, NY",
      city: "New York",
      country: "USA",
    },
    host: {
      name: "Diana Kirsch",
      title: "Relationship Expert",
      bio: "Diana has over 15 years of experience in relationship counseling and has helped thousands of couples build stronger, more trusting relationships.",
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: true,
    },
    image:
      "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    capacity: 30,
    attendees: 18,
    type: "workshop",
    price: 45,
    tags: ["Trust", "Communication", "Relationship Building"],
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Hero Section */}
      <div className="relative">
        <img
          src={session.image || "/placeholder.svg"}
          alt={session.title}
          className="w-full h-64 md:h-80 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/40 rounded-lg" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            {session.location.type === "online" ? (
              <Badge className="bg-blue-500">
                <Wifi className="h-3 w-3 mr-1" />
                Online
              </Badge>
            ) : (
              <Badge className="bg-green-500">
                <MapPin className="h-3 w-3 mr-1" />
                In-Person
              </Badge>
            )}
            <Badge variant="secondary">{session.type}</Badge>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold unbounded">{session.title}</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle>About This Session</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{session.description}</p>
              <div className="whitespace-pre-line text-sm">{session.longDescription}</div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {session.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Host Information */}
          <Card>
            <CardHeader>
              <CardTitle>Your Host</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Avatar className="h-16 w-16 border-2 border-primary">
                  <AvatarImage src={session.host.avatar || "/placeholder.svg"} alt={session.host.name} />
                  <AvatarFallback>{session.host.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg">{session.host.name}</h3>
                    {session.host.verified && (
                      <Badge
                        variant="outline"
                        className="h-5 w-5 p-0 flex items-center justify-center rounded-full bg-primary"
                      >
                        <Check className="h-3 w-3 text-white" />
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{session.host.title}</p>
                  <p className="text-sm">{session.host.bio}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Session Details */}
          <Card>
            <CardHeader>
              <CardTitle>Session Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">{formatDate(session.date)}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatTime(session.date)} - {formatTime(session.endDate)}
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex items-center gap-3">
                {session.location.type === "online" ? (
                  <Wifi className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                )}
                <div>
                  <p className="font-medium">{session.location.type === "online" ? "Online Session" : "In-Person"}</p>
                  <p className="text-sm text-muted-foreground">
                    {session.location.type === "online"
                      ? "Link will be provided after registration"
                      : session.location.address}
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">
                    {session.attendees} / {session.capacity} attending
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {session.capacity - session.attendees} spots remaining
                  </p>
                </div>
              </div>

              <Separator />

              <div className="text-center">
                <p className="text-2xl font-bold text-primary">{session.price === 0 ? "Free" : `$${session.price}`}</p>
                {session.price > 0 && <p className="text-sm text-muted-foreground">per person</p>}
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
              {session.price === 0 ? "Register for Free" : "Register Now"}
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 bg-transparent">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
