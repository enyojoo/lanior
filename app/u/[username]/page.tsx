"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { PostCard } from "@/components/post-card"
import { SidebarContent } from "@/components/sidebar-content"
import { MapPin, Calendar, LinkIcon, Check, Target, Clock } from "lucide-react"

export default function UserProfilePage() {
  const params = useParams()
  const username = params.username as string
  const [isFollowing, setIsFollowing] = useState(false)

  // Mock user data
  const user = {
    name: "John Doe",
    username: "johndoe",
    bio: "Building a stronger relationship with my amazing partner Sarah. Love hiking, cooking together, and learning new ways to connect. 💕",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    coverImage:
      "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    verified: false,
    location: "San Francisco, CA",
    website: "https://johndoe.com",
    joinedDate: "January 2023",
    followers: "1,247",
    following: "892",
    posts: "156",
    relationshipStatus: "In a relationship with Sarah",
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
        "Just finished the Communication Foundations program with Sarah! The daily exercises really helped us understand each other better. Highly recommend to any couple looking to strengthen their bond. 💪❤️ #RelationshipGoals #LaniorJourney",
      likes: "234",
      views: "1.2K",
      comments: [
        {
          user: {
            name: "Sarah Johnson",
            handle: "sarahjohnson",
            avatar:
              "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            verified: false,
          },
          content: "It was such a great experience doing this together! ❤️",
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
        "Date night cooking class was amazing! We learned to make pasta from scratch and had so many laughs. Sometimes the best relationship advice is just spending quality time together. 🍝👨‍🍳👩‍🍳",
      image:
        "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes: "189",
      views: "856",
      comments: [
        {
          user: {
            name: "Mike Wilson",
            handle: "mikewilson",
            avatar:
              "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            verified: false,
          },
          content: "This looks so fun! Where did you take the class?",
          time: "2 days ago",
        },
      ],
      time: "2 days ago",
    },
  ]

  // Mock programs data (programs user is taking)
  const enrolledPrograms = [
    {
      id: "communication-foundations",
      title: "Communication Foundations",
      coach: "Dr. Anna Hovsepyan",
      progress: 85,
      status: "In Progress",
      daysLeft: 3,
      image:
        "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "trust-building",
      title: "Trust Building Intensive",
      coach: "Dr. Sarah Chen",
      progress: 100,
      status: "Completed",
      completedDate: "March 15, 2025",
      image:
        "https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]

  // Mock sessions data (sessions user registered for)
  const registeredSessions = [
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
      registrationStatus: "Confirmed",
    },
  ]

  // Mock bookings data
  const bookings = [
    {
      id: "1",
      coach: {
        name: "Dr. Anna Hovsepyan",
        title: "Relationship Expert",
        avatar:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        verified: true,
      },
      sessionType: "60-min Deep Dive",
      date: "2025-04-18T14:00:00",
      status: "Confirmed",
      price: 150,
      meetingLink: "https://zoom.us/j/example",
    },
    {
      id: "2",
      coach: {
        name: "Dr. Sarah Chen",
        title: "Communication Specialist",
        avatar:
          "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        verified: true,
      },
      sessionType: "30-min Consultation",
      date: "2025-04-22T10:00:00",
      status: "Pending",
      price: 75,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Profile Header */}
          <Card className="mb-6">
            <div className="relative">
              {/* Cover Image */}
              <div
                className="h-48 bg-gradient-to-r from-pink-500 to-orange-400 rounded-t-lg"
                style={{
                  backgroundImage: `url(${user.coverImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Profile Info */}
              <div className="px-6 pb-6">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between -mt-16 mb-4">
                  <Avatar className="h-32 w-32 border-4 border-background">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback className="text-2xl">{user.name[0]}</AvatarFallback>
                  </Avatar>

                  <div className="flex gap-2 mt-4 sm:mt-0">
                    <Button
                      variant={isFollowing ? "default" : "outline"}
                      onClick={() => setIsFollowing(!isFollowing)}
                      className={
                        isFollowing ? "bg-primary" : "border-primary text-primary hover:bg-primary hover:text-white"
                      }
                    >
                      {isFollowing ? "Following" : "Follow"}
                    </Button>
                    <Button variant="outline">Message</Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h1 className="text-2xl font-bold">{user.name}</h1>
                      {user.verified && (
                        <Badge
                          variant="outline"
                          className="h-5 w-5 p-0 flex items-center justify-center rounded-full bg-primary"
                        >
                          <Check className="h-3 w-3 text-white" />
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground">@{user.username}</p>
                  </div>

                  <p className="text-sm">{user.bio}</p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {user.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <LinkIcon className="h-4 w-4" />
                      <a href={user.website} className="text-primary hover:underline">
                        {user.website.replace("https://", "")}
                      </a>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Joined {user.joinedDate}
                    </div>
                  </div>

                  <div className="flex gap-6 text-sm">
                    <div>
                      <span className="font-semibold">{user.following}</span>
                      <span className="text-muted-foreground ml-1">Following</span>
                    </div>
                    <div>
                      <span className="font-semibold">{user.followers}</span>
                      <span className="text-muted-foreground ml-1">Followers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                {enrolledPrograms.map((program) => (
                  <Card key={program.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="aspect-square w-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Target className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-semibold">{program.title}</h3>
                              <p className="text-sm text-muted-foreground">by {program.coach}</p>
                            </div>
                            <Badge
                              variant={program.status === "Completed" ? "default" : "secondary"}
                              className={program.status === "Completed" ? "bg-green-500" : ""}
                            >
                              {program.status}
                            </Badge>
                          </div>

                          {program.status === "In Progress" ? (
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Progress</span>
                                <span>{program.progress}%</span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2">
                                <div
                                  className="bg-primary h-2 rounded-full transition-all"
                                  style={{ width: `${program.progress}%` }}
                                />
                              </div>
                              <p className="text-sm text-muted-foreground">{program.daysLeft} days remaining</p>
                            </div>
                          ) : (
                            <p className="text-sm text-muted-foreground">Completed on {program.completedDate}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sessions" className="space-y-6 mt-6">
              <div className="space-y-4">
                {registeredSessions.map((session) => (
                  <Card key={session.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <img
                          src={session.image || "/placeholder.svg"}
                          alt={session.title}
                          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-semibold">{session.title}</h3>
                              <p className="text-sm text-muted-foreground">Hosted by {session.host.name}</p>
                            </div>
                            <Badge className="bg-green-500">{session.registrationStatus}</Badge>
                          </div>

                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(session.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {new Date(session.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {session.location.type === "online" ? "Online" : session.location.city}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="booked" className="space-y-6 mt-6">
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <Card key={booking.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <Avatar className="h-12 w-12 border-2 border-primary">
                          <AvatarImage src={booking.coach.avatar || "/placeholder.svg"} alt={booking.coach.name} />
                          <AvatarFallback>{booking.coach.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <div className="flex items-center gap-2">
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
                              <p className="text-sm text-muted-foreground">{booking.coach.title}</p>
                            </div>
                            <Badge
                              variant={booking.status === "Confirmed" ? "default" : "secondary"}
                              className={booking.status === "Confirmed" ? "bg-green-500" : "bg-yellow-500"}
                            >
                              {booking.status}
                            </Badge>
                          </div>

                          <div className="space-y-2">
                            <p className="font-medium">{booking.sessionType}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {new Date(booking.date).toLocaleDateString()}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {new Date(booking.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                              </div>
                              <span className="font-semibold">${booking.price}</span>
                            </div>

                            {booking.status === "Confirmed" && booking.meetingLink && (
                              <Button size="sm" className="mt-2">
                                Join Meeting
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
