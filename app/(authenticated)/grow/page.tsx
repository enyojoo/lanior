import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Target, Trophy, Clock, Users, Star } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Grow - Lanior",
  description:
    "Lanior is the relationship wellness ecosystem that helps modern couples build thriving, lasting partnerships through expert guidance, community support, and personalized growth programs.",
}

export default function GrowPage() {
  const featuredPrograms = [
    {
      id: "1",
      title: "Communication Mastery",
      description: "Master the art of effective communication in your relationship",
      duration: "4 weeks",
      lessons: 12,
      participants: 1250,
      rating: 4.8,
      progress: 0,
      image:
        "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      level: "Beginner",
      price: "Free",
    },
    {
      id: "2",
      title: "Building Trust & Intimacy",
      description: "Deepen your emotional and physical connection",
      duration: "6 weeks",
      lessons: 18,
      participants: 890,
      rating: 4.9,
      progress: 25,
      image:
        "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      level: "Intermediate",
      price: "$29",
    },
    {
      id: "3",
      title: "Conflict Resolution",
      description: "Turn disagreements into opportunities for growth",
      duration: "3 weeks",
      lessons: 9,
      participants: 670,
      rating: 4.7,
      progress: 0,
      image:
        "https://images.pexels.com/photos/4144101/pexels-photo-4144101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      level: "Advanced",
      price: "$19",
    },
  ]

  const quickActions = [
    {
      title: "Daily Practices",
      description: "Simple exercises to strengthen your bond",
      icon: Target,
      href: "/grow/practices",
      color: "bg-blue-500",
    },
    {
      title: "Growth Programs",
      description: "Structured courses for relationship development",
      icon: BookOpen,
      href: "/grow/programs",
      color: "bg-green-500",
    },
    {
      title: "Challenges",
      description: "Fun activities to do together",
      icon: Trophy,
      href: "/grow/challenges",
      color: "bg-purple-500",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold unbounded">Grow Together</h1>
          <p className="text-muted-foreground mt-2">Strengthen your relationship with guided programs and practices</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickActions.map((action) => (
          <Link key={action.title} href={action.href}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${action.color}`}>
                    <action.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Featured Programs */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Programs</h2>
          <Button variant="outline" asChild>
            <Link href="/grow/programs">View All Programs</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPrograms.map((program) => (
            <Card key={program.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-3 left-3">{program.level}</Badge>
                <Badge variant="secondary" className="absolute top-3 right-3">
                  {program.price}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{program.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{program.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {program.lessons} lessons
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{program.participants.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{program.rating}</span>
                  </div>
                </div>

                {program.progress > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{program.progress}%</span>
                    </div>
                    <Progress value={program.progress} className="h-2" />
                  </div>
                )}

                <Button className="w-full" asChild>
                  <Link href={`/plans/${program.id}`}>{program.progress > 0 ? "Continue" : "Start Program"}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
