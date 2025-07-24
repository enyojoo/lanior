"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Calendar, MapPin, Clock, CheckCircle, Wifi } from "lucide-react"
import { PostCard } from "@/components/post-card"

export default function UserProfilePage() {
  const params = useParams()
  const username = params.username as string
  const [isFollowing, setIsFollowing] = useState(false)

  // Mock user data - in real app this would come from API
  const userData = {
    name: "Sarah Johnson",
    username: username,
    bio: "Relationship enthusiast on a journey of growth and connection. Passionate about building meaningful relationships and personal development.",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    coverImage:
      "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    verified: false,
    followers: 456,
    following: 123,
    posts: 89,
    location: "Los Angeles, CA",
    joinDate: "Joined March 2023",
  }

  // Mock posts data
  const posts = [
    {
      id: "1",
      author: {
        name: userData.name,
        username: userData.username,
        avatar: userData.avatar,
        verified: userData.verified,
      },
      content:
        "Just finished the Communication Mastery program with @michael-nadezhda and I'm amazed by the transformation in my relationship! The techniques really work 💕",
      timestamp: "3h",
      likes: 23,
      comments: 8,
      shares: 4,
    },
    {
      id: "2",
      author: {
        name: userData.name,
        username: userData.username,
        avatar: userData.avatar,
        verified: userData.verified,
      },
      content:
        "Attending the Couples Workshop tonight! Excited to learn new ways to connect with my partner. Anyone else joining? 🌟",
      timestamp: "1d",
      likes: 15,
      comments: 12,
      shares: 2,
    },
  ]

  // Mock programs user is taking
  const enrolledPrograms = [
    {
      id: "1",
      title: "Relationship Foundations",
      coach: "Michael & Nadezhda",
      coachUsername: "michael-nadezhda",
      progress: 75,
      image:
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "8 weeks",
      completedModules: 6,
      totalModules: 8,
    },
    {
      id: "2",
      title: "Communication Mastery",
      coach: "Anna Hovsepyan",
      coachUsername: "anna-hovsepyan",
      progress: 100,
      image:
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "6 weeks",
      completedModules: 6,
      totalModules: 6,
    },
  ]

  // Mock sessions user registered for
  const registeredSessions = [
    {
      id: "1",
      title: "Couples Communication Workshop",
      coach: "Michael & Nadezhda",
      date: "2024-02-15T18:00:00Z",
      endDate: "2024-02-15T20:00:00Z",
      location: { type: "online" as const, platform: "Zoom" },
      status: "upcoming",
    },
    {
      id: "2",
      title: "Relationship Q&A Session",
      coach: "Sergey Ovsipenko",
      date: "2024-02-10T19:00:00Z",
      endDate: "2024-02-10T20:30:00Z",
      location: { type: "online" as const, platform: "Zoom" },
      status: "completed",
    },
  ]

  // Mock bookings with coaches
  const bookings = [
    {
      id: "1",
      coach: "Michael & Nadezhda",
      coachAvatar:
        "https://images.pexels.com/photos/4609045/pexels-photo-4609045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      sessionType: "Couples Session",
      date: "2024-02-18T15:00:00Z",
      duration: "90 minutes",
      status: "confirmed",
      price: 200,
    },
    {
      id: "2",
      coach: "Anna Hovsepyan",
      coachAvatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      sessionType: "Individual Consultation",
      date: "2024-02-12T14:00:00Z",
      duration: "60 minutes",
      status: "completed",
      price: 150,
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      {/* Cover Image */}
      <div className="relative h-48 md:h-64 w-full overflow-hidden rounded-lg mb-4">
        <Image src={userData.coverImage || "/placeholder.svg"} alt="Cover" fill className="object-cover" />
      </div>

      {/* Profile Header */}
      <div className="relative px-4 pb-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-4">
          <div className="flex items-end gap-4 mb-4 md:mb-0">
            <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-background -mt-12 md:-mt-16">
              <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
              <AvatarFallback>{userData.name[0]}</AvatarFallback>
            </Avatar>
            <div className="pb-2">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">{userData.name}</h1>
                {userData.verified && <CheckCircle className="h-6 w-6 text-blue-500 fill-current" />}
              </div>
              <p className="text-muted-foreground">@{userData.username}</p>
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
          <p className="text-sm">{userData.bio}</p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {userData.location}
            </span>
            <span>{userData.joinDate}</span>
          </div>

          <div className="flex gap-6 text-sm">
            <span>
              <strong>{userData.posts}</strong> Posts
            </span>
            <span>
              <strong>{userData.followers}</strong> Followers
            </span>
            <span>
              <strong>{userData.following}</strong> Following
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="programs">Programs</TabsTrigger>
          <TabsTrigger value="sessions">Sessions</TabsTrigger>
          <TabsTrigger value="booked">Booked</TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="space-y-4 mt-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </TabsContent>

        <TabsContent value="programs" className="mt-6">
          <div className="space-y-4">
            {enrolledPrograms.map((program) => (
              <Card key={program.id}>
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="relative h-20 w-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{program.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">by {program.coach}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>
                            {program.completedModules}/{program.totalModules} modules
                          </span>
                        </div>
                        <Progress value={program.progress} className="h-2" />
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">{program.progress}% complete</span>
                          <Button size="sm" variant={program.progress === 100 ? "outline" : "default"}>
                            {program.progress === 100 ? "View Certificate" : "Continue"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sessions" className="mt-6">
          <div className="space-y-4">
            {registeredSessions.map((session) => (
              <Card key={session.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">{session.title}</h3>
                        <Badge variant={session.status === "completed" ? "secondary" : "default"}>
                          {session.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">by {session.coach}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                    </div>
                    <Button size="sm" variant="outline">
                      {session.status === "completed" ? "View Recording" : "Join Session"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="booked" className="mt-6">
          <div className="space-y-4">
            {bookings.map((booking) => (
              <Card key={booking.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-3 flex-1">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={booking.coachAvatar || "/placeholder.svg"} alt={booking.coach} />
                        <AvatarFallback>{booking.coach[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{booking.sessionType}</h3>
                          <Badge variant={booking.status === "completed" ? "secondary" : "default"}>
                            {booking.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">with {booking.coach}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(booking.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {new Date(booking.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </span>
                          <span>{booking.duration}</span>
                        </div>
                        <div className="mt-2">
                          <span className="font-semibold">${booking.price}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {booking.status === "confirmed" && (
                        <Button size="sm" variant="outline">
                          Reschedule
                        </Button>
                      )}
                      <Button size="sm">{booking.status === "completed" ? "Book Again" : "Join Session"}</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
