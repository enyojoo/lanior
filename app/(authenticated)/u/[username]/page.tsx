"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Heart, MapPin } from "lucide-react"
import { PostCard } from "@/components/post-card"
import { SidebarContent } from "@/components/sidebar-content"

export default function UserProfile({ params }: { params: { username: string } }) {
  const [isFollowing, setIsFollowing] = useState(false)

  // Mock user data
  const user = {
    name: "John Doe",
    username: params.username,
    bio: "Passionate about building meaningful relationships. Currently working on improving communication with my partner. 💕",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    coverImage:
      "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "New York, NY",
    relationshipStatus: "In a relationship",
    followers: 450,
    following: 320,
    joinedDate: "March 2023",
  }

  // Mock posts data
  const posts = [
    {
      id: "1",
      author: {
        name: "John Doe",
        username: "@johndoe",
        avatar: user.avatar,
        verified: false,
      },
      content:
        "Just finished the Communication Mastery course with Dr. Sarah Johnson. Amazing insights on active listening! 🎯 #RelationshipGrowth",
      timestamp: "4h",
      likes: 23,
      comments: 5,
      shares: 2,
      images: [],
    },
    {
      id: "2",
      author: {
        name: "John Doe",
        username: "@johndoe",
        avatar: user.avatar,
        verified: false,
      },
      content:
        "Date night was incredible! We tried the conversation starters from the Relationship Reset program. Highly recommend! 💕",
      timestamp: "2d",
      likes: 67,
      comments: 12,
      shares: 8,
      images: [],
    },
  ]

  // Mock programs data
  const programs = [
    {
      id: "1",
      title: "Relationship Reset: 30-Day Challenge",
      coach: "Dr. Sarah Johnson",
      progress: 75,
      status: "In Progress",
      completedLessons: 22,
      totalLessons: 30,
      nextLesson: "Building Daily Rituals",
    },
    {
      id: "2",
      title: "Communication Mastery Course",
      coach: "Dr. Sarah Johnson",
      progress: 100,
      status: "Completed",
      completedLessons: 24,
      totalLessons: 24,
      completedDate: "Feb 15, 2024",
    },
  ]

  // Mock sessions data
  const sessions = [
    {
      id: "1",
      title: "Building Trust After Betrayal",
      coach: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      time: "7:00 PM PST",
      status: "Confirmed",
      type: "Workshop",
    },
    {
      id: "2",
      title: "Love Languages Deep Dive",
      coach: "Dr. Sarah Johnson",
      date: "March 22, 2024",
      time: "6:00 PM PST",
      status: "Registered",
      type: "Webinar",
    },
  ]

  // Mock booked sessions data
  const bookedSessions = [
    {
      id: "1",
      coach: "Dr. Sarah Johnson",
      type: "Couples Consultation",
      date: "March 18, 2024",
      time: "2:00 PM PST",
      status: "Confirmed",
      meetingLink: "https://zoom.us/j/123456789",
    },
    {
      id: "2",
      coach: "Dr. Michael Chen",
      type: "Individual Session",
      date: "March 25, 2024",
      time: "4:00 PM PST",
      status: "Pending",
      meetingLink: null,
    },
  ]

  return (
    <div className="flex gap-6">
      <div className="flex-1 max-w-2xl">
        {/* Cover Image */}
        <div className="relative h-48 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg overflow-hidden mb-4">
          <img
            src={user.coverImage || "/placeholder.svg"}
            alt="Cover"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Profile Header */}
        <div className="relative -mt-16 mb-6">
          <div className="flex items-end gap-4">
            <Avatar className="h-32 w-32 border-4 border-background">
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 pb-4">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-2xl font-bold">{user.name}</h1>
              </div>
              <p className="text-muted-foreground mb-2">@{user.username}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {user.location}
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="h-4 w-4" />
                  {user.relationshipStatus}
                </div>
              </div>
              <Badge variant="secondary">Joined {user.joinedDate}</Badge>
            </div>
            <Button
              onClick={() => setIsFollowing(!isFollowing)}
              variant={isFollowing ? "outline" : "default"}
              className="mb-4"
            >
              {isFollowing ? "Following" : "Follow"}
            </Button>
          </div>

          <p className="text-sm mb-4">{user.bio}</p>

          <div className="flex gap-6 text-sm">
            <span>
              <strong>{user.followers}</strong> followers
            </span>
            <span>
              <strong>{user.following}</strong> following
            </span>
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

          <TabsContent value="posts" className="space-y-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </TabsContent>

          <TabsContent value="programs" className="space-y-4">
            {programs.map((program) => (
              <Card key={program.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">by {program.coach}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant={program.status === "Completed" ? "default" : "secondary"}>
                          {program.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {program.completedLessons}/{program.totalLessons} lessons
                        </span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2 mb-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${program.progress}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{program.progress}% complete</span>
                        {program.status === "In Progress" && <span>Next: {program.nextLesson}</span>}
                        {program.status === "Completed" && <span>Completed: {program.completedDate}</span>}
                      </div>
                    </div>
                  </div>
                  <Button className="w-full">
                    {program.status === "Completed" ? "Review Course" : "Continue Learning"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="sessions" className="space-y-4">
            {sessions.map((session) => (
              <Card key={session.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold">{session.title}</h3>
                        <Badge variant="outline">{session.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">with {session.coach}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {session.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {session.time}
                        </div>
                        <Badge variant={session.status === "Confirmed" ? "default" : "secondary"}>
                          {session.status}
                        </Badge>
                      </div>
                    </div>
                    <Button>{session.status === "Confirmed" ? "Join Session" : "View Details"}</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="booked" className="space-y-4">
            {bookedSessions.map((session) => (
              <Card key={session.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold">{session.type}</h3>
                        <Badge variant={session.status === "Confirmed" ? "default" : "secondary"}>
                          {session.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">with {session.coach}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {session.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {session.time}
                        </div>
                      </div>
                      {session.meetingLink && (
                        <p className="text-sm text-blue-600 mb-2">
                          Meeting Link:{" "}
                          <a href={session.meetingLink} className="underline">
                            Join Here
                          </a>
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      {session.status === "Confirmed" && session.meetingLink && <Button>Join Meeting</Button>}
                      <Button variant="outline" size="sm">
                        Reschedule
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
      <div className="w-80">
        <SidebarContent />
      </div>
    </div>
  )
}
