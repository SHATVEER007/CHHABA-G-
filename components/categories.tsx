"use client"

import { categories, getBatchesByCategory } from "../lib/batches"
import { 
  BookOpen, 
  Shield, 
  Train, 
  Landmark, 
  Building2, 
  GraduationCap, 
  Award, 
  BookText,
  UserCheck,
  MoreHorizontal
} from "lucide-react"

const iconMap: Record<string, typeof BookOpen> = {
  all: BookOpen,
  ssc: BookOpen,
  defence: Shield,
  railway: Train,
  banking: Landmark,
  state: Building2,
  teaching: GraduationCap,
  ugc: Award,
  board: BookText,
  police: UserCheck,
  other: MoreHorizontal,
}

export function Categories() {
  return (
    <section id="categories" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">Explore Categories</h2>
          <p className="text-gray-600">Choose your exam category and start your preparation journey</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {categories.filter(c => c.id !== "all").map((category) => {
            const Icon = iconMap[category.id] || BookOpen
            const batchCount = getBatchesByCategory(category.id).length

            return (
              <div 
                key={category.id} 
                className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-6 text-center transition-all hover:border-blue-500 hover:shadow-md"
              >
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 transition-colors group-hover:bg-blue-100">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="mb-1 font-semibold text-gray-900">{category.name}</h3>
                <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  {batchCount} Batches
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
