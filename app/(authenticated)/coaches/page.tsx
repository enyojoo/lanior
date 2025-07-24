import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import AuthButtonServer from "@/components/auth-button-server"
import type { Metadata } from "next"
import { CoachCard } from "@/components/coach-card"
import type { Database } from "@/types/supabase"
import Link from "next/link"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Coaches",
  description: "Find a coach to help you achieve your goals.",
}

async function getCoaches() {
  const supabase = createServerComponentClient<Database>({ cookies })

  const { data: coaches } = await supabase.from("coaches").select("*")

  return coaches
}

export default async function Coaches() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect("/")
  }

  const coaches = await getCoaches()

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">Coaches</h1>
        <AuthButtonServer />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {coaches?.map((coach) => (
          <Link href={`/c/${coach.handle}`} className="block" key={coach.id}>
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CoachCard coach={coach} />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
