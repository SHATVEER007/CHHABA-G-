"use client"

import Link from "next/link"
import { BookOpen, Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight text-gray-900">Study with</span>
                <span className="text-sm font-semibold leading-tight text-blue-600">Chhaba G</span>
              </div>
            </Link>
            <p className="text-sm text-gray-600">
              Your one-stop destination for competitive exam preparation. Powered by Spidy Universe & Rozgar With Ankit.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 transition-colors hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#batches" className="text-sm text-gray-600 transition-colors hover:text-blue-600">
                  All Batches
                </Link>
              </li>
              <li>
                <Link href="#categories" className="text-sm text-gray-600 transition-colors hover:text-blue-600">
                  Categories
                </Link>
              </li>
              <li>
                <a 
                  href="https://spidyuniverserwa.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-blue-600"
                >
                  Spidy Universe
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Popular Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#batches" className="text-sm text-gray-600 transition-colors hover:text-blue-600">
                  SSC Batches
                </Link>
              </li>
              <li>
                <Link href="#batches" className="text-sm text-gray-600 transition-colors hover:text-blue-600">
                  Defence Batches
                </Link>
              </li>
              <li>
                <Link href="#batches" className="text-sm text-gray-600 transition-colors hover:text-blue-600">
                  Railway Batches
                </Link>
              </li>
              <li>
                <Link href="#batches" className="text-sm text-gray-600 transition-colors hover:text-blue-600">
                  Banking Batches
                </Link>
              </li>
              <li>
                <Link href="#batches" className="text-sm text-gray-600 transition-colors hover:text-blue-600">
                  State Exam Batches
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                <span>support@studywithchhaba.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-8 h-px w-full bg-gray-200" />

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Study with Chhaba G. All rights reserved.
          </p>
          <p className="text-sm text-gray-600">
            Powered by{" "}
            <a 
              href="https://spidyuniverserwa.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-blue-600 hover:underline"
            >
              Spidy Universe
            </a>
            {" "}&{" "}
            <span className="font-medium text-blue-600">Rozgar With Ankit</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
