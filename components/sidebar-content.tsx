"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export function SidebarContent() {
  return (
    <div className="space-y-6">
      {/* Today's Challenge */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold unbounded">Today's Challenge</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-primary/10">
            <h4 className="font-medium mb-2">Express Gratitude</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Share three things you appreciate about your partner today.
            </p>
            <Progress value={65} className="mb-2" />
            <p className="text-xs text-muted-foreground">65% of couples completed this</p>
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90">Start Challenge</Button>
        </CardContent>
      </Card>

      {/* Your Lanior Progress */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold unbounded">Your Lanior Progress</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Relationship Score</span>
            <Badge variant="secondary">Level 7</Badge>
          </div>
          <Progress value={78} className="mb-2" />
          <p className="text-xs text-muted-foreground">78% - Great progress this month!</p>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="text-center p-3 rounded-lg bg-muted/50">
              <div className="text-lg font-bold">12</div>
              <div className="text-xs text-muted-foreground">Activities</div>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/50">
              <div className="text-lg font-bold">5</div>
              <div className="text-xs text-muted-foreground">Streaks</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Featured Experts */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold unbounded">Featured Experts</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10 border-2 border-primary">
              <AvatarImage
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Diana Kirsch"
              />
              <AvatarFallback>DK</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="font-medium">Diana Kirsch</p>
              <p className="text-xs text-muted-foreground">Relationship Expert</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10 border-2 border-primary">
              <AvatarImage
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Sergey Ovsipenko"
              />
              <AvatarFallback>SO</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="font-medium">Sergey Ovsipenko</p>
              <p className="text-xs text-muted-foreground">Family Counselor</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10 border-2 border-primary">
              <AvatarImage
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Anna Ivanova"
              />
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="font-medium">Anna Ivanova</p>
              <p className="text-xs text-muted-foreground">Relationship Coach</p>
            </div>
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90">View All Experts</Button>
        </CardContent>
      </Card>

      {/* Trending Plans */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold unbounded">Trending Plans</h3>
        </CardHeader>
        <CardContent className="space-y-3">
          <Link href="/plans" className="block p-3 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors">
            <h4 className="font-medium">Building Trust Together</h4>
            <p className="text-xs text-muted-foreground">12.5K users following</p>
          </Link>
          <Link href="/plans" className="block p-3 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors">
            <h4 className="font-medium">Emotional Intimacy Mastery</h4>
            <p className="text-xs text-muted-foreground">9.8K users following</p>
          </Link>
          <Link href="/plans" className="block p-3 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors">
            <h4 className="font-medium">Parenting as a Team</h4>
            <p className="text-xs text-muted-foreground">7.3K users following</p>
          </Link>

          <Button variant="outline" className="w-full bg-transparent">
            View All Plans
          </Button>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold unbounded">Upcoming Events</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-3 rounded-lg border">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-sm">Couples Communication Workshop</h4>
              <Badge variant="outline" className="text-xs">
                Free
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
              <Calendar className="h-3 w-3" />
              <span>Jan 15, 2024</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
              <Clock className="h-3 w-3" />
              <span>7:00 PM - 9:00 PM</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>Online Event</span>
            </div>
          </div>

          <div className="p-3 rounded-lg border">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-sm">Relationship Building Retreat Weekend</h4>
              <Badge variant="outline" className="text-xs">
                $299
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
              <Calendar className="h-3 w-3" />
              <span>Jan 20-22, 2024</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
              <Clock className="h-3 w-3" />
              <span>All Day</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>Lake Tahoe, CA</span>
            </div>
          </div>

          <Button variant="outline" className="w-full bg-transparent">
            View All Events
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
