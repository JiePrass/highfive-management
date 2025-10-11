// components/landing/articleSection.tsx
import type { Article } from "@/data/articles";
import ArticleClient from "./articleClient";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ArticleSection({ articles }: { articles: Article[] }) {
    return (
        <section className="container mx-auto px-6" id="articles">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl md:text-4xl font-semibold">Artikel Populer</h2>
                <Button asChild>
                    <Link href="/">Lihat Semua</Link>
                </Button>
            </div>
            <ArticleClient articles={articles} />
        </section>
    );
}
