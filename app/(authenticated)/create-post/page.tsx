"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Image, Video, X } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function CreatePostPage() {
  const [content, setContent] = useState("")
  const [mediaType, setMediaType] = useState<"none" | "image" | "video">("none")
  const [mediaUrl, setMediaUrl] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!content.trim()) {
      toast({
        title: "Error",
        description: "Please enter some content for your post",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success",
        description: "Your post has been published!",
        variant: "default",
      })
      setIsSubmitting(false)
      router.push("/feed")
    }, 1500)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold unbounded mb-6">Create Post</h1>

      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>New Post</CardTitle>
            <div className="flex items-center gap-3 mt-4">
              <Avatar className="h-10 w-10 border-2 border-primary overflow-hidden">
                <AvatarImage
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Your avatar"
                  className="object-cover"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">@johndoe</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="content">Post Content</Label>
              <Textarea
                id="content"
                placeholder="What's on your mind?"
                className="min-h-[150px]"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Add Media (Optional)</Label>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={mediaType === "image" ? "default" : "outline"}
                  className={mediaType === "image" ? "bg-primary text-white" : ""}
                  onClick={() => {
                    setMediaType(mediaType === "image" ? "none" : "image")
                    setMediaUrl("")
                  }}
                >
                  <Image className="h-4 w-4 mr-2" />
                  Image
                </Button>
                <Button
                  type="button"
                  variant={mediaType === "video" ? "default" : "outline"}
                  className={mediaType === "video" ? "bg-primary text-white" : ""}
                  onClick={() => {
                    setMediaType(mediaType === "video" ? "none" : "video")
                    setMediaUrl("")
                  }}
                >
                  <Video className="h-4 w-4 mr-2" />
                  Video
                </Button>
                {mediaType !== "none" && (
                  <Button
                    type="button"
                    variant="outline"
                    className="text-destructive border-destructive hover:bg-destructive/10"
                    onClick={() => {
                      setMediaType("none")
                      setMediaUrl("")
                    }}
                  >
                    <X className="h-4 w-4 mr-2" />
                    Remove
                  </Button>
                )}
              </div>
            </div>

            {mediaType !== "none" && (
              <div className="space-y-2">
                <Label htmlFor="media-url">{mediaType === "image" ? "Image URL" : "Video URL"}</Label>
                <Input
                  id="media-url"
                  placeholder={mediaType === "image" ? "Enter image URL" : "Enter video URL"}
                  value={mediaUrl}
                  onChange={(e) => setMediaUrl(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  {mediaType === "image" ? "Supported formats: JPG, PNG, GIF" : "Supported formats: MP4, WebM"}
                </p>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={() => router.push("/feed")}>
              Cancel
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={isSubmitting}>
              {isSubmitting ? "Publishing..." : "Publish Post"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

