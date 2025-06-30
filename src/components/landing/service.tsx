import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Service() {
    return (
        <section className="container mx-auto px-6 md:px-0">
            <div className="grid grid-cols-6 grid-rows-6 md:grid-cols-12 md:grid-rows-12 gap-4 h-[700px]">
                {/* Tile 1 - Large vertical (Cycling Exploration style) */}
                <div className="col-span-5 row-span-6 relative rounded-2xl overflow-hidden bg-muted p-4 group">
                    {/* Background Image */}
                    <Image
                        src="/placeholder.jpg"
                        alt="placeholder"
                        fill
                        className="object-cover absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-115"
                    />

                    {/* Overlay: Top gradient + Vignette */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        {/* Top fade gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                        {/* Vignette effect on hover */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                                background: `radial-gradient(ellipse at center, transparent 10%, rgba(0,0,0,0.5) 100%)`,
                            }}
                        />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col justify-end h-full">
                        <h2 className="text-xl font-bold text-white">Lorem Ipsum</h2>
                        <p className="text-sm max-w-sm text-white">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore inventore aspernatur vel sed, error eum dicta doloremque nemo omnis quidem amet
                        </p>
                    </div>
                </div>


                {/* Tile 2 - Logo / Branding */}
                <div className="col-span-4 row-span-3 bg-muted rounded-2xl flex items-center justify-center text-xl font-semibold">
                    Highfive Management
                </div>

                {/* Tile 3 - Small icon area */}
                <div className="col-span-3 row-span-3 bg-muted rounded-2xl flex items-center justify-center">
                    🚴‍♂️ ⛰️ 🧭
                </div>

                {/* Tile 4 - Time box */}
                <div className="col-span-3 row-span-3 bg-muted rounded-2xl p-4 flex flex-col justify-between shadow">
                    <div className="text-sm font-medium">Sat 09</div>
                    <div className="text-4xl font-bold text-red-500">00:28</div>
                </div>

                {/* Tile 5 - Route Info */}
                <div className="col-span-4 row-span-3 bg-muted rounded-2xl p-4">
                    <h3 className="text-lg font-bold mb-2">Route length</h3>
                    <p className="text-2xl font-semibold">37.2 km</p>
                </div>

                {/* Tile 6 - App Icon */}
                <div className="col-span-4 row-span-4 bg-muted rounded-2xl p-4 flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-2xl mb-1">📱</div>
                        <div className="text-xs">App Icon</div>
                    </div>
                </div>

                {/* Tile 7 - AI Route */}
                <div className="col-span-8 row-span-4 bg-muted rounded-2xl flex items-center justify-between shadow overflow-hidden">
                    {/* Konten Teks */}
                    <div className="z-10 max-w-md p-6 space-y-4">
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold">Lorem Ipsum</h3>
                            <p className="text-sm text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, explicabo amet veritatis provident temporibus nulla possimus
                            </p>
                        </div>
                        <Button asChild>
                            <Link href="/">Pesan Sekarang</Link>
                        </Button>
                    </div>

                    {/* Container Gambar + Gradien */}
                    <div className="relative h-full w-2/5">
                        {/* Gambar */}
                        <Image
                            src="/placeholder.jpg"
                            alt="placeholder"
                            fill
                            className="object-cover"
                        />

                        {/* Gradasi dari kiri (bg-muted) ke kanan (transparan) */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-muted" />
                    </div>
                </div>
            </div>
        </section>
    );
}
