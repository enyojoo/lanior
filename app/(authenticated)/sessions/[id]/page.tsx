"use client"

import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Clock, Users, Calendar, MapPin, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SessionDetailPage({ params }: { params: { id: string } }) {
  // Mock data - in real app, fetch based on params.id
  const session = {
    id: params.id,
    title: "Virtual Date Night Ideas",
    description:
      "Discover creative ways to connect with your partner from home. This interactive workshop will provide you with practical, fun, and meaningful activities you can do together without leaving your house.",
    fullDescription: `Join us for an engaging 90-minute workshop where we'll explore innovative ways to keep the romance alive from the comfort of your home. Whether you're in a long-distance relationship, dealing with busy schedules, or simply want to try something new, this session is perfect for couples looking to strengthen their bond.

    What you'll learn:
    • 15+ creative date night ideas you can do at home
    • How to create romantic atmosphere on any budget
    • Communication exercises to deepen your connection
    • Planning techniques for regular date nights
    • Q&A session with relationship experts

    This workshop includes interactive breakout rooms, downloadable resources, and a follow-up email with additional tips and ideas.`,
    date: "Tonight 8:00 PM EST",
    duration: "90 minutes",
    attendees: 234,
    maxAttendees: 300,
    host: {
      name: "Dr. Sarah Johnson",
      image: "/placeholder.svg?height=80&width=80",
      bio: "Dr. Sarah Johnson is a licensed relationship therapist with over 15 years of experience helping couples build stronger connections. She specializes in communication strategies and has authored two bestselling books on relationship wellness.",
      rating: 4.9,
      reviews: 1250,
    },
    type: "Workshop",
    price: "Free",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Date Night", "Virtual", "Creative", "Interactive"],
    agenda: [
      { time: "8:00 PM", topic: "Welcome & Introductions" },
      { time: "8:10 PM", topic: "Setting the Scene: Creating Romance at Home" },
      { time: "8:30 PM", topic: "15 Creative Date Night Ideas" },
      { time: "9:00 PM", topic: "Interactive Breakout Sessions" },
      { time: "9:20 PM", topic: "Q&A with Dr. Johnson" },
      { time: "9:30 PM", topic: "Wrap-up & Resources" },
    ],
    requirements: [
      "Stable internet connection",
      "Webcam and microphone (optional but recommended)",
      "Notebook for taking notes",
      "Open mind and willingness to participate",
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1 p-6 max-w-4xl mx-auto w-full">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/sessions">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Sessions
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-8">
          <div className="aspect-video relative rounded-lg overflow-hidden mb-6">
            <img src={session.image || "/placeholder.svg"} alt={session.title} className="w-full h-full object-cover" />
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

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h1 className="text-3xl font-bold mb-4">{session.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{session.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {session.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <Calendar className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm font-medium">Date</p>
                  <p className="text-xs text-muted-foreground">{session.date}</p>
                </div>
                <div className="text-center">
                  <Clock className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm font-medium">Duration</p>
                  <p className="text-xs text-muted-foreground">{session.duration}</p>
                </div>
                <div className="text-center">
                  <Users className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm font-medium">Attendees</p>
                  <p className="text-xs text-muted-foreground">
                    {session.attendees}/{session.maxAttendees}
                  </p>
                </div>
                <div className="text-center">
                  <MapPin className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-xs text-muted-foreground">Virtual</p>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Join This Session</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">{session.price}</div>
                    <Button className="w-full" size="lg">
                      Join Session
                    </Button>
                  </div>
                  <Separator />
                  <div className="text-sm text-muted-foreground">
                    <p>• Instant access after registration</p>
                    <p>• Interactive workshop format</p>
                    <p>• Downloadable resources included</p>
                    <p>• Recording available for 7 days</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Host Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>About Your Host</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={session.host.image || "/placeholder.svg"} alt={session.host.name} />
                <AvatarFallback>
                  {session.host.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{session.host.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{session.host.rating}</span>
                    <span className="text-sm text-muted-foreground">({session.host.reviews} reviews)</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{session.host.bio}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Session Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Session Agenda</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {session.agenda.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-sm font-medium text-muted-foreground w-20">{item.time}</div>
                    <div className="flex-1">
                      <p className="text-sm">{item.topic}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What You'll Need</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {session.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {requirement}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Full Description */}
        <Card>
          <CardHeader>
            <CardTitle>About This Session</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none">
              {session.fullDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
