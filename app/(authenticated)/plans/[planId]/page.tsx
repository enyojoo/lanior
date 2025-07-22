"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ArrowLeft, Clock, Users, Star, Award, Check, Play } from "lucide-react"
import Image from "next/image"
import { useRouter, useParams } from "next/navigation"

const planData = {
  "trust-foundation": {
    id: "trust-foundation",
    title: "Building Trust Foundation",
    description: "Learn to build and rebuild trust through evidence-based exercises and expert guidance.",
    fullDescription:
      "Trust is the cornerstone of any healthy relationship. This comprehensive 6-week program combines cutting-edge research in relationship psychology with practical, actionable exercises designed to help you build, rebuild, and maintain trust with your partner. Whether you're starting fresh or working to repair damaged trust, this plan provides the tools and guidance you need.",
    category: { id: "foundation", name: "Foundation Building", color: "bg-blue-500" },
    duration: 6,
    difficulty: "Beginner",
    price: 49.99,
    rating: 4.8,
    participants: "15.2K",
    heroImage: "/placeholder.svg?height=400&width=800&text=Trust+Foundation+Hero",
    previewVideo: null,
    outcomes: [
      "Understand the psychology of trust",
      "Practice trust-building exercises",
      "Develop accountability systems",
      "Heal from past trust violations",
      "Create sustainable trust practices",
      "Build emotional safety",
    ],
    isEnrolled: false,
    completionPercentage: 0,
    expert: {
      name: "Dr. Sarah Johnson",
      credentials: "PhD in Relationship Psychology, Licensed Marriage Therapist",
      bio: "Dr. Johnson has over 15 years of experience helping couples rebuild trust and strengthen their relationships. She has published extensively on trust dynamics and is a sought-after speaker on relationship wellness.",
      avatar: "/placeholder.svg?height=100&width=100&text=Dr.+Sarah",
    },
    weeks: [
      {
        title: "Understanding Trust",
        description: "Learn the fundamental components of trust and how it develops in relationships.",
        modules: [
          { title: "The Science of Trust", duration: "15 min" },
          { title: "Trust vs. Blind Faith", duration: "12 min" },
          { title: "Personal Trust Assessment", duration: "20 min" },
        ],
      },
      {
        title: "Building Blocks",
        description: "Discover the essential elements needed to build strong trust foundations.",
        modules: [
          { title: "Consistency and Reliability", duration: "18 min" },
          { title: "Transparency Practices", duration: "16 min" },
          { title: "Accountability Systems", duration: "22 min" },
        ],
      },
      {
        title: "Communication for Trust",
        description: "Master communication techniques that foster trust and understanding.",
        modules: [
          { title: "Honest Conversations", duration: "20 min" },
          { title: "Active Listening for Trust", duration: "14 min" },
          { title: "Difficult Discussions", duration: "25 min" },
        ],
      },
      {
        title: "Rebuilding After Betrayal",
        description: "Learn how to heal and rebuild trust after it has been damaged.",
        modules: [
          { title: "Processing Hurt", duration: "18 min" },
          { title: "Forgiveness Process", duration: "22 min" },
          { title: "Creating New Agreements", duration: "20 min" },
        ],
      },
      {
        title: "Maintaining Trust",
        description: "Develop systems and habits to maintain trust long-term.",
        modules: [
          { title: "Daily Trust Practices", duration: "16 min" },
          { title: "Trust Check-ins", duration: "12 min" },
          { title: "Preventing Future Issues", duration: "18 min" },
        ],
      },
      {
        title: "Trust Mastery",
        description: "Advanced techniques for deepening trust and creating unshakeable bonds.",
        modules: [
          { title: "Vulnerability and Trust", duration: "20 min" },
          { title: "Trust in Intimacy", duration: "18 min" },
          { title: "Your Trust Action Plan", duration: "25 min" },
        ],
      },
    ],
  },
}

