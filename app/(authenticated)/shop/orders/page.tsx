"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Search, CheckCircle, XCircle, Clock, Filter } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample order data (in a real app, this would come from a database or API)
const orders = [
  {
    id: "ORD-12345",
    date: "March 15, 2025",
    total: 89.97,
    status: "completed",
    items: [
      {
        id: 1,
        name: "Love Language Card Game",
        price: 24.99,
        quantity: 1,
        image:
          "https://images.pexels.com/photos/4691567/pexels-photo-4691567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 5,
        name: "The 5 Love Languages Book",
        price: 15.99,
        quantity: 1,
        image:
          "https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        id: 10,
        name: "Couple's Adventure Map",
        price: 29.99,
        quantity: 1,
        image:
          "https://images.pexels.com/photos/697662/pexels-photo-697662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    id: "ORD-12346",
    date: "March 10, 2025",
    total: 49.99,
    status: "processing",
    items: [
      {
        id: 2,
        name: "Couples Meditation Course",
        price: 49.99,
        quantity: 1,
        image:
          "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
  {
    id: "ORD-12347",
    date: "March 5, 2025",
    total: 39.99,
    status: "failed",
    items: [
      {
        id: 3,
        name: "Monthly Date Night Box",
        price: 39.99,
        quantity: 1,
        image:
          "https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
  },
]

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Filter orders based on search query and status
  const filteredOrders = orders.filter(
    (order) =>
      (statusFilter === "all" || order.status === statusFilter) &&
      (order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.items.some((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))),
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-500 hover:bg-green-600 flex items-center gap-1">
            <CheckCircle className="h-3.5 w-3.5" />
            <span>Completed</span>
          </Badge>
        )
      case "processing":
        return (
          <Badge className="bg-yellow-500 hover:bg-yellow-600 flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>Processing</span>
          </Badge>
        )
      case "failed":
        return (
          <Badge className="bg-red-500 hover:bg-red-600 flex items-center gap-1">
            <XCircle className="h-3.5 w-3.5" />
            <span>Failed</span>
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/shop">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to Shop</span>
          </Link>
        </Button>
        <h1 className="text-2xl font-bold unbounded">Order History</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search orders..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div>
          <Tabs defaultValue="all" value={statusFilter} onValueChange={setStatusFilter}>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="processing">Processing</TabsTrigger>
              <TabsTrigger value="failed">Failed</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="space-y-6">
        {filteredOrders.length > 0 ? (
          <div className="space-y-6">
            {filteredOrders.map((order) => (
              <Card key={order.id} className="overflow-hidden">
                <CardHeader className="p-4 flex flex-row items-center justify-between">
                  <div>
                    <h3 className="font-medium">{order.id}</h3>
                    <p className="text-sm text-muted-foreground">{order.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    {getStatusBadge(order.status)}
                    <p className="font-semibold">${order.total.toFixed(2)}</p>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-4">
                        <div className="relative h-16 w-16 overflow-hidden rounded-md flex-shrink-0">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{item.name}</h4>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                            <p className="font-medium">${item.price.toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-end">
                  {order.status === "completed" && <Button variant="outline">Buy Again</Button>}
                  {order.status === "failed" && <Button>Retry Payment</Button>}
                  {order.status === "processing" && <Button variant="outline">Track Order</Button>}
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Filter className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">No orders found</h3>
            <p className="text-muted-foreground mb-6">
              {searchQuery || statusFilter !== "all"
                ? "No orders match your search or filter criteria"
                : "You haven't placed any orders yet"}
            </p>
            <Button asChild>
              <Link href="/shop">Start Shopping</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

