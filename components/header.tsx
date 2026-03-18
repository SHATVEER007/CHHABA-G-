"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, BookOpen, Search } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight text-gray-900">Study with</span>
            <span className="text-sm font-semibold leading-tight text-blue-600">Chhaba G</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-gray-900 transition-colors hover:text-blue-600">
            Home
          </Link>
          <Link href="#batches" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600">
            All Batches
          </Link>
          <Link href="#categories" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600">
            Categories
          </Link>
          <Link href="#contact" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600">
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input 
              type="text"
              placeholder="Search batches..." 
              className="w-64 rounded-md border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-gray-600 hover:bg-gray-100 md:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-gray-200 bg-white p-4 md:hidden">
          <nav className="flex flex-col gap-3">
            <Link href="/" className="text-base font-medium text-gray-900" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="#batches" className="text-base font-medium text-gray-600" onClick={() => setIsOpen(false)}>
              All Batches
            </Link>
            <Link href="#categories" className="text-base font-medium text-gray-600" onClick={() => setIsOpen(false)}>
              Categories
            </Link>
            <Link href="#contact" className="text-base font-medium text-gray-600" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <div className="relative pt-2">
              <Search className="absolute left-3 top-1/2 h-4 w-4 translate-y-0.5 text-gray-400" />
              <input 
                type="text"
                placeholder="Search batches..." 
                className="w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm outline-none focus:border-blue-500"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
