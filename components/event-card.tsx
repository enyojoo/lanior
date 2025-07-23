import Link from "next/link"

interface EventCardProps {
  event: {
    id: string
    title: string
    description: string
    date: string
    location: string
    image: string
  }
  basePath?: string
}

export function EventCard({ event, basePath = "events" }: EventCardProps) {
  return (
    <div className="border rounded-md p-4">
      <img
        src={event.image || "/placeholder.svg"}
        alt={event.title}
        className="w-full h-48 object-cover rounded-md mb-2"
      />
      <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
      <p className="text-gray-600 mb-2">{event.description.substring(0, 100)}...</p>
      <p className="text-gray-500 mb-2">Date: {event.date}</p>
      <p className="text-gray-500 mb-2">Location: {event.location}</p>
      <Link href={`/${basePath}/${event.id}`}>
        <div className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Learn More</div>
      </Link>
    </div>
  )
}
