"use client"

import { categories, getBatchesByCategory } from "@/lib/batches"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
    <section id="categories" className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">Explore Categories</h2>
          <p className="text-muted-foreground">Choose your exam category and start your preparation journey</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {categories.filter(c => c.id !== "all").map((category) => {
            const Icon = iconMap[category.id] || BookOpen
            const batchCount = getBatchesByCategory(category.id).length

            return (
              <Card 
                key={category.id} 
                className="group cursor-pointer transition-all hover:border-primary hover:shadow-md"
              >
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-1 font-semibold text-foreground">{category.name}</h3>
                  <Badge variant="secondary" className="mt-2">
                    {batchCount} Batches
                  </Badge>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
