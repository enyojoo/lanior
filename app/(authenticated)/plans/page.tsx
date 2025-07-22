"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Clock, Users, Star, Check } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const categories = [
  { id: "foundation", name: "Foundation Building", color: "bg-blue-500" },
  { id: "communication", name: "Communication", color: "bg-green-500" },
  { id: "intimacy", name: "Intimacy & Connection", color: "bg-pink-500" },
  { id: "financial", name: "Financial Harmony", color: "bg-yellow-500" },
  { id: "family", name: "Family & Parenting", color: "bg-purple-500" },
  { id: "growth", name: "Personal Growth", color: "bg-emerald-500" },
]

const samplePlans = [
  {
    id: "trust-foundation",
    title: "Building Trust Foundation",
    description: "Learn to build and rebuild trust through evidence-based exercises and expert guidance.",
    category: { id: "foundation", name: "Foundation Building", color: "bg-blue-500" },
    duration: 6,
    difficulty: "Beginner",
    price: 49.99,
    rating: 4.8,
    participants: "15.2K",
    heroImage: "/placeholder.svg?height=200&width=400&text=Trust+Foundation",
    outcomes: [
      "Understand the psychology of trust",
      "Practice trust-building exercises",
      "Develop accountability systems",
      "Heal from past trust violations",
    ],
    isEnrolled: false,
    completionPercentage: 0,
  },
  {
    id: "communication-mastery",
    title: "Communication Mastery",
    description: "Master the art of healthy communication with your partner through proven techniques.",
    category: { id: "communication", name: "Communication", color: "bg-green-500" },
    duration: 8,
    difficulty: "Intermediate",
    price: 0,
    rating: 4.9,
    participants: "22.1K",
    heroImage: "/placeholder.svg?height=200&width=400&text=Communication+Mastery",
    outcomes: [
      "Learn active listening techniques",
      "Practice conflict resolution",
      "Develop empathy skills",
      "Master non-violent communication",
    ],
    isEnrolled: true,
    completionPercentage: 65,
  },
  {
    id: "emotional-intimacy",
    title: "Emotional Intimacy Deep Dive",
    description: "Deepen your emotional connection and create lasting intimacy in your relationship.",
    category: { id: "intimacy", name: "Intimacy & Connection", color: "bg-pink-500" },
    duration: 10,
    difficulty: "Advanced",
    price: 79.99,
    rating: 4.7,
    participants: "8.9K",
    heroImage: "/placeholder.svg?height=200&width=400&text=Emotional+Intimacy",
    outcomes: [
      "Understand emotional needs",
      "Practice vulnerability exercises",
      "Build emotional safety",
      "Create deeper connections",
    ],
    isEnrolled: true,
    completionPercentage: 30,
  },
  {
    id: "financial-harmony",
    title: "Financial Harmony",
    description: "Navigate money conversations and build financial unity in your relationship.",
    category: { id: "financial", name: "Financial Harmony", color: "bg-yellow-500" },
    duration: 4,
    difficulty: "Beginner",
    price: 39.99,
    rating: 4.6,
    participants: "12.3K",
    heroImage: "/placeholder.svg?height=200&width=400&text=Financial+Harmony",
    outcomes: [
      "Align financial goals",
      "Create budgeting systems",
      "Navigate money conflicts",
      "Build financial trust",
    ],
    isEnrolled: false,
    completionPercentage: 0,
  },
  {
    id: "parenting-partnership",
    title: "Parenting as Partners",
    description: "Strengthen your relationship while raising children together as a unified team.",
    category: { id: "family", name: "Family & Parenting", color: "bg-purple-500" },
    duration: 12,
    difficulty: "Intermediate",
    price: 89.99,
    rating: 4.8,
    participants: "18.7K",
    heroImage: "/placeholder.svg?height=200&width=400&text=Parenting+Partnership",
    outcomes: [
      "Align parenting styles",
      "Maintain couple connection",
      "Handle parenting conflicts",
      "Create family harmony",
    ],
    isEnrolled: false,
    completionPercentage: 0,
  },
  {
    id: "personal-growth",
    title: "Individual Growth in Relationship",
    description: "Grow as individuals while strengthening your bond as a couple.",
    category: { id: "growth", name: "Personal Growth", color: "bg-emerald-500" },
    duration: 8,
    difficulty: "Advanced",
    price: 0,
    rating: 4.9,
    participants: "14.5K",
    heroImage: "/placeholder.svg?height=200&width=400&text=Personal+Growth",
    outcomes: [
      "Develop self-awareness",
      "Support partner growth",
      "Balance independence and togetherness",
      "Create growth mindset",
    ],
    isEnrolled: true,
    completionPercentage: 85,
  },
]

