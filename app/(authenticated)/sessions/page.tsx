"use client"

import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, Users, Calendar } from "lucide-react"

export default function SessionsPage() {
  const sessions = [
    {
      id: 1,
      title: "Virtual Date Night Ideas",
      description: "Discover creative ways to connect with your partner from home",
      date: "Tonight 8:00 PM",
      duration: "90 minutes",
      attendees: 234,
      maxAttendees: 300,
      host: {
        name: "Dr. Sarah Johnson",
        image: "/placeholder.svg?height=40&width=40",
      },
      type: "Workshop",
      price: "Free",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Date Night", "Virtual", "Creative"],
    },
    {
      id: 2,
      title: "Communication Workshop",
      description: "Learn effective communication strategies for stronger relationships",
      date: "Tomorrow 7:00 PM",
      duration: "2 hours",
      attendees: 156,
      maxAttendees: 200,
      host: {
        name: "Mark Thompson",
        image: "/placeholder.svg?height=40&width=40",
      },
      type: "Workshop",
      price: "$25",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Communication", "Skills", "Interactive"],
    },
    {
      id: 3,
      title: "Relationship Goals Setting",
      description: "Set meaningful goals together and create your relationship roadmap",
      date: "Sat 2:00 PM",
      duration: "75 minutes",
      attendees: 89,
      maxAttendees: 150,
      host: {
        name: "Lisa Chen",
        image: "/placeholder.svg?height=40&width=40",
      },
      type: "Seminar",
      price: "$15",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Goals", "Planning", "Future"],
    },
    {
      id: 4,
      title: "Conflict Resolution Masterclass",
      description: "Transform conflicts into opportunities for deeper connection",
      date: "Sun 4:00 PM",
      duration: "2.5 hours",
      attendees: 67,
      maxAttendees: 100,
      host: {
        name: "Dr. Michael Rodriguez",
        image: "/placeholder.svg?height=40&width=40",
      },
      type: "Masterclass",
      price: "$45",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Conflict", "Resolution", "Advanced"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Sessions" />

      <div className="flex-1 p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Upcoming Sessions</h2>
          <p className="text-muted-foreground">
            Join live sessions with relationship experts and connect with other couples
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {sessions.map((session) => (
            <Card key={session.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img
                  src={session.image || "/placeholder.svg"}
                  alt={session.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-black">
                    {session.type}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge
                    variant={session.price === "Free" ? "default" : "secondary"}
                    className={session.price === "Free" ? "bg-green-500" : "bg-white/90 text-black"}
                  >
                    {session.price}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl">{session.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{session.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{session.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{session.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {session.attendees}/{session.maxAttendees} attending
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={session.host.image || "/placeholder.svg"} alt={session.host.name} />
                    <AvatarFallback>
                      {session.host.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Hosted by {session.host.name}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {session.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1">Join Session</Button>
                  <Button variant="outline" size="sm">
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
