"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Heart, ShoppingCart, Filter, Check, History } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

// Product types for relationship building
const categories = [
  { id: "all", name: "All" },
  { id: "gifts", name: "Gifts & Flowers" },
  { id: "experiences", name: "Date Experiences" },
  { id: "books", name: "Books & Courses" },
  { id: "fashion", name: "Couple Fashion" },
  { id: "wellness", name: "Wellness" },
  { id: "home", name: "Home & Decor" },
  { id: "wedding", name: "Wedding" },
]

// Sample products
const products = [
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
    id: 2,
    name: "Couples Meditation Course",
    price: 49.99,
    image:
      "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "wellness",
    rating: 4.9,
    reviews: 87,
    vendor: {
      name: "Mindful Together",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: true,
    },
    description:
      "Learn to meditate together with this 8-week digital course designed specifically for couples. Strengthen your bond through shared mindfulness practices.",
    features: [
      "8 guided meditation sessions",
      "Downloadable audio files",
      "Couples mindfulness exercises",
      "Lifetime access to materials",
    ],
    inStock: true,
  },
  {
    id: 3,
    name: "Monthly Date Night Box",
    price: 39.99,
    image:
      "https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "experiences",
    rating: 4.7,
    reviews: 215,
    vendor: {
      name: "DateBox Club",
      image:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: true,
    },
    description:
      "Receive a curated date night experience delivered to your door monthly. Each box contains everything you need for a unique and fun date night at home.",
    features: [
      "Themed date night activities",
      "All supplies included",
      "Digital playlist and ambiance suggestions",
      "Monthly subscription with free shipping",
    ],
    inStock: true,
  },
  {
    id: 4,
    name: "Matching Couple Bracelets",
    price: 59.99,
    image:
      "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "fashion",
    rating: 4.6,
    reviews: 93,
    vendor: {
      name: "Connected Jewelry",
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: false,
    },
    description:
      "These elegant matching bracelets are made with high-quality materials and can be customized with your initials or a special date. A beautiful way to carry a reminder of your connection.",
    features: ["Stainless steel with gold plating", "Customizable engraving", "Adjustable size", "Gift box included"],
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
    id: 6,
    name: "Couple's Cooking Class",
    price: 89.99,
    image:
      "https://images.pexels.com/photos/8477071/pexels-photo-8477071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "experiences",
    rating: 4.8,
    reviews: 67,
    vendor: {
      name: "Culinary Connections",
      image:
        "https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: true,
    },
    description:
      "Learn to cook together with this virtual cooking class designed for couples. Each session teaches you to prepare a romantic meal together, building teamwork and creating delicious memories.",
    features: [
      "4 live virtual cooking sessions",
      "Ingredient lists provided in advance",
      "Recipe book included",
      "Interactive Q&A with professional chefs",
    ],
    inStock: false,
  },
  {
    id: 7,
    name: "Relationship Journal",
    price: 19.99,
    image:
      "https://images.pexels.com/photos/6053/man-hands-holidays-looking.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "books",
    rating: 4.7,
    reviews: 128,
    vendor: {
      name: "Mindful Journals",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: true,
    },
    description:
      "This guided journal for couples includes prompts, questions, and activities designed to strengthen your relationship through reflection and shared experiences.",
    features: [
      "52 weeks of prompts and activities",
      "High-quality paper and binding",
      "Space for photos and mementos",
      "Includes relationship milestone trackers",
    ],
    inStock: true,
  },
  {
    id: 8,
    name: "Couple's Massage Oil Set",
    price: 32.99,
    image:
      "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "wellness",
    rating: 4.6,
    reviews: 94,
    vendor: {
      name: "Sensual Wellness",
      image:
        "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: false,
    },
    description:
      "This premium massage oil set includes three therapeutic-grade oils designed to enhance connection through touch. Perfect for a relaxing at-home spa night.",
    features: [
      "3 scented massage oils (8oz each)",
      "All-natural ingredients",
      "Includes massage technique guide",
      "Elegant gift packaging",
    ],
    inStock: true,
  },
  {
    id: 9,
    name: "Digital Relationship Course",
    price: 129.99,
    image:
      "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "books",
    rating: 4.9,
    reviews: 76,
    vendor: {
      name: "Relationship Academy",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: true,
    },
    description:
      "This comprehensive digital course covers all aspects of building a healthy, lasting relationship. Created by relationship experts with over 20 years of experience.",
    features: [
      "10 in-depth modules",
      "Workbooks and exercises",
      "Expert interviews and case studies",
      "Private community access",
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
  {
    id: 11,
    name: "Couple's Smart Lamps",
    price: 79.99,
    image:
      "https://images.pexels.com/photos/1166643/pexels-photo-1166643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "home",
    rating: 4.5,
    reviews: 87,
    vendor: {
      name: "Connected Home",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: true,
    },
    description:
      "These paired smart lamps allow you to stay connected even when apart. Touch your lamp and your partner's lamp will glow with the same color, no matter the distance.",
    features: ["WiFi-enabled touch lamps", "Multiple color options", "Works worldwide", "App for additional features"],
    inStock: true,
  },
  {
    id: 12,
    name: "Premium Flower Subscription",
    price: 45.99,
    image:
      "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "gifts",
    rating: 4.8,
    reviews: 156,
    vendor: {
      name: "Bloom & Love",
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: true,
    },
    description:
      "Keep the romance alive with fresh flowers delivered monthly. Each arrangement is carefully curated to express love and appreciation.",
    features: [
      "Monthly flower delivery",
      "Premium seasonal blooms",
      "Personalized card included",
      "Flexible subscription options",
    ],
    inStock: true,
  },
  {
    id: 13,
    name: "Wedding Planning Guide",
    price: 34.99,
    image:
      "https://images.pexels.com/photos/1128782/pexels-photo-1128782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "wedding",
    rating: 4.9,
    reviews: 215,
    vendor: {
      name: "Wedding Experts",
      image:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: true,
    },
    description:
      "A comprehensive guide to planning your perfect wedding. Includes timelines, checklists, budget templates, and expert advice for every stage of the planning process.",
    features: [
      "200+ page hardcover book",
      "Digital planning templates",
      "Vendor interview questions",
      "12-month countdown checklist",
    ],
    inStock: true,
  },
  {
    id: 14,
    name: "Custom Wedding Vow Books",
    price: 29.99,
    image:
      "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "wedding",
    rating: 4.8,
    reviews: 142,
    vendor: {
      name: "Artisan Paper Co.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: true,
    },
    description:
      "Beautiful handcrafted vow books for your wedding ceremony. Personalized with your names and wedding date, these keepsakes will preserve your promises for years to come.",
    features: [
      "Set of 2 matching books",
      "Handmade with premium paper",
      "Personalized cover design",
      "Acid-free pages for longevity",
    ],
    inStock: true,
  },
  {
    id: 15,
    name: "Wedding Countdown Calendar",
    price: 24.99,
    image:
      "https://images.pexels.com/photos/1449057/pexels-photo-1449057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "wedding",
    rating: 4.7,
    reviews: 98,
    vendor: {
      name: "Celebration Designs",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      verified: false,
    },
    description:
      "Build excitement for your big day with this elegant wedding countdown calendar. A beautiful way to track the days until you say 'I do'.",
    features: [
      "Customizable start date",
      "Elegant wooden design",
      "Includes movable marker",
      "Perfect engagement gift",
    ],
    inStock: true,
  },
]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [cartItems, setCartItems] = useState<number[]>([])
  const [wishlistItems, setWishlistItems] = useState<number[]>([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [priceRange, setPriceRange] = useState({ min: 0, max: 150 })
  const [sortOption, setSortOption] = useState("popular")

  // Filter products based on category, search query, and price range
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max
    return matchesCategory && matchesSearch && matchesPrice
  })

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      default: // popular (by reviews)
        return b.reviews - a.reviews
    }
  })

  const addToCart = (productId: number) => {
    setCartItems([...cartItems, productId])
  }

  const toggleWishlist = (productId: number) => {
    if (wishlistItems.includes(productId)) {
      setWishlistItems(wishlistItems.filter((id) => id !== productId))
    } else {
      setWishlistItems([...wishlistItems, productId])
    }
  }

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header with title and action buttons */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h1 className="text-2xl font-bold unbounded">Shop</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="relative" asChild>
            <Link href="/shop/wishlist">
              <Heart className="h-5 w-5" />
              {wishlistItems.length > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-primary">
                  {wishlistItems.length}
                </Badge>
              )}
              <span className="sr-only">Wishlist</span>
            </Link>
          </Button>

          <Button variant="outline" size="icon" className="relative" asChild>
            <Link href="/shop/cart">
              <ShoppingCart className="h-5 w-5" />
              {cartItems.length > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-primary">
                  {cartItems.length}
                </Badge>
              )}
              <span className="sr-only">Shopping Cart</span>
            </Link>
          </Button>

          <Button variant="outline" size="icon" className="relative" asChild>
            <Link href="/shop/orders">
              <History className="h-5 w-5" />
              <span className="sr-only">Order History</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Search and filter section */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search products..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="sm:w-auto w-full flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Filter Products</SheetTitle>
              <SheetDescription>Refine your product search</SheetDescription>
            </SheetHeader>
            <div className="py-4 space-y-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Categories</h3>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant="ghost"
                      className={`w-full justify-start ${selectedCategory === category.id ? "bg-primary/10 text-primary" : ""}`}
                      onClick={() => {
                        setSelectedCategory(category.id)
                        setIsFilterOpen(false)
                      }}
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Price Range</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>${priceRange.min}</span>
                    <span>${priceRange.max}</span>
                  </div>
                  <div className="flex gap-4">
                    <Input
                      type="number"
                      min="0"
                      max={priceRange.max}
                      value={priceRange.min}
                      onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                    />
                    <Input
                      type="number"
                      min={priceRange.min}
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Sort By</h3>
                <div className="space-y-1">
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${sortOption === "popular" ? "bg-primary/10 text-primary" : ""}`}
                    onClick={() => setSortOption("popular")}
                  >
                    Most Popular
                  </Button>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${sortOption === "rating" ? "bg-primary/10 text-primary" : ""}`}
                    onClick={() => setSortOption("rating")}
                  >
                    Highest Rated
                  </Button>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${sortOption === "price-low" ? "bg-primary/10 text-primary" : ""}`}
                    onClick={() => setSortOption("price-low")}
                  >
                    Price: Low to High
                  </Button>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${sortOption === "price-high" ? "bg-primary/10 text-primary" : ""}`}
                    onClick={() => setSortOption("price-high")}
                  >
                    Price: High to Low
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={() => {
                  setPriceRange({ min: 0, max: 150 })
                  setSortOption("popular")
                }}
              >
                Reset
              </Button>
              <SheetClose asChild>
                <Button>Apply Filters</Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Category pills - scrollable on mobile */}
      <div className="relative">
        <div className="flex overflow-x-auto pb-2 scrollbar-hide -mx-2 px-2">
          <div className="flex gap-2 min-w-max">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`${selectedCategory === category.id ? "bg-primary text-white" : ""} whitespace-nowrap`}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Product grid */}
      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isInCart={cartItems.includes(product.id)}
              isInWishlist={wishlistItems.includes(product.id)}
              onAddToCart={() => addToCart(product.id)}
              onToggleWishlist={() => toggleWishlist(product.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium">No products found</h3>
          <p className="text-muted-foreground">Try adjusting your filters or search query</p>
        </div>
      )}
    </div>
  )
}

