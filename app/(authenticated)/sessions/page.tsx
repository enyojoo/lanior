import type { Metadata } from "next"
import { EventCard } from "@/components/event-card"

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
      instructor: {
        name: "Dr. Sarah Johnson",
        title: "Relationship Therapist",
        avatar:
          "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      location: {
        type: "virtual",
        address: "Online via Zoom",
        city: "",
        country: "",
      },
      price: 49,
      capacity: 20,
      enrolled: 15,
      tags: ["Communication", "Conflict Resolution", "Beginner Friendly"],
      image:
        "https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      status: "upcoming",
    },
    {
      id: "2",
      title: "Intimacy & Connection Building",
      description:
        "Explore ways to deepen emotional and physical intimacy in your relationship through guided exercises and discussions.",
      date: "2024-02-18",
      time: "6:30 PM",
      duration: "2 hours",
      instructor: {
        name: "Dr. Michael Chen",
        title: "Couples Therapist",
        avatar:
          "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      location: {
        type: "in-person",
        address: "123 Wellness Center",
        city: "San Francisco",
        country: "CA",
      },
      price: 75,
      capacity: 12,
      enrolled: 8,
      tags: ["Intimacy", "Connection", "Advanced"],
      image:
        "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      status: "upcoming",
    },
    {
      id: "3",
      title: "Managing Relationship Stress",
      description:
        "Learn practical strategies to handle stress and maintain a healthy relationship during challenging times.",
      date: "2024-02-10",
      time: "8:00 PM",
      duration: "75 minutes",
      instructor: {
        name: "Dr. Emily Rodriguez",
        title: "Clinical Psychologist",
        avatar:
          "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      location: {
        type: "virtual",
        address: "Online via Zoom",
        city: "",
        country: "",
      },
      price: 39,
      capacity: 25,
      enrolled: 25,
      tags: ["Stress Management", "Mental Health", "Coping Strategies"],
      image:
        "https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      status: "ended",
    },
    {
      id: "4",
      title: "Building Trust After Betrayal",
      description:
        "A supportive environment to work through trust issues and rebuild stronger foundations in your relationship.",
      date: "2024-02-22",
      time: "7:30 PM",
      duration: "2.5 hours",
      instructor: {
        name: "Dr. James Wilson",
        title: "Marriage Counselor",
        avatar:
          "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      location: {
        type: "in-person",
        address: "456 Therapy Plaza",
        city: "Los Angeles",
        country: "CA",
      },
      price: 89,
      capacity: 10,
      enrolled: 6,
      tags: ["Trust", "Healing", "Recovery"],
      image:
        "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      status: "upcoming",
    },
    {
      id: "5",
      title: "Financial Planning for Couples",
      description: "Navigate money conversations and create a shared financial vision for your future together.",
      date: "2024-02-25",
      time: "6:00 PM",
      duration: "90 minutes",
      instructor: {
        name: "Sarah Thompson",
        title: "Financial Advisor & Relationship Coach",
        avatar:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      location: {
        type: "virtual",
        address: "Online via Zoom",
        city: "",
        country: "",
      },
      price: 55,
      capacity: 30,
      enrolled: 18,
      tags: ["Finance", "Planning", "Communication"],
      image:
        "https://images.pexels.com/photos/4144101/pexels-photo-4144101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      status: "upcoming",
    },
    {
      id: "6",
      title: "Parenting as a Team",
      description: "Strengthen your partnership while navigating the challenges and joys of raising children together.",
      date: "2024-02-28",
      time: "7:00 PM",
      duration: "2 hours",
      instructor: {
        name: "Dr. Lisa Martinez",
        title: "Family Therapist",
        avatar:
          "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      location: {
        type: "in-person",
        address: "789 Family Center",
        city: "Austin",
        country: "TX",
      },
      price: 65,
      capacity: 16,
      enrolled: 12,
      tags: ["Parenting", "Teamwork", "Family"],
      image:
        "https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
