import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function SidebarContent() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold unbounded">Featured Experts</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Avatar className="h-10 w-10 border-2 border-primary overflow-hidden">
                <AvatarImage
                  src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Expert"
                  className="object-cover"
                />
                <AvatarFallback>EX</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <p className="font-medium">Diana Kirsch</p>
              <p className="text-xs text-muted-foreground">Relationship Expert</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10 border-2 border-primary overflow-hidden">
              <AvatarImage
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Expert"
                className="object-cover"
              />
              <AvatarFallback>SO</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Sergey Ovsipenko</p>
              <p className="text-xs text-muted-foreground">Family Counselor</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10 border-2 border-primary overflow-hidden">
              <AvatarImage
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Expert"
                className="object-cover"
              />
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Anna Ivanova</p>
              <p className="text-xs text-muted-foreground">Relationship Coach</p>
            </div>
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90">View All Experts</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold unbounded">Trending Plans</h3>
        </CardHeader>
        <CardContent className="space-y-3">
          <Link href="/feed/plans" className="block p-3 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors">
            <h4 className="font-medium">Building Trust</h4>
            <p className="text-xs text-muted-foreground">12.5K users following</p>
          </Link>
          <Link href="/feed/plans" className="block p-3 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors">
            <h4 className="font-medium">Emotional Intimacy</h4>
            <p className="text-xs text-muted-foreground">9.8K users following</p>
          </Link>
          <Link href="/feed/plans" className="block p-3 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors">
            <h4 className="font-medium">Parenting as a Team</h4>
            <p className="text-xs text-muted-foreground">7.3K users following</p>
          </Link>

          <Button variant="outline" className="w-full">
            View All Plans
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
