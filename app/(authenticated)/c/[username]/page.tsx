"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { PostCard } from "@/components/post-card"
import { SidebarContent } from "@/components/sidebar-content"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EventCard } from "@/components/event-card"
import {
  Check,
  MapPin,
  Calendar,
  Users,
  Star,
  Clock,
  Play,
  Target,
  MessageCircle,
  ArrowLeft,
  MoreHorizontal,
} from "lucide-react"

export default function CoachProfilePage() {
  const params = useParams()
  const username = params.username as string
  const [isFollowing, setIsFollowing] = useState(false)

  // Mock coach data - in real app, fetch based on username
  const coach = {
    name: "Anna Hovsepyan",
    username: "annahovse",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    verified: true,
    title: "Relationship Expert & Licensed Therapist",
    bio: "Helping couples build stronger connections through evidence-based therapy and practical relationship tools. 12+ years experience in couples counseling.",
    location: "New York, NY",
    joinedDate: "March 2020",
    followers: "45.2K",
    following: "1,234",
    posts: "892",
    rating: 4.9,
    reviewCount: 1247,
    sessionsCompleted: 2340,
    specialties: ["Couples Therapy", "Communication", "Conflict Resolution", "Trust Building"],
  }

  // Mock posts data
  const posts = [
    {
      user: {
        name: coach.name,
        handle: coach.username,
        avatar: coach.avatar,
        verified: coach.verified,
      },
      content:
        "Trust is the foundation of any healthy relationship. Here are my top 3 tips to build trust with your partner: 1. Be consistent in your words and actions 2. Practice active listening 3. Share your vulnerabilities gradually #RelationshipAdvice #Trust",
      likes: "2.1K",
      views: "8.5K",
      comments: [
        {
          user: {
            name: "Maria Aleks",
            handle: "mariaaleks",
            avatar:
              "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            verified: true,
          },
          content: "These tips are so helpful! I've been working on building trust with my partner.",
          time: "2 hours ago",
        },
      ],
      time: "3 hours ago",
    },
    {
      user: {
        name: coach.name,
        handle: coach.username,
        avatar: coach.avatar,
        verified: coach.verified,
      },
      content:
        "Communication isn't just about talking - it's about truly understanding each other. In my latest session, I shared techniques for active listening that can transform your conversations. What's your biggest communication challenge?",
      image:
        "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes: "1.8K",
      views: "6.2K",
      comments: [
        {
          user: {
            name: "John Doe",
            handle: "johndoe",
            avatar:
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            verified: false,
          },
          content: "I struggle with staying calm during difficult conversations.",
          time: "1 day ago",
        },
      ],
      time: "1 day ago",
    },
  ]

  // Mock videos data
  const videos = [
    {
      id: "1",
      title: "5 Signs of a Healthy Relationship",
      thumbnail:
        "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "3:45",
      views: "12.3K",
      likes: "892",
      uploadDate: "2 days ago",
    },
    {
      id: "2",
      title: "How to Rebuild Trust After Betrayal",
      thumbnail:
        "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "8:12",
      views: "8.7K",
      likes: "654",
      uploadDate: "1 week ago",
    },
  ]

  // Mock programs data
  const programs = [
    {
      id: "trust-building",
      title: "Trust Building Masterclass",
      description: "A comprehensive 21-day program to rebuild and strengthen trust in your relationship",
      duration: "21 days",
      participants: 1234,
      rating: 4.8,
      price: 149,
      image:
        "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "communication-course",
      title: "Effective Communication Course",
      description: "Learn to communicate with clarity, empathy, and understanding",
      duration: "14 days",
      participants: 892,
      rating: 4.9,
      price: 99,
      image:
        "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]

  // Mock sessions data
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
        name: coach.name,
        title: coach.title,
        avatar: coach.avatar,
        verified: coach.verified,
      },
      image:
        "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      capacity: 30,
      attendees: 18,
      type: "workshop",
      price: 45,
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
                  <AvatarImage src={coach.avatar || "/placeholder.svg"} alt={coach.name} />
                  <AvatarFallback>{coach.name[0]}</AvatarFallback>
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
                  <h1 className="text-xl font-bold">{coach.name}</h1>
                  {coach.verified && (
                    <Badge
                      variant="outline"
                      className="h-5 w-5 p-0 flex items-center justify-center rounded-full bg-primary"
                    >
                      <Check className="h-3 w-3 text-white" />
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground mb-1">@{coach.username}</p>
                <p className="font-medium text-primary mb-2">{coach.title}</p>
                <p className="text-sm mb-3">{coach.bio}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {coach.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Joined {coach.joinedDate}
                  </div>
                </div>

                <div className="flex gap-4 text-sm mb-4">
                  <span>
                    <strong>{coach.following}</strong> Following
                  </span>
                  <span>
                    <strong>{coach.followers}</strong> Followers
                  </span>
                  <span>
                    <strong>{coach.posts}</strong> Posts
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {coach.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="font-bold">{coach.rating}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{coach.reviewCount} reviews</p>
                  </div>
                  <div className="text-center">
                    <div className="font-bold mb-1">{coach.sessionsCompleted}</div>
                    <p className="text-xs text-muted-foreground">Sessions completed</p>
                  </div>
                  <div className="text-center">
                    <div className="font-bold mb-1">98%</div>
                    <p className="text-xs text-muted-foreground">Success rate</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue="posts" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="programs">Programs</TabsTrigger>
              <TabsTrigger value="sessions">Sessions</TabsTrigger>
              <TabsTrigger value="booking">Booking</TabsTrigger>
            </TabsList>

            <TabsContent value="posts" className="space-y-6 mt-6">
              {posts.map((post, index) => (
                <PostCard key={index} {...post} />
              ))}
            </TabsContent>

            <TabsContent value="videos" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {videos.map((video) => (
                  <Card key={video.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <div className="relative aspect-video">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2 line-clamp-2">{video.title}</h3>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{video.views} views</span>
                        <span>{video.uploadDate}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="programs" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {programs.map((program) => (
                  <Card key={program.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                      <Target className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {program.duration}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span className="text-xs">{program.rating}</span>
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2">{program.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{program.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{program.participants} enrolled</span>
                        <span className="font-bold">${program.price}</span>
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

            <TabsContent value="booking" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Book a Session with {coach.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-primary">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <Clock className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">30-min Consultation</h4>
                            <p className="text-sm text-muted-foreground">Quick relationship check-in</p>
                            <p className="font-bold text-primary">$75</p>
                          </div>
                        </div>
                      </Card>

                      <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-primary">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-green-100 rounded-lg">
                            <Users className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">60-min Couples Session</h4>
                            <p className="text-sm text-muted-foreground">Full therapy session</p>
                            <p className="font-bold text-primary">$150</p>
                          </div>
                        </div>
                      </Card>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Available Times This Week</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {["Mon 2:00 PM", "Tue 10:00 AM", "Wed 3:00 PM", "Thu 1:00 PM", "Fri 11:00 AM"].map((time) => (
                          <Button key={time} variant="outline" size="sm" className="text-xs bg-transparent">
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90">View Full Calendar & Book</Button>
                  </div>
                </CardContent>
              </Card>
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
