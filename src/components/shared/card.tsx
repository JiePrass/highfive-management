import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type CardData = {
    title: string;
    label: string;
    description: string;
    image: string;
};

type Props = {
    data: CardData;
};


export function Card({ data }: Props) {
    return (
        <div className="min-w-[250px] md:min-w-[280px] h-92 md:rounded-2xl overflow-hidden relative group shadow hover:shadow-lg transition-all duration-300">
            <Image
                src={data.image}
                alt={data.title}
                fill
                className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex flex-col justify-end">
                <h3 className="text-lg font-semibold text-white">{data.title}</h3>
                <p className="text-sm text-white opacity-80">{data.description}</p>
            </div>
            <div className="absolute top-4 left-4 text-sm bg-white/40 backdrop-blur-xl px-3 py-1 rounded-full w-fit text-foreground mb-2">
                {data.label}
            </div>
            <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow opacity-0 group-hover:opacity-100 transition">
                <Link href="/paket">
                    <ArrowRight className="w-4 h-4 -rotate-45" />
                </Link>
            </div>
        </div>
    )
}