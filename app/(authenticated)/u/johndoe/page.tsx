"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { PostCard } from "@/components/post-card"
import { MapPin, Calendar, LinkIcon, Settings, Users, BookOpen, Clock, CheckCircle, User } from "lucide-react"
import Link from "next/link"

export default function UserProfilePage() {
  const [isOwnProfile] = useState(true) // In real app, check if current user

  // Mock user data
  const user = {
    name: "John Doe",
    username: "johndoe",
    bio: "Relationship enthusiast on a journey to build stronger connections. Currently working on communication skills with my partner Sarah. Love learning from the amazing coaches on Lanior! 💕",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    coverImage:
      "https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    verified: false,
    location: "San Francisco, CA",
    website: "https://johndoe.com",
    joinedDate: "September 2023",
    followers: "234",
    following: "156",
    posts: "89",
    relationshipStatus: "In a relationship",
    interests: ["Communication", "Trust Building", "Date Ideas", "Self-Growth"],
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
        "Just finished week 2 of @anna-hovsepyan's Communication Mastery program! The active listening exercises have already made such a difference in my relationship with Sarah. Highly recommend! 🙌 #RelationshipGrowth #Communication",
      likes: "23",
      views: "156",
      comments: [
        {
          user: {
            name: "Sarah Johnson",
            handle: "sarahjohnson",
            avatar:
              "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            verified: false,
          },
          content: "So proud of you babe! I can definitely feel the difference ❤️",
          time: "1 hour ago",
        },
      ],
      time: "3 hours ago",
    },
    {
      user: {
        name: user.name,
        handle: user.username,
        avatar: user.avatar,
        verified: user.verified,
      },
      content:
        "Attended my first couples workshop with @michael-nadezhda yesterday. Mind = blown 🤯 The trust-building exercises were incredible. Sarah and I learned so much about each other. Thank you for creating such a safe space!",
      image:
        "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes: "45",
      views: "289",
      comments: [
        {
          user: {
            name: "Michael & Nadezhda",
            handle: "michael-nadezhda",
            avatar:
              "https://images.pexels.com/photos/4609045/pexels-photo-4609045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            verified: true,
          },
          content: "So wonderful to have you both there! Keep practicing those exercises 💕",
          time: "2 days ago",
        },
      ],
      time: "2 days ago",
    },
  ]

  // Mock programs data (enrolled)
  const enrolledPrograms = [
    {
      id: "communication-mastery",
      title: "Communication Mastery",
      coach: "Dr. Anna Hovsepyan",
      coachAvatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      progress: 65,
      totalLessons: 14,
      completedLessons: 9,
      nextLesson: "Handling Difficult Conversations",
      image:
        "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      enrolledDate: "2 weeks ago",
    },
    {
      id: "trust-building",
      title: "Trust Building Intensive",
      coach: "Michael & Nadezhda",
      coachAvatar:
        "https://images.pexels.com/photos/4609045/pexels-photo-4609045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      progress: 25,
      totalLessons: 21,
      completedLessons: 5,
      nextLesson: "Rebuilding After Betrayal",
      image:
        "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      enrolledDate: "1 week ago",
    },
  ]

  // Mock sessions data (registered)
  const registeredSessions = [
    {
      id: "1",
      title: "Date Night Ideas Workshop",
      coach: "Anna Hovsepyan",
      coachAvatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "2025-02-15T18:00:00Z",
      status: "upcoming",
      type: "online",
      price: 25,
    },
    {
      id: "2",
      title: "Couples Communication Workshop",
      coach: "Michael & Nadezhda",
      coachAvatar:
        "https://images.pexels.com/photos/4609045/pexels-photo-4609045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "2025-01-20T19:00:00Z",
      status: "completed",
      type: "offline",
      price: 75,
    },
  ]

  // Mock bookings data
  const bookings = [
    {
      id: "1",
      coach: "Dr. Anna Hovsepyan",
      coachAvatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      sessionType: "Couples Session",
      date: "2025-02-10T15:00:00Z",
      duration: 90,
      price: 200,
      status: "confirmed",
      notes: "Focus on communication patterns and active listening techniques",
    },
    {
      id: "2",
      coach: "Sergey Ovsipenko",
      coachAvatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      sessionType: "Individual Consultation",
      date: "2025-01-25T14:00:00Z",
      duration: 60,
      price: 150,
      status: "completed",
      notes: "Discussed relationship goals and personal growth areas",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      {/* Cover Image */}
      <div className="h-48 md:h-64 bg-gradient-to-r from-green-400 to-blue-500 relative">
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
                    <CheckCircle className="h-3 w-3 text-white" />
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground mb-2">@{user.username}</p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{user.relationshipStatus}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{user.followers} followers</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-4 md:mt-0">
            {isOwnProfile ? (
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            ) : (
              <>
                <Button variant="outline">Message</Button>
                <Button>Follow</Button>
              </>
            )}
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
            <div className="space-y-4">
              {enrolledPrograms.map((program) => (
                <Card key={program.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="aspect-video w-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BookOpen className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold mb-1">{program.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Avatar className="h-5 w-5">
                                <AvatarImage src={program.coachAvatar || "/placeholder.svg"} />
                                <AvatarFallback>{program.coach[0]}</AvatarFallback>
                              </Avatar>
                              <span>{program.coach}</span>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {program.enrolledDate}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>
                              Progress: {program.completedLessons}/{program.totalLessons} lessons
                            </span>
                            <span className="font-medium">{program.progress}%</span>
                          </div>
                          <Progress value={program.progress} className="h-2" />
                          <p className="text-sm text-muted-foreground">Next: {program.nextLesson}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            <div className="space-y-4">
              {registeredSessions.map((session) => (
                <Card key={session.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex gap-3 flex-1">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={session.coachAvatar || "/placeholder.svg"} />
                          <AvatarFallback>{session.coach[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{session.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">with {session.coach}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(session.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {new Date(session.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </span>
                            <Badge
                              variant={session.status === "completed" ? "secondary" : "default"}
                              className="text-xs"
                            >
                              {session.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-semibold">{session.price === 0 ? "Free" : `$${session.price}`}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="booked" className="space-y-6">
            <div className="space-y-4">
              {bookings.map((booking) => (
                <Card key={booking.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex gap-3 flex-1">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={booking.coachAvatar || "/placeholder.svg"} />
                          <AvatarFallback>{booking.coach[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{booking.sessionType}</h3>
                          <p className="text-sm text-muted-foreground mb-2">with {booking.coach}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(booking.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {new Date(booking.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </span>
                            <span>{booking.duration} min</span>
                            <Badge
                              variant={booking.status === "completed" ? "secondary" : "default"}
                              className="text-xs"
                            >
                              {booking.status}
                            </Badge>
                          </div>
                          {booking.notes && <p className="text-xs text-muted-foreground italic">"{booking.notes}"</p>}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-semibold">${booking.price}</span>
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
