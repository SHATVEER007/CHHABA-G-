"use client"

import Link from "next/link"
import { BookOpen, Mail, Phone, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer id="contact" className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight text-foreground">Study with</span>
                <span className="text-sm font-semibold leading-tight text-primary">Chhaba G</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your one-stop destination for competitive exam preparation. Powered by Spidy Universe & Rozgar With Ankit.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#batches" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  All Batches
                </Link>
              </li>
              <li>
                <Link href="#categories" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Categories
                </Link>
              </li>
              <li>
                <a 
                  href="https://spidyuniverserwa.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Spidy Universe
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Popular Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#batches" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  SSC Batches
                </Link>
              </li>
              <li>
                <Link href="#batches" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Defence Batches
                </Link>
              </li>
              <li>
                <Link href="#batches" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Railway Batches
                </Link>
              </li>
              <li>
                <Link href="#batches" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Banking Batches
                </Link>
              </li>
              <li>
                <Link href="#batches" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  State Exam Batches
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>support@studywithchhaba.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Study with Chhaba G. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Powered by{" "}
            <a 
              href="https://spidyuniverserwa.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              Spidy Universe
            </a>
            {" "}&{" "}
            <span className="font-medium text-primary">Rozgar With Ankit</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
