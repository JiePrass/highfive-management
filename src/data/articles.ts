// src/data/articles.ts
export interface Article {
    title: string;
    category: string;
    date: string;
    description: string;
    image: string;
    featured?: boolean;
}

export const dataArticle: Article[] = [
    {
        title: "Los Angeles food & drink guide: 10 things to try in Los Angeles, California",
        category: "Food and Drink",
        date: "Aug 12, 2024 · 6 min read",
        description:
            "It seems that California's many edible icons can be served with a combination of locations, views, and ideas...",
        image: "/images/placeholder.jpg",
        featured: true,
    },
    {
        title: "15 South London Markets You'll Love: Best Markets in South London",
        category: "Shopping",
        date: "Aug 6, 2024 · 6 min read",
        description: "",
        image: "/images/placeholder.jpg",
    },
    {
        title: "10 incredible hotels around the world you can book with points in 2024",
        category: "Hotels",
        date: "Aug 8, 2024 · 6 min read",
        description: "",
        image: "/images/placeholder.jpg",
    },
    {
        title: "Visiting Chicago on a Budget: Affordable Eats and Attraction Deals",
        category: "Travel Budget",
        date: "Aug 7, 2024 · 6 min read",
        description: "",
        image: "/images/placeholder.jpg",
    },
];
