"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { X, ArrowLeft, ArrowRight, Users, Check, Play, Pause, Bell, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const activitySteps = {
  "love-language-quiz": [
    {
      type: "quiz",
      question: "When your partner does something nice for you, what makes you feel most loved?",
      description: "Think about the last time your partner made you feel truly appreciated.",
      options: [
        { text: "When they tell me how much they appreciate what I do", value: "words" },
        { text: "When they help me with tasks or chores", value: "acts" },
        { text: "When they give me a thoughtful gift", value: "gifts" },
        { text: "When they spend uninterrupted time with me", value: "time" },
        { text: "When they give me a hug or hold my hand", value: "touch" },
      ],
    },
    {
      type: "quiz",
      question: "What would hurt your feelings most if your partner forgot to do it?",
      description: "Consider what absence would make you feel unloved.",
      options: [
        { text: 'Forgot to say "I love you" or give compliments', value: "words" },
        { text: "Stopped helping with daily tasks", value: "acts" },
        { text: "Never brought me small surprises or gifts", value: "gifts" },
        { text: "Always seemed too busy to spend time together", value: "time" },
        { text: "Rarely showed physical affection", value: "touch" },
      ],
    },
    {
      type: "reflection",
      prompt: "Reflect on Your Love Language",
      description:
        "Based on your answers, think about how you prefer to receive love. Write about a time when you felt most loved by your partner.",
    },
    {
      type: "partner-sync",
      title: "Wait for Your Partner",
      description: "Your partner needs to complete their assessment before you can see the combined results.",
    },
  ],
  "gratitude-practice": [
    {
      type: "reflection",
      prompt: "What are you grateful for today?",
      description:
        "Think of three specific things you appreciate about your partner today. Be as detailed as possible.",
    },
    {
      type: "challenge",
      title: "Share Your Gratitude",
      instructions:
        "Take turns sharing your gratitude with your partner. Listen actively and respond with appreciation.",
      actionTitle: "Express Your Appreciation",
      actionDescription: "Share your three points of gratitude with your partner face-to-face or over a call.",
      timer: 300, // 5 minutes
      icon: Heart,
    },
  ],
}

