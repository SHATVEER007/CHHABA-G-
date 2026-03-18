"use client"

import { useState, useMemo } from "react"
import { batches, categories, getBatchesByCategory, searchBatches, type Batch } from "@/lib/batches"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Clock, Star, ExternalLink } from "lucide-react"

export function BatchList() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [filter, setFilter] = useState<"all" | "free" | "premium">("all")

  const filteredBatches = useMemo(() => {
    let result = selectedCategory === "all" ? batches : getBatchesByCategory(selectedCategory)
    
    if (searchQuery) {
      result = result.filter(batch => 
        batch.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    if (filter === "free") {
      result = result.filter(batch => batch.isFree)
    } else if (filter === "premium") {
      result = result.filter(batch => !batch.isFree)
    }

    return result
  }, [selectedCategory, searchQuery, filter])

  return (
    <section id="batches" className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">All Batches</h2>
          <p className="text-muted-foreground">
            Choose from {batches.length}+ batches from Spidy Universe
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search batches..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="free">Free</TabsTrigger>
                <TabsTrigger value="premium">Premium</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="mb-8 overflow-x-auto pb-2">
          <div className="flex gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="whitespace-nowrap"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-4 text-sm text-muted-foreground">
          Showing {filteredBatches.length} batches
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredBatches.map((batch) => (
            <BatchCard key={batch.id} batch={batch} />
          ))}
        </div>

        {filteredBatches.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-muted-foreground">No batches found matching your criteria</p>
          </div>
        )}
      </div>
    </section>
  )
}

function BatchCard({ batch }: { batch: Batch }) {
  const categoryLabel = categories.find(c => c.id === batch.category)?.name || batch.category

  return (
    <Card className="group flex flex-col overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <Badge variant={batch.isFree ? "default" : "secondary"} className="shrink-0">
            {categoryLabel}
          </Badge>
          {batch.isPremium && (
            <Badge variant="outline" className="shrink-0 border-amber-500 text-amber-600">
              <Star className="mr-1 h-3 w-3 fill-amber-500" />
              Premium
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-3">
        <h3 className="mb-3 line-clamp-2 text-sm font-semibold leading-snug text-foreground group-hover:text-primary">
          {batch.name}
        </h3>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>LIFETIME ACCESS</span>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t bg-muted/30 pt-4">
        <div className="flex items-baseline gap-1">
          {batch.isFree ? (
            <span className="text-lg font-bold text-green-600">FREE</span>
          ) : (
            <>
              <span className="text-lg font-bold text-foreground">₹{batch.price}</span>
              {batch.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">₹{batch.originalPrice}</span>
              )}
            </>
          )}
        </div>
        <Button size="sm" className="gap-1" asChild>
          <a 
            href="https://spidyuniverserwa.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Enroll
            <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
