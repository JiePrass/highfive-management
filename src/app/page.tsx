import Hero from "@/components/landing/hero"
import PopularPackage from "@/components/landing/popularPackage"
import Review from "@/components/landing/review"
import Service from "@/components/landing/service"
import WhyChooseUs from "@/components/landing/whyChooseUs"

export default function Home() {
  return (
    <main className="space-y-4 py-4 md:py-12 md:space-y-24 bg-background">
      <Hero/>
      <Service />
      <WhyChooseUs />
      <PopularPackage />
      <Review />
    </main>
  )
}