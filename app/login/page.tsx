"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { useToast } from "@/components/ui/use-toast"

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Dummy login function
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      // Demo credentials: user@example.com / password123
      if (email === "user@example.com" && password === "password123") {
        toast({
          title: "Login successful",
          description: "Welcome back to Lanior!",
          variant: "default",
        })
        router.push("/feed")
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password. Try user@example.com / password123",
          variant: "destructive",
        })
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 p-4 md:p-8">
      <div className="w-full max-w-md mx-auto space-y-6">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="flex items-center">
            {/* Light mode logo (hidden in dark mode) */}
            <Image src="/images/lanior-eng.svg" alt="Lanior Logo" width={150} height={40} className="dark:hidden" />
            {/* Dark mode logo (hidden in light mode) */}
            <Image
              src="/images/lanior-engw.svg"
              alt="Lanior Logo"
              width={150}
              height={40}
              className="hidden dark:block"
            />
          </div>
          <p className="text-gray-600 dark:text-gray-400">Build Lasting Relationships and Family</p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-100 dark:bg-gray-900">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Login to your account</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Enter your email and password to access your account
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleLogin}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-900 dark:text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="user@example.com"
                      className="bg-white dark:bg-gray-800"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="text-gray-900 dark:text-white">
                        Password
                      </Label>
                      <Link href="#" className="text-xs text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      className="bg-white dark:bg-gray-800"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>Demo credentials:</p>
                    <p>Email: user@example.com</p>
                    <p>Password: password123</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Create an account</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Enter your information to create an account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-gray-900 dark:text-white">
                      First name
                    </Label>
                    <Input id="first-name" className="bg-white dark:bg-gray-800" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name" className="text-gray-900 dark:text-white">
                      Last name
                    </Label>
                    <Input id="last-name" className="bg-white dark:bg-gray-800" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-email" className="text-gray-900 dark:text-white">
                    Email
                  </Label>
                  <Input
                    id="register-email"
                    type="email"
                    placeholder="m@example.com"
                    className="bg-white dark:bg-gray-800"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password" className="text-gray-900 dark:text-white">
                    Password
                  </Label>
                  <Input id="register-password" type="password" className="bg-white dark:bg-gray-800" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => router.push("/feed")}>
                  Create account
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center text-sm text-gray-600 dark:text-gray-500">
          By continuing, you agree to our{" "}
          <Link href="#" className="text-primary hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </div>
      </div>
    </div>
  )
}
