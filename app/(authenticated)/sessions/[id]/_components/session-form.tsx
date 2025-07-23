"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface SessionFormProps {
  sessionId?: string
  onSubmit?: (data: any) => void
}

export function SessionForm({ sessionId, onSubmit }: SessionFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    duration: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{sessionId ? "Edit Session" : "Create Session"}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
            />
          </div>

          <div>
            <Label htmlFor="date">Date</Label>
            <Input id="date" name="date" type="datetime-local" value={formData.date} onChange={handleChange} required />
          </div>

          <div>
            <Label htmlFor="duration">Duration (minutes)</Label>
            <Input
              id="duration"
              name="duration"
              type="number"
              value={formData.duration}
              onChange={handleChange}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            {sessionId ? "Update Session" : "Create Session"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
