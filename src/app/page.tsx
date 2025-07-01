import About from "@/components/landing/about"
import CTA from "@/components/landing/CTA"
import Hero from "@/components/landing/hero"
import PopularDestination from "@/components/landing/popularDestination"
import Review from "@/components/landing/review"
import WhyChooseUs from "@/components/landing/whyChooseUs"

export default function Home() {
  return (
    <main className="space-y-4 md:space-y-24 bg-background">
      <Hero/>
      <About />
      <PopularDestination />
      <WhyChooseUs />
      <Review />
      <CTA />
    </main>
  )
}