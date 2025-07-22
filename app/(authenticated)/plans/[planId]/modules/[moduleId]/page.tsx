"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, ArrowRight, Play } from "lucide-react"
import { useRouter, useParams } from "next/navigation"
import { useState } from "react"

const moduleData = {
  "communication-trust-1": {
    id: "communication-trust-1",
    title: "Honest Conversations",
    week: 3,
    number: 1,
    currentStep: 0,
    totalSteps: 4,
    steps: [
      {
        id: "step-1",
        type: "video",
        title: "Introduction to Honest Communication",
        content:
          "<p>Welcome to this module on honest conversations. In this lesson, you'll learn the foundations of transparent communication that builds trust.</p>",
        videoUrl: "/placeholder-video.mp4",
        thumbnail: "/placeholder.svg?height=400&width=600&text=Video+Thumbnail",
        isCompleted: false,
      },
      {
        id: "step-2",
        type: "exercise",
        title: "Trust Communication Assessment",
        instructions:
          "<p>Complete this assessment to understand your current communication patterns and identify areas for improvement.</p>",
        exercise: {
          type: "questionnaire",
          questions: [
            "How comfortable are you sharing difficult feelings with your partner?",
            "Do you feel heard when you express concerns?",
            "How often do you avoid difficult conversations?",
          ],
        },
        isCompleted: false,
      },
      {
        id: "step-3",
        type: "reflection",
        title: "Personal Communication Reflection",
        prompt:
          "<p>Reflect on a recent conversation with your partner. What went well? What could have been improved? How did trust play a role in the interaction?</p>",
        isCompleted: false,
      },
      {
        id: "step-4",
        type: "assessment",
        title: "Module Knowledge Check",
        assessment: {
          questions: [
            {
              question: "What is the most important element of honest communication?",
              options: ["Being right", "Being heard", "Being vulnerable", "Being careful"],
              correct: 2,
            },
          ],
        },
        isCompleted: false,
      },
    ],
  },
}

const planData = {
  "trust-foundation": {
    title: "Building Trust Foundation",
  },
}

export default function ModulePage() {
  const router = useRouter()
  const params = useParams()
  const planId = params.planId as string
  const moduleId = params.moduleId as string

  const module = moduleData[moduleId as keyof typeof moduleData]
  const plan = planData[planId as keyof typeof planData]

  const [currentStep, setCurrentStep] = useState(0)
  const [reflectionText, setReflectionText] = useState("")

  if (!module || !plan) {
    return <div>Module not found</div>
  }

  const currentStepData = module.steps[currentStep]

  const handleNextStep = () => {
    if (currentStep < module.totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Complete module and redirect
      router.push(`/plans/${planId}/dashboard`)
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const markStepComplete = (stepId: string) => {
    // Mark step as complete
    console.log("Step completed:", stepId)
  }

  const saveReflection = (stepId: string, text: string) => {
    // Save reflection
    console.log("Reflection saved:", stepId, text)
    markStepComplete(stepId)
  }

  const renderModuleStep = (step: any) => {
    switch (step.type) {
      case "video":
        return (
          <div className="space-y-6">
            <div className="aspect-video rounded-lg overflow-hidden bg-muted">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Video: {step.title}</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 unbounded">{step.title}</h2>
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: step.content }} />
            </div>
          </div>
        )

      case "exercise":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold unbounded">{step.title}</h2>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: step.instructions }} />
            <div className="bg-muted p-6 rounded-lg">
              <div className="space-y-4">
                {step.exercise.questions.map((question: string, index: number) => (
                  <div key={index} className="space-y-2">
                    <label className="font-medium">{question}</label>
                    <Textarea placeholder="Your response..." className="min-h-[100px]" />
                  </div>
                ))}
                <Button onClick={() => markStepComplete(step.id)}>Complete Exercise</Button>
              </div>
            </div>
          </div>
        )

      case "reflection":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold unbounded">{step.title}</h2>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: step.prompt }} />
            <div className="space-y-4">
              <Textarea
                placeholder="Write your reflection here..."
                className="min-h-[200px]"
                value={reflectionText}
                onChange={(e) => setReflectionText(e.target.value)}
              />
              <Button onClick={() => saveReflection(step.id, reflectionText)}>Save Reflection</Button>
            </div>
          </div>
        )

      case "assessment":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold unbounded">{step.title}</h2>
            <div className="space-y-4">
              {step.assessment.questions.map((q: any, index: number) => (
                <div key={index} className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-3">{q.question}</h3>
                  <div className="space-y-2">
                    {q.options.map((option: string, optIndex: number) => (
                      <label key={optIndex} className="flex items-center gap-2">
                        <input type="radio" name={`question-${index}`} value={optIndex} />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              <Button onClick={() => markStepComplete(step.id)}>Submit Assessment</Button>
            </div>
          </div>
        )

      default:
        return <div>Unknown step type</div>
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Module Header */}
      <div className="border-b p-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => router.back()}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="font-semibold unbounded">{module.title}</h1>
              <p className="text-sm text-muted-foreground">
                {plan.title} • Week {module.week}, Module {module.number}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {currentStep + 1} of {module.totalSteps}
            </span>
            <div className="w-32 bg-muted rounded-full h-2">
              <div
                className="h-2 rounded-full bg-primary"
                style={{ width: `${((currentStep + 1) / module.totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Module Content */}
      <div className="max-w-4xl mx-auto p-6">{renderModuleStep(currentStepData)}</div>

      {/* Module Navigation */}
      <div className="border-t p-4 bg-background">
        <div className="flex justify-between max-w-4xl mx-auto">
          <Button variant="outline" onClick={handlePreviousStep} disabled={currentStep === 0}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <Button onClick={handleNextStep}>
            {currentStep === module.totalSteps - 1 ? "Complete Module" : "Next"}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
