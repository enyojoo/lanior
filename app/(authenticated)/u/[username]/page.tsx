"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { PostCard } from "@/components/post-card"
import { EventCard } from "@/components/event-card"
import { MapPin, Calendar, LinkIcon, Check, MessageCircle, BookOpen, CalendarDays, Clock, User } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function UserProfilePage() {
  const params = useParams()
  const username = params.username as string
  const [isFollowing, setIsFollowing] = useState(false)

  // Mock user data
  const user = {
    name: "Sarah Johnson",
    username: "sarahjohnson",
    bio: "Relationship enthusiast | Learning to build stronger connections | Mother of 2 | Love reading about psychology and personal growth",
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    coverImage:
      "https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    verified: false,
    location: "Seattle, WA",
    website: "https://sarahjohnson.blog",
    joinedDate: "January 2023",
    followers: "1.2K",
    following: "456",
    posts: "127",
    interests: ["Communication", "Parenting", "Self-Growth", "Mindfulness"],
  }

  // Mock posts data
  const posts = [
    {
      user: {
        name: user.name,
        handle: user.username,
        avatar: user.avatar,
        verified: user.verified,
      },
      content:
        "Just finished Dr. Anna's communication workshop and I'm feeling so inspired! My husband and I tried the active listening exercise last night and it made such a difference. Sometimes the simplest techniques are the most powerful. #RelationshipGrowth #Communication",
      likes: "45",
      views: "234",
      comments: [
        {
          user: {
            name: "Mike Chen",
            handle: "mikechen",
            avatar:
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            verified: false,
          },
          content: "That's awesome! My wife and I are thinking about taking that workshop too.",
          time: "2 hours ago",
        },
      ],
      time: "6 hours ago",
    },
    {
      user: {
        name: user.name,
        handle: user.username,
        avatar: user.avatar,
        verified: user.verified,
      },
      content:
        "Grateful for this community and all the amazing coaches sharing their wisdom. It's been 6 months since I started my relationship growth journey and I can honestly say it's changed my life. To anyone hesitating - take that first step! 💕",
      likes: "78",
      views: "412",
      comments: [],
      time: "2 days ago",
    },
  ]

  // Mock programs data (programs user is taking)
  const programs = [
    {
      id: "communication-foundations",
      title: "Communication Foundations",
      coach: "Dr. Anna Hovsepyan",
      coachAvatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      progress: 65,
      duration: "7 days",
      status: "In Progress",
      image:
        "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "trust-building",
      title: "Trust Building Intensive",
      coach: "Dr. Michael Chang",
      coachAvatar:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      progress: 100,
      duration: "21 days",
      status: "Completed",
      image:
        "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]

  // Mock sessions data (sessions user registered for)
  const sessions = [
    {
      id: "1",
      title: "Building Trust Workshop",
      description: "A 2-hour interactive workshop focused on building and maintaining trust in relationships.",
      date: "2025-04-15T18:00:00",
      endDate: "2025-04-15T20:00:00",
      location: {
        type: "offline",
        address: "123 Relationship Center, Seattle, WA",
        city: "Seattle",
        country: "USA",
      },
      host: {
        name: "Dr. Anna Hovsepyan",
        title: "Licensed MFT",
        avatar:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        verified: true,
      },
      image:
        "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      capacity: 30,
      attendees: 18,
      type: "workshop",
      price: 75,
      registrationStatus: "Registered",
    },
  ]

  // Mock bookings data
  const bookings = [
    {
      id: "1",
      coach: {
        name: "Dr. Anna Hovsepyan",
        title: "Licensed MFT",
        avatar:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        verified: true,
      },
      sessionType: "Couples Session",
      date: "2025-04-20T14:00:00",
      duration: 90,
      price: 200,
      status: "Confirmed",
      meetingLink: "https://zoom.us/j/example",
    },
    {
      id: "2",
      coach: {
        name: "Dr. Michael Chang",
        title: "Relationship Psychology PhD",
        avatar:
          "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        verified: true,
      },
      sessionType: "Individual Consultation",
      date: "2025-04-25T16:00:00",
      duration: 60,
      price: 150,
      status: "Upcoming",
      meetingLink: "https://meet.google.com/example",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      {/* Cover Image */}
      <div className="h-48 md:h-64 bg-gradient-to-r from-pink-400 to-purple-500 relative">
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${user.coverImage})` }} />
      </div>

      {/* Profile Header */}
      <div className="px-4 pb-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16 md:-mt-20">
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            <Avatar className="h-32 w-32 border-4 border-background">
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback className="text-2xl">{user.name[0]}</AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl font-bold truncate">{user.name}</h1>
                {user.verified && (
                  <Badge
                    variant="outline"
                    className="h-5 w-5 p-0 flex items-center justify-center rounded-full bg-primary"
                  >
                    <Check className="h-3 w-3 text-white" />
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground mb-2">@{user.username}</p>
            </div>
          </div>

          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline">
              <MessageCircle className="h-4 w-4 mr-2" />
              Message
            </Button>
            <Button
              onClick={() => setIsFollowing(!isFollowing)}
              className={isFollowing ? "bg-primary hover:bg-primary/90" : ""}
            >
              {isFollowing ? "Following" : "Follow"}
            </Button>
          </div>
        </div>

        {/* Bio and Info */}
        <div className="mt-4 space-y-3">
          <p className="text-sm leading-relaxed">{user.bio}</p>

          <div className="flex flex-wrap gap-2">
            {user.interests.map((interest) => (
              <Badge key={interest} variant="secondary" className="text-xs">
                {interest}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {user.location && (
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{user.location}</span>
              </div>
            )}
            {user.website && (
              <div className="flex items-center gap-1">
                <LinkIcon className="h-4 w-4" />
                <Link href={user.website} className="text-primary hover:underline" target="_blank">
                  {user.website.replace("https://", "")}
                </Link>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>Joined {user.joinedDate}</span>
            </div>
          </div>

          <div className="flex gap-4 text-sm">
            <span>
              <strong>{user.following}</strong> Following
            </span>
            <span>
              <strong>{user.followers}</strong> Followers
            </span>
            <span>
              <strong>{user.posts}</strong> Posts
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
          <TabsTrigger
            value="posts"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
          >
            Posts
          </TabsTrigger>
          <TabsTrigger
            value="programs"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
          >
            Programs
          </TabsTrigger>
          <TabsTrigger
            value="sessions"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
          >
            Sessions
          </TabsTrigger>
          <TabsTrigger
            value="booked"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
          >
            Booked
          </TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="posts" className="space-y-6">
            {posts.map((post, index) => (
              <PostCard key={index} {...post} />
            ))}
          </TabsContent>

          <TabsContent value="programs" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programs.map((program) => (
                <Card key={program.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-t-lg flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={program.status === "Completed" ? "default" : "secondary"} className="text-xs">
                        {program.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{program.duration}</span>
                    </div>
                    <h3 className="font-semibold mb-2">{program.title}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={program.coachAvatar || "/placeholder.svg"} />
                        <AvatarFallback className="text-xs">{program.coach[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-muted-foreground">{program.coach}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>{program.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${program.progress}%` }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sessions.map((session) => (
                <div key={session.id} className="relative">
                  <EventCard event={session} basePath="sessions" />
                  <Badge className="absolute top-2 right-2 bg-green-500 text-white">Registered</Badge>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="booked" className="space-y-6">
            <div className="space-y-4">
              {bookings.map((booking) => (
                <Card key={booking.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={booking.coach.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{booking.coach.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold">{booking.coach.name}</h3>
                            {booking.coach.verified && (
                              <Badge
                                variant="outline"
                                className="h-4 w-4 p-0 flex items-center justify-center rounded-full bg-primary"
                              >
                                <Check className="h-2.5 w-2.5 text-white" />
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{booking.coach.title}</p>
                          <div className="space-y-1 text-sm">
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4 text-muted-foreground" />
                              <span>{booking.sessionType}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CalendarDays className="h-4 w-4 text-muted-foreground" />
                              <span>
                                {new Date(booking.date).toLocaleDateString()} at{" "}
                                {new Date(booking.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span>{booking.duration} minutes</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={booking.status === "Confirmed" ? "default" : "secondary"} className="mb-2">
                          {booking.status}
                        </Badge>
                        <p className="text-sm font-semibold">${booking.price}</p>
                        {booking.meetingLink && (
                          <Button size="sm" className="mt-2" asChild>
                            <Link href={booking.meetingLink} target="_blank">
                              Join Meeting
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
