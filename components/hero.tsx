"use client"

import { ArrowRight, Play, FileText, Trophy, Users } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm">
            <span className="font-semibold text-blue-600">POWERED BY SPIDY UNIVERSE</span>
          </div>
          
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Welcome by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              SHATVEER CHHABA G
            </span>
          </h1>
          
          <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg text-gray-600 md:text-xl">
            Your one-stop destination for SSC, Defence, Railway, Banking, and State Exam preparation. 
            Join thousands of successful students and crack your dream exam.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link 
              href="#batches"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
            >
              Explore Batches
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href="#categories"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              View Categories
            </Link>
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
    <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
      <Icon className="mb-2 h-6 w-6 text-blue-600" />
      <span className="text-2xl font-bold text-gray-900 md:text-3xl">{value}</span>
      <span className="text-sm text-gray-500">{label}</span>
    </div>
  )
}
