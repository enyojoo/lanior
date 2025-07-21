"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Heart, MessageCircle, Send, Check, Bookmark, X, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import { CustomDropdownMenu } from "@/components/custom-dropdown-menu"
import { CustomDialog, CustomDialogContent } from "@/components/ui/custom-dialog"
import { PostVideo } from "@/components/post-video"
import { cn } from "@/lib/utils"

export interface User {
  name: string
  handle: string
  avatar: string
  verified: boolean
}

export interface Comment {
  user: User
  content: string
  time: string
}

export interface PostCardProps {
  user: User
  content: string
  image?: string
  video?: string
  videoPoster?: string
  likes: string
  comments: Comment[]
  time: string
  views?: string
}

export function PostCard({ user, content, image, video, videoPoster, likes, comments, time, views }: PostCardProps) {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false)
  const [commentText, setCommentText] = useState("")
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isFollowing, setIsFollowing] = useState(false)
  const [localComments, setLocalComments] = useState(comments)
  const [isContentExpanded, setIsContentExpanded] = useState(false)
  const contentRef = useRef<HTMLParagraphElement>(null)
  const [isContentTruncated, setIsContentTruncated] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const { toast } = useToast()

  // Check if content needs to be truncated
  useEffect(() => {
    const checkTruncation = () => {
      if (contentRef.current) {
        // Get the original text content
        const fullText = contentRef.current.textContent || ""

        // Check if the element has overflow by comparing scrollHeight to clientHeight
        const isOverflowing = contentRef.current.scrollHeight > contentRef.current.clientHeight

        // Set truncated state based on overflow and content length
        setIsContentTruncated(isOverflowing && fullText.length > 100)
      }
    }

    // Run the check after a small delay to ensure rendering is complete
    const timer = setTimeout(checkTruncation, 10)

    // Re-check on window resize
    window.addEventListener("resize", checkTruncation)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", checkTruncation)
    }
  }, [content, isContentExpanded])

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

  const toggleComments = () => {
    setIsCommentsOpen(!isCommentsOpen)
  }

  const toggleFollow = () => {
    setIsFollowing(!isFollowing)
  }

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }

  // Function to convert URLs to clickable links
  const formatContent = (text: string) => {
    // URL regex pattern
    const urlPattern = /https?:\/\/[^\s]+/g

    // Replace URLs with anchor tags
    const formattedText = text.replace(urlPattern, (url) => {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">${url}</a>`
    })

    return formattedText
  }

  // Utility function to determine if content should be truncated
  const shouldTruncate = (text: string) => {
    // If text is longer than ~240 characters (roughly 3 lines), it likely needs truncation
    return text.length > 240
  }

  // Handle keyboard navigation for lightbox
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") setLightboxOpen(false)
  }

  return (
    <Card className="overflow-hidden border border-border">
      <CardHeader className="p-4">
        <div className="flex items-start space-x-4">
          <Avatar className="border-2 border-primary overflow-hidden">
            <AvatarImage src={user.avatar} alt={user.name} className="object-cover" />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <h3 className="font-semibold">{user.name}</h3>
                {user.verified && (
                  <Badge
                    variant="outline"
                    className="h-4 w-4 p-0 flex items-center justify-center rounded-full bg-primary"
                  >
                    <Check className="h-2.5 w-2.5 text-white" />
                  </Badge>
                )}
                <span className="text-sm text-muted-foreground">@{user.handle}</span>
              </div>
              <Button
                variant={isFollowing ? "default" : "outline"}
                size="sm"
                className={
                  isFollowing
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
                }
                onClick={toggleFollow}
              >
                {isFollowing ? "Following" : "Follow"}
              </Button>
            </div>
          </div>
        </div>

        {/* Post content with truncation */}
        <div className="mt-3">
          <div ref={contentRef} className={cn("relative", !isContentExpanded ? "post-content" : "")}>
            <p className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: formatContent(content) }} />
          </div>

          {(isContentTruncated || shouldTruncate(content)) && !isContentExpanded && (
            <button
              className="text-primary text-sm font-medium mt-1 hover:underline"
              onClick={() => setIsContentExpanded(true)}
            >
              See more
            </button>
          )}

          {isContentExpanded && (
            <button
              className="text-primary text-sm font-medium mt-1 hover:underline"
              onClick={() => setIsContentExpanded(false)}
            >
              See less
            </button>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-0">
        {/* Render video or image based on what's provided */}
        {video ? (
          <PostVideo videoSrc={video} posterSrc={videoPoster} />
        ) : image ? (
          <div
            className="relative w-full cursor-pointer overflow-hidden"
            style={{ aspectRatio: "16/9" }}
            onClick={() => setLightboxOpen(true)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt="Post image"
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        ) : null}

        {/* Lightbox for images */}
        {image && (
          <CustomDialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
            <CustomDialogContent
              className="max-w-5xl w-full p-0 bg-transparent border-none shadow-none"
              onKeyDown={handleKeyDown}
            >
              <div className="relative flex items-center justify-center">
                <div className="relative w-full max-h-[80vh] flex items-center justify-center">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt="Post image"
                    width={1200}
                    height={800}
                    className="object-contain max-h-[80vh] rounded-md"
                  />

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full"
                    onClick={() => setLightboxOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CustomDialogContent>
          </CustomDialog>
        )}

        <div className="p-4">
          <div className="flex items-center justify-between text-muted-foreground mb-2 relative">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1 p-0 h-auto hover:text-primary"
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart className={`w-5 h-5 ${isLiked ? "fill-primary text-primary" : ""}`} />
                <span>{likes}</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1 p-0 h-auto hover:text-primary"
                onClick={toggleComments}
              >
                <MessageCircle className="w-5 h-5" />
                <span>{localComments.length}</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1 p-0 h-auto hover:text-primary"
                onClick={toggleBookmark}
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked ? "fill-primary text-primary" : ""}`} />
              </Button>

              <span className="text-xs text-muted-foreground">{time}</span>
            </div>

            <div className="flex items-center gap-3">
              {views && (
                <div className="flex items-center gap-1 p-0 h-auto text-muted-foreground">
                  <Eye className="w-5 h-5" />
                  <span className="text-sm">{views}</span>
                </div>
              )}

              {/* Dropdown menu with improved positioning */}
              <div className="relative z-50">
                <CustomDropdownMenu
                  trigger={
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <circle cx="5" cy="12" r="1" />
                      </svg>
                    </Button>
                  }
                  items={[
                    {
                      label: "Copy link",
                      onClick: () => {
                        navigator.clipboard.writeText(window.location.href)
                        toast({
                          title: "Link copied",
                          description: "Post link has been copied to clipboard",
                          variant: "default",
                        })
                      },
                    },
                    {
                      label: "Report",
                      onClick: () => {
                        toast({
                          title: "Report submitted",
                          description: "Thank you for your feedback",
                          variant: "default",
                        })
                      },
                      className: "text-destructive",
                    },
                  ]}
                  side="top"
                  align="end"
                />
              </div>
            </div>
          </div>

          {isCommentsOpen && (
            <div className="mt-4 space-y-4">
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

              <div className="space-y-4 pt-2">
                {localComments.map((comment, index) => (
                  <div key={index} className="flex gap-2">
                    <Avatar className="h-8 w-8 border-2 border-primary overflow-hidden">
                      <AvatarImage src={comment.user.avatar} alt={comment.user.name} className="object-cover" />
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
          )}
        </div>
      </CardContent>
    </Card>
  )
}

