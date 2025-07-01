// components/landing/articleClient.tsx
"use client";

import { useState, useEffect } from "react";
import { Article } from "@/data/articles";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

export default function ArticleClient({ articles }: { articles: Article[] }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    const featured = articles.find((a) => a.featured);
    const others = articles.filter((a) => !a.featured);

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12">
                {/* Featured Skeleton */}
                <div className="space-y-4">
                    <Skeleton className="w-full aspect-video rounded-lg" />
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-5/6" />
                </div>

                {/* Other Articles Skeleton */}
                <div className="space-y-6">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="flex gap-4">
                            <Skeleton className="w-40 h-40 rounded-lg flex-shrink-0" />
                            <div className="flex flex-col justify-center flex-1 space-y-2">
                                <Skeleton className="h-4 w-28" />
                                <Skeleton className="h-5 w-4/5" />
                                <Skeleton className="h-4 w-24" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12">
            {/* Featured Article */}
            {featured && (
                <div className="overflow-hidden">
                    <div className="relative aspect-video">
                        <Image
                            src={featured.image}
                            alt={featured.title}
                            fill
                            className="object-cover rounded-lg"
                            sizes="(min-width: 1024px) 66vw, 100vw"
                        />
                    </div>
                    <div className="py-4">
                        <p className="text-subtle mb-1">{featured.category}</p>
                        <h3 className="text-xl md:text-2xl font-semibold leading-tight">{featured.title}</h3>
                        <p className="text-xs md:text-sm text-subtle mt-2">{featured.date}</p>
                        <p className="text-sm md:text-base text-subtle mt-2 line-clamp-2">{featured.description}</p>
                    </div>
                </div>
            )}

            {/* Other Articles */}
            <div className="space-y-6">
                {others.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                        <div className="relative w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-subtle mb-1 md:mb-2">{item.category}</p>
                            <h4 className="font-semibold text-lg md:text-2xl mb-2 md:mb-4">{item.title}</h4>
                            <p className="text-xs md:text-sm text-subtle">{item.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
