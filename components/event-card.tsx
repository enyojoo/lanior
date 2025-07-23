import { format, isPast } from "date-fns"
import { Calendar, Clock, MapPin, Users, Wifi, DollarSign } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Check } from "lucide-react"
import Link from "next/link"

interface EventCardProps {
  event: {
    id: string
    title: string
    description: string
    date: string
    endDate: string
    location: {
      type: "online" | "offline"
      address?: string
      city?: string
      country?: string
      platform?: string
      link?: string
    }
    host: {
      name: string
      title: string
      avatar: string
      verified: boolean
    }
    image: string
    capacity: number
    attendees: number
    type: string
    price: number
  }
  basePath?: string
}

export function EventCard({ event, basePath = "events" }: EventCardProps) {
  const isEventPast = isPast(new Date(event.date))
  const isFull = event.attendees >= event.capacity
  const isMultiDay = new Date(event.date).toDateString() !== new Date(event.endDate).toDateString()

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video relative overflow-hidden">
        <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
        <div className="absolute top-3 left-3 flex gap-2">
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
        <div className="absolute top-3 right-3">
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={event.host.avatar || "/placeholder.svg"} alt={event.host.name} />
            <AvatarFallback>{event.host.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1">
              <span className="font-medium text-sm truncate">{event.host.name}</span>
              {event.host.verified && (
                <Badge
                  variant="outline"
                  className="h-3.5 w-3.5 p-0 flex items-center justify-center rounded-full bg-primary"
                >
                  <Check className="h-2 w-2 text-white" />
                </Badge>
              )}
            </div>
            <span className="text-xs text-muted-foreground">{event.host.title}</span>
          </div>
        </div>

        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{event.title}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{event.description}</p>

        <div className="space-y-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5" />
            <span>
              {format(new Date(event.date), "MMM d, yyyy")}
              {isMultiDay && ` - ${format(new Date(event.endDate), "MMM d, yyyy")}`}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5" />
            <span>
              {format(new Date(event.date), "h:mm a")} - {format(new Date(event.endDate), "h:mm a")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {event.location.type === "online" ? <Wifi className="h-3.5 w-3.5" /> : <MapPin className="h-3.5 w-3.5" />}
            <span>
              {event.location.type === "online"
                ? event.location.platform
                : `${event.location.city}, ${event.location.country}`}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-3.5 w-3.5" />
            <span>
              {event.attendees} / {event.capacity} attendees
            </span>
          </div>
          {event.price > 0 && (
            <div className="flex items-center gap-2">
              <DollarSign className="h-3.5 w-3.5" />
              <span>${event.price.toFixed(2)}</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full" disabled={isEventPast || isFull}>
          <Link href={`/${basePath}/${event.id}`}>
            {isEventPast ? "Session Ended" : isFull ? "Fully Booked" : "View Session"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
