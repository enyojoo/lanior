import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CoachesPage() {
  const coaches = [
    {
      name: "Michael & Nadezhda",
      username: "michaelnadezhda",
      specialty: "Couple Therapy",
      image:
        "https://images.pexels.com/photos/4609045/pexels-photo-4609045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Sergey Ovsipenko",
      username: "sergeyov",
      specialty: "Family Counseling",
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Anna Hovsepyan",
      username: "annahovse",
      specialty: "Relationship Coach",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Maria Aleks",
      username: "mariaaleks",
      specialty: "Marriage Counselor",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Andrey Gavrilov",
      username: "andreygavrilov",
      specialty: "Conflict Resolution",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Anna Ivanova",
      username: "annaivanova",
      specialty: "Dating Coach",
      image:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Renat Dovlatov",
      username: "renatdovlatov",
      specialty: "Parenting Expert",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Diana Kirsch",
      username: "dianakirsch",
      specialty: "Intimacy Counselor",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Zarina Musatova",
      username: "zarinamusatova",
      specialty: "Communication Expert",
      image:
        "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold unbounded">Coaches</h1>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input placeholder="Search coaches..." className="pl-10" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {coaches.map((coach, index) => (
          <Card key={index} className="expert-card overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4 border-2 border-primary overflow-hidden">
                <AvatarImage src={coach.image || "/placeholder.svg"} alt={coach.name} className="object-cover" />
                <AvatarFallback>{coach.name[0]}</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-lg">{coach.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{coach.specialty}</p>
              <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                <Link href={`/c/${coach.username}`}>View Profile</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