export default function PlansPage() {
  const router = useRouter()
  const activePlans = samplePlans.filter((plan) => plan.isEnrolled)

  const handlePlanClick = (planId: string) => {
    router.push(`/plans/${planId}`)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold unbounded">Relationship Plans</h1>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input placeholder="Search plans..." className="pl-10" />
      </div>

      {/* My Active Plans Dashboard */}
      {activePlans.length > 0 && (
        <div className="mb-8 p-6 bg-gradient-to-r from-primary/10 to-emerald-500/10 rounded-lg">
          <h2 className="text-xl font-bold mb-4 unbounded">My Active Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activePlans.map((plan) => (
              <div key={plan.id} className="bg-background p-4 rounded-lg border">
                <h3 className="font-semibold">{plan.title}</h3>
                <div className="mt-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>
                      Week {Math.ceil((plan.completionPercentage / 100) * plan.duration)} of {plan.duration}
                    </span>
                    <span>{plan.completionPercentage}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-primary to-emerald-500"
                      style={{ width: `${plan.completionPercentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <Button size="sm" className="flex-1" onClick={() => router.push(`/plans/${plan.id}/dashboard`)}>
                    Continue
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => router.push(`/plans/${plan.id}/progress`)}>
                    View Progress
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm" className="rounded-full bg-transparent">
          All Categories
        </Button>
        {categories.map((category) => (
          <Button key={category.id} variant="outline" size="sm" className="rounded-full bg-transparent">
            {category.name}
          </Button>
        ))}
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {samplePlans.map((plan) => (
          <Card
            key={plan.id}
            className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => handlePlanClick(plan.id)}
          >
            <div className="relative h-48 bg-gradient-to-br from-primary/20 to-emerald-500/20">
              <Image src={plan.heroImage || "/placeholder.svg"} alt={plan.title} fill className="object-cover" />
              <div className="absolute top-2 left-2 flex gap-1">
                <Badge className={plan.category.color}>{plan.category.name}</Badge>
                {plan.difficulty && <Badge variant="outline">{plan.difficulty}</Badge>}
                {plan.price === 0 && <Badge className="bg-green-500">Free</Badge>}
              </div>
              {plan.isEnrolled && (
                <div className="absolute top-2 right-2">
                  <Badge className="bg-primary">
                    {plan.completionPercentage === 100 ? "Completed" : `${plan.completionPercentage}%`}
                  </Badge>
                </div>
              )}
            </div>

            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">{plan.title}</h3>
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{plan.description}</p>

              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {plan.duration} weeks
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {plan.participants} enrolled
                </span>
                <span className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                  {plan.rating}
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Key Outcomes:</h4>
                <ul className="text-xs space-y-1">
                  {plan.outcomes.slice(0, 3).map((outcome, i) => (
                    <li key={i} className="flex items-start gap-1">
                      <Check className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
              <div className="flex justify-between items-center w-full">
                <div>
                  {plan.price > 0 ? (
                    <span className="font-semibold">${plan.price}</span>
                  ) : (
                    <span className="text-green-600 font-semibold">Free</span>
                  )}
                </div>
                <Button
                  className={plan.isEnrolled ? "bg-green-500 hover:bg-green-600" : ""}
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePlanClick(plan.id)
                  }}
                >
                  {plan.isEnrolled ? "Continue Plan" : "View Details"}
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
