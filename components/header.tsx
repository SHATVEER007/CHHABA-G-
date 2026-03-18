"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, BookOpen, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <BookOpen className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight text-foreground">Study with</span>
            <span className="text-sm font-semibold leading-tight text-primary">Chhaba G</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="#batches" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            All Batches
          </Link>
          <Link href="#categories" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Categories
          </Link>
          <Link href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Search batches..." 
              className="w-64 pl-10"
            />
          </div>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 pt-8">
              <Link 
                href="/" 
                className="text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#batches" 
                className="text-lg font-medium text-muted-foreground"
                onClick={() => setIsOpen(false)}
              >
                All Batches
              </Link>
              <Link 
                href="#categories" 
                className="text-lg font-medium text-muted-foreground"
                onClick={() => setIsOpen(false)}
              >
                Categories
              </Link>
              <Link 
                href="#contact" 
                className="text-lg font-medium text-muted-foreground"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="relative pt-4">
                <Search className="absolute left-3 top-1/2 h-4 w-4 translate-y-1 text-muted-foreground" />
                <Input 
                  placeholder="Search batches..." 
                  className="pl-10"
                />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
