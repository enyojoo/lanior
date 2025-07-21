import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function PlansPage() {
  const plans = [
    "Financial Harmony",
    "Building Trust",
    "Emotional Intimacy",
    "Cultivating Love",
    "Health and Wellness",
    "Parenting as a Team",
    "Vision for the Future",
    "Friendship in Relationship",
    "Developing Patience",
    "Reigniting Passion and Romance",
    "Family Integration and Unity",
    "Supporting Personal Growth",
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold unbounded">Plans</h1>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input placeholder="Search plans..." className="pl-10" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <Card key={index} className="plan-card aspect-square bg-primary hover:bg-primary/90 cursor-pointer">
            <CardContent className="flex items-center justify-center h-full p-6">
              <h3 className="text-white font-medium unbounded text-center">{plan}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

