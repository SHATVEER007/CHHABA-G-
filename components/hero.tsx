"use client"

import { ArrowRight, BookOpen, FileText, Play, Trophy, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-2 text-sm">
            <span className="text-primary font-semibold">POWERED BY SPIDY UNIVERSE</span>
          </div>
          
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Welcome by{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              SHATVEER CHHABA G
            </span>
          </h1>
          
          <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            Your one-stop destination for SSC, Defence, Railway, Banking, and State Exam preparation. 
            Join thousands of successful students and crack your dream exam.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2" asChild>
              <Link href="#batches">
                Explore Batches
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link href="#categories">
                View Categories
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatsCard icon={Users} value="1,50,000+" label="Students" />
          <StatsCard icon={Play} value="2,000+" label="Videos" />
          <StatsCard icon={FileText} value="500+" label="PDFs" />
          <StatsCard icon={Trophy} value="150+" label="Batches" />
        </div>
      </div>
    </section>
  )
}

function StatsCard({ icon: Icon, value, label }: { icon: typeof Users; value: string; label: string }) {
  return (
    <div className="flex flex-col items-center rounded-xl border bg-card p-6 text-center shadow-sm">
      <Icon className="mb-2 h-6 w-6 text-primary" />
      <span className="text-2xl font-bold text-foreground md:text-3xl">{value}</span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  )
}
