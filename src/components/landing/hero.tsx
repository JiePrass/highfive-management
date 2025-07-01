// components/sections/HeroSection.tsx
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative w-full pt-8 overflow-hidden">
            {/* Background Map */}
            <div className="absolute top-32 left-1/2 -translate-x-1/2 md:top-0 md:right-0 md:left-auto md:translate-x-0 w-full md:w-[60%] max-w-[750px] h-full opacity-50 pointer-events-none z-0">
                <Image
                    src="/images/worldmap.png"
                    alt="Map Background"
                    fill
                    className="object-contain"
                />
            </div>

            <div className="relative z-10 mx-auto px-6 md:px-0 container grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center">
                {/* Left Text */}
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                        Lorem Ipsum Dolor<br />
                        Sit Amet<span className="text-primary"> Consectetur</span>
                    </h1>
                    <p className="text-subtle text-sm mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iste suscipit voluptas laboriosam quaerat vitae fuga natus eaque alias reprehenderit nulla, inventore minima aut tenetur aperiam, illum blanditiis voluptate quod!
                    </p>
                    <div className="space-x-2 hidden md:flex">
                        <Button asChild>
                            <Link href="/">Pesan Sekarang</Link>
                        </Button>

                        <Button variant="secondary" asChild>
                            <Link href="/">Jelajahi</Link>
                        </Button>
                    </div>
                </div>

                {/* Responsive Image Layout */}
                <div className="relative grid-cols-2 gap-4 md:gap-12 grid">
                    {/* Big Card (mobile kiri, desktop center) */}
                    <div className="relative w-full h-68 md:h-100 md:mt-8">
                        <Image
                            src="/images/placeholder.jpg"
                            alt="Main Card"
                            fill
                            className="object-cover rounded-xl"
                        />
                    </div>

                    <div className="flex flex-col justify-between gap-4 md:gap-8">
                        {/* Top Small */}
                        <div className="relative w-full h-40 md:h-68">
                            <Image
                                src="/images/placeholder.jpg"
                                alt="Top Right Card"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>

                        {/* Bottom Small */}
                        <div className="relative w-full h-24 md:h-40">
                            <Image
                                src="/images/placeholder.jpg"
                                alt="Bottom Right Card"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>
                    </div>

                    <div className="space-x-2 py-4 flex md:hidden col-span-2 justify-center">
                        <Button asChild>
                            <Link href="/pesan">Pesan Sekarang</Link>
                        </Button>

                        <Button variant="outline" asChild>
                            <Link href="/jelajah">Jelajahi</Link>
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
}
