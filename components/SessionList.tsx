import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users } from "lucide-react"

interface Session {
  id: string
  title: string
  date: string
  attendees: number
  image: string
}

interface SessionListProps {
  sessions: Session[]
}

export default function SessionList({ sessions }: SessionListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {sessions.map((session) => (
        <Card key={session.id} className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardHeader>
            <img
              src={session.image || "/placeholder.svg"}
              alt={session.title}
              className="w-full h-32 object-cover rounded-lg"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-lg mb-2">{session.title}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{session.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
              <Users className="h-4 w-4" />
              <span>{session.attendees} attending</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
