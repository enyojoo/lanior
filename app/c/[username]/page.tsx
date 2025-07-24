"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PostCard } from "@/components/post-card"
import { EventCard } from "@/components/event-card"
import { SidebarContent } from "@/components/sidebar-content"
import { MapPin, Calendar, LinkIcon, Check, Star, Play, Clock, Target } from "lucide-react"

export default function CoachProfilePage() {
  const params = useParams()
  const username = params.username as string
  const [isFollowing, setIsFollowing] = useState(false)

  // Mock coach data
  const coach = {
    name: "Dr. Anna Hovsepyan",
    username: "drhovse",
    bio: "Relationship Expert & Licensed Therapist helping couples build stronger connections. 15+ years experience. Author of 'Love That Lasts'.",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    coverImage:
      "https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    verified: true,
    location: "New York, NY",
    website: "https://annahovsepyan.com",
    joinedDate: "March 2020",
    followers: "125.3K",
    following: "2,847",
    posts: "1,234",
    rating: 4.9,
    reviewCount: 2847,
    specialties: ["Communication", "Trust Building", "Conflict Resolution", "Intimacy"],
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
        "Trust is the foundation of any healthy relationship. Here are my top 3 tips to build trust with your partner: 1. Be consistent in your words and actions 2. Practice active listening 3. Be vulnerable and share your feelings openly. What has helped you build trust in your relationship? #RelationshipAdvice #Trust",
      likes: "110.3K",
      views: "289.7K",
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
        "Communication isn't just about talking - it's about truly understanding each other. In my latest program, we dive deep into the art of empathetic listening. Link in bio to learn more! 💕",
      image:
        "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes: "85.7K",
      views: "178.5K",
      comments: [
        {
          user: {
            name: "John Doe",
            handle: "johndoe",
            avatar:
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            verified: false,
          },
          content: "Just signed up for your program! Can't wait to start.",
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
      title: "3 Signs Your Relationship Needs Attention",
      thumbnail:
        "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "2:45",
      views: "125.3K",
      likes: "8.2K",
      uploadDate: "2 days ago",
    },
    {
      id: "2",
      title: "How to Have Difficult Conversations",
      thumbnail:
        "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "4:12",
      views: "89.7K",
      likes: "6.1K",
      uploadDate: "5 days ago",
    },
  ]

  // Mock programs data
  const programs = [
    {
      id: "communication-mastery",
      title: "Communication Mastery",
      description: "Transform how you connect through 21 days of expert-guided practice",
      duration: "21 days",
      participants: 1247,
      rating: 4.9,
      price: 97,
      image:
        "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "trust-building",
      title: "Trust Building Intensive",
      description: "Rebuild and strengthen trust in your relationship",
      duration: "14 days",
      participants: 892,
      rating: 4.8,
      price: 67,
      image:
        "https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
        title: "Relationship Expert",
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
        <div className="lg:col-span-2">
          {/* Profile Header */}
          <Card className="mb-6">
            <div className="relative">
              {/* Cover Image */}
              <div
                className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-lg"
                style={{
                  backgroundImage: `url(${coach.coverImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Profile Info */}
              <div className="px-6 pb-6">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between -mt-16 mb-4">
                  <Avatar className="h-32 w-32 border-4 border-background">
                    <AvatarImage src={coach.avatar || "/placeholder.svg"} alt={coach.name} />
                    <AvatarFallback className="text-2xl">{coach.name[0]}</AvatarFallback>
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
                      <h1 className="text-2xl font-bold">{coach.name}</h1>
                      {coach.verified && (
                        <Badge
                          variant="outline"
                          className="h-5 w-5 p-0 flex items-center justify-center rounded-full bg-primary"
                        >
                          <Check className="h-3 w-3 text-white" />
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground">@{coach.username}</p>
                  </div>

                  <p className="text-sm">{coach.bio}</p>

                  <div className="flex flex-wrap gap-2">
                    {coach.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {coach.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <LinkIcon className="h-4 w-4" />
                      <a href={coach.website} className="text-primary hover:underline">
                        {coach.website.replace("https://", "")}
                      </a>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Joined {coach.joinedDate}
                    </div>
                  </div>

                  <div className="flex gap-6 text-sm">
                    <div>
                      <span className="font-semibold">{coach.following}</span>
                      <span className="text-muted-foreground ml-1">Following</span>
                    </div>
                    <div>
                      <span className="font-semibold">{coach.followers}</span>
                      <span className="text-muted-foreground ml-1">Followers</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{coach.rating}</span>
                      <span className="text-muted-foreground">({coach.reviewCount.toLocaleString()} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                  <Card key={video.id} className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
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
                      <h3 className="font-semibold text-sm mb-2 line-clamp-2">{video.title}</h3>
                      <div className="flex justify-between text-xs text-muted-foreground">
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
                  <Card key={program.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                      <Target className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {program.duration}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs">{program.rating}</span>
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2">{program.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{program.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          {program.participants.toLocaleString()} enrolled
                        </span>
                        <span className="font-semibold">${program.price}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sessions" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sessions.map((session) => (
                  <EventCard key={session.id} event={session} basePath="sessions" />
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
                      <Card className="p-4 border-2 hover:border-primary cursor-pointer transition-colors">
                        <div className="flex items-center gap-3">
                          <Clock className="h-8 w-8 text-primary" />
                          <div>
                            <h3 className="font-semibold">30-min Consultation</h3>
                            <p className="text-sm text-muted-foreground">Quick relationship check-in</p>
                            <p className="font-semibold text-primary">$75</p>
                          </div>
                        </div>
                      </Card>

                      <Card className="p-4 border-2 hover:border-primary cursor-pointer transition-colors">
                        <div className="flex items-center gap-3">
                          <Clock className="h-8 w-8 text-primary" />
                          <div>
                            <h3 className="font-semibold">60-min Deep Dive</h3>
                            <p className="text-sm text-muted-foreground">Comprehensive relationship session</p>
                            <p className="font-semibold text-primary">$150</p>
                          </div>
                        </div>
                      </Card>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Available Times This Week</h4>
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
