"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { PostCard } from "@/components/post-card"
import { SidebarContent } from "@/components/sidebar-content"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { EventCard } from "@/components/event-card"
import { Check, MapPin, Calendar, Clock, Target, MessageCircle, Heart, ArrowLeft, MoreHorizontal } from "lucide-react"

export default function UserProfilePage() {
  const params = useParams()
  const username = params.username as string
  const [isFollowing, setIsFollowing] = useState(false)

  // Mock user data - in real app, fetch based on username
  const user = {
    name: "John Doe",
    username: "johndoe",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    verified: false,
    bio: "Passionate about building stronger relationships. Currently working on communication skills with my partner. Love sharing our journey!",
    location: "San Francisco, CA",
    joinedDate: "January 2023",
    followers: "892",
    following: "1,456",
    posts: "234",
    relationshipStatus: "In a relationship",
    partnerSince: "3 years",
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
        "Just finished the Communication Foundations program with my partner! The exercises really helped us understand each other better. Highly recommend it to other couples! 💕 #RelationshipGoals #CommunicationSkills",
      likes: "156",
      views: "892",
      comments: [
        {
          user: {
            name: "Anna Hovsepyan",
            handle: "annahovse",
            avatar:
              "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            verified: true,
          },
          content: "So happy to hear about your progress! Keep up the great work!",
          time: "2 hours ago",
        },
      ],
      time: "4 hours ago",
    },
    {
      user: {
        name: user.name,
        handle: user.username,
        avatar: user.avatar,
        verified: user.verified,
      },
      content:
        "Date night was amazing! We tried the conversation starters from the Trust Building workshop. It's incredible how much we're still learning about each other after 3 years together ❤️",
      image:
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes: "203",
      views: "1.2K",
      comments: [
        {
          user: {
            name: "Maria Aleks",
            handle: "mariaaleks",
            avatar:
              "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            verified: true,
          },
          content: "This is so sweet! Date nights are so important.",
          time: "1 day ago",
        },
      ],
      time: "2 days ago",
    },
  ]

  // Mock programs data (programs user is taking)
  const programs = [
    {
      id: "trust-building",
      title: "Trust Building Masterclass",
      coach: "Anna Hovsepyan",
      progress: 75,
      status: "In Progress",
      startDate: "March 1, 2025",
      image:
        "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "communication-course",
      title: "Effective Communication Course",
      coach: "Maria Aleks",
      progress: 100,
      status: "Completed",
      startDate: "January 15, 2025",
      completedDate: "February 28, 2025",
      image:
        "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
        type: "offline" as const,
        address: "123 Relationship Center, New York, NY",
        city: "New York",
        country: "USA",
      },
      host: {
        name: "Diana Kirsch",
        title: "Relationship Expert",
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
    },
  ]

  // Mock bookings data
  const bookings = [
    {
      id: "1",
      coach: {
        name: "Anna Hovsepyan",
        avatar:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Relationship Expert",
      },
      sessionType: "60-min Couples Session",
      date: "2025-04-20T14:00:00",
      status: "Confirmed",
      price: 150,
      notes: "Focus on communication patterns",
    },
    {
      id: "2",
      coach: {
        name: "Diana Kirsch",
        avatar:
          "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Intimacy Counselor",
      },
      sessionType: "30-min Consultation",
      date: "2025-04-25T16:30:00",
      status: "Pending",
      price: 75,
      notes: "Initial consultation for trust issues",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Header */}
          <Card>
            <CardContent className="p-0">
              {/* Header with back arrow and menu */}
              <div className="flex items-center justify-between p-4 border-b">
                <Button variant="ghost" size="sm" className="p-2">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <MoreHorizontal className="h-3 w-3" />
                </Button>
              </div>

              {/* Row 1: Profile picture and Follow button */}
              <div className="flex items-center justify-between p-4">
                <Avatar className="h-20 w-20 border-4 border-primary">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                <Button
                  onClick={() => setIsFollowing(!isFollowing)}
                  className={isFollowing ? "bg-primary" : "bg-primary hover:bg-primary/90"}
                >
                  {isFollowing ? "Following" : "Follow"}
                </Button>
              </div>

              {/* Row 2: User info, location, date joined */}
              <div className="px-4 pb-4">
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-xl font-bold">{user.name}</h1>
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
                <p className="text-sm mb-3">{user.bio}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {user.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Joined {user.joinedDate}
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4 text-red-500" />
                    {user.relationshipStatus} for {user.partnerSince}
                  </div>
                </div>

                <div className="flex gap-4 text-sm mb-4">
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

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue="posts" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="programs">Programs</TabsTrigger>
              <TabsTrigger value="sessions">Sessions</TabsTrigger>
              <TabsTrigger value="booked">Booked</TabsTrigger>
            </TabsList>

            <TabsContent value="posts" className="space-y-6 mt-6">
              {posts.map((post, index) => (
                <PostCard key={index} {...post} />
              ))}
            </TabsContent>

            <TabsContent value="programs" className="space-y-6 mt-6">
              <div className="space-y-4">
                {programs.map((program) => (
                  <Card key={program.id} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Target className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold">{program.title}</h3>
                              <p className="text-sm text-muted-foreground">by {program.coach}</p>
                            </div>
                            <Badge className={program.status === "Completed" ? "bg-green-500" : "bg-blue-500"}>
                              {program.status}
                            </Badge>
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progress</span>
                              <span>{program.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-primary h-2 rounded-full transition-all duration-300"
                                style={{ width: `${program.progress}%` }}
                              ></div>
                            </div>
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>Started: {program.startDate}</span>
                              {program.completedDate && <span>Completed: {program.completedDate}</span>}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sessions" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sessions.map((session) => (
                  <EventCard key={session.id} event={session} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="booked" className="space-y-6 mt-6">
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <Card key={booking.id}>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <Avatar className="h-12 w-12 border-2 border-primary">
                          <AvatarImage src={booking.coach.avatar || "/placeholder.svg"} alt={booking.coach.name} />
                          <AvatarFallback>{booking.coach.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold">{booking.sessionType}</h3>
                              <p className="text-sm text-muted-foreground">with {booking.coach.name}</p>
                              <p className="text-xs text-muted-foreground">{booking.coach.title}</p>
                            </div>
                            <div className="text-right">
                              <Badge className={booking.status === "Confirmed" ? "bg-green-500" : "bg-yellow-500"}>
                                {booking.status}
                              </Badge>
                              <p className="text-sm font-bold mt-1">${booking.price}</p>
                            </div>
                          </div>

                          <div className="space-y-1 text-sm">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span>{new Date(booking.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span>
                                {new Date(booking.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                              </span>
                            </div>
                            {booking.notes && <p className="text-muted-foreground mt-2">Notes: {booking.notes}</p>}
                          </div>

                          <div className="flex gap-2 mt-3">
                            <Button size="sm" variant="outline">
                              Reschedule
                            </Button>
                            <Button size="sm" variant="outline">
                              Cancel
                            </Button>
                            {booking.status === "Confirmed" && (
                              <Button size="sm" className="bg-primary">
                                Join Session
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <SidebarContent />
        </div>
      </div>
    </div>
  )
}