interface ProductCardProps {
  product: (typeof products)[0]
  isInCart: boolean
  isInWishlist: boolean
  onAddToCart: () => void
  onToggleWishlist: () => void
}

function ProductCard({ product, isInCart, isInWishlist, onAddToCart, onToggleWishlist }: ProductCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
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
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              onToggleWishlist()
            }}
          >
            <Heart className={`h-5 w-5 ${isInWishlist ? "fill-primary text-primary" : ""}`} />
          </Button>
          {!product.inStock && (
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
              <Badge variant="destructive" className="text-sm py-1 px-3">
                Out of Stock
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-1 flex flex-col">
        <div className="flex items-center mb-2">
          <Avatar className="h-6 w-6 mr-2 border border-primary">
            <AvatarImage src={product.vendor.image} alt={product.vendor.name} />
            <AvatarFallback>{product.vendor.name[0]}</AvatarFallback>
          </Avatar>
          <span className="text-xs text-muted-foreground flex items-center truncate">
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
            <Button variant="outline" className="flex-1 text-sm">
              View Details
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-auto">
            <DialogHeader>
              <DialogTitle>{product.name}</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="relative aspect-square w-full overflow-hidden rounded-md">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
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
                    disabled={!product.inStock || isInCart}
                    onClick={() => {
                      onAddToCart()
                      // Close dialog after adding to cart
                    }}
                  >
                    {isInCart ? "Added to Cart" : product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                  <Button variant="outline" size="icon" onClick={onToggleWishlist}>
                    <Heart className={`h-5 w-5 ${isInWishlist ? "fill-primary text-primary" : ""}`} />
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <Button className="flex-1 text-sm" disabled={!product.inStock || isInCart} onClick={onAddToCart}>
          {isInCart ? "Added" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  )
}
