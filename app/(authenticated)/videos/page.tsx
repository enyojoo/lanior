"use client"

import type React from "react"
import type { Metadata } from "next"

import { useState, useRef, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Check,
  ChevronDown,
  ChevronUp,
  Heart,
  MessageCircle,
  Volume2,
  VolumeX,
  MoreHorizontal,
  Send,
  Play,
  Pause,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Note: This metadata would typically be set in a parent layout or using generateMetadata
const pageMetadata: Metadata = {
  title: "Videos - Lanior",
  description:
    "Lanior is the relationship wellness ecosystem that helps modern couples build thriving, lasting partnerships through expert guidance, community support, and personalized growth programs.",
}

// Sample comment type
interface Comment {
  user: {
    name: string
    handle: string
    avatar: string
    verified: boolean
  }
  content: string
  time: string
}

// Sample videos data
const videosData = [
  {
    id: "1",
    description:
      "Trust is the foundation of any healthy relationship. Here are my top 3 tips to build trust with your partner.",
    videoSrc: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    expert: {
      name: "Anna Hovsepyan",
      handle: "drhovse",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: true,
      title: "Top Expert",
    },
    likes: "110.3K",
    comments: "30K",
    commentsList: [
      {
        user: {
          name: "Maria Aleks",
          handle: "mariaaleks",
          avatar:
            "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          verified: true,
        },
        content:
          "These tips are so helpful! I've been working on building trust with my partner and these strategies have made a huge difference.",
        time: "2 hours ago",
      },
      {
        user: {
          name: "Sergey Ovsipenko",
          handle: "sergeyov",
          avatar:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          verified: false,
        },
        content: "I love how you explained the importance of consistency. That's something I need to work on!",
        time: "5 hours ago",
      },
      {
        user: {
          name: "Diana Kirsch",
          handle: "dianakirsch",
          avatar:
            "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          verified: true,
        },
        content:
          "Great advice as always! Would love to see more content about rebuilding trust after it's been broken.",
        time: "1 day ago",
      },
    ],
  },
  {
    id: "2",
    description: "Effective communication is key to resolving conflicts and deepening your connection.",
    videoSrc: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    expert: {
      name: "Maria Aleks",
      handle: "mariaaleks",
      avatar:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: true,
      title: "Communication Expert",
    },
    likes: "85.7K",
    comments: "12K",
    commentsList: [
      {
        user: {
          name: "Anna Hovsepyan",
          handle: "drhovse",
          avatar:
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          verified: true,
        },
        content: "This is exactly what I teach my clients! Active listening is so underrated.",
        time: "3 hours ago",
      },
      {
        user: {
          name: "John Doe",
          handle: "johndoe",
          avatar:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          verified: false,
        },
        content: "My wife and I tried these techniques and it's already helping us understand each other better.",
        time: "1 day ago",
      },
    ],
  },
  {
    id: "3",
    description: "Learn how to turn arguments into opportunities for growth.",
    videoSrc: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    expert: {
      name: "Andrey Gavrilov",
      handle: "andreygavrilov",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: false,
      title: "Conflict Resolution",
    },
    likes: "62.1K",
    comments: "8.5K",
    commentsList: [
      {
        user: {
          name: "Anna Ivanova",
          handle: "annaivanova",
          avatar:
            "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          verified: true,
        },
        content: "I've been using the 'pause and reflect' technique you mentioned and it's been a game-changer!",
        time: "4 hours ago",
      },
    ],
  },
  {
    id: "4",
    description: "Simple daily practices to maintain the spark in your relationship.",
    videoSrc: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    expert: {
      name: "Anna Ivanova",
      handle: "annaivanova",
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: true,
      title: "Relationship Coach",
    },
    likes: "94.2K",
    comments: "15.3K",
    commentsList: [
      {
        user: {
          name: "Maria Aleks",
          handle: "mariaaleks",
          avatar:
            "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          verified: true,
        },
        content: "The idea about surprise date nights is so simple but effective!",
        time: "1 day ago",
      },
      {
        user: {
          name: "Diana Kirsch",
          handle: "dianakirsch",
          avatar:
            "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          verified: true,
        },
        content: "I'm going to try the gratitude practice with my husband tonight. Thanks for the inspiration!",
        time: "2 days ago",
      },
    ],
  },
  {
    id: "5",
    description: "Navigating parenthood together strengthens your bond as a couple.",
    videoSrc: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    expert: {
      name: "Renat Dovlatov",
      handle: "renatdovlatov",
      avatar:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: true,
      title: "Parenting Expert",
    },
    likes: "73.8K",
    comments: "9.7K",
    commentsList: [
      {
        user: {
          name: "John Doe",
          handle: "johndoe",
          avatar:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          verified: false,
        },
        content: "As a new dad, I really needed this advice. Thank you!",
        time: "6 hours ago",
      },
    ],
  },
  {
    id: "6",
    description: "Learn how to deepen your emotional connection with your partner.",
    videoSrc: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    expert: {
      name: "Diana Kirsch",
      handle: "dianakirsch",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: true,
      title: "Intimacy Counselor",
    },
    likes: "88.5K",
    comments: "14.2K",
    commentsList: [
      {
        user: {
          name: "Anna Hovsepyan",
          handle: "drhovse",
          avatar:
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          verified: true,
        },
        content: "I love how you explained the difference between emotional and physical intimacy. So important!",
        time: "1 day ago",
      },
      {
        user: {
          name: "Sergey Ovsipenko",
          handle: "sergeyov",
          avatar:
            "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          verified: false,
        },
        content: "The vulnerability exercise you suggested has been transformative for my relationship.",
        time: "3 days ago",
      },
    ],
  },
]

export default function VideosPage() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isFollowing, setIsFollowing] = useState(false)
  const [isCommentsOpen, setIsCommentsOpen] = useState(false)
  const [commentText, setCommentText] = useState("")
  const [localComments, setLocalComments] = useState<Comment[]>([])
  const [progress, setProgress] = useState(0)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const commentsRef = useRef<HTMLDivElement>(null)

  const currentVideo = videosData[currentVideoIndex]

  // Initialize local comments when current video changes
  useEffect(() => {
    setLocalComments(currentVideo.commentsList || [])
    setIsCommentsOpen(false)
    setProgress(0)
    setVideoLoaded(false)
  }, [currentVideoIndex, currentVideo.commentsList])

  // Prevent body scrolling when on videos page
  useEffect(() => {
    // Save the original overflow style
    const originalStyle = document.body.style.overflow
    // Prevent scrolling on the body
    document.body.style.overflow = "hidden"

    // Restore original style when component unmounts
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [])

  // Update the useEffect that handles video playback when the current video changes
  useEffect(() => {
    // Reset states when changing videos
    setIsPlaying(false)
    setVideoLoaded(false)
    setProgress(0)

    const video = videoRef.current
    if (!video) return

    // Wait for the video to be loaded before attempting to play
    const handleCanPlay = () => {
      if (video && videoRef.current === video) {
        // Make sure we're still on the same video
        setVideoLoaded(true)
        // Only autoplay if this is still the current video element
        video
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.error("Error playing video:", err)
            setIsPlaying(false)
          })
      }
    }

    // Add event listeners
    video.addEventListener("canplay", handleCanPlay)

    // Clean up
    return () => {
      video.removeEventListener("canplay", handleCanPlay)
      // Ensure we stop any ongoing playback when changing videos
      if (video) {
        video.pause()
        video.currentTime = 0
      }
    }
  }, [currentVideoIndex])

  // Handle mute/unmute
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
    }
  }, [isMuted])

  // Update progress bar
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateProgress = () => {
      const currentProgress = (video.currentTime / video.duration) * 100
      setProgress(currentProgress)
    }

    const handleLoadedData = () => {
      setVideoLoaded(true)
    }

    video.addEventListener("timeupdate", updateProgress)
    video.addEventListener("loadeddata", handleLoadedData)

    return () => {
      video.removeEventListener("timeupdate", updateProgress)
      video.removeEventListener("loadeddata", handleLoadedData)
    }
  }, [currentVideoIndex])

  const goToNextVideo = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setVideoLoaded(false)

    // Fade out current video
    if (videoRef.current) {
      videoRef.current.classList.add("opacity-0")
      videoRef.current.classList.remove("opacity-100")
    }

    // Wait for fade out animation to complete
    setTimeout(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex === videosData.length - 1 ? 0 : prevIndex + 1))

      // Reset transition state after a delay to allow new video to load
      setTimeout(() => {
        setIsTransitioning(false)
        if (videoRef.current) {
          videoRef.current.classList.add("opacity-100")
          videoRef.current.classList.remove("opacity-0")
        }
      }, 100)
    }, 300)
  }

  const goToPreviousVideo = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setVideoLoaded(false)

    // Fade out current video
    if (videoRef.current) {
      videoRef.current.classList.add("opacity-0")
      videoRef.current.classList.remove("opacity-100")
    }

    // Wait for fade out animation to complete
    setTimeout(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex === 0 ? videosData.length - 1 : prevIndex - 1))

      // Reset transition state after a delay to allow new video to load
      setTimeout(() => {
        setIsTransitioning(false)
        if (videoRef.current) {
          videoRef.current.classList.add("opacity-100")
          videoRef.current.classList.remove("opacity-0")
        }
      }, 100)
    }, 300)
  }

  // Also update the togglePlay function to handle errors properly:
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.error("Error playing video:", err)
            setIsPlaying(false)
          })
      }
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

  const toggleComments = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsCommentsOpen(!isCommentsOpen)
  }

  const handleAddComment = () => {
    if (commentText.trim()) {
      const newComment = {
        user: {
          name: "John Doe",
          handle: "johndoe",
          avatar:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          verified: false,
        },
        content: commentText,
        time: "Just now",
      }

      setLocalComments([newComment, ...localComments])
      setCommentText("")
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't navigate videos if comments are open or during transition
      if (isCommentsOpen || isTransitioning) return

      if (e.key === "ArrowUp") {
        e.preventDefault()
        goToPreviousVideo()
      } else if (e.key === "ArrowDown") {
        e.preventDefault()
        goToNextVideo()
      } else if (e.key === " " || e.key === "Spacebar") {
        e.preventDefault()
        togglePlay()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isCommentsOpen, isPlaying, isTransitioning])

  // Handle mouse wheel scrolling
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // If comments are open or during transition, don't allow video scrolling
      if (isCommentsOpen || isTransitioning) {
        // Only allow scrolling if we're inside the comments section
        if (!(e.target as Element).closest(".overflow-y-auto")) {
          e.preventDefault()
        }
        return
      }

      // Only handle wheel events on the video container, not in comments
      if (e.target && !(e.target as Element).closest(".comments-section")) {
        e.preventDefault() // Prevent any scrolling
        if (e.deltaY > 0) {
          goToNextVideo()
        } else if (e.deltaY < 0) {
          goToPreviousVideo()
        }
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false })
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel)
      }
    }
  }, [isCommentsOpen, isTransitioning])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex flex-col justify-center items-center overflow-auto"
      style={{ height: "calc(100vh - 3.5rem)", top: "3.5rem" }}
    >
      <h1 className="sr-only">Videos</h1>

      <div className="relative flex justify-center items-center">
        {/* Video container with 9:16 aspect ratio and padding */}
        <div
          className="relative"
          style={{
            height: "calc(100vh - 3.5rem - 40px)",
            aspectRatio: "9/16",
            maxHeight: "calc(100vh - 3.5rem - 40px)",
          }}
        >
          {/* Video */}
          <div className="relative h-full w-full rounded-lg overflow-hidden" onClick={togglePlay}>
            {/* Update the video element to add preload and muted attributes */}
            <video
              ref={videoRef}
              src={currentVideo.videoSrc}
              className="h-full w-full object-cover transition-opacity duration-300 opacity-100"
              loop
              playsInline
              preload="auto"
              muted={isMuted}
            />

            {/* Loading indicator */}
            {(!videoLoaded || isTransitioning) && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {/* Play/Pause button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className={`p-4 rounded-full bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100"} hover:opacity-100`}
                onClick={(e) => {
                  e.stopPropagation()
                  togglePlay()
                }}
              >
                {isPlaying ? <Pause className="h-8 w-8 text-white" /> : <Play className="h-8 w-8 text-white" />}
              </button>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800/50">
              <div className="h-full bg-primary" style={{ width: `${progress}%` }}></div>
            </div>

            {/* Gradient overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 pointer-events-none"></div>

            {/* Expert info and follow button at the bottom */}
            <div className="absolute bottom-6 left-4 right-16 z-10">
              <div className="flex flex-col space-y-2">
                {/* Expert info and follow button in the same container */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center flex-1 min-w-0 pr-2">
                    <Avatar className="h-10 w-10 border-2 border-primary overflow-hidden flex-shrink-0">
                      <AvatarImage
                        src={currentVideo.expert.avatar || "/placeholder.svg"}
                        alt={currentVideo.expert.name}
                        className="object-cover"
                      />
                      <AvatarFallback>{currentVideo.expert.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="ml-2 overflow-hidden">
                      <div className="flex items-center gap-1">
                        <p className="text-white text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                          {currentVideo.expert.name}
                        </p>
                        {currentVideo.expert.verified && (
                          <Badge
                            variant="outline"
                            className="h-4 w-4 p-0 flex items-center justify-center rounded-full bg-primary flex-shrink-0"
                          >
                            <Check className="h-2.5 w-2.5 text-white" />
                          </Badge>
                        )}
                      </div>
                      <p className="text-white/70 text-xs whitespace-nowrap overflow-hidden text-ellipsis">
                        {currentVideo.expert.title}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant={isFollowing ? "default" : "outline"}
                    className={cn(
                      "h-7 text-xs px-2 py-0 flex-shrink-0",
                      isFollowing ? "bg-primary text-white" : "border-primary/50 text-primary",
                    )}
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFollow()
                    }}
                  >
                    {isFollowing ? "Following" : "Follow"}
                  </Button>
                </div>

                {/* Description - reduced size */}
                {currentVideo.description && <p className="text-white/90 text-xs">{currentVideo.description}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Side controls - positioned right next to the video */}
        <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-20">
          {/* Mute/Unmute button */}
          <button
            className="flex flex-col items-center justify-center"
            onClick={(e) => {
              e.stopPropagation()
              toggleMute()
            }}
          >
            <div
              className={cn(
                "p-3 rounded-full flex items-center justify-center",
                "bg-primary/20 dark:bg-primary/30 hover:bg-primary/30 dark:hover:bg-primary/40",
              )}
            >
              {isMuted ? (
                <VolumeX className="h-6 w-6 text-primary dark:text-white" />
              ) : (
                <Volume2 className="h-6 w-6 text-primary dark:text-white" />
              )}
            </div>
          </button>

          {/* Like button */}
          <button
            className="flex flex-col items-center justify-center"
            onClick={(e) => {
              e.stopPropagation()
              toggleLike()
            }}
          >
            <div
              className={cn(
                "p-3 rounded-full flex items-center justify-center",
                "bg-primary/20 dark:bg-primary/30 hover:bg-primary/30 dark:hover:bg-primary/40",
              )}
            >
              <Heart
                className={cn(
                  "h-6 w-6",
                  isLiked
                    ? "fill-primary text-primary dark:fill-white dark:text-white"
                    : "text-primary dark:text-white",
                )}
              />
            </div>
            <span className="text-primary dark:text-white text-xs mt-1">{currentVideo.likes}</span>
          </button>

          {/* Comment button */}
          <button className="flex flex-col items-center justify-center" onClick={toggleComments}>
            <div
              className={cn(
                "p-3 rounded-full flex items-center justify-center",
                isCommentsOpen
                  ? "bg-primary text-white"
                  : "bg-primary/20 dark:bg-primary/30 hover:bg-primary/30 dark:hover:bg-primary/40",
              )}
            >
              <MessageCircle
                className={cn("h-6 w-6", isCommentsOpen ? "text-white" : "text-primary dark:text-white")}
              />
            </div>
            <span className="text-primary dark:text-white text-xs mt-1">{currentVideo.comments}</span>
          </button>

          {/* More options button */}
          <button className="flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <div
              className={cn(
                "p-3 rounded-full flex items-center justify-center",
                "bg-primary/20 dark:bg-primary/30 hover:bg-primary/30 dark:hover:bg-primary/40",
              )}
            >
              <MoreHorizontal className="h-6 w-6 text-primary dark:text-white" />
            </div>
          </button>

          {/* Navigation controls */}
          <div className="mt-6 flex flex-col items-center gap-4">
            <button
              className={cn(
                "p-3 rounded-full flex items-center justify-center",
                "bg-primary/20 dark:bg-primary/30 hover:bg-primary/30 dark:hover:bg-primary/40",
                isTransitioning && "opacity-50 cursor-not-allowed",
              )}
              onClick={(e) => {
                e.stopPropagation()
                if (!isTransitioning) goToPreviousVideo()
              }}
              disabled={isTransitioning}
            >
              <ChevronUp className="h-6 w-6 text-primary dark:text-white" />
            </button>
            <button
              className={cn(
                "p-3 rounded-full flex items-center justify-center",
                "bg-primary/20 dark:bg-primary/30 hover:bg-primary/30 dark:hover:bg-primary/40",
                isTransitioning && "opacity-50 cursor-not-allowed",
              )}
              onClick={(e) => {
                e.stopPropagation()
                if (!isTransitioning) goToNextVideo()
              }}
              disabled={isTransitioning}
            >
              <ChevronDown className="h-6 w-6 text-primary dark:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Comments section - slide in from right */}
      {isCommentsOpen && (
        <div
          className="fixed top-[3.5rem] right-0 bottom-0 w-full sm:w-[400px] bg-background border-l border-border z-30 transform transition-transform duration-300 ease-in-out"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Comments</h3>
              <Button variant="ghost" size="sm" onClick={toggleComments} className="text-muted-foreground">
                Close
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {/* Comments list */}
              <div className="space-y-4">
                {localComments.map((comment, index) => (
                  <div key={index} className="flex gap-2">
                    <Avatar className="h-8 w-8 border-2 border-primary overflow-hidden flex-shrink-0">
                      <AvatarImage
                        src={comment.user.avatar || "/placeholder.svg"}
                        alt={comment.user.name}
                        className="object-cover"
                      />
                      <AvatarFallback>{comment.user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-1">
                        <span className="font-medium text-sm">{comment.user.name}</span>
                        {comment.user.verified && (
                          <Badge
                            variant="outline"
                            className="h-3.5 w-3.5 p-0 flex items-center justify-center rounded-full bg-primary"
                          >
                            <Check className="h-2 w-2 text-white" />
                          </Badge>
                        )}
                        <span className="text-xs text-muted-foreground">@{comment.user.handle}</span>
                      </div>
                      <p className="text-sm">{comment.content}</p>
                      <p className="text-xs text-muted-foreground mt-1">{comment.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Add comment input - fixed at bottom */}
            <div className="border-t p-4">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 border-2 border-primary overflow-hidden">
                  <AvatarImage
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Your avatar"
                    className="object-cover"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1 flex gap-2">
                  <Input
                    placeholder="Add a comment..."
                    className="flex-1"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleAddComment()
                      }
                    }}
                  />
                  <Button size="icon" onClick={handleAddComment}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
