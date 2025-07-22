"use client"

import { useState } from "react"
import { Bookmark, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { SidebarContent } from "@/components/sidebar-content"
import { PostCard } from "@/components/post-card"

export default function BookmarksPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Sample bookmarked posts
  const bookmarkedPosts = [
    {
      id: 1,
      user: {
        name: "Liliya James",
        handle: "liliyajames",
        avatar:
          "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        verified: true,
      },
      content:
        "<span class='text-primary'>#Lanior</span> has been really helpful for I and my partner, James. We got married in Spain 🇪🇸 last week. Here's our video 😍😍 <span class='text-primary'>#spainwedding</span>",
      image:
        "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes: "110.3K",
      views: "325.7K", // Add views count
      comments: [
        {
          user: {
            name: "Maria Aleks",
            handle: "mariaaleks",
            avatar:
              "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            verified: true,
          },
          content: "Congratulations! The wedding looks beautiful! 💖",
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
          content: "This is amazing! Where in Spain was this?",
          time: "5 hours ago",
        },
      ],
      time: "17 hours ago",
    },
    {
      id: 2,
      user: {
        name: "Anna Hovsepyan",
        handle: "annahovse",
        avatar:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        verified: true,
      },
      content:
        "Just finished our latest relationship workshop! So grateful for all the couples who participated and shared their journeys. <span class='text-primary'>#RelationshipGoals</span> <span class='text-primary'>#Lanior</span>",
      image:
        "https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes: "85.2K",
      views: "192.4K", // Add views count
      comments: [
        {
          user: {
            name: "Diana Kirsch",
            handle: "dianakirsch",
            avatar:
              "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            verified: true,
          },
          content: "It was an amazing workshop! Can't wait for the next one.",
          time: "3 hours ago",
        },
      ],
      time: "1 day ago",
    },
    {
      id: 3,
      user: {
        name: "Sergey Ovsipenko",
        handle: "sergeyov",
        avatar:
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        verified: false,
      },
      content:
        "Here are 5 tips for better communication in your relationship: 1. Listen actively 2. Express feelings clearly 3. Avoid blame 4. Take breaks when needed 5. Show appreciation daily <span class='text-primary'>#RelationshipAdvice</span>",
      image:
        "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes: "45.6K",
      views: "138.9K", // Add views count
      comments: [
        {
          user: {
            name: "Anna Ivanova",
            handle: "annaivanova",
            avatar:
              "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            verified: true,
          },
          content: "Great tips! I especially like #5 - showing appreciation is so important.",
          time: "1 day ago",
        },
      ],
      time: "2 days ago",
    },
  ]

  // Filter posts based on search query
  const filteredPosts = bookmarkedPosts.filter(
    (post) =>
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.user.handle.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold unbounded">Bookmarks</h1>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search bookmarks..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex gap-6">
        <div className="flex-1 space-y-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                user={post.user}
                content={post.content}
                image={post.image}
                likes={post.likes}
                views={post.views}
                comments={post.comments}
                time={post.time}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <Bookmark className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No bookmarks found</h3>
              <p className="text-muted-foreground">
                {searchQuery ? "No bookmarks match your search" : "You haven't bookmarked any posts yet"}
              </p>
            </div>
          )}
        </div>

        <div className="w-80 lg:block hidden">
          <div className="sticky top-6">
            <SidebarContent />
          </div>
        </div>
      </div>
    </div>
  )
}
