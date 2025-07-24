"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import Link from "next/link"

const CoachesPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const coaches = useQuery(api.coaches.getCoaches)

  useEffect(() => {
    if (coaches) {
      setIsLoading(false)
    }
  }, [coaches])

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Our Coaches</h1>
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <CardHeader>
                <Skeleton className="h-8 w-32" />
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <Skeleton className="h-24 w-24 rounded-full mb-4" />
                <Skeleton className="h-6 w-48 mb-2" />
                <Skeleton className="h-4 w-32" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coaches?.map((coach) => (
            <Link
              key={coach.id}
              href={`/c/${coach.name
                .toLowerCase()
                .replace(/\s+/g, "")
                .replace(/[^a-z0-9]/g, "")}`}
            >
              <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle>{coach.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={coach.imageUrl || "/placeholder.svg"} alt={coach.name} />
                    <AvatarFallback>{coach.name[0]}</AvatarFallback>
                  </Avatar>
                  <p className="text-sm text-muted-foreground mt-2">{coach.title}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default CoachesPage
