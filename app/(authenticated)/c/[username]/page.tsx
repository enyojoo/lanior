"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { PostCard } from "@/components/post-card"
import { SidebarContent } from "@/components/sidebar-content"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EventCard } from "@/components/event-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Check,
  MapPin,
  Calendar,
  Users,
  Star,
  Clock,
  Target,
  ArrowLeft,
  MoreHorizontal,
  Heart,
  ChevronLeft,
  ChevronRight,
  Plus,
  X,
  UserPlus,
} from "lucide-react"

export default function CoachProfilePage() {
  const params = useParams()
  const username = params.username as string
  const [isFollowing, setIsFollowing] = useState(false)

  // Booking flow state
  const [bookingStep, setBookingStep] = useState<
    "select-session" | "select-time" | "confirm-details" | "booking-confirmed"
  >("select-session")
  const [selectedSessionType, setSelectedSessionType] = useState<"30min" | "60min" | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [guests, setGuests] = useState<string[]>([])
  const [newGuestEmail, setNewGuestEmail] = useState("")
  const [additionalNotes, setAdditionalNotes] = useState("")

  const toggleFollow = () => {
    setIsFollowing(!isFollowing)
  }

  // Mock user data (would come from auth context)
  const currentUser = {
    name: "John Doe",
    email: "john.doe@example.com",
  }

  // Session types
  const sessionTypes = [
    {
      id: "30min",
      duration: "30-min Consultation",
      description: "Quick relationship check-in",
      price: 75,
      icon: Clock,
    },
    {
      id: "60min",
      duration: "60-min Couples Session",
      description: "Full therapy session",
      price: 150,
      icon: Users,
    },
  ]

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startDate = new Date(firstDay)
    startDate.setDate(startDate.getDate() - firstDay.getDay())

    const days = []
    const current = new Date(startDate)

    for (let i = 0; i < 42; i++) {
      days.push(new Date(current))
      current.setDate(current.getDate() + 1)
    }

    return days
  }

  // Available time slots
  const timeSlots = [
    "9:00am",
    "9:15am",
    "9:30am",
    "9:45am",
    "10:00am",
    "10:15am",
    "10:30am",
    "10:45am",
    "11:00am",
    "11:15am",
    "11:30am",
    "11:45am",
    "12:00pm",
    "12:15pm",
    "12:30pm",
  ]

  const addGuest = () => {
    if (newGuestEmail && !guests.includes(newGuestEmail)) {
      setGuests([...guests, newGuestEmail])
      setNewGuestEmail("")
    }
  }

  const removeGuest = (email: string) => {
    setGuests(guests.filter((g) => g !== email))
  }

  const resetBooking = () => {
    setBookingStep("select-session")
    setSelectedSessionType(null)
    setSelectedDate(null)
    setSelectedTime(null)
    setGuests([])
    setAdditionalNotes("")
  }

  const selectedSession = sessionTypes.find((s) => s.id === selectedSessionType)

  // Mock coach data - in real app, fetch based on username
  const coach = {
    name: "Anna Hovsepyan",
    username: "annahovse",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    verified: true,
    title: "Relationship Expert & Licensed Therapist",
    bio: "Helping couples build stronger connections through evidence-based therapy and practical relationship tools. 12+ years experience in couples counseling.",
    location: "New York, NY",
    joinedDate: "March 2020",
    marriedFor: "8 years",
    laniorRank: 1,
    followers: "45.2K",
    following: "1,234",
    posts: "892",
    rating: 4.9,
    reviewCount: 1247,
    sessionsCompleted: 2340,
    specialties: ["Couples Therapy", "Communication", "Conflict Resolution", "Trust Building"],
  }

  // Mock posts data
  const posts = [
    {
      user: {
        name: coach.name,
        handle: coach.username,
        avatar: coach.avatar,
        verified: coach.verified,
      },
      content:
        "Trust is the foundation of any healthy relationship. Here are my top 3 tips to build trust with your partner: 1. Be consistent in your words and actions 2. Practice active listening 3. Share your vulnerabilities gradually #RelationshipAdvice #Trust",
      likes: "2.1K",
      views: "8.5K",
      comments: [
        {
          user: {
            name: "Maria Aleks",
            handle: "mariaaleks",
            avatar:
              "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            verified: true,
          },
          content: "These tips are so helpful! I've been working on building trust with my partner.",
          time: "2 hours ago",
        },
      ],
      time: "3 hours ago",
    },
    {
      user: {
        name: coach.name,
        handle: coach.username,
        avatar: coach.avatar,
        verified: coach.verified,
      },
      content:
        "Communication isn't just about talking - it's about truly understanding each other. In my latest session, I shared techniques for active listening that can transform your conversations. What's your biggest communication challenge?",
      image:
        "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes: "1.8K",
      views: "6.2K",
      comments: [
        {
          user: {
            name: "John Doe",
            handle: "johndoe",
            avatar:
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            verified: false,
          },
          content: "I struggle with staying calm during difficult conversations.",
          time: "1 day ago",
        },
      ],
      time: "1 day ago",
    },
  ]

  // Mock programs data
  const programs = [
    {
      id: "trust-building",
      title: "Trust Building Masterclass",
      description: "A comprehensive 21-day program to rebuild and strengthen trust in your relationship",
      duration: "21 days",
      participants: 1234,
      rating: 4.8,
      price: 149,
      image:
        "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "communication-course",
      title: "Effective Communication Course",
      description: "Learn to communicate with clarity, empathy, and understanding",
      duration: "14 days",
      participants: 892,
      rating: 4.9,
      price: 99,
      image:
        "https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]

  // Mock sessions data
  const sessions = [
    {
      id: "1",
      title: "Building Trust Workshop",
      description: "A 2-hour interactive workshop focused on building and maintaining trust in relationships.",
      date: "2025-04-15T18:00:00",
      endDate: "2025-04-15T20:00:00",
      location: {
        type: "offline" as const,
        address: "123 Relationship Center, New York, NY",
        city: "New York",
        country: "USA",
      },
      host: {
        name: coach.name,
        title: coach.title,
        avatar: coach.avatar,
        verified: coach.verified,
      },
      image:
        "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      capacity: 30,
      attendees: 18,
      type: "workshop",
      price: 45,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Header */}
          <Card>
            <CardContent className="p-0">
              {/* Header with back arrow and menu */}
              <div className="flex items-center justify-between p-4 border-b">
                <Button variant="ghost" size="sm" className="p-2">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <MoreHorizontal className="h-3 w-3" />
                </Button>
              </div>

              {/* Row 1: Profile picture and Follow button */}
              <div className="flex items-center justify-between p-4">
                <Avatar className="h-20 w-20 border-4 border-primary">
                  <AvatarImage src={coach.avatar || "/placeholder.svg"} alt={coach.name} className="object-cover" />
                  <AvatarFallback>{coach.name[0]}</AvatarFallback>
                </Avatar>
                <Button
                  variant={isFollowing ? "default" : "outline"}
                  size="sm"
                  className={
                    isFollowing
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : "border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
                  }
                  onClick={toggleFollow}
                >
                  {isFollowing ? "Following" : "Follow"}
                </Button>
              </div>

              {/* Row 2: User info, location, date joined */}
              <div className="px-4 pb-4">
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-xl font-bold">{coach.name}</h1>
                  {coach.verified && (
                    <Badge
                      variant="outline"
                      className="h-5 w-5 p-0 flex items-center justify-center rounded-full bg-primary"
                    >
                      <Check className="h-3 w-3 text-white" />
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground mb-1">@{coach.username}</p>
                <p className="font-medium text-primary mb-2">{coach.title}</p>
                <p className="text-sm mb-3">{coach.bio}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {coach.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Joined {coach.joinedDate}
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4 text-red-500" />
                    Married for {coach.marriedFor}
                  </div>
                </div>

                <div className="flex gap-4 text-sm mb-4">
                  <span>
                    <strong>{coach.following}</strong> Following
                  </span>
                  <span>
                    <strong>{coach.followers}</strong> Followers
                  </span>
                  <span>
                    <strong>{coach.posts}</strong> Posts
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {coach.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="font-bold">{coach.rating}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{coach.reviewCount} reviews</p>
                  </div>
                  <div className="text-center">
                    <div className="font-bold mb-1">{coach.sessionsCompleted}</div>
                    <p className="text-xs text-muted-foreground">Sessions completed</p>
                  </div>
                  <div className="text-center">
                    <div className="font-bold mb-1">#{coach.laniorRank}</div>
                    <p className="text-xs text-muted-foreground">Lanior Rank</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue="posts" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="programs">Programs</TabsTrigger>
              <TabsTrigger value="sessions">Sessions</TabsTrigger>
              <TabsTrigger value="booking">Booking</TabsTrigger>
            </TabsList>

            <TabsContent value="posts" className="space-y-6 mt-6">
              {posts.map((post, index) => (
                <PostCard key={index} {...post} />
              ))}
            </TabsContent>

            <TabsContent value="programs" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {programs.map((program) => (
                  <Card key={program.id} className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                      <Target className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {program.duration}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span className="text-xs">{program.rating}</span>
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2">{program.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{program.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{program.participants} enrolled</span>
                        <span className="font-bold">${program.price}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sessions" className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sessions.map((session) => (
                  <EventCard key={session.id} event={session} basePath="sessions" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="booking" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Book a Session with {coach.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Step Indicator */}
                  <div className="mb-6">
                    <div className="relative flex justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className="font-bold">1</span>
                        Session
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold">2</span>
                        Time
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold">3</span>
                        Details
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold">4</span>
                        Confirm
                      </div>
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-muted -translate-y-1/2 z-[-1]">
                        {bookingStep === "select-session" && (
                          <div className="absolute top-0 left-0 h-full w-0 bg-primary transition-all duration-300" />
                        )}
                        {bookingStep === "select-time" && (
                          <div className="absolute top-0 left-0 h-full w-[33.33%] bg-primary transition-all duration-300" />
                        )}
                        {bookingStep === "confirm-details" && (
                          <div className="absolute top-0 left-0 h-full w-[66.66%] bg-primary transition-all duration-300" />
                        )}
                        {bookingStep === "booking-confirmed" && (
                          <div className="absolute top-0 left-0 h-full w-full bg-primary transition-all duration-300" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Step 1: Select Session Type */}
                  {bookingStep === "select-session" && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {sessionTypes.map((session) => {
                          const Icon = session.icon
                          return (
                            <Card
                              key={session.id}
                              className={`p-4 hover:shadow-md transition-shadow cursor-pointer border-2 ${
                                selectedSessionType === session.id
                                  ? "border-primary bg-primary/5"
                                  : "hover:border-primary"
                              }`}
                              onClick={() => setSelectedSessionType(session.id as "30min" | "60min")}
                            >
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                  <Icon className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                  <h4 className="font-medium">{session.duration}</h4>
                                  <p className="text-sm text-muted-foreground">{session.description}</p>
                                  <p className="font-bold text-primary">${session.price}</p>
                                </div>
                              </div>
                            </Card>
                          )
                        })}
                      </div>
                      <Button
                        className="w-full bg-primary hover:bg-primary/90"
                        disabled={!selectedSessionType}
                        onClick={() => setBookingStep("select-time")}
                      >
                        Continue
                      </Button>
                    </div>
                  )}

                  {/* Step Indicator */}
                  {bookingStep === "select-time" && (
                    <>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {/* Calendar */}
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">
                                {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                              </h4>
                              <div className="flex gap-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() =>
                                    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
                                  }
                                >
                                  <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() =>
                                    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
                                  }
                                >
                                  <ChevronRight className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>

                            <div className="grid grid-cols-7 gap-1 text-center text-sm">
                              {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
                                <div key={day} className="p-2 font-medium text-muted-foreground">
                                  {day}
                                </div>
                              ))}
                              {generateCalendarDays().map((day, index) => {
                                const isCurrentMonth = day.getMonth() === currentMonth.getMonth()
                                const isSelected = selectedDate?.toDateString() === day.toDateString()
                                const isPast = day < new Date()

                                return (
                                  <button
                                    key={index}
                                    className={`p-2 text-sm rounded-md transition-colors ${
                                      !isCurrentMonth
                                        ? "text-muted-foreground/50"
                                        : isPast
                                          ? "text-muted-foreground/50 cursor-not-allowed"
                                          : isSelected
                                            ? "bg-primary text-white"
                                            : "hover:bg-muted"
                                    }`}
                                    onClick={() => !isPast && isCurrentMonth && setSelectedDate(day)}
                                    disabled={isPast || !isCurrentMonth}
                                  >
                                    {day.getDate()}
                                  </button>
                                )
                              })}
                            </div>
                          </div>

                          {/* Time Slots */}
                          <div className="space-y-4">
                            {selectedDate && (
                              <>
                                <h4 className="font-medium">
                                  {selectedDate.toLocaleDateString("en-US", {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric",
                                  })}
                                </h4>
                                <div className="space-y-2 max-h-80 overflow-y-auto pr-2">
                                  {timeSlots.map((time) => (
                                    <button
                                      key={time}
                                      className={`w-full p-3 text-left rounded-md border transition-colors ${
                                        selectedTime === time
                                          ? "border-primary bg-primary/5 text-primary"
                                          : "border-border hover:border-primary/50"
                                      }`}
                                      onClick={() => setSelectedTime(time)}
                                    >
                                      <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        {time}
                                      </div>
                                    </button>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        </div>

                        <div className="flex justify-between gap-4">
                          <Button variant="outline" onClick={() => setBookingStep("select-session")}>
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back
                          </Button>
                          <Button
                            className="flex-1 bg-primary hover:bg-primary/90"
                            disabled={!selectedDate || !selectedTime}
                            onClick={() => setBookingStep("confirm-details")}
                          >
                            Continue
                          </Button>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Step 3: Confirm Details */}
                  {bookingStep === "confirm-details" && (
                    <>
                      <div className="space-y-6">
                        {/* Session Summary */}
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">{selectedSession?.duration}</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            {selectedDate?.toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}{" "}
                            at {selectedTime}
                          </p>
                          <p className="font-bold text-primary">${selectedSession?.price}</p>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="name">Your name *</Label>
                            <Input id="name" value={currentUser.name} disabled className="bg-muted/50" />
                          </div>

                          <div>
                            <Label htmlFor="email">Email address *</Label>
                            <Input id="email" value={currentUser.email} disabled className="bg-muted/50" />
                          </div>

                          <div>
                            <Label htmlFor="notes">Additional notes</Label>
                            <Textarea
                              id="notes"
                              placeholder="Please share anything that will help prepare for our meeting."
                              value={additionalNotes}
                              onChange={(e) => setAdditionalNotes(e.target.value)}
                              className="min-h-20"
                            />
                          </div>

                          <div className="space-y-3">
                            {!guests.length && newGuestEmail === "" ? (
                              <Button
                                variant="outline"
                                className="w-full justify-start bg-transparent"
                                onClick={() => setNewGuestEmail(" ")}
                              >
                                <UserPlus className="h-4 w-4 mr-2" />
                                Add guests
                              </Button>
                            ) : (
                              <>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <UserPlus className="h-4 w-4" />
                                    <span className="font-medium">Add guests</span>
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => {
                                      setGuests([])
                                      setNewGuestEmail("")
                                    }}
                                  >
                                    <X className="h-4 w-4" />
                                  </Button>
                                </div>

                                {guests.map((email, index) => (
                                  <div key={index} className="flex items-center gap-2">
                                    <Input value={email} disabled className="bg-muted/50" />
                                    <Button variant="ghost" size="sm" onClick={() => removeGuest(email)}>
                                      <X className="h-4 w-4" />
                                    </Button>
                                  </div>
                                ))}

                                <div className="flex items-center gap-2">
                                  <Input
                                    placeholder="Email"
                                    value={newGuestEmail.trim()}
                                    onChange={(e) => setNewGuestEmail(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && addGuest()}
                                  />
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={addGuest}
                                    disabled={!newGuestEmail.trim()}
                                  >
                                    <Plus className="h-4 w-4" />
                                  </Button>
                                </div>
                              </>
                            )}
                          </div>

                          <div className="text-xs text-muted-foreground">
                            By proceeding, you agree to our <span className="underline cursor-pointer">Terms</span> and{" "}
                            <span className="underline cursor-pointer">Privacy Policy</span>.
                          </div>

                          <div className="flex justify-between gap-4">
                            <Button variant="outline" onClick={() => setBookingStep("select-time")}>
                              <ArrowLeft className="h-4 w-4 mr-2" />
                              Back
                            </Button>
                            <Button
                              className="flex-1 bg-primary hover:bg-primary/90"
                              onClick={() => setBookingStep("booking-confirmed")}
                            >
                              {selectedSession?.price === 0 ? "Confirm" : `Pay $${selectedSession?.price}`}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Step 4: Booking Confirmed */}
                  {bookingStep === "booking-confirmed" && (
                    <div className="text-center space-y-6">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <Check className="h-8 w-8 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Booking Confirmed!</h3>
                        <p className="text-muted-foreground">
                          Your session with {coach.name} has been successfully booked.
                        </p>
                      </div>

                      <div className="bg-muted/50 p-4 rounded-lg text-left">
                        <h4 className="font-medium mb-2">{selectedSession?.duration}</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {selectedDate?.toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}{" "}
                          at {selectedTime}
                        </p>
                        <p className="font-bold text-primary">${selectedSession?.price}</p>
                      </div>

                      <div className="space-y-3 text-sm text-muted-foreground">
                        <p>A confirmation email has been sent to {currentUser.email}</p>
                        <p>You'll receive a calendar invite and meeting link 24 hours before your session.</p>
                      </div>

                      <Button className="w-full bg-primary hover:bg-primary/90" onClick={resetBooking}>
                        Book Another Session
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <SidebarContent />
        </div>
      </div>
    </div>
  )
}
