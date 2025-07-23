"use client"

import type { Metadata } from "next"
import { useState } from "react"
import { EventCard } from "@/components/event-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Calendar, MapPin, Wifi } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Note: This metadata would typically be set in a parent layout or using generateMetadata
const pageMetadata: Metadata = {
  title: "Sessions - Lanior",
  description:
    "Lanior is the relationship wellness ecosystem that helps modern couples build thriving, lasting partnerships through expert guidance, community support, and personalized growth programs.",
}

export default function SessionsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filter, setFilter] = useState("all")

  // Sample sessions data
  const sessions = [
    {
      id: "1",
      title: "Building Trust Workshop",
      description:
        "A 2-hour interactive workshop focused on building and maintaining trust in relationships. Learn practical techniques and exercises you can apply immediately.",
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
        "Join us for a weekend-long virtual retreat designed to help couples reconnect and strengthen their bond. Sessions include communication exercises, guided meditations, and expert Q&A.",
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
        "Learn advanced communication techniques to resolve conflicts and deepen your connection. This interactive seminar includes role-playing exercises and personalized feedback.",
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
        "Join this free webinar to learn strategies for navigating major life transitions as a couple. Topics include career changes, moving, having children, and more.",
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
        "Escape the city for a weekend retreat in the mountains. This all-inclusive experience features workshops, couple activities, and time to reconnect in a beautiful natural setting.",
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
        "A monthly support group for couples navigating the challenges of parenting together. Share experiences, get advice, and build community with other parents.",
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
      },
      image:
        "https://images.pexels.com/photos/7282818/pexels-photo-7282818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      capacity: 30,
      attendees: 22,
      type: "support group",
      price: 15,
    },
  ]

  // Filter sessions based on search query and filter type
  const filteredSessions = sessions.filter((session) => {
    const matchesSearch =
      session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.host.name.toLowerCase().includes(searchQuery.toLowerCase())

    if (filter === "all") return matchesSearch
    if (filter === "online") return matchesSearch && session.location.type === "online"
    if (filter === "offline") return matchesSearch && session.location.type === "offline"
    if (filter === "free") return matchesSearch && session.price === 0

    return matchesSearch
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold unbounded">Sessions</h1>
        <Button className="bg-primary hover:bg-primary/90">Create Session</Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search sessions..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Tabs defaultValue="all" value={filter} onValueChange={setFilter}>
          <TabsList>
            <TabsTrigger value="all">All Sessions</TabsTrigger>
            <TabsTrigger value="online" className="flex items-center gap-1">
              <Wifi className="h-3.5 w-3.5" />
              <span>Online</span>
            </TabsTrigger>
            <TabsTrigger value="offline" className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              <span>In-Person</span>
            </TabsTrigger>
            <TabsTrigger value="free">Free</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSessions.length > 0 ? (
          filteredSessions.map((session) => <EventCard key={session.id} event={session} basePath="sessions" />)
        ) : (
          <div className="col-span-full text-center py-12">
            <Calendar className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">No sessions found</h3>
            <p className="text-muted-foreground">
              {searchQuery ? "Try adjusting your search or filters" : "There are no upcoming sessions at this time"}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
