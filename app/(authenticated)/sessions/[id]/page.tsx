"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { format, isPast } from "date-fns"
import { Calendar, Clock, MapPin, Users, Wifi, ExternalLink, Check, ArrowLeft, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

// This would typically come from an API
const sessions = [
  {
    id: "1",
    title: "Building Trust Workshop",
    description:
      "A 2-hour interactive workshop focused on building and maintaining trust in relationships. Learn practical techniques and exercises you can apply immediately.\n\nIn this workshop, you'll learn:\n\n• The four pillars of trust in relationships\n• How to identify trust issues early\n• Practical exercises to build and repair trust\n• Communication techniques that foster trust\n• How to maintain trust during difficult times\n\nThis workshop is perfect for couples at any stage of their relationship who want to strengthen their foundation of trust. All materials will be provided, and participants will receive a digital workbook to continue their practice at home.",
    date: "2025-04-15T18:00:00",
    endDate: "2025-04-15T20:00:00",
    location: {
      type: "offline",
      address: "123 Relationship Center, New York, NY",
      city: "New York",
      country: "USA",
    },
    host: {
      name: "Diana Kirsch",
      title: "Relationship Expert",
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: true,
      bio: "Diana Kirsch is a certified relationship counselor with over 15 years of experience helping couples build stronger, more fulfilling relationships. She specializes in trust-building, communication, and conflict resolution.",
    },
    image:
      "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    capacity: 30,
    attendees: 18,
    type: "workshop",
    price: 45,
  },
  {
    id: "2",
    title: "Virtual Couples Retreat",
    description:
      "Join us for a weekend-long virtual retreat designed to help couples reconnect and strengthen their bond. Sessions include communication exercises, guided meditations, and expert Q&A.\n\nSchedule:\n\nDay 1:\n• 9:00 AM - 10:30 AM: Opening Session - Setting Intentions\n• 11:00 AM - 12:30 PM: Communication Workshop\n• 2:00 PM - 3:30 PM: Conflict Resolution Strategies\n• 4:00 PM - 5:00 PM: Guided Couples Meditation\n\nDay 2:\n• 9:00 AM - 10:30 AM: Rebuilding Intimacy Workshop\n• 11:00 AM - 12:30 PM: Trust Building Exercises\n• 2:00 PM - 3:30 PM: Future Planning and Goal Setting\n• 4:00 PM - 4:30 PM: Closing Ceremony and Next Steps\n\nAll sessions will be recorded and available for 30 days after the retreat for participants to review.",
    date: "2025-05-10T09:00:00",
    endDate: "2025-05-11T16:00:00",
    location: {
      type: "online",
      platform: "Zoom",
      link: "https://zoom.us/j/example",
    },
    host: {
      name: "Sergey Ovsipenko",
      title: "Family Counselor",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: true,
      bio: "Sergey Ovsipenko is a family counselor and relationship expert with a focus on helping couples navigate the complexities of modern relationships. He has facilitated over 50 couples retreats and workshops.",
    },
    image:
      "https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    capacity: 50,
    attendees: 32,
    type: "retreat",
    price: 120,
  },
  {
    id: "3",
    title: "Communication Masterclass",
    description:
      "Learn advanced communication techniques to resolve conflicts and deepen your connection. This interactive seminar includes role-playing exercises and personalized feedback.\n\nTopics covered:\n\n• Active listening techniques\n• Non-verbal communication awareness\n• Expressing needs without criticism\n• Navigating difficult conversations\n• Emotional intelligence in communication\n• Conflict resolution frameworks\n\nParticipants will receive a certificate of completion and a comprehensive communication workbook to continue practicing these skills at home.",
    date: "2025-04-28T14:00:00",
    endDate: "2025-04-28T17:00:00",
    location: {
      type: "offline",
      address: "Harmony Center, 456 Connection Ave, Los Angeles, CA",
      city: "Los Angeles",
      country: "USA",
    },
    host: {
      name: "Anna Ivanova",
      title: "Relationship Coach",
      avatar:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: true,
      bio: "Anna Ivanova is a relationship coach and communication specialist who has helped hundreds of couples transform their relationships through improved communication. She holds certifications in NLP and couples therapy.",
    },
    image:
      "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    capacity: 40,
    attendees: 25,
    type: "seminar",
    price: 65,
  },
  {
    id: "4",
    title: "Free Webinar: Navigating Relationship Transitions",
    description:
      "Join this free webinar to learn strategies for navigating major life transitions as a couple. Topics include career changes, moving, having children, and more.\n\nThis 90-minute webinar will cover:\n\n• How to maintain connection during major life changes\n• Communication strategies for uncertain times\n• Supporting each other through individual transitions\n• Creating shared meaning during life changes\n• Planning for future transitions together\n\nThere will be a Q&A session at the end where participants can ask specific questions about their own relationship transitions.",
    date: "2025-04-20T19:00:00",
    endDate: "2025-04-20T20:30:00",
    location: {
      type: "online",
      platform: "YouTube Live",
      link: "https://youtube.com/live/example",
    },
    host: {
      name: "Maria Aleks",
      title: "Marriage Counselor",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: true,
      bio: "Maria Aleks is a licensed marriage and family therapist with a passion for helping couples navigate life's transitions together. She specializes in helping couples maintain strong connections during periods of change and uncertainty.",
    },
    image:
      "https://images.pexels.com/photos/4145355/pexels-photo-4145355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    capacity: 500,
    attendees: 213,
    type: "webinar",
    price: 0,
  },
  {
    id: "5",
    title: "Weekend Couples Retreat in Nature",
    description:
      "Escape the city for a weekend retreat in the mountains. This all-inclusive experience features workshops, couple activities, and time to reconnect in a beautiful natural setting.\n\nYour retreat includes:\n\n• Luxury accommodation for 2 nights\n• All meals and refreshments\n• Daily relationship workshops\n• Guided nature walks for couples\n• Private couples coaching session (30 minutes)\n• Evening bonfire and connection activities\n• Couples massage workshop\n• Relationship workbook and resources\n\nThis retreat is limited to 10 couples to ensure a personalized and intimate experience. All activities are optional, and couples are encouraged to create a schedule that works best for their needs.",
    date: "2025-06-05T16:00:00",
    endDate: "2025-06-07T14:00:00",
    location: {
      type: "offline",
      address: "Mountain Serenity Resort, 789 Forest Road, Aspen, CO",
      city: "Aspen",
      country: "USA",
    },
    host: {
      name: "Michael & Nadezhda",
      title: "Couple Therapy",
      avatar:
        "https://images.pexels.com/photos/4609045/pexels-photo-4609045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: true,
      bio: "Michael and Nadezhda are a husband-and-wife team of relationship therapists who specialize in couples retreats. With over 20 years of combined experience, they create transformative experiences that help couples reconnect and revitalize their relationships.",
    },
    image:
      "https://images.pexels.com/photos/5257587/pexels-photo-5257587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    capacity: 20,
    attendees: 12,
    type: "retreat",
    price: 650,
  },
  {
    id: "6",
    title: "Monthly Support Group: Parenting Together",
    description:
      "A monthly support group for couples navigating the challenges of parenting together. Share experiences, get advice, and build community with other parents.\n\nEach session includes:\n\n• Facilitated discussion on a monthly parenting topic\n• Small group breakout sessions\n• Expert advice and resources\n• Community building and networking\n• Action steps to implement at home\n\nThis month's topic: Maintaining your relationship while parenting young children\n\nThis is an ongoing monthly group. New members are welcome to join at any time. Participants are encouraged to attend regularly to build community and support networks with other parents.",
    date: "2025-04-25T18:30:00",
    endDate: "2025-04-25T20:00:00",
    location: {
      type: "online",
      platform: "Google Meet",
      link: "https://meet.google.com/example",
    },
    host: {
      name: "Renat Dovlatov",
      title: "Parenting Expert",
      avatar:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: true,
      bio: "Renat Dovlatov is a parenting expert and family therapist who specializes in helping couples maintain strong relationships while navigating the challenges of parenthood. He is the author of 'Parenting as Partners' and hosts the popular podcast 'Family Foundations'.",
    },
    image:
      "https://images.pexels.com/photos/7282818/pexels-photo-7282818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    capacity: 30,
    attendees: 22,
    type: "support group",
    price: 15,
  },
]

export default function EventPage({ params }: { params: { id: string } }) {
  const [session, setSession] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [isRegistering, setIsRegistering] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    // In a real app, this would be an API call
    const foundSession = sessions.find((e) => e.id === params.id)
    if (foundSession) {
      setSession(foundSession)
    } else {
      // Session not found, redirect to sessions page
      router.push("/sessions")
    }
    setLoading(false)
  }, [params.id, router])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  const isSessionPast = isPast(new Date(session.date))
  const isFull = session.attendees >= session.capacity
  const isMultiDay = new Date(session.date).toDateString() !== new Date(session.endDate).toDateString()

  const handleRegister = () => {
    setIsRegistering(true)

    // Simulate API call
    setTimeout(() => {
      setIsRegistering(false)
      setIsDialogOpen(false)

      toast({
        title: "Registration successful",
        description: `You've registered for "${session.title}"`,
        variant: "default",
      })
    }, 1500)
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    toast({
      title: "Link copied",
      description: "Session link copied to clipboard",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => router.push("/sessions")} className="h-8 w-8">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-2xl font-bold unbounded">Session Details</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image src={session.image || "/placeholder.svg"} alt={session.title} fill className="object-cover" />
            <div className="absolute top-4 left-4 flex gap-2">
              <Badge className={session.location.type === "online" ? "bg-blue-500" : "bg-green-500"}>
                {session.location.type === "online" ? (
                  <>
                    <Wifi className="h-3 w-3 mr-1" /> Online
                  </>
                ) : (
                  <>
                    <MapPin className="h-3 w-3 mr-1" /> In-Person
                  </>
                )}
              </Badge>
              {session.price === 0 && <Badge className="bg-purple-500">Free</Badge>}
              <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
              </Badge>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{session.title}</h1>

            <div className="flex items-center gap-3 mb-6">
              <Avatar className="h-10 w-10 border-2 border-primary">
                <AvatarImage src={session.host.avatar || "/placeholder.svg"} alt={session.host.name} />
                <AvatarFallback>{session.host.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center">
                  <span className="font-medium">{session.host.name}</span>
                  {session.host.verified && (
                    <Badge
                      variant="outline"
                      className="ml-1.5 h-4 w-4 p-0 flex items-center justify-center rounded-full bg-primary"
                    >
                      <Check className="h-2.5 w-2.5 text-white" />
                    </Badge>
                  )}
                </div>
                <span className="text-sm text-muted-foreground">{session.host.title}</span>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">About This Session</h2>
              <div className="whitespace-pre-line text-muted-foreground">{session.description}</div>
            </div>

            <Separator className="my-6" />
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-6 bg-card rounded-lg border p-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">{session.price > 0 ? `$${session.price.toFixed(2)}` : "Free"}</h2>
              <p className="text-sm text-muted-foreground">
                {isSessionPast
                  ? "This session has already ended"
                  : isFull
                    ? "This session is fully booked"
                    : `${session.capacity - session.attendees} spots left`}
              </p>
            </div>

            <div className="space-y-4">
              <Button
                className="w-full bg-primary hover:bg-primary/90 h-11 text-base"
                disabled={isSessionPast || isFull}
                onClick={() => setIsDialogOpen(true)}
              >
                {isSessionPast ? "Session Ended" : isFull ? "Fully Booked" : "Register Now"}
              </Button>

              <Button variant="outline" className="w-full h-11 text-base bg-transparent" onClick={handleCopyLink}>
                <Share2 className="mr-2 h-4 w-4" />
                Copy Link
              </Button>
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">
                  {format(new Date(session.date), "MMM d, yyyy")}
                  {isMultiDay && ` - ${format(new Date(session.endDate), "MMM d, yyyy")}`}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">
                  {format(new Date(session.date), "h:mm a")} - {format(new Date(session.endDate), "h:mm a")}
                </span>
              </div>

              <div className="flex items-center justify-between">
                {session.location.type === "online" ? (
                  <Wifi className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                )}
                <span className="text-sm font-medium">
                  {session.location.type === "online"
                    ? session.location.platform
                    : session.location.city + ", " + session.location.country}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">
                  {session.attendees} / {session.capacity}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Register for Session</DialogTitle>
            <DialogDescription>You're registering for "{session.title}"</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-md flex-shrink-0">
                <Image src={session.image || "/placeholder.svg"} alt={session.title} fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-medium">{session.title}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{format(new Date(session.date), "MMM d, yyyy")}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{format(new Date(session.date), "h:mm a")}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-1">Location</h4>
              {session.location.type === "online" ? (
                <div className="flex items-center gap-2">
                  <Wifi className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">{session.location.platform}</span>
                  <Button variant="link" size="sm" className="h-auto p-0">
                    <ExternalLink className="h-3.5 w-3.5 mr-1" />
                    <span>Join link will be sent after registration</span>
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-green-500" />
                  <span className="text-sm">{session.location.address}</span>
                </div>
              )}
            </div>

            <div>
              <h4 className="text-sm font-medium mb-1">Price</h4>
              <span className="text-lg font-semibold">
                {session.price > 0 ? `$${session.price.toFixed(2)}` : "Free"}
              </span>
            </div>
          </div>

          <DialogFooter className="flex sm:justify-between">
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleRegister} disabled={isRegistering} className="bg-primary hover:bg-primary/90">
              {isRegistering ? "Registering..." : "Confirm Registration"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