export default function PlanDetailPage() {
  const router = useRouter()
  const params = useParams()
  const planId = params.planId as string
  const plan = planData[planId as keyof typeof planData]

  if (!plan) {
    return <div>Plan not found</div>
  }

  const handleEnrollment = () => {
    // Handle enrollment logic
    router.push(`/plans/${planId}/dashboard`)
  }

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button variant="ghost" onClick={() => router.back()} className="mb-4">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Plans
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Hero Video/Image */}
          <div className="relative aspect-video rounded-lg overflow-hidden">
            {plan.previewVideo ? (
              <video src={plan.previewVideo} controls poster={plan.heroImage} className="w-full h-full object-cover" />
            ) : (
              <Image src={plan.heroImage || "/placeholder.svg"} alt={plan.title} fill className="object-cover" />
            )}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <Play className="h-16 w-16 text-white opacity-80" />
            </div>
          </div>

          {/* Plan Description */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge className={plan.category.color}>{plan.category.name}</Badge>
              <Badge variant="outline">{plan.difficulty}</Badge>
              {plan.price === 0 && <Badge className="bg-green-500">Free</Badge>}
            </div>
            <h1 className="text-3xl font-bold mb-4 unbounded">{plan.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{plan.fullDescription}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-3 bg-muted rounded-lg">
                <Clock className="h-6 w-6 mx-auto mb-1 text-primary" />
                <div className="text-sm font-medium">{plan.duration} Weeks</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <Users className="h-6 w-6 mx-auto mb-1 text-primary" />
                <div className="text-sm font-medium">{plan.participants}</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <Star className="h-6 w-6 mx-auto mb-1 text-primary" />
                <div className="text-sm font-medium">{plan.rating}/5</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <Award className="h-6 w-6 mx-auto mb-1 text-primary" />
                <div className="text-sm font-medium">{plan.difficulty}</div>
              </div>
            </div>
          </div>

          {/* Curriculum Breakdown */}
          <div>
            <h2 className="text-2xl font-bold mb-4 unbounded">What You'll Learn</h2>
            <div className="space-y-3">
              {plan.weeks.map((week, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">
                      Week {index + 1}: {week.title}
                    </h3>
                    <Badge variant="outline">{week.modules.length} modules</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{week.description}</p>
                  <div className="space-y-1">
                    {week.modules.map((module, mIndex) => (
                      <div key={mIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{module.title}</span>
                        <span className="text-muted-foreground">({module.duration})</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expert Information */}
          <div>
            <h2 className="text-2xl font-bold mb-4 unbounded">Your Expert Guide</h2>
            <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
              <Avatar className="h-16 w-16">
                <AvatarImage src={plan.expert.avatar || "/placeholder.svg"} alt={plan.expert.name} />
                <AvatarFallback>{plan.expert.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{plan.expert.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{plan.expert.credentials}</p>
                <p className="text-sm">{plan.expert.bio}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Enrollment Card */}
        <div className="lg:col-span-1">
          <Card className="sticky top-6">
            <CardHeader>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{plan.price > 0 ? `$${plan.price}` : "Free"}</div>
                {plan.price > 0 && <p className="text-sm text-muted-foreground">One-time payment</p>}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {!plan.isEnrolled ? (
                <>
                  <Button className="w-full h-12 text-base" onClick={handleEnrollment}>
                    {plan.price > 0 ? "Enroll Now" : "Start Free Plan"}
                  </Button>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Join {plan.participants} others</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center mb-4">
                    <div className="text-sm text-muted-foreground mb-2">Your Progress</div>
                    <div className="text-2xl font-bold text-primary">{plan.completionPercentage}%</div>
                    <div className="w-full bg-muted rounded-full h-2 mt-2">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-primary to-emerald-500"
                        style={{ width: `${plan.completionPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <Button className="w-full h-12 text-base" onClick={() => router.push(`/plans/${plan.id}/dashboard`)}>
                    Continue Plan
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() => router.push(`/plans/${plan.id}/progress`)}
                  >
                    View Progress
                  </Button>
                </>
              )}

              {/* Plan Benefits */}
              <div className="pt-4 border-t">
                <h4 className="font-semibold mb-3">What's Included:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>{plan.duration} weeks of content</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Interactive exercises</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Progress tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Certificate of completion</span>
                  </li>
                  {plan.price > 0 && (
                    <>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Expert support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Partner collaboration tools</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
