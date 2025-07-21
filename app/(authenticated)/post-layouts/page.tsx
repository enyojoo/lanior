"use client"

import { MultiImagePostCard } from "@/components/multi-image-post-card"

export default function PostLayoutsPage() {
  // Sample user data
  const user = {
    name: "Demo User",
    handle: "demouser",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    verified: true,
  }

  // Sample comment
  const sampleComment = {
    user: {
      name: "John Doe",
      handle: "johndoe",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: false,
    },
    content: "This is a sample comment!",
    time: "Just now",
  }

  // Sample long content for testing truncation
  const longContent =
    "This is a post with a very long content that should be truncated after three lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Check out our website at https://example.com for more information about our services and products. We offer a wide range of services including relationship counseling, couples therapy, and family mediation."

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold unbounded mb-4">Post Layout Examples</h1>
        <p className="text-muted-foreground">
          This page demonstrates different post layouts with varying numbers of images (up to 4).
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Single Image Post</h2>
          <MultiImagePostCard
            user={user}
            content="This is a post with a single image. The image takes up the full width of the post."
            images={[
              "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ]}
            likes="42"
            comments={[sampleComment]}
            time="5 minutes ago"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Two Images Post</h2>
          <MultiImagePostCard
            user={user}
            content="This post contains two images displayed side by side in a grid."
            images={[
              "https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ]}
            likes="87"
            comments={[sampleComment]}
            time="1 hour ago"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Three Images Post</h2>
          <MultiImagePostCard
            user={user}
            content="This post has three images. The first image is larger and takes up the left side, while the other two are stacked on the right."
            images={[
              "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/4144101/pexels-photo-4144101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ]}
            likes="123"
            comments={[sampleComment]}
            time="3 hours ago"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Four Images Post</h2>
          <MultiImagePostCard
            user={user}
            content="This post contains four images arranged in a 2x2 grid."
            images={[
              "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/5764088/pexels-photo-5764088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ]}
            likes="256"
            comments={[sampleComment]}
            time="5 hours ago"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Long Content Post with Truncation</h2>
          <MultiImagePostCard
            user={user}
            content={longContent}
            images={[
              "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ]}
            likes="42"
            comments={[sampleComment]}
            time="5 minutes ago"
          />
        </div>
      </div>
    </div>
  )
}

