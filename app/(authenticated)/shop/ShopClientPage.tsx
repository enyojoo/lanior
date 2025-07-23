"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Product types for relationship building
const categoriesArray = [
  { id: "all", name: "All" },
  { id: "gifts", name: "Gifts & Flowers" },
  { id: "experiences", name: "Date Experiences" },
  { id: "books", name: "Books & Courses" },
  { id: "fashion", name: "Couple Fashion" },
  { id: "wellness", name: "Wellness" },
  { id: "home", name: "Home & Decor" },
  { id: "wedding", name: "Wedding" },
  { id: "journals", name: "Journals" },
  { id: "games", name: "Games" },
]

// Sample products
const productsArray = [
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
  {
    id: "1",
    name: "Couples Journal Set",
    description: "Beautiful matching journals for partners to share thoughts and gratitude",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.8,
    reviews: 124,
    image:
      "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "journals",
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    name: "Date Night Card Deck",
    description: "52 creative date ideas to keep the spark alive in your relationship",
    price: 19.99,
    rating: 4.9,
    reviews: 89,
    image:
      "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "games",
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "Relationship Workbook",
    description: "Comprehensive guide with exercises to strengthen your bond",
    price: 24.99,
    rating: 4.7,
    reviews: 156,
    image:
      "https://images.pexels.com/photos/4144101/pexels-photo-4144101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "books",
    inStock: true,
    featured: false,
  },
  {
    id: "4",
    name: "Communication Cards",
    description: "Conversation starters for deeper connection and understanding",
    price: 16.99,
    rating: 4.6,
    reviews: 73,
    image:
      "https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "games",
    inStock: false,
    featured: false,
  },
  {
    id: "5",
    name: "Love Languages Book",
    description: "Discover and understand your partner's love language",
    price: 14.99,
    rating: 4.9,
    reviews: 203,
    image:
      "https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "books",
    inStock: true,
    featured: true,
  },
  {
    id: "6",
    name: "Mindfulness for Couples",
    description: "Guided meditation and mindfulness practices for partners",
    price: 22.99,
    rating: 4.5,
    reviews: 67,
    image:
      "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "wellness",
    inStock: true,
    featured: false,
  },
]

export default function ShopClientPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [cartItems, setCartItems] = useState<number[]>([])
  const [wishlistItems, setWishlistItems] = useState<number[]>([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [priceRange, setPriceRange] = useState({ min: 0, max: 150 })
  const [sortOption, setSortOption] = useState("popular")

  const categories = [
    "All",
    "Books",
    "Games",
    "Journals",
    "Wellness",
    "Gifts & Flowers",
    "Date Experiences",
    "Couple Fashion",
    "Home & Decor",
    "Wedding",
  ]

  const products = productsArray.concat([
    {
      id: "1",
      name: "Couples Journal Set",
      description: "Beautiful matching journals for partners to share thoughts and gratitude",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.8,
      reviews: 124,
      image:
        "https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "journals",
      inStock: true,
      featured: true,
    },
    {
      id: "2",
      name: "Date Night Card Deck",
      description: "52 creative date ideas to keep the spark alive in your relationship",
      price: 19.99,
      rating: 4.9,
      reviews: 89,
      image:
        "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "games",
      inStock: true,
      featured: true,
    },
    {
      id: "3",
      name: "Relationship Workbook",
      description: "Comprehensive guide with exercises to strengthen your bond",
      price: 24.99,
      rating: 4.7,
      reviews: 156,
      image:
        "https://images.pexels.com/photos/4144101/pexels-photo-4144101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "books",
      inStock: true,
      featured: false,
    },
    {
      id: "4",
      name: "Communication Cards",
      description: "Conversation starters for deeper connection and understanding",
      price: 16.99,
      rating: 4.6,
      reviews: 73,
      image:
        "https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "games",
      inStock: false,
      featured: false,
    },
    {
      id: "5",
      name: "Love Languages Book",
      description: "Discover and understand your partner's love language",
      price: 14.99,
      rating: 4.9,
      reviews: 203,
      image:
        "https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "books",
      inStock: true,
      featured: true,
    },
    {
      id: "6",
      name: "Mindfulness for Couples",
      description: "Guided meditation and mindfulness practices for partners",
      price: 22.99,
      rating: 4.5,
      reviews: 67,
      image:
        "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "wellness",
      inStock: true,
      featured: false,
    },
  ])

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
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold unbounded">Shop</h1>
          <p className="text-muted-foreground">Tools and resources to strengthen your relationship</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/shop/wishlist">
              <Heart className="h-4 w-4 mr-2" />
              Wishlist
            </Link>
          </Button>
          <Button asChild>
            <Link href="/shop/cart">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart
            </Link>
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant="outline"
            className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square relative">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              {product.featured && <Badge className="absolute top-3 left-3">Featured</Badge>}
              {!product.inStock && (
                <Badge variant="destructive" className="absolute top-3 right-3">
                  Out of Stock
                </Badge>
              )}
              {product.originalPrice && (
                <Badge variant="secondary" className="absolute bottom-3 left-3">
                  Sale
                </Badge>
              )}
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <Badge variant="outline" className="mt-1">
                    {product.category}
                  </Badge>
                </div>
                <Button variant="ghost" size="icon" onClick={() => toggleWishlist(Number(product.id))}>
                  <Heart
                    className={`h-4 w-4 ${wishlistItems.includes(Number(product.id)) ? "fill-primary text-primary" : ""}`}
                  />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">{product.description}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>
                <div className="text-right">
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through mr-2">${product.originalPrice}</span>
                  )}
                  <span className="text-lg font-bold">${product.price}</span>
                </div>
              </div>

              <Button className="w-full" disabled={!product.inStock} onClick={() => addToCart(Number(product.id))}>
                <ShoppingCart className="h-4 w-4 mr-2" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
