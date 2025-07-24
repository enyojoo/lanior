"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Users, Play, Clock, Star, CheckCircle, Wifi } from "lucide-react"
import { PostCard } from "@/components/post-card"

export default function CoachProfilePage() {
  const params = useParams()
  const username = params.username as string
  const [isFollowing, setIsFollowing] = useState(false)

  // Mock coach data - in real app this would come from API
  const coachData = {
    "michael-nadezhda": {
      name: "Michael & Nadezhda",
      username: "michael-nadezhda",
      specialty: "Couple Therapy",
      bio: "Certified couple therapists with 15+ years of experience helping couples build stronger relationships. We specialize in communication, conflict resolution, and intimacy.",
      avatar:
        "https://images.pexels.com/photos/4609045/pexels-photo-4609045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      coverImage:
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: true,
      followers: 12500,
      following: 89,
      posts: 234,
      rating: 4.9,
      reviews: 156,
      location: "San Francisco, CA",
    },
    "sergey-ovsipenko": {
      name: "Sergey Ovsipenko",
      username: "sergey-ovsipenko",
      specialty: "Family Counseling",
      bio: "Family therapist passionate about helping families navigate challenges and strengthen bonds. Specialized in adolescent therapy and family dynamics.",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      coverImage:
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: true,
      followers: 8900,
      following: 156,
      posts: 189,
      rating: 4.8,
      reviews: 89,
      location: "New York, NY",
    },
  }

  const coach = coachData[username as keyof typeof coachData] || coachData["michael-nadezhda"]

  // Mock posts data
  const posts = [
    {
      id: "1",
      author: {
        name: coach.name,
        username: coach.username,
        avatar: coach.avatar,
        verified: coach.verified,
      },
      content:
        "Communication is the foundation of every strong relationship. Here are 3 simple techniques that can transform how you connect with your partner...",
      timestamp: "2h",
      likes: 45,
      comments: 12,
      shares: 8,
      images: [
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
    },
    {
      id: "2",
      author: {
        name: coach.name,
        username: coach.username,
        avatar: coach.avatar,
        verified: coach.verified,
      },
      content:
        "Remember: It's not about being right, it's about being understood. Active listening can change everything in your relationship dynamics.",
      timestamp: "1d",
      likes: 78,
      comments: 23,
      shares: 15,
    },
  ]

  // Mock videos data
  const videos = [
    {
      id: "1",
      title: "5 Signs of a Healthy Relationship",
      thumbnail:
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "8:45",
      views: "12.5K",
    },
    {
      id: "2",
      title: "How to Handle Conflict Constructively",
      thumbnail:
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "12:30",
      views: "8.9K",
    },
  ]

  // Mock programs data
  const programs = [
    {
      id: "1",
      title: "Relationship Foundations",
      description: "A comprehensive 8-week program to build stronger relationship foundations",
      image:
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "8 weeks",
      price: 299,
      enrolled: 156,
    },
    {
      id: "2",
      title: "Communication Mastery",
      description: "Learn advanced communication techniques for deeper connection",
      image:
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "6 weeks",
      price: 199,
      enrolled: 89,
    },
  ]

  // Mock sessions data
  const sessions = [
    {
      id: "1",
      title: "Couples Communication Workshop",
      date: "2024-02-15T18:00:00Z",
      endDate: "2024-02-15T20:00:00Z",
      location: { type: "online" as const, platform: "Zoom" },
      attendees: 25,
      capacity: 30,
      price: 49,
    },
    {
      id: "2",
      title: "Relationship Q&A Session",
      date: "2024-02-20T19:00:00Z",
      endDate: "2024-02-20T20:30:00Z",
      location: { type: "online" as const, platform: "Zoom" },
      attendees: 18,
      capacity: 25,
      price: 0,
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      {/* Cover Image */}
      <div className="relative h-48 md:h-64 w-full overflow-hidden rounded-lg mb-4">
        <Image src={coach.coverImage || "/placeholder.svg"} alt="Cover" fill className="object-cover" />
      </div>

      {/* Profile Header */}
      <div className="relative px-4 pb-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-4">
          <div className="flex items-end gap-4 mb-4 md:mb-0">
            <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-background -mt-12 md:-mt-16">
              <AvatarImage src={coach.avatar || "/placeholder.svg"} alt={coach.name} />
              <AvatarFallback>{coach.name[0]}</AvatarFallback>
            </Avatar>
            <div className="pb-2">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">{coach.name}</h1>
                {coach.verified && <CheckCircle className="h-6 w-6 text-blue-500 fill-current" />}
              </div>
              <p className="text-muted-foreground">@{coach.username}</p>
              <Badge variant="secondary" className="mt-1">
                {coach.specialty}
              </Badge>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant={isFollowing ? "outline" : "default"}
              onClick={() => setIsFollowing(!isFollowing)}
              className="flex-1 md:flex-none"
            >
              {isFollowing ? "Following" : "Follow"}
            </Button>
            <Button variant="outline">Message</Button>
          </div>
        </div>

        {/* Bio and Stats */}
        <div className="space-y-4">
          <p className="text-sm">{coach.bio}</p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {coach.location}
            </span>
            <span className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              {coach.rating} ({coach.reviews} reviews)
            </span>
          </div>

          <div className="flex gap-6 text-sm">
            <span>
              <strong>{coach.posts}</strong> Posts
            </span>
            <span>
              <strong>{coach.followers.toLocaleString()}</strong> Followers
            </span>
            <span>
              <strong>{coach.following}</strong> Following
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="programs">Programs</TabsTrigger>
          <TabsTrigger value="sessions">Sessions</TabsTrigger>
          <TabsTrigger value="booking">Booking</TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="space-y-4 mt-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </TabsContent>

        <TabsContent value="videos" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {videos.map((video) => (
              <Card key={video.id} className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                <div className="relative aspect-video">
                  <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.views} views</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="programs" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {programs.map((program) => (
              <Card key={program.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{program.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{program.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {program.enrolled} enrolled
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <span className="font-semibold">${program.price}</span>
                    <Button size="sm">View Program</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sessions" className="mt-6">
          <div className="space-y-4">
            {sessions.map((session) => (
              <Card key={session.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{session.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(session.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {new Date(session.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Wifi className="h-4 w-4" />
                          Online
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span>
                          {session.attendees}/{session.capacity} attendees
                        </span>
                        <span className="font-semibold">{session.price === 0 ? "Free" : `$${session.price}`}</span>
                      </div>
                    </div>
                    <Button size="sm">View Session</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="booking" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Calendar placeholder */}
            <Card>
              <CardHeader>
                <h3 className="font-semibold">Select Date & Time</h3>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Calendar Component</p>
                </div>
              </CardContent>
            </Card>

            {/* Session types */}
            <div className="space-y-4">
              <h3 className="font-semibold">Session Types</h3>
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1">Individual Consultation</h4>
                  <p className="text-sm text-muted-foreground mb-2">One-on-one session for personal guidance</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">60 minutes</span>
                    <span className="font-semibold">$150</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1">Couples Session</h4>
                  <p className="text-sm text-muted-foreground mb-2">Joint session for couples therapy</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">90 minutes</span>
                    <span className="font-semibold">$200</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1">Quick Check-in</h4>
                  <p className="text-sm text-muted-foreground mb-2">Brief session for ongoing support</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">30 minutes</span>
                    <span className="font-semibold">$75</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