export default function ActivityPlayPage({ params }: { params: { activityId: string } }) {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [exitDialogOpen, setExitDialogOpen] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [reflectionText, setReflectionText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(300)
  const [timerRunning, setTimerRunning] = useState(false)
  const [answers, setAnswers] = useState<any[]>([])

  const steps = activitySteps[params.activityId as keyof typeof activitySteps] || []
  const totalSteps = steps.length
  const currentStepData = steps[currentStep - 1]

  const partnerStatus = {
    isOnline: true,
    isReady: currentStep > 2,
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (timerRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((time) => time - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [timerRunning, timeRemaining])

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index)
  }

  const handleNextStep = () => {
    if (currentStepData?.type === "quiz" && selectedAnswer !== null) {
      const newAnswers = [...answers]
      newAnswers[currentStep - 1] = currentStepData.options[selectedAnswer]
      setAnswers(newAnswers)
      setSelectedAnswer(null)
    }

    if (currentStep === totalSteps) {
      // Complete activity
      router.push(`/activities/${params.activityId}/results`)
    } else {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleExit = () => {
    router.push(`/activities/${params.activityId}`)
  }

  const toggleTimer = () => {
    setTimerRunning(!timerRunning)
  }

  const completeChallenge = () => {
    setCurrentStep(currentStep + 1)
  }

  const saveReflection = () => {
    // Save reflection logic here
    console.log("Reflection saved:", reflectionText)
  }

  const sendPartnerReminder = () => {
    // Send reminder logic here
    console.log("Reminder sent to partner")
  }

  const waitForPartner = () => {
    // Wait for partner logic here
    console.log("Waiting for partner")
  }

  const isCurrentStepComplete = () => {
    switch (currentStepData?.type) {
      case "quiz":
        return selectedAnswer !== null
      case "reflection":
        return reflectionText.length >= 50
      case "challenge":
        return true
      case "partner-sync":
        return partnerStatus.isReady
      default:
        return true
    }
  }

  const renderActivityStep = () => {
    if (!currentStepData) return <div>Loading...</div>

    switch (currentStepData.type) {
      case "quiz":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">{currentStepData.question}</h2>
              <p className="text-muted-foreground">{currentStepData.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-3 max-w-2xl mx-auto">
              {currentStepData.options.map((option: any, index: number) => (
                <Button
                  key={index}
                  variant={selectedAnswer === index ? "default" : "outline"}
                  className="h-auto p-4 text-left justify-start"
                  onClick={() => handleAnswerSelect(index)}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswer === index ? "bg-primary border-primary" : "border-muted-foreground"
                      }`}
                    >
                      {selectedAnswer === index && <Check className="h-3 w-3 text-white" />}
                    </div>
                    <span>{option.text}</span>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        )

      case "reflection":
        return (
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">{currentStepData.prompt}</h2>
              <p className="text-muted-foreground">{currentStepData.description}</p>
            </div>

            <Card className="p-6">
              <Textarea
                placeholder="Share your thoughts here..."
                className="min-h-[200px] resize-none"
                value={reflectionText}
                onChange={(e) => setReflectionText(e.target.value)}
              />
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-muted-foreground">{reflectionText.length} characters</span>
                <Button variant="outline" size="sm" onClick={saveReflection} disabled={reflectionText.length < 50}>
                  Save Reflection
                </Button>
              </div>
            </Card>

            <Card className="p-4 bg-blue-50 dark:bg-blue-950/20">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-4 w-4 text-blue-500" />
                <span className="font-medium text-blue-700 dark:text-blue-300">Partner Activity</span>
              </div>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Both you and your partner should complete this reflection before continuing.
              </p>
            </Card>
          </div>
        )

      case "challenge":
        return (
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">{currentStepData.title}</h2>
              <p className="text-muted-foreground mb-6">{currentStepData.instructions}</p>

              {currentStepData.timer && (
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm text-muted-foreground">Time Remaining</div>
                </div>
              )}
            </div>

            <Card className="p-6 text-center">
              <currentStepData.icon className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{currentStepData.actionTitle}</h3>
              <p className="text-sm text-muted-foreground mb-6">{currentStepData.actionDescription}</p>

              <div className="flex gap-2 justify-center">
                {currentStepData.timer && (
                  <Button variant="outline" onClick={toggleTimer}>
                    {timerRunning ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                    {timerRunning ? "Pause" : "Start Timer"}
                  </Button>
                )}

                <Button onClick={completeChallenge}>Mark Complete</Button>
              </div>
            </Card>
          </div>
        )

      case "partner-sync":
        return (
          <div className="space-y-6 max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{currentStepData.title}</h2>
              <p className="text-muted-foreground">{currentStepData.description}</p>
            </div>

            <Card className="p-8">
              <div className="flex justify-center items-center gap-8 mb-6">
                <div className="text-center">
                  <Avatar className="h-16 w-16 mx-auto mb-2">
                    <AvatarImage src="/placeholder-user.jpg" alt="You" />
                    <AvatarFallback>Y</AvatarFallback>
                  </Avatar>
                  <div className="text-sm font-medium">You</div>
                  <Badge className="mt-1 bg-green-500">Ready</Badge>
                </div>

                <Heart className="h-8 w-8 text-pink-500" />

                <div className="text-center">
                  <Avatar className="h-16 w-16 mx-auto mb-2">
                    <AvatarImage src="/placeholder-user.jpg" alt="Partner" />
                    <AvatarFallback>P</AvatarFallback>
                  </Avatar>
                  <div className="text-sm font-medium">Partner</div>
                  <Badge className={partnerStatus.isReady ? "bg-green-500" : "bg-yellow-500"}>
                    {partnerStatus.isReady ? "Ready" : "Waiting..."}
                  </Badge>
                </div>
              </div>

              {!partnerStatus.isReady && (
                <div className="space-y-4">
                  <div className="animate-pulse">
                    <div className="text-sm text-muted-foreground">Waiting for your partner to join...</div>
                  </div>

                  <Button variant="outline" onClick={sendPartnerReminder}>
                    <Bell className="h-4 w-4 mr-2" />
                    Send Reminder
                  </Button>
                </div>
              )}
            </Card>
          </div>
        )

      default:
        return <div>Unknown step type</div>
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Activity Header */}
      <div className="border-b p-4 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => setExitDialogOpen(true)}>
              <X className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="font-semibold">Love Language Discovery</h1>
              <p className="text-sm text-muted-foreground">Communication</p>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="/placeholder-user.jpg" alt="Partner" />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
              <Badge variant="outline" className={partnerStatus.isOnline ? "text-green-600" : "text-muted-foreground"}>
                {partnerStatus.isOnline ? "Online" : "Offline"}
              </Badge>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Step {currentStep} of {totalSteps}
              </span>
              <div className="w-32 bg-muted rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-primary to-emerald-500 transition-all duration-500"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Content */}
      <div className="max-w-4xl mx-auto p-6">{renderActivityStep()}</div>

      {/* Activity Navigation */}
      <div className="border-t p-4 bg-background/95 backdrop-blur-sm sticky bottom-0">
        <div className="flex justify-between max-w-4xl mx-auto">
          <Button variant="outline" onClick={handlePreviousStep} disabled={currentStep === 1}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          <div className="flex gap-2">
            <Button variant="outline" onClick={waitForPartner} disabled={!partnerStatus.isOnline}>
              <Users className="h-4 w-4 mr-2" />
              Wait for Partner
            </Button>

            <Button
              onClick={handleNextStep}
              disabled={!isCurrentStepComplete()}
              className="bg-primary hover:bg-primary/90"
            >
              {currentStep === totalSteps ? "Complete Activity" : "Next"}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Exit Confirmation Dialog */}
      <Dialog open={exitDialogOpen} onOpenChange={setExitDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Exit Activity?</DialogTitle>
            <DialogDescription>
              Your progress will be saved, and you can continue this activity later.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setExitDialogOpen(false)}>
              Keep Playing
            </Button>
            <Button onClick={handleExit}>Save & Exit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
