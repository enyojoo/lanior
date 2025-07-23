import type { Metadata } from "next"
import { PostCard } from "@/components/post-card"
import { MultiImagePostCard } from "@/components/multi-image-post-card"

export const metadata: Metadata = {
  title: "Bookmarks - Lanior",
  description:
    "Lanior is the relationship wellness ecosystem that helps modern couples build thriving, lasting partnerships through expert guidance, community support, and personalized growth programs.",
}

export default function BookmarksPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold unbounded">Bookmarks</h1>
      </div>

      <div className="space-y-6">
        {/* Bookmarked posts */}
        <PostCard
          user={{
            name: "Diana Kirsch",
            handle: "dianakirsch",
            avatar:
              "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            verified: true,
          }}
          content="I just finished my new book on emotional intelligence in relationships! After two years of research and interviews with hundreds of couples, I'm excited to share these insights with you all. The book covers how emotional awareness can transform conflicts into opportunities for growth. Pre-orders are available now at https://example.com/emotional-intelligence-book #NewBook #EmotionalIntelligence #RelationshipAdvice"
          likes="78.2K"
          views="342.1K"
          comments={[
            {
              user: {
                name: "Renat Dovlatov",
                handle: "renatdovlatov",
                avatar:
                  "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                verified: true,
              },
              content: "Just pre-ordered! Can't wait to read it.",
              time: "3 hours ago",
            },
          ]}
          time="8 hours ago"
          isBookmarked={true}
        />

        <MultiImagePostCard
          user={{
            name: "Anna Hovsepyan",
            handle: "annahovse",
            avatar:
              "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            verified: true,
          }}
          content="Just finished our latest relationship workshop! So grateful for all the couples who participated and shared their journeys. It was an incredible experience seeing everyone connect and grow together. Looking forward to the next workshop in Berlin next month!"
          images={[
            "https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          ]}
          likes="85.2K"
          views="178.5K"
          comments={[
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
          ]}
          time="1 day ago"
          isBookmarked={true}
        />

        <PostCard
          user={{
            name: "Sergey Ovsipenko",
            handle: "sergeyov",
            avatar:
              "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            verified: false,
          }}
          content="Here are 5 tips for better communication in your relationship: 1. Listen actively 2. Express feelings clearly 3. Avoid blame 4. Take breaks when needed 5. Show appreciation daily #RelationshipAdvice"
          likes="45.6K"
          views="120.2K"
          comments={[
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
          ]}
          time="2 days ago"
          isBookmarked={true}
        />
      </div>
    </div>
  )
}
