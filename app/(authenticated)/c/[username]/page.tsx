"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Play, Star, Users, Verified } from "lucide-react"
import { PostCard } from "@/components/post-card"
import { SidebarContent } from "@/components/sidebar-content"

export default function CoachProfile({ params }: { params: { username: string } }) {
  const [isFollowing, setIsFollowing] = useState(false)

  // Mock coach data
  const coach = {
    name: "Dr. Sarah Johnson",
    username: params.username,
    bio: "Relationship therapist with 15+ years of experience helping couples build stronger connections. Certified in Gottman Method and EFT.",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    coverImage:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "San Francisco, CA",
    specialties: ["Couples Therapy", "Marriage Counseling", "Communication"],
    followers: 12500,
    following: 340,
    rating: 4.9,
    reviews: 1250,
    verified: true,
  }

  // Mock posts data
  const posts = [
    {
      id: "1",
      author: {
        name: "Dr. Sarah Johnson",
        username: "@sarahjohnson",
        avatar: coach.avatar,
        verified: true,
      },
      content:
        "Communication is the foundation of every healthy relationship. Here are 3 simple techniques to improve how you and your partner connect daily...",
      timestamp: "2h",
      likes: 234,
      comments: 45,
      shares: 12,
      images: [],
    },
    {
      id: "2",
      author: {
        name: "Dr. Sarah Johnson",
        username: "@sarahjohnson",
        avatar: coach.avatar,
        verified: true,
      },
      content:
        "Just finished an amazing couples session today. Watching two people rediscover their connection never gets old. 💕 #RelationshipGoals",
      timestamp: "1d",
      likes: 567,
      comments: 89,
      shares: 23,
      images: [],
    },
  ]

  // Mock videos data
  const videos = [
    {
      id: "1",
      title: "5 Signs of a Healthy Relationship",
      thumbnail:
        "https://images.pexels.com/photos/4609045/pexels-photo-4609045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "8:45",
      views: "12.5K",
      uploadedAt: "3 days ago",
    },
    {
      id: "2",
      title: "How to Have Difficult Conversations",
      thumbnail:
        "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "12:30",
      views: "8.2K",
      uploadedAt: "1 week ago",
    },
  ]

  // Mock programs data
  const programs = [
    {
      id: "1",
      title: "Relationship Reset: 30-Day Challenge",
      description: "Transform your relationship in 30 days with daily exercises and guided activities.",
      price: "$197",
      duration: "30 days",
      students: 1250,
      rating: 4.8,
    },
    {
      id: "2",
      title: "Communication Mastery Course",
      description: "Learn the art of effective communication with your partner through proven techniques.",
      price: "$297",
      duration: "8 weeks",
      students: 890,
      rating: 4.9,
    },
  ]

  // Mock sessions data
  const sessions = [
    {
      id: "1",
      title: "Building Trust After Betrayal",
      date: "March 15, 2024",
      time: "7:00 PM PST",
      attendees: 45,
      type: "Workshop",
    },
    {
      id: "2",
      title: "Love Languages Deep Dive",
      date: "March 22, 2024",
      time: "6:00 PM PST",
      attendees: 32,
      type: "Webinar",
    },
  ]

  // Mock booking slots
  const bookingSlots = [
    { time: "9:00 AM", available: true },
    { time: "10:30 AM", available: false },
    { time: "2:00 PM", available: true },
    { time: "3:30 PM", available: true },
    { time: "5:00 PM", available: false },
  ]

  return (
    <div className="flex gap-6">
      <div className="flex-1 max-w-2xl">
        {/* Cover Image */}
        <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg overflow-hidden mb-4">
          <img
            src={coach.coverImage || "/placeholder.svg"}
            alt="Cover"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Profile Header */}
        <div className="relative -mt-16 mb-6">
          <div className="flex items-end gap-4">
            <Avatar className="h-32 w-32 border-4 border-background">
              <AvatarImage src={coach.avatar || "/placeholder.svg"} alt={coach.name} />
              <AvatarFallback>{coach.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 pb-4">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-2xl font-bold">{coach.name}</h1>
                {coach.verified && <Verified className="h-6 w-6 text-blue-500 fill-current" />}
              </div>
              <p className="text-muted-foreground mb-2">@{coach.username}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {coach.location}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  {coach.rating} ({coach.reviews} reviews)
                </div>
              </div>
              <div className="flex gap-2 mb-3">
                {coach.specialties.map((specialty) => (
                  <Badge key={specialty} variant="secondary">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
            <Button
              onClick={() => setIsFollowing(!isFollowing)}
              variant={isFollowing ? "outline" : "default"}
              className="mb-4"
            >
              {isFollowing ? "Following" : "Follow"}
            </Button>
          </div>

          <p className="text-sm mb-4">{coach.bio}</p>

          <div className="flex gap-6 text-sm">
            <span>
              <strong>{coach.followers.toLocaleString()}</strong> followers
            </span>
            <span>
              <strong>{coach.following}</strong> following
            </span>
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

          <TabsContent value="posts" className="space-y-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </TabsContent>

          <TabsContent value="videos" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {videos.map((video) => (
                <Card key={video.id} className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
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
                      <span>{video.uploadedAt}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="programs" className="space-y-4">
            {programs.map((program) => (
              <Card key={program.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                      <p className="text-muted-foreground mb-4">{program.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {program.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {program.students} students
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          {program.rating}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary mb-2">{program.price}</div>
                      <Button>Enroll Now</Button>
                    </div>
                  </div>
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
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {session.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {session.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {session.attendees} attending
                        </div>
                      </div>
                    </div>
                    <Button>Join Session</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="booking" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Book a 1-on-1 Session</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Session Types</h4>
                    <div className="space-y-3">
                      <Card className="p-4 cursor-pointer hover:bg-accent">
                        <div className="flex justify-between items-center">
                          <div>
                            <h5 className="font-medium">Couples Consultation</h5>
                            <p className="text-sm text-muted-foreground">60 minutes</p>
                          </div>
                          <span className="font-semibold">$150</span>
                        </div>
                      </Card>
                      <Card className="p-4 cursor-pointer hover:bg-accent">
                        <div className="flex justify-between items-center">
                          <div>
                            <h5 className="font-medium">Individual Session</h5>
                            <p className="text-sm text-muted-foreground">45 minutes</p>
                          </div>
                          <span className="font-semibold">$120</span>
                        </div>
                      </Card>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Available Times (Today)</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {bookingSlots.map((slot, index) => (
                        <Button
                          key={index}
                          variant={slot.available ? "outline" : "secondary"}
                          disabled={!slot.available}
                          className="w-full"
                        >
                          {slot.time}
                        </Button>
                      ))}
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
      <div className="w-80">
        <SidebarContent />
      </div>
    </div>
  )
}
