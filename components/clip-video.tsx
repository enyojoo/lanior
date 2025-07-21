"use client"

import { useState, useRef, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

interface ClipVideoProps {
  clip: {
    id: string
    title: string
    description?: string
    videoSrc: string
    thumbnailSrc: string
    likes: string
    comments: string
    shares: string
    expert: {
      name: string
      handle: string
      avatar: string
      verified: boolean
      title: string
    }
  }
  onNext: () => void
  onPrevious: () => void
  isActive: boolean
}

export function ClipVideo({ clip, onNext, onPrevious, isActive }: ClipVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isFollowing, setIsFollowing] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Handle play/pause when active state changes
  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.play().catch((err) => console.error("Error playing video:", err))
      setIsPlaying(true)
    } else if (videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }, [isActive])

  // Handle mute/unmute
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
    }
  }, [isMuted])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play().catch((err) => console.error("Error playing video:", err))
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const toggleLike = () => {
    setIsLiked(!isLiked)
  }

  const toggleFollow = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <div className="relative h-full w-full" onClick={togglePlay}>
      {/* Video */}
      <div className="relative h-full w-full">
        <video
          ref={videoRef}
          src={clip.videoSrc}
          poster={clip.thumbnailSrc}
          className="h-full w-full object-cover"
          loop
          playsInline
        />

        {/* Gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 pointer-events-none"></div>

        {/* Title at the top */}
        <div className="absolute top-4 left-4 right-16 z-10">
          <div className="bg-primary text-white py-2 px-4 rounded-full">
            <h3 className="text-sm font-medium unbounded">{clip.title}</h3>
          </div>
        </div>

        {/* Expert info and follow button at the bottom */}
        <div className="absolute bottom-6 left-4 right-16 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 border-2 border-primary overflow-hidden">
                <AvatarImage src={clip.expert.avatar} alt={clip.expert.name} className="object-cover" />
                <AvatarFallback>{clip.expert.name[0]}</AvatarFallback>
              </Avatar>
              <div className="ml-2">
                <div className="flex items-center gap-1">
                  <p className="text-white text-sm font-medium">{clip.expert.name}</p>
                  {clip.expert.verified && (
                    <Badge
                      variant="outline"
                      className="h-4 w-4 p-0 flex items-center justify-center rounded-full bg-primary"
                    >
                      <Check className="h-2.5 w-2.5 text-white" />
                    </Badge>
                  )}
                </div>
                <p className="text-white/70 text-xs">
                  @{clip.expert.handle} · {clip.expert.title}
                </p>
              </div>
            </div>
            <Button
              variant={isFollowing ? "default" : "outline"}
              size="sm"
              className={
                isFollowing ? "bg-primary hover:bg-primary/90 text-white" : "border-white text-white hover:bg-white/20"
              }
              onClick={(e) => {
                e.stopPropagation()
                toggleFollow()
              }}
            >
              {isFollowing ? "Following" : "Follow"}
            </Button>
          </div>

          {/* Description */}
          {clip.description && <p className="text-white text-sm mt-2">{clip.description}</p>}
        </div>
      </div>
    </div>
  )
}
