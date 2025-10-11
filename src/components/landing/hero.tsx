// components/sections/HeroSection.tsx
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function HeroSection() {
    const phoneNumber = 6281389599499
    const whatsappLink = `https://wa.me/${phoneNumber}`;

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

            <div className="relative z-10 mx-auto px-6 container grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center">
                {/* Left Text */}
                <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                        Wujudkan Wisata Impian Bersama <span className="text-primary">Highfive Management</span>
                    </h1>
                    <p className="text-subtle text-sm mb-6">
                        Event Organizer & MICE profesional yang menghadirkan acara berkesan, inovatif, dan terencana sempurna.
                    </p>
                    <div className="space-x-2 hidden md:flex">
                        <Button asChild>
                            <Link href={whatsappLink}>Pesan Sekarang</Link>
                        </Button>

                        <Button variant="secondary" asChild>
                            <Link href="#services">Lihat Layanan</Link>
                        </Button>
                    </div>
                </div>

                {/* Responsive Image Layout */}
                <div className="relative grid-cols-2 gap-4 lg:gap-12 grid">
                    {/* Big Card (mobile kiri, desktop center) */}
                    <div className="relative w-full h-68 lg:h-100 md:mt-8">
                        <Image
                            src="/images/image (3).jpg"
                            alt="Main Card"
                            fill
                            className="object-cover rounded-xl"
                        />
                    </div>

                    <div className="flex flex-col justify-between gap-4 lg:gap-8">
                        {/* Top Small */}
                        <div className="relative w-full h-40 lg:h-68">
                            <Image
                                src="/images/image (1).jpg"
                                alt="Top Right Card"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>

                        {/* Bottom Small */}
                        <div className="relative w-full h-24 lg:h-40">
                            <Image
                                src="/images/image (6).jpg"
                                alt="Bottom Right Card"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>
                    </div>

                    <div className="space-x-2 py-4 flex md:hidden col-span-2 justify-center">
                        <Button asChild>
                            <Link href={whatsappLink}>Pesan Sekarang</Link>
                        </Button>

                        <Button variant="outline" asChild>
                            <Link href="#services">Jelajahi</Link>
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
}
