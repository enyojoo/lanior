"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { PostCard } from "@/components/post-card"
import { EventCard } from "@/components/event-card"
import {
  MapPin,
  Calendar,
  LinkIcon,
  Check,
  MessageCircle,
  Star,
  Users,
  Video,
  BookOpen,
  CalendarDays,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function CoachProfilePage() {
  const params = useParams()
  const username = params.username as string
  const [isFollowing, setIsFollowing] = useState(false)

  // Mock coach data
  const coach = {
    name: "Dr. Anna Hovsepyan",
    username: "drhovse",
    bio: "Licensed Marriage & Family Therapist | Helping couples build stronger connections | 15+ years experience | Author of 'The Connection Code'",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    coverImage:
      "https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    verified: true,
    location: "San Francisco, CA",
    website: "https://annahovsepyan.com",
    joinedDate: "March 2020",
    followers: "45.2K",
    following: "1,234",
    posts: "2,847",
    rating: 4.9,
    reviewCount: 1247,
    specialties: ["Communication", "Trust Building", "Conflict Resolution", "Intimacy"],
    credentials: ["Licensed MFT", "PhD Psychology", "Gottman Certified"],
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
      likes: "2.1K",
      views: "15.3K",
      comments: [
        {
          user: {
            name: "Maria Aleks",
            handle: "mariaaleks",
            avatar:
              "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            verified: true,
          },
          content: "These tips are so helpful! I've been working on #2 especially.",
          time: "2 hours ago",
        },
      ],
      time: "4 hours ago",
    },
    {
      user: {
        name: coach.name,
        handle: coach.username,
        avatar: coach.avatar,
        verified: coach.verified,
      },
      content:
        "Just finished an amazing couples workshop! Seeing the breakthrough moments when partners truly hear each other for the first time is why I love this work. Remember: it's not about being right, it's about being connected. 💕",
      image:
        "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes: "3.4K",
      views: "22.1K",
      comments: [
        {
          user: {
            name: "John Doe",
            handle: "johndoe",
            avatar:
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            verified: false,
          },
          content: "This workshop changed our relationship! Thank you Dr. Anna!",
          time: "1 day ago",
        },
      ],
      time: "2 days ago",
    },
  ]

  // Mock videos data
  const videos = [
    {
      id: "1",
      title: "3 Signs Your Relationship Needs Attention",
      thumbnail:
        "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "5:32",
      views: "125K",
      likes: "8.2K",
      uploadDate: "3 days ago",
    },
    {
      id: "2",
      title: "How to Have Difficult Conversations",
      thumbnail:
        "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      duration: "8:15",
      views: "89K",
      likes: "6.1K",
      uploadDate: "1 week ago",
    },
  ]

  // Mock programs data
  const programs = [
    {
      id: "trust-building-intensive",
      title: "Trust Building Intensive",
      description: "A comprehensive 21-day program to rebuild and strengthen trust in your relationship",
      duration: "21 days",
      price: 297,
      students: 1247,
      rating: 4.9,
      image:
        "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "communication-mastery",
      title: "Communication Mastery",
      description: "Master the art of effective communication in relationships",
      duration: "14 days",
      price: 197,
      students: 2156,
      rating: 4.8,
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
        type: "offline",
        address: "123 Relationship Center, San Francisco, CA",
        city: "San Francisco",
        country: "USA",
      },
      host: {
        name: coach.name,
        title: "Licensed MFT",
        avatar: coach.avatar,
        verified: coach.verified,
      },
      image:
        "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      capacity: 30,
      attendees: 18,
      type: "workshop",
      price: 75,
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      {/* Cover Image */}
      <div className="h-48 md:h-64 bg-gradient-to-r from-blue-400 to-purple-500 relative">
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${coach.coverImage})` }} />
      </div>

      {/* Profile Header */}
      <div className="px-4 pb-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16 md:-mt-20">
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            <Avatar className="h-32 w-32 border-4 border-background">
              <AvatarImage src={coach.avatar || "/placeholder.svg"} alt={coach.name} />
              <AvatarFallback className="text-2xl">{coach.name[0]}</AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl font-bold truncate">{coach.name}</h1>
                {coach.verified && (
                  <Badge
                    variant="outline"
                    className="h-5 w-5 p-0 flex items-center justify-center rounded-full bg-primary"
                  >
                    <Check className="h-3 w-3 text-white" />
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground mb-2">@{coach.username}</p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{coach.rating}</span>
                  <span>({coach.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{coach.followers} followers</span>
                </div>
              </div>
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
          <p className="text-sm leading-relaxed">{coach.bio}</p>

          <div className="flex flex-wrap gap-2">
            {coach.specialties.map((specialty) => (
              <Badge key={specialty} variant="secondary" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {coach.location && (
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{coach.location}</span>
              </div>
            )}
            {coach.website && (
              <div className="flex items-center gap-1">
                <LinkIcon className="h-4 w-4" />
                <Link href={coach.website} className="text-primary hover:underline" target="_blank">
                  {coach.website.replace("https://", "")}
                </Link>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>Joined {coach.joinedDate}</span>
            </div>
          </div>

          <div className="flex gap-4 text-sm">
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
            value="videos"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
          >
            Videos
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
            value="booking"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
          >
            Booking
          </TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="posts" className="space-y-6">
            {posts.map((post, index) => (
              <PostCard key={index} {...post} />
            ))}
          </TabsContent>

          <TabsContent value="videos" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {videos.map((video) => (
                <Card key={video.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video">
                    <div
                      className="w-full h-full bg-cover bg-center rounded-t-lg"
                      style={{ backgroundImage: `url(${video.thumbnail})` }}
                    />
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 rounded-full p-3">
                        <Video className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-sm mb-2 line-clamp-2">{video.title}</h3>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{video.views} views</span>
                      <span>{video.uploadDate}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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
                      <Badge variant="outline" className="text-xs">
                        {program.duration}
                      </Badge>
                      <span className="text-sm font-semibold text-primary">${program.price}</span>
                    </div>
                    <h3 className="font-semibold mb-2">{program.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{program.description}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{program.rating}</span>
                      </div>
                      <span>{program.students} students</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sessions.map((session) => (
                <EventCard key={session.id} event={session} basePath="sessions" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="booking" className="space-y-6">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Book a Session with {coach.name}</h3>
                <p className="text-muted-foreground">Choose a time that works for you</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Calendar placeholder */}
                  <div className="space-y-4">
                    <h4 className="font-medium">Available Times</h4>
                    <div className="border rounded-lg p-4 h-64 flex items-center justify-center text-muted-foreground">
                      <div className="text-center">
                        <CalendarDays className="h-8 w-8 mx-auto mb-2" />
                        <p>Calendar integration coming soon</p>
                      </div>
                    </div>
                  </div>

                  {/* Session types */}
                  <div className="space-y-4">
                    <h4 className="font-medium">Session Types</h4>
                    <div className="space-y-3">
                      <Card className="p-4 cursor-pointer hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-medium">Individual Consultation</h5>
                          <span className="text-primary font-semibold">$150</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          One-on-one session to discuss your relationship goals
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>60 minutes</span>
                        </div>
                      </Card>

                      <Card className="p-4 cursor-pointer hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-medium">Couples Session</h5>
                          <span className="text-primary font-semibold">$200</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">Joint session for you and your partner</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>90 minutes</span>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
