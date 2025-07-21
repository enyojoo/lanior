"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { CustomDialog, CustomDialogContent } from "@/components/ui/custom-dialog"

interface PostImageGridProps {
  images: string[]
  alt?: string
}

export function PostImageGrid({ images, alt = "Post image" }: PostImageGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Limit to maximum 4 images
  const displayImages = images.slice(0, 4)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1))
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") nextImage()
    if (e.key === "ArrowLeft") prevImage()
    if (e.key === "Escape") setLightboxOpen(false)
  }

  return (
    <>
      <div
        className={cn(
          "grid gap-1 w-full",
          displayImages.length === 1 && "grid-cols-1",
          displayImages.length === 2 && "grid-cols-2",
          displayImages.length === 3 && "grid-cols-3 grid-rows-2 grid-flow-row",
          displayImages.length === 4 && "grid-cols-2",
        )}
        style={{
          aspectRatio: displayImages.length === 1 ? "1/1" : "16/9",
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        {displayImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              "relative cursor-pointer overflow-hidden",
              displayImages.length === 1 && "aspect-square",
              displayImages.length === 2 && "h-full",
              displayImages.length === 3 && index === 0 ? "col-span-2 row-span-2" : "",
              displayImages.length === 4 && "",
            )}
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${alt} ${index + 1}`}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Lightbox using CustomDialog without default close button */}
      <CustomDialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <CustomDialogContent
          className="max-w-5xl w-full p-0 bg-transparent border-none shadow-none"
          onKeyDown={handleKeyDown}
        >
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-h-[80vh] flex items-center justify-center">
              <Image
                src={displayImages[currentImageIndex] || "/placeholder.svg"}
                alt={`${alt} ${currentImageIndex + 1}`}
                width={1200}
                height={800}
                className="object-contain max-h-[80vh] rounded-md"
              />

              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full"
                onClick={() => setLightboxOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {displayImages.map((_, index) => (
                  <div
                    key={index}
                    className={cn("w-2 h-2 rounded-full", index === currentImageIndex ? "bg-white" : "bg-white/50")}
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentImageIndex(index)
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </CustomDialogContent>
      </CustomDialog>
    </>
  )
}

