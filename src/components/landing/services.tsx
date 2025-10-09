import Image from "next/image";

const servicesData = [
    {
        title: "Event Organizer & M.I.C.E",
        image: "/images/.jpg",
        description:
            "Perencanaan dan pelaksanaan berbagai acara seperti meeting, incentive, conference, dan exhibition dengan konsep inovatif dan hasil profesional.",
    },
    {
        title: "Tour Organizer Domestik & Internasional",
        image: "/images/.jpg",
        description:
            "Layanan penyelenggaraan perjalanan wisata dan kunjungan kerja, baik dalam negeri maupun luar negeri, untuk memberikan pengalaman perjalanan terbaik.",
    },
    {
        title: "Outbound & Outdoor Activity",
        image: "/images/.jpg",
        description:
            "Program team building, character building, workshop, hingga aktivitas outdoor lainnya untuk meningkatkan kerja sama tim dan pengembangan sumber daya manusia.",
    },
    {
        title: "Kelautan & Wisata Bahari",
        image: "/images/.jpg",
        description:
            "Kegiatan seru di laut seperti trip pulau, diving, snorkeling, hingga petualangan outdoor yang memberikan pengalaman tak terlupakan.",
    },
    {
        title: "Layanan Transportasi",
        image: "/images/transportasi.jpg",
        description:
            "Layanan transportasi yang nyaman, aman, dan terpercaya untuk mendukung kelancaran acara, tour, maupun perjalanan bisnis Anda.",
    },
    {
        title: "Wisata Minat Khusus",
        image: "/images/hero2.JPG",
        description:
            "Program wisata unik dan eksklusif yang dirancang sesuai kebutuhan dan minat klien untuk memberikan pengalaman yang berbeda.",
    },
    {
        title: "Multimedia & Creative Design",
        image: "/images/.jpg",
        description:
            "Layanan desain profesional termasuk desain 2D & 3D, branding event, pembuatan konten visual, hingga pengembangan website yang menarik dan modern.",
    },
    {
        title: "Photography & Videography",
        image: "/images/.jpg",
        description:
            "Dokumentasikan momen terbaik acara Anda dengan tim profesional kami melalui hasil foto dan video berkualitas tinggi untuk setiap kebutuhan event.",
    },
];

export default function Services() {
    return (
        <section className="bg-card pt-15 md:pt-30 md:px-30" id="services">
            <div className="md:container md:mx-auto flex flex-col justify-between gap-20">
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Layanan <span className="text-primary">Highfive Management</span>
                    </h2>
                    <p className="text-subtle max-w-xl mx-auto text-sm">
                        Kami menyediakan berbagai layanan terintegrasi dalam penyelenggaraan acara, perjalanan, dan multimedia
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="relative group w-full aspect-square overflow-hidden shadow-lg cursor-pointer"
                        >
                            {/* Background Image */}
                            <Image
                                src={service.image || "/images/placeholder.jpg"}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 z-0 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>

                            {/* Title (initial state) */}
                            <div className="absolute text-white bottom-0 left-0 py-4 px-4 text-lg font-semibold z-10 transition-all duration-300 group-hover:translate-y-full">
                                {service.title}
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-white p-6 flex flex-col justify-center items-start 
                        -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-20">
                                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-sm leading-relaxed">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
