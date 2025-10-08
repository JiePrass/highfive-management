import Services from "@/components/landing/services"
import CTA from "@/components/landing/CTA";
import FAQ from "@/components/landing/faq";
import Hero from "@/components/landing/hero";
import PopularDestination from "@/components/landing/popularDestination";
import Review from "@/components/landing/review";
import WhyChooseUs from "@/components/landing/whyChooseUs";
import ArticleSection from "@/components/landing/articleSection";
import { dataArticle } from "@/data/articles";

export const revalidate = 3600;

export default function Home() {
  return (
    <main className="space-y-24 md:space-y-32 bg-background">
      <Hero />
      <Services />
      <WhyChooseUs />
      <PopularDestination />
      <Review />
      <ArticleSection articles={dataArticle} />
      <FAQ />
      <CTA />
    </main>
  );
}
