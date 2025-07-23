import { EventCard } from "@/components/event-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sessions - Lanior",
  description:
    "Lanior is the relationship wellness ecosystem that helps modern couples build thriving, lasting partnerships through expert guidance, community support, and personalized growth programs.",
}

export default function SessionsPage() {
  const sessions = [
    {
      id: "1",
      title: "Communication Mastery Workshop",
      description:
        "Learn effective communication techniques to strengthen your relationship and resolve conflicts constructively.",
      date: "2024-02-15",
      time: "7:00 PM",
      duration: "90 minutes",
      location: {
        type: "online",
        address: "Zoom Meeting",
        city: "Virtual",
        country: "Online",
      },
      image:
        "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      instructor: {
        name: "Dr. Sarah Johnson",
        avatar:
          "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        verified: true,
      },
      attendees: 45,
      maxAttendees: 50,
      price: 29.99,
      tags: ["Communication", "Workshop", "Beginner"],
      status: "upcoming",
    },
    {
      id: "2",
      title: "Couples Meditation Session",
      description:
        "A guided meditation session designed specifically for couples to deepen their connection and find inner peace together.",
      date: "2024-02-12",
      time: "6:30 PM",
      duration: "60 minutes",
      location: {
        type: "in-person",
        address: "123 Wellness Center",
        city: "San Francisco",
        country: "USA",
      },
      image:
        "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      instructor: {
        name: "Michael Chen",
        avatar:
          "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        verified: true,
      },
      attendees: 20,
      maxAttendees: 25,
      price: 19.99,
      tags: ["Meditation", "Mindfulness", "Couples"],
      status: "ended",
    },
    {
      id: "3",
      title: "Building Trust After Betrayal",
      description:
        "A supportive session for couples working through trust issues and rebuilding their relationship foundation.",
      date: "2024-02-18",
      time: "8:00 PM",
      duration: "120 minutes",
      location: {
        type: "online",
        address: "Private Zoom Room",
        city: "Virtual",
        country: "Online",
      },
      image:
        "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      instructor: {
        name: "Dr. Emily Rodriguez",
        avatar:
          "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        verified: true,
      },
      attendees: 12,
      maxAttendees: 15,
      price: 49.99,
      tags: ["Trust", "Healing", "Advanced"],
      status: "upcoming",
    },
    {
      id: "4",
      title: "Date Night Planning Workshop",
      description: "Creative ideas and strategies to keep the romance alive with meaningful and fun date experiences.",
      date: "2024-02-20",
      time: "7:30 PM",
      duration: "75 minutes",
      location: {
        type: "hybrid",
        address: "Community Center & Online",
        city: "New York",
        country: "USA",
      },
      image:
        "https://images.pexels.com/photos/4144101/pexels-photo-4144101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      instructor: {
        name: "Lisa Thompson",
        avatar:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        verified: true,
      },
      attendees: 35,
      maxAttendees: 40,
      price: 24.99,
      tags: ["Romance", "Fun", "Creative"],
      status: "upcoming",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold unbounded">Sessions</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sessions.map((session) => (
          <EventCard key={session.id} event={session} basePath="sessions" />
        ))}
      </div>
    </div>
  )
}
