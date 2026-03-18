import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { BatchList } from "@/components/batch-list"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Categories />
      <BatchList />
      <Footer />
    </main>
  )
}
