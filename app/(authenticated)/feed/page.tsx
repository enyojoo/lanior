"use client"

import { PostCard } from "@/components/post-card"
import { MultiImagePostCard } from "@/components/multi-image-post-card"
import { SidebarContent } from "@/components/sidebar-content"

export default function FeedPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold unbounded">Feed</h1>
      </div>

      <div className="flex gap-6">
        <div className="flex-1 space-y-6">
          {/* Text-only post */}
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
          />

          {/* Video post - using reliable video source */}
          <PostCard
            user={{
              name: "Anna Hovsepyan",
              handle: "annahovse",
              avatar:
                "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              verified: true,
            }}
            content="Here's a quick tip on improving communication in your relationship! Remember that listening is just as important as speaking. #relationshiptips #communication #couples"
            video="https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            videoPoster="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            likes="123"
            views="245.8K"
            comments={[
              {
                user: {
                  name: "Maria Aleks",
                  handle: "mariaaleks",
                  avatar:
                    "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  verified: true,
                },
                content: "This is exactly what my partner and I needed to hear! Thank you!",
                time: "45 minutes ago",
              },
            ]}
            time="3 hours ago"
          />

          {/* Another text-only post with longer content */}
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
              {
                user: {
                  name: "Anna Hovsepyan",
                  handle: "annahovse",
                  avatar:
                    "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  verified: true,
                },
                content: "Your research is always so insightful. Looking forward to this one!",
                time: "5 hours ago",
              },
            ]}
            time="8 hours ago"
          />

          {/* Single image post */}
          <PostCard
            user={{
              name: "Liliya James",
              handle: "liliyajames",
              avatar:
                "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              verified: true,
            }}
            content="Lanior has been really helpful for me and my partner, James. We got married in Spain 🇪🇸 last week. Here's our video 😍😍 Check out our wedding photos at https://example.com/wedding-photos"
            image="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            likes="110.3K"
            views="289.7K"
            comments={[
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
            ]}
            time="17 hours ago"
          />

          {/* Landscape video post - using reliable video source */}
          <PostCard
            user={{
              name: "Sergey Ovsipenko",
              handle: "sergeyov",
              avatar:
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              verified: false,
            }}
            content="Sharing some beautiful moments from our couples retreat last weekend. The connection and growth we witnessed was truly inspiring. #couplesretreat #relationships #growth"
            video="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            videoPoster="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            likes="45.6K"
            views="98.4K"
            comments={[
              {
                user: {
                  name: "Anna Ivanova",
                  handle: "annaivanova",
                  avatar:
                    "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  verified: true,
                },
                content: "This looks amazing! I'd love to bring my partner to your next retreat.",
                time: "1 day ago",
              },
            ]}
            time="2 days ago"
          />

          {/* Two images post */}
          <MultiImagePostCard
            user={{
              name: "Anna Hovsepyan",
              handle: "annahovse",
              avatar:
                "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              verified: true,
            }}
            content="Just finished our latest relationship workshop! So grateful for all the couples who participated and shared their journeys. It was an incredible experience seeing everyone connect and grow together. Looking forward to the next workshop in Berlin next month! Learn more about our upcoming events at https://example.com/workshops"
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
          />

          {/* Three images post */}
          <MultiImagePostCard
            user={{
              name: "Sergey Ovsipenko",
              handle: "sergeyov",
              avatar:
                "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              verified: false,
            }}
            content="Highlights from our couples retreat last weekend. These exercises helped everyone connect on a deeper level. We focused on communication skills, emotional intelligence, and conflict resolution. The beautiful surroundings at Lake Tahoe provided the perfect backdrop for this transformative experience. Learn more about our approach at https://example.com/couples-retreat"
            images={[
              "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/4144101/pexels-photo-4144101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ]}
            likes="45.6K"
            views="102.8K"
            comments={[
              {
                user: {
                  name: "Anna Ivanova",
                  handle: "annaivanova",
                  avatar:
                    "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  verified: true,
                },
                content: "The exercises were so insightful! My partner and I learned so much about each other.",
                time: "1 day ago",
              },
            ]}
            time="2 days ago"
          />
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
