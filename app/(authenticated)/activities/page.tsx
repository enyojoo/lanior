import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gift, Heart, MessageSquare, Star, Trophy } from "lucide-react"
import { SidebarContent } from "@/components/sidebar-content"

export default function ActivitiesPage() {
  const activities = [
    {
      title: "Love Language Quiz",
      description: "Discover your primary love language and learn how to better connect with your partner.",
      icon: Heart,
      color: "bg-pink-500",
    },
    {
      title: "Relationship Trivia",
      description: "Test your knowledge about your partner with fun questions that strengthen your bond.",
      icon: Star,
      color: "bg-yellow-500",
    },
    {
      title: "Communication Challenge",
      description: "Improve how you talk to each other with daily exercises designed by relationship experts.",
      icon: MessageSquare,
      color: "bg-blue-500",
    },
    {
      title: "Gift Exchange",
      description: "Send virtual gifts to your loved one and earn points to redeem for real relationship resources.",
      icon: Gift,
      color: "bg-purple-500",
    },
    {
      title: "Relationship Milestones",
      description: "Track and celebrate your progress as a couple with achievement badges and rewards.",
      icon: Trophy,
      color: "bg-green-500",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold unbounded">Activities & Games</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className={`p-3 rounded-full ${activity.color}`}>
                    <activity.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle>{activity.title}</CardTitle>
                    <CardDescription>{activity.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-primary hover:bg-primary/90">Start Activity</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <SidebarContent />
        </div>
      </div>
    </div>
  )
}
