"use client"

import { PostCard } from "@/components/post-card"
import { MultiImagePostCard } from "@/components/multi-image-post-card"

export default function MediaExamplesPage() {
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

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold unbounded mb-4">Media Examples</h1>
        <p className="text-muted-foreground">
          This page demonstrates different media formats in posts with standardized dimensions.
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Single Image (Square 1600x1600)</h2>
          <PostCard
            user={user}
            content="This is a post with a single image. The image is displayed in a square format (1600x1600)."
            image="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            likes="42"
            comments={[sampleComment]}
            time="5 minutes ago"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Landscape Video (16:9)</h2>
          <PostCard
            user={user}
            content="This is a post with a landscape video. The video is displayed in a 16:9 format."
            video="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            videoPoster="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            likes="87"
            comments={[sampleComment]}
            time="1 hour ago"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Vertical Video (9:16 with blurred background)</h2>
          <PostCard
            user={user}
            content="This is a post with a vertical video. The video is displayed with a blurred background to maintain 16:9 container."
            video="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
            videoPoster="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            likes="123"
            comments={[sampleComment]}
            time="3 hours ago"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Square Video (1:1 with blurred background)</h2>
          <PostCard
            user={user}
            content="This is a post with a square video. The video is displayed with a blurred background to maintain 16:9 container."
            video="https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            videoPoster="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            likes="56"
            comments={[sampleComment]}
            time="4 hours ago"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Two Images (16:9 container)</h2>
          <MultiImagePostCard
            user={user}
            content="This post contains two images displayed in a 16:9 container."
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
          <h2 className="text-xl font-semibold mb-4">Three Images (16:9 container)</h2>
          <MultiImagePostCard
            user={user}
            content="This post has three images in a 16:9 container with the first image larger and the other two stacked."
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
          <h2 className="text-xl font-semibold mb-4">Four Images (16:9 container)</h2>
          <MultiImagePostCard
            user={user}
            content="This post contains four images arranged in a 2x2 grid within a 16:9 container."
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
      </div>
    </div>
  )
}

