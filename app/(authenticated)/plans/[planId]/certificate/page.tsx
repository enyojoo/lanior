"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Share2, Award } from "lucide-react"
import { useRouter, useParams } from "next/navigation"

const certificateData = {
  "trust-foundation": {
    planTitle: "Building Trust Foundation",
    completedDate: new Date("2024-02-15"),
    userName: "John Doe",
    certificateId: "TF-2024-001234",
    expertName: "Dr. Sarah Johnson",
    duration: "6 weeks",
    totalHours: 12,
  },
}

export default function CertificatePage() {
  const router = useRouter()
  const params = useParams()
  const planId = params.planId as string
  const certificate = certificateData[planId as keyof typeof certificateData]

  if (!certificate) {
    return <div>Certificate not found</div>
  }

  const handleDownload = () => {
    // Handle certificate download
    console.log("Downloading certificate...")
  }

  const handleShare = () => {
    // Handle certificate sharing
    console.log("Sharing certificate...")
  }

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button variant="ghost" onClick={() => router.back()} className="mb-4">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Progress
      </Button>

      <div className="text-center mb-8">
        <Award className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="text-3xl font-bold unbounded">Certificate of Completion</h1>
        <p className="text-muted-foreground">Congratulations on completing your relationship plan!</p>
      </div>

      {/* Certificate */}
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-12 text-center bg-gradient-to-br from-primary/5 to-emerald-500/5">
          <div className="border-4 border-primary/20 rounded-lg p-8">
            <div className="mb-8">
              <div className="text-6xl mb-4">🏆</div>
              <h2 className="text-2xl font-bold text-primary mb-2 unbounded">Certificate of Completion</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="space-y-6 text-lg">
              <p>This certifies that</p>
              <div className="text-3xl font-bold text-primary unbounded">{certificate.userName}</div>
              <p>has successfully completed</p>
              <div className="text-2xl font-semibold">{certificate.planTitle}</div>
              <p>A comprehensive {certificate.duration} relationship development program</p>
              <p>totaling {certificate.totalHours} hours of learning and growth</p>
            </div>

            <div className="mt-12 pt-8 border-t border-muted flex justify-between items-end">
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Completed on</div>
                <div className="font-semibold">
                  {certificate.completedDate.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>

              <div className="text-center">
                <div className="w-32 border-b border-muted mb-2"></div>
                <div className="text-sm">
                  <div className="font-semibold">{certificate.expertName}</div>
                  <div className="text-muted-foreground">Program Expert</div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm text-muted-foreground">Certificate ID</div>
                <div className="font-mono text-xs">{certificate.certificateId}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex justify-center gap-4">
        <Button onClick={handleDownload} className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
        <Button variant="outline" onClick={handleShare} className="flex items-center gap-2 bg-transparent">
          <Share2 className="h-4 w-4" />
          Share Certificate
        </Button>
      </div>

      {/* Next Steps */}
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold mb-4 unbounded">What's Next?</h3>
          <p className="text-muted-foreground mb-6">
            You've completed an important step in your relationship journey. Consider exploring more plans to continue
            growing together.
          </p>
          <div className="flex justify-center gap-4">
            <Button onClick={() => router.push("/plans")}>Explore More Plans</Button>
            <Button variant="outline" onClick={() => router.push("/plans/" + planId + "/dashboard")}>
              Review Your Journey
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
