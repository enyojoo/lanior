"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { PostCard } from "@/components/post-card"
import { MapPin, Calendar, MessageCircle, Users, Heart, Play, Clock, Star } from "lucide-react"

export default function CoachProfilePage({ params }: { params: { username: string } }) {
  const [activeTab, setActiveTab] = useState("posts")

  // Mock data for coach
  const coach = {
    name: "Dr. Sarah Johnson",
    username: params.username,
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio: "Relationship therapist with 15+ years of experience helping couples build stronger connections. Certified in Gottman Method and EFT.",
    location: "San Francisco, CA",
    joinDate: "March 2020",
    followers: 12500,
    following: 340,
    posts: 156,
    isFollowing: false,
    specialty: "Couples Therapy",
    rating: 4.9,
    sessions: 1200,
  }

  const posts = [
    {
      id: 1,
      author: {
        name: coach.name,
        username: coach.username,
        avatar: coach.avatar,
      },
      content:
        "Building trust in relationships isn't just about the big moments - it's about showing up consistently in the small, everyday interactions. What's one small way you've built trust with your partner recently? 💕",
      timestamp: "2h",
      likes: 234,
      comments: 45,
      shares: 12,
      images: [],
    },
    {
      id: 2,
      author: {
        name: coach.name,
        username: coach.username,
        avatar: coach.avatar,
      },
      content:
        "Communication tip: Instead of saying 'You never...' try 'I feel...' when expressing concerns. This simple shift can transform difficult conversations into opportunities for deeper connection.",
      timestamp: "1d",
      likes: 567,
      comments: 89,
      shares: 34,
      images: [],
    },
  ]

  const videos = [
    {
      id: 1,
      title: "5 Signs of a Healthy Relationship",
      thumbnail:
        "https://images.pexels.com/photos/4609045/pexels-photo-4609045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "8:45",
      views: "12.5K",
      likes: 890,
    },
    {
      id: 2,
      title: "How to Have Difficult Conversations",
      thumbnail:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "12:30",
      views: "8.2K",
      likes: 654,
    },
  ]

  const programs = [
    {
      id: 1,
      title: "Relationship Reset: 30-Day Challenge",
      description: "Transform your relationship in 30 days with daily exercises and insights",
      price: "$197",
      students: 1250,
      rating: 4.8,
      image:
        "https://images.pexels.com/photos/4609045/pexels-photo-4609045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Communication Mastery for Couples",
      description: "Learn the art of effective communication in relationships",
      price: "$297",
      students: 890,
      rating: 4.9,
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]

  const sessions = [
    {
      id: 1,
      title: "Building Trust After Betrayal",
      date: "Dec 15, 2024",
      time: "7:00 PM EST",
      attendees: 45,
      price: "Free",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Love Languages Workshop",
      date: "Dec 20, 2024",
      time: "6:00 PM EST",
      attendees: 32,
      price: "$25",
      status: "upcoming",
    },
  ]

  const timeSlots = [
    { time: "9:00 AM", available: true },
    { time: "10:00 AM", available: false },
    { time: "11:00 AM", available: true },
    { time: "2:00 PM", available: true },
    { time: "3:00 PM", available: false },
    { time: "4:00 PM", available: true },
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
                    <AvatarImage src={coach.avatar || "/placeholder.svg"} alt={coach.name} />
                    <AvatarFallback>
                      {coach.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex gap-2">
                    <Button variant={coach.isFollowing ? "outline" : "default"}>
                      {coach.isFollowing ? "Following" : "Follow"}
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
                    <h1 className="text-2xl font-bold">{coach.name}</h1>
                    <p className="text-muted-foreground">@{coach.username}</p>
                  </div>

                  <p className="text-sm">{coach.bio}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {coach.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Joined {coach.joinDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {coach.rating} rating
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {coach.sessions}+ sessions
                    </div>
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

                  <Badge variant="secondary">{coach.specialty}</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="posts">Posts</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="programs">Programs</TabsTrigger>
                <TabsTrigger value="sessions">Sessions</TabsTrigger>
                <TabsTrigger value="booking">Booking</TabsTrigger>
              </TabsList>

              <TabsContent value="posts" className="space-y-4">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </TabsContent>

              <TabsContent value="videos" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {videos.map((video) => (
                    <Card key={video.id} className="overflow-hidden">
                      <div className="relative">
                        <img
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <Play className="h-12 w-12 text-white" />
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">{video.title}</h3>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>{video.views} views</span>
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            {video.likes}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="programs" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {programs.map((program) => (
                    <Card key={program.id}>
                      <img
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        className="w-full h-48 object-cover"
                      />
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">{program.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{program.description}</p>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-lg font-bold text-primary">{program.price}</span>
                          <div className="flex items-center gap-1 text-sm">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            {program.rating}
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">{program.students} students</span>
                          <Button size="sm">Enroll Now</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="sessions" className="space-y-4">
                {sessions.map((session) => (
                  <Card key={session.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold mb-2">{session.title}</h3>
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
                          <div className="flex items-center gap-4 text-sm">
                            <span>{session.attendees} attendees</span>
                            <Badge variant={session.price === "Free" ? "secondary" : "default"}>{session.price}</Badge>
                          </div>
                        </div>
                        <Button size="sm">Join Session</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="booking" className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Book a Session</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">Available Times</h4>
                        <div className="space-y-2">
                          {timeSlots.map((slot, index) => (
                            <Button
                              key={index}
                              variant={slot.available ? "outline" : "ghost"}
                              disabled={!slot.available}
                              className="w-full justify-start"
                            >
                              {slot.time}
                              {!slot.available && <span className="ml-auto text-xs">Booked</span>}
                            </Button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">Session Details</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span>Duration:</span>
                            <span>50 minutes</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Price:</span>
                            <span>$150</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Format:</span>
                            <span>Video Call</span>
                          </div>
                        </div>
                        <Button className="w-full mt-4">Book Session</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 space-y-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Suggested Coaches</h3>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                        <AvatarFallback>C{i}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Coach {i}</p>
                        <p className="text-xs text-muted-foreground">Relationship Expert</p>
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
                <h3 className="font-semibold mb-3">Trending Topics</h3>
                <div className="space-y-2">
                  {["#RelationshipGoals", "#CommunicationTips", "#LoveLanguages", "#TrustBuilding"].map((tag) => (
                    <div key={tag} className="text-sm text-primary hover:underline cursor-pointer">
                      {tag}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
