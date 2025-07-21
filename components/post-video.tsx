"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, AlertCircle, Maximize, Minimize } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface PostVideoProps {
  videoSrc: string
  posterSrc?: string
}

// Add a static variable outside the component to track the currently playing video
const currentlyPlayingVideo = {
  element: null as HTMLVideoElement | null,
  setIsPlaying: null as ((isPlaying: boolean) => void) | null,
}

export function PostVideo({ videoSrc, posterSrc }: PostVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isVertical, setIsVertical] = useState(false)
  const [isSquare, setIsSquare] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(false)
  // Add a new state variable to track if the video has been played at least once
  const [hasBeenPlayed, setHasBeenPlayed] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Use reliable video sources
  const videoSource = videoSrc.includes("mixkit")
    ? "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" // Fallback to a reliable video
    : videoSrc

  // Check video aspect ratio once it's loaded
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const checkAspectRatio = () => {
      if (video.videoWidth && video.videoHeight) {
        const aspectRatio = video.videoWidth / video.videoHeight
        setIsVertical(aspectRatio < 0.8) // Aspect ratio less than 0.8 is considered vertical
        setIsSquare(aspectRatio >= 0.8 && aspectRatio <= 1.2) // Aspect ratio between 0.8 and 1.2 is considered square
        setIsLoading(false)
      }
    }

    // Check orientation when metadata is loaded
    const handleLoadedMetadata = () => {
      checkAspectRatio()
      if (video.duration) {
        setDuration(video.duration)
      }
    }

    const handleError = (e: Event) => {
      console.error("Error loading video:", videoSource)
      setHasError(true)
      setIsLoading(false)
    }

    const handleTimeUpdate = () => {
      if (video.currentTime && video.duration) {
        setCurrentTime(video.currentTime)
        setProgress((video.currentTime / video.duration) * 100)
      }
    }

    video.addEventListener("loadedmetadata", handleLoadedMetadata)
    video.addEventListener("error", handleError)
    video.addEventListener("timeupdate", handleTimeUpdate)

    // Also check if metadata is already loaded
    if (video.videoWidth && video.videoHeight) {
      checkAspectRatio()
    }

    if (video.duration) {
      setDuration(video.duration)
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata)
      video.removeEventListener("error", handleError)
      video.removeEventListener("timeupdate", handleTimeUpdate)
    }
  }, [videoSource])

  // Handle fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  // Auto-hide controls after inactivity
  useEffect(() => {
    if (!showControls) return

    const hideControls = () => {
      if (!isPlaying) return // Keep controls visible if paused
      setShowControls(false)
    }

    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }

    controlsTimeoutRef.current = setTimeout(hideControls, 3000)

    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current)
      }
    }
  }, [showControls, isPlaying])

  // Modify the togglePlay function to handle global video state
  const togglePlay = () => {
    const video = videoRef.current
    if (!video || hasError) return

    if (isPlaying) {
      video.pause()
      setIsPlaying(false)
    } else {
      // If another video is playing, pause it first
      if (
        currentlyPlayingVideo.element &&
        currentlyPlayingVideo.element !== video &&
        currentlyPlayingVideo.setIsPlaying
      ) {
        currentlyPlayingVideo.element.pause()
        currentlyPlayingVideo.setIsPlaying(false)
      }

      // Set this video as the currently playing video
      currentlyPlayingVideo.element = video
      currentlyPlayingVideo.setIsPlaying = setIsPlaying

      video
        .play()
        .then(() => {
          setIsPlaying(true)
          setHasBeenPlayed(true) // Mark that this video has been played at least once
        })
        .catch((err) => {
          console.error("Error playing video:", err)
          setIsPlaying(false)
        })
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (!containerRef.current) return

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
    } else {
      document.exitFullscreen()
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Stop event propagation to prevent the container's onClick from firing
    e.stopPropagation()

    if (!progressRef.current || !videoRef.current || hasError) return

    const rect = progressRef.current.getBoundingClientRect()
    const pos = (e.clientX - rect.left) / rect.width
    const newTime = pos * duration

    if (videoRef.current) {
      videoRef.current.currentTime = newTime
      setCurrentTime(newTime)
      setProgress(pos * 100)

      // If the video was already playing, ensure it continues playing
      if (isPlaying) {
        videoRef.current.play().catch((err) => {
          console.error("Error playing video after seek:", err)
        })
      }
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  const handleMouseMove = () => {
    setShowControls(true)

    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }

    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false)
      }
    }, 3000)
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden cursor-pointer",
        isFullscreen ? "fixed inset-0 z-50 bg-black" : "",
      )}
      style={!isFullscreen ? { aspectRatio: "16/9" } : {}}
      onClick={togglePlay}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowControls(true)}
    >
      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 z-20">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 z-20">
          <div className="text-center p-4 bg-black/50 rounded-md text-white">
            <AlertCircle className="mx-auto h-8 w-8 mb-2" />
            <p>Unable to load video</p>
            <p className="text-sm opacity-80 mt-1">Please try again later</p>
          </div>
        </div>
      )}

      {/* Fallback image for errors */}
      {hasError && posterSrc && (
        <div className="absolute inset-0 z-0">
          <Image src={posterSrc || "/placeholder.svg"} alt="Video thumbnail" fill className="object-cover opacity-50" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}

      {/* Blurred background for vertical videos */}
      {isVertical && !hasError && (
        <div className="absolute inset-0 z-0">
          <video
            src={videoSource}
            className="w-full h-full object-cover blur-xl scale-110 opacity-80"
            muted
            playsInline
            loop
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      )}

      {/* Blurred background for square videos */}
      {isSquare && !hasError && (
        <div className="absolute inset-0 z-0">
          <video
            src={videoSource}
            className="w-full h-full object-cover blur-xl scale-110 opacity-80"
            muted
            playsInline
            loop
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      )}

      {/* Main video */}
      <div
        className={cn(
          "relative z-10 h-full flex items-center justify-center",
          isVertical ? "w-auto mx-auto" : "w-full",
          isSquare ? "w-auto mx-auto" : "w-full",
        )}
      >
        <video
          ref={videoRef}
          src={videoSource}
          poster={posterSrc}
          className={cn(
            "max-h-full max-w-full object-contain",
            isVertical ? "h-full" : "w-full h-full",
            isSquare ? "h-full" : "w-full h-full",
          )}
          playsInline
          loop
          muted={isMuted}
          preload="metadata"
        />
      </div>

      {/* Play/Pause overlay */}
      {!hasError && !hasBeenPlayed && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center z-20 pointer-events-none transition-opacity duration-300",
            isPlaying ? "opacity-0" : "opacity-100",
          )}
        >
          <button
            className="p-4 rounded-full bg-black/30 backdrop-blur-sm transition-opacity duration-300 pointer-events-auto"
            onClick={(e) => {
              e.stopPropagation()
              togglePlay()
            }}
          >
            <Play className="h-8 w-8 text-white" />
          </button>
        </div>
      )}

      {/* Video controls */}
      {!hasError && (
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/70 to-transparent px-4 py-2 transition-opacity duration-300",
            showControls || !isPlaying ? "opacity-100" : "opacity-0",
          )}
        >
          {/* Progress bar */}
          <div
            ref={progressRef}
            className="w-full h-2 bg-white/30 rounded-full mb-2 cursor-pointer"
            onClick={handleProgressClick}
          >
            <div className="h-full bg-primary rounded-full relative" style={{ width: `${progress}%` }}>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full transform scale-0 group-hover:scale-100 transition-transform"></div>
            </div>
          </div>

          {/* Controls row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                className="p-1 rounded-full hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation()
                  togglePlay()
                }}
              >
                {isPlaying ? <Pause className="h-5 w-5 text-white" /> : <Play className="h-5 w-5 text-white" />}
              </button>

              <button
                className="p-1 rounded-full hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation()
                  toggleMute()
                }}
              >
                {isMuted ? <VolumeX className="h-5 w-5 text-white" /> : <Volume2 className="h-5 w-5 text-white" />}
              </button>

              <span className="text-white text-xs">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <button
              className="p-1 rounded-full hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation()
                toggleFullscreen()
              }}
            >
              {isFullscreen ? <Minimize className="h-5 w-5 text-white" /> : <Maximize className="h-5 w-5 text-white" />}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
