"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { format, isPast } from "date-fns"
import { Calendar, Clock, MapPin, Wifi, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Host {
  name: string
  title: string
  avatar: string
  verified: boolean
}

interface Location {
  type: "online" | "offline"
  address?: string
  city?: string
  country?: string
  platform?: string
  link?: string
}

interface Event {
  id: string
  title: string
  description: string
  date: string
  endDate: string
  location: Location
  host: Host
  image: string
  capacity: number
  attendees: number
  type: string
  price: number
}

interface EventCardProps {
  event: Event
  basePath?: string
}

export function EventCard({ event, basePath = "events" }: EventCardProps) {
  const router = useRouter()
  const isEventPast = isPast(new Date(event.date))
  const isFull = event.attendees >= event.capacity
  const isMultiDay = new Date(event.date).toDateString() !== new Date(event.endDate).toDateString()

  const handleViewEvent = () => {
    router.push(`/${basePath}/${event.id}`)
  }

  return (
    <Card
      className="overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow cursor-pointer"
      onClick={handleViewEvent}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        <div className="absolute top-2 left-2 flex gap-1">
          <Badge className={event.location.type === "online" ? "bg-blue-500" : "bg-green-500"}>
            {event.location.type === "online" ? (
              <>
                <Wifi className="h-3 w-3 mr-1" /> Online
              </>
            ) : (
              <>
                <MapPin className="h-3 w-3 mr-1" /> In-Person
              </>
            )}
          </Badge>
          {event.price === 0 && <Badge className="bg-purple-500">Free</Badge>}
        </div>
        {(isEventPast || isFull) && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <Badge variant="outline" className="text-white border-white text-lg py-1 px-3">
              {isEventPast ? (basePath === "sessions" ? "Session Ended" : "Event Ended") : "Fully Booked"}
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="flex-1 p-4">
        <h3 className="font-semibold text-lg mb-3 line-clamp-2">{event.title}</h3>

        <div className="flex items-center gap-2 mb-3">
          <Avatar className="h-6 w-6 border border-primary">
            <AvatarImage src={event.host.avatar || "/placeholder.svg"} alt={event.host.name} />
            <AvatarFallback>{event.host.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center">
              <span className="text-xs font-medium">{event.host.name}</span>
              {event.host.verified && (
                <Badge
                  variant="outline"
                  className="ml-1 h-3.5 w-3.5 p-0 flex items-center justify-center rounded-full bg-primary"
                >
                  <Check className="h-2 w-2 text-white" />
                </Badge>
              )}
            </div>
            <span className="text-xs text-muted-foreground">{event.host.title}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">
            {format(new Date(event.date), "MMM d, yyyy")}
            {isMultiDay && ` - ${format(new Date(event.endDate), "MMM d, yyyy")}`}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">
            {format(new Date(event.date), "h:mm a")} - {format(new Date(event.endDate), "h:mm a")}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div>
          {event.price > 0 ? (
            <span className="font-semibold">${event.price.toFixed(2)}</span>
          ) : (
            <span className="text-green-600 font-semibold">Free</span>
          )}
        </div>

        <Button
          onClick={(e) => {
            e.stopPropagation()
            handleViewEvent()
          }}
          disabled={isEventPast}
          className={isEventPast ? "opacity-50" : "bg-primary hover:bg-primary/90"}
        >
          {basePath === "sessions" ? "View Session" : "View Event"}
        </Button>
      </CardFooter>
    </Card>
  )
}
