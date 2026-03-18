"use client"

import { useState, useMemo } from "react"
import { batches, categories, getBatchesByCategory, type Batch } from "../lib/batches"
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
    <section id="batches" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">All Batches</h2>
          <p className="text-gray-600">
            Choose from {batches.length}+ batches from Spidy Universe
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search batches..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-2">
            {(["all", "free", "premium"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-lg px-4 py-2 text-sm font-medium capitalize transition-colors ${
                  filter === f
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8 overflow-x-auto pb-2">
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4 text-sm text-gray-500">
          Showing {filteredBatches.length} batches
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredBatches.map((batch) => (
            <BatchCard key={batch.id} batch={batch} />
          ))}
        </div>

        {filteredBatches.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-gray-500">No batches found matching your criteria</p>
          </div>
        )}
      </div>
    </section>
  )
}

function BatchCard({ batch }: { batch: Batch }) {
  const categoryLabel = categories.find(c => c.id === batch.category)?.name || batch.category

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-lg">
      <div className="p-4 pb-2">
        <div className="flex items-start justify-between gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-medium ${
            batch.isFree ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
          }`}>
            {categoryLabel}
          </span>
          {batch.isPremium && (
            <span className="flex items-center gap-1 rounded-full border border-amber-300 bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700">
              <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
              Premium
            </span>
          )}
        </div>
      </div>
      <div className="flex-1 p-4 pt-2">
        <h3 className="mb-3 line-clamp-2 text-sm font-semibold leading-snug text-gray-900 group-hover:text-blue-600">
          {batch.name}
        </h3>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Clock className="h-3 w-3" />
          <span>LIFETIME ACCESS</span>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50 p-4">
        <div className="flex items-baseline gap-1">
          {batch.isFree ? (
            <span className="text-lg font-bold text-green-600">FREE</span>
          ) : (
            <>
              <span className="text-lg font-bold text-gray-900">₹{batch.price}</span>
              {batch.originalPrice && (
                <span className="text-sm text-gray-400 line-through">₹{batch.originalPrice}</span>
              )}
            </>
          )}
        </div>
        <a 
          href="https://spidyuniverserwa.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Enroll
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  )
}
