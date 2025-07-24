"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { PostCard } from "@/components/post-card"
import { Progress } from "@/components/ui/progress"
import { MapPin, Calendar, MessageCircle, Heart, Clock, CheckCircle } from "lucide-react"

export default function UserProfilePage({ params }: { params: { username: string } }) {
  const [activeTab, setActiveTab] = useState("posts")

  // Mock data for user
  const user = {
    name: "John Doe",
    username: params.username,
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Husband, father, and on a journey to build a stronger relationship with my wife. Learning and growing every day! 💕",
    location: "New York, NY",
    joinDate: "January 2023",
    followers: 245,
    following: 180,
    posts: 42,
    isFollowing: false,
    relationshipStatus: "Married",
    relationshipGoal: "Building deeper intimacy",
  }

  const posts = [
    {
      id: 1,
      author: {
        name: user.name,
        username: user.username,
        avatar: user.avatar,
      },
      content:
        "Just finished week 2 of the Communication Mastery program with @drsarahjohnson. Already seeing improvements in how my wife and I handle disagreements. Small changes, big impact! 🙌",
      timestamp: "3h",
      likes: 28,
      comments: 5,
      shares: 2,
      images: [],
    },
    {
      id: 2,
      author: {
        name: user.name,
        username: user.username,
        avatar: user.avatar,
      },
      content:
        "Date night success! We tried the 'appreciation exercise' from yesterday's session. It's amazing how expressing gratitude can shift the entire energy of an evening. ❤️",
      timestamp: "2d",
      likes: 45,
      comments: 8,
      shares: 3,
      images: [],
    },
  ]

  const programs = [
    {
      id: 1,
      title: "Communication Mastery for Couples",
      coach: "Dr. Sarah Johnson",
      progress: 65,
      status: "In Progress",
      nextSession: "Dec 15, 2024",
      image:
        "https://images.pexels.com/photos/4609045/pexels-photo-4609045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Relationship Reset: 30-Day Challenge",
      coach: "Dr. Sarah Johnson",
      progress: 100,
      status: "Completed",
      completedDate: "Nov 20, 2024",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]

  const sessions = [
    {
      id: 1,
      title: "Building Trust After Betrayal",
      coach: "Dr. Sarah Johnson",
      date: "Dec 15, 2024",
      time: "7:00 PM EST",
      status: "registered",
      price: "Free",
    },
    {
      id: 2,
      title: "Love Languages Workshop",
      coach: "Dr. Sarah Johnson",
      date: "Dec 20, 2024",
      time: "6:00 PM EST",
      status: "registered",
      price: "$25",
    },
  ]

  const bookings = [
    {
      id: 1,
      coach: "Dr. Sarah Johnson",
      date: "Dec 18, 2024",
      time: "3:00 PM EST",
      duration: "50 minutes",
      status: "confirmed",
      type: "Individual Session",
    },
    {
      id: 2,
      coach: "Dr. Michael Thompson",
      date: "Dec 22, 2024",
      time: "2:00 PM EST",
      duration: "50 minutes",
      status: "pending",
      type: "Couples Session",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            {/* Profile Header */}
            <Card className="mb-6">
              <CardContent className="p-6">
                {/* Row 1: Avatar and Follow Button */}
                <div className="flex items-start justify-between mb-4">
                  <Avatar className="h-24 w-24 border-4 border-primary">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex gap-2">
                    <Button variant={user.isFollowing ? "outline" : "default"}>
                      {user.isFollowing ? "Following" : "Follow"}
                    </Button>
                    <Button variant="outline">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                  </div>
                </div>

                {/* Row 2: User Info */}
                <div className="space-y-3">
                  <div>
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    <p className="text-muted-foreground">@{user.username}</p>
                  </div>

                  <p className="text-sm">{user.bio}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {user.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Joined {user.joinDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      {user.relationshipStatus}
                    </div>
                  </div>

                  <div className="flex gap-6 text-sm">
                    <span>
                      <strong>{user.posts}</strong> Posts
                    </span>
                    <span>
                      <strong>{user.followers}</strong> Followers
                    </span>
                    <span>
                      <strong>{user.following}</strong> Following
                    </span>
                  </div>

                  <Badge variant="secondary">{user.relationshipGoal}</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="posts">Posts</TabsTrigger>
                <TabsTrigger value="programs">Programs</TabsTrigger>
                <TabsTrigger value="sessions">Sessions</TabsTrigger>
                <TabsTrigger value="booked">Booked</TabsTrigger>
              </TabsList>

              <TabsContent value="posts" className="space-y-4">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </TabsContent>

              <TabsContent value="programs" className="space-y-4">
                {programs.map((program) => (
                  <Card key={program.id}>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <img
                          src={program.image || "/placeholder.svg"}
                          alt={program.title}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{program.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">by {program.coach}</p>

                          <div className="flex items-center gap-4 mb-2">
                            <Badge variant={program.status === "Completed" ? "default" : "secondary"}>
                              {program.status}
                            </Badge>
                            {program.status === "Completed" && (
                              <div className="flex items-center gap-1 text-sm text-green-600">
                                <CheckCircle className="h-4 w-4" />
                                Completed {program.completedDate}
                              </div>
                            )}
                          </div>

                          {program.status === "In Progress" && (
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Progress</span>
                                <span>{program.progress}%</span>
                              </div>
                              <Progress value={program.progress} className="h-2" />
                              <p className="text-sm text-muted-foreground">Next session: {program.nextSession}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="sessions" className="space-y-4">
                {sessions.map((session) => (
                  <Card key={session.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold mb-2">{session.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">by {session.coach}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {session.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {session.time}
                            </div>
                          </div>
                          <Badge variant={session.price === "Free" ? "secondary" : "default"}>{session.price}</Badge>
                        </div>
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          Registered
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="booked" className="space-y-4">
                {bookings.map((booking) => (
                  <Card key={booking.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold mb-1">{booking.type}</h3>
                          <p className="text-sm text-muted-foreground mb-2">with {booking.coach}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {booking.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {booking.time}
                            </div>
                            <span>{booking.duration}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge
                            variant={booking.status === "confirmed" ? "default" : "secondary"}
                            className={booking.status === "confirmed" ? "bg-green-600" : ""}
                          >
                            {booking.status}
                          </Badge>
                          <Button size="sm" variant="outline">
                            {booking.status === "confirmed" ? "Join Session" : "View Details"}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 space-y-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Suggested Users</h3>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium">User {i}</p>
                        <p className="text-xs text-muted-foreground">Similar interests</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Follow
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Your Progress</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Programs Completed</span>
                      <span>1/2</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Sessions Attended</span>
                      <span>8/10</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
