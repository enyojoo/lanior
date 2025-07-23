"use client"

import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Play, Clock, Eye, Heart, Share2 } from "lucide-react"

export default function VideosPage() {
  const videos = [
    {
      id: 1,
      title: "5 Daily Habits for Stronger Relationships",
      description: "Simple practices you can implement today to strengthen your bond",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "8:45",
      views: 12500,
      likes: 890,
      uploadDate: "2 days ago",
      creator: {
        name: "Dr. Sarah Johnson",
        image: "/placeholder.svg?height=32&width=32",
        verified: true,
      },
      category: "Daily Practices",
      tags: ["Habits", "Daily", "Connection"],
    },
    {
      id: 2,
      title: "How to Have Difficult Conversations",
      description: "Navigate challenging topics with grace and understanding",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "12:30",
      views: 8900,
      likes: 654,
      uploadDate: "5 days ago",
      creator: {
        name: "Mark Thompson",
        image: "/placeholder.svg?height=32&width=32",
        verified: true,
      },
      category: "Communication",
      tags: ["Communication", "Conflict", "Skills"],
    },
    {
      id: 3,
      title: "Rebuilding Trust After Betrayal",
      description: "A step-by-step guide to healing and moving forward together",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "15:20",
      views: 15600,
      likes: 1200,
      uploadDate: "1 week ago",
      creator: {
        name: "Lisa Chen",
        image: "/placeholder.svg?height=32&width=32",
        verified: true,
      },
      category: "Healing",
      tags: ["Trust", "Healing", "Recovery"],
    },
    {
      id: 4,
      title: "Love Languages in Action",
      description: "Practical examples of how to speak your partner's love language",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "10:15",
      views: 22100,
      likes: 1800,
      uploadDate: "3 days ago",
      creator: {
        name: "Dr. Michael Rodriguez",
        image: "/placeholder.svg?height=32&width=32",
        verified: true,
      },
      category: "Love Languages",
      tags: ["Love Languages", "Expression", "Understanding"],
    },
    {
      id: 5,
      title: "Creating Intimacy Through Vulnerability",
      description: "How opening up can deepen your emotional connection",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "11:45",
      views: 9800,
      likes: 720,
      uploadDate: "4 days ago",
      creator: {
        name: "Dr. Sarah Johnson",
        image: "/placeholder.svg?height=32&width=32",
        verified: true,
      },
      category: "Intimacy",
      tags: ["Intimacy", "Vulnerability", "Connection"],
    },
    {
      id: 6,
      title: "Managing Relationship Stress",
      description: "Tools and techniques for handling stress as a couple",
      thumbnail: "/placeholder.svg?height=200&width=300",
      duration: "9:30",
      views: 7200,
      likes: 540,
      uploadDate: "6 days ago",
      creator: {
        name: "Mark Thompson",
        image: "/placeholder.svg?height=32&width=32",
        verified: true,
      },
      category: "Stress Management",
      tags: ["Stress", "Coping", "Support"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Videos" />

      <div className="flex-1 p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Relationship Videos</h2>
          <p className="text-muted-foreground">Expert advice and practical tips to strengthen your relationship</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-3 group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 text-black fill-black" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2">
                  <Badge variant="secondary" className="bg-black/70 text-white text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    {video.duration}
                  </Badge>
                </div>
                <div className="absolute top-2 left-2">
                  <Badge variant="secondary" className="bg-white/90 text-black text-xs">
                    {video.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{video.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{video.description}</p>

                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={video.creator.image || "/placeholder.svg"} alt={video.creator.name} />
                    <AvatarFallback>
                      {video.creator.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{video.creator.name}</p>
                    <p className="text-xs text-muted-foreground">{video.uploadDate}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{video.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{video.likes}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex flex-wrap gap-1">
                  {video.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
