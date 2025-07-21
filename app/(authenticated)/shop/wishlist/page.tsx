"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, Search, ArrowLeft, Check } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

// Sample wishlist products (in a real app, this would come from a database or API)
const wishlistProducts = [
  {
    id: 1,
    name: "Love Language Card Game",
    price: 24.99,
    image:
      "https://images.pexels.com/photos/4691567/pexels-photo-4691567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "gifts",
    rating: 4.8,
    reviews: 124,
    vendor: {
      name: "Relationship Games Co.",
      image:
        "https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: true,
    },
    description:
      "Deepen your connection with this card game designed to help couples explore their love languages. Each card prompts meaningful conversations and activities based on the five love languages.",
    features: [
      "50 conversation starter cards",
      "5 categories based on love languages",
      "Relationship-building activities",
      "Travel-friendly box",
    ],
    inStock: true,
  },
  {
    id: 5,
    name: "The 5 Love Languages Book",
    price: 15.99,
    image:
      "https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "books",
    rating: 4.9,
    reviews: 3452,
    vendor: {
      name: "Relationship Press",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: true,
    },
    description:
      "The classic relationship book that has transformed millions of relationships. Learn to speak your partner's primary love language and truly understand each other on a deeper level.",
    features: [
      "Bestselling relationship guide",
      "Practical advice and examples",
      "Self-assessment quizzes",
      "Available in hardcover, paperback, and e-book",
    ],
    inStock: true,
  },
  {
    id: 10,
    name: "Couple's Adventure Map",
    price: 29.99,
    image:
      "https://images.pexels.com/photos/697662/pexels-photo-697662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "gifts",
    rating: 4.7,
    reviews: 112,
    vendor: {
      name: "Adventure Together",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: true,
    },
    description:
      "A beautiful interactive map that lets you track your adventures together. Pin the locations you've visited and plan future trips to strengthen your bond through shared experiences.",
    features: [
      "High-quality canvas print",
      "Includes 50 colorful pins",
      "Personalized with your names",
      "Available in 3 sizes",
    ],
    inStock: true,
  },
]

export default function WishlistPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [wishlistItems, setWishlistItems] = useState(wishlistProducts)
  const [cartItems, setCartItems] = useState<number[]>([])

  // Filter products based on search query
  const filteredProducts = wishlistItems.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.vendor.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const removeFromWishlist = (productId: number) => {
    setWishlistItems(wishlistItems.filter((product) => product.id !== productId))
  }

  const addToCart = (productId: number) => {
    setCartItems([...cartItems, productId])
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
        <h1 className="text-2xl font-bold unbounded">Wishlist</h1>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search wishlists..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="space-y-6">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden flex flex-col h-full">
                <CardHeader className="p-0 relative">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background/90 z-10"
                      onClick={() => removeFromWishlist(product.id)}
                    >
                      <Heart className="h-5 w-5 fill-primary text-primary" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-4 flex-1 flex flex-col">
                  <div className="flex items-center mb-2">
                    <Avatar className="h-6 w-6 mr-2 border border-primary">
                      <AvatarImage src={product.vendor.image} alt={product.vendor.name} />
                      <AvatarFallback>{product.vendor.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground flex items-center">
                      {product.vendor.name}
                      {product.vendor.verified && (
                        <Badge
                          variant="outline"
                          className="ml-1 h-4 w-4 p-0 flex items-center justify-center rounded-full bg-primary"
                        >
                          <Check className="h-2.5 w-2.5 text-white" />
                        </Badge>
                      )}
                    </span>
                  </div>
                  <h3 className="font-medium line-clamp-2 mb-1">{product.name}</h3>
                  <div className="mt-auto">
                    <p className="font-semibold text-lg">${product.price.toFixed(2)}</p>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="flex-1">
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>{product.name}</DialogTitle>
                      </DialogHeader>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div className="relative aspect-square w-full overflow-hidden rounded-md">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8 border border-primary">
                              <AvatarImage src={product.vendor.image} alt={product.vendor.name} />
                              <AvatarFallback>{product.vendor.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center">
                                <span className="font-medium">{product.vendor.name}</span>
                                {product.vendor.verified && (
                                  <Badge
                                    variant="outline"
                                    className="ml-1 h-4 w-4 p-0 flex items-center justify-center rounded-full bg-primary"
                                  >
                                    <Check className="h-2.5 w-2.5 text-white" />
                                  </Badge>
                                )}
                              </div>
                              <span className="text-xs text-muted-foreground">Verified Vendor</span>
                            </div>
                          </div>

                          <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>

                          <div>
                            <h4 className="font-medium mb-2">Description</h4>
                            <p className="text-sm text-muted-foreground">{product.description}</p>
                          </div>

                          <div>
                            <h4 className="font-medium mb-2">Features</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {product.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-2 mt-6">
                            <Button
                              className="flex-1"
                              disabled={cartItems.includes(product.id)}
                              onClick={() => addToCart(product.id)}
                            >
                              {cartItems.includes(product.id) ? "Added to Cart" : "Add to Cart"}
                            </Button>
                            <Button variant="outline" size="icon" onClick={() => removeFromWishlist(product.id)}>
                              <Heart className="h-5 w-5 fill-primary text-primary" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button
                    className="flex-1"
                    disabled={cartItems.includes(product.id)}
                    onClick={() => addToCart(product.id)}
                  >
                    {cartItems.includes(product.id) ? "Added" : "Add to Cart"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Heart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">No products found</h3>
            <p className="text-muted-foreground mb-6">
              {searchQuery ? "No products match your search" : "You haven't added any products to your wishlist yet"}
            </p>
            <Button asChild>
              <Link href="/shop">Browse Products</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
