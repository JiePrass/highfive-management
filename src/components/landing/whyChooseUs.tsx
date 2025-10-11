import Image from "next/image";
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaLightbulb, FaUsersCog, FaAward } from "react-icons/fa";

export default function WhyChooseUs() {
    return (
        <section
            id="why-choose-us"
            className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12"
        >
            {/* Left Content */}
            <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    Kenapa Memilih <span className="text-primary">Highfive Management</span>?
                </h2>
                <p className="text-subtle text-sm lg:text-base leading-relaxed mb-10">
                    Kami adalah <strong>Event Organizer profesional</strong> yang telah dipercaya berbagai perusahaan dan instansi
                    untuk menciptakan acara berkesan, inovatif, dan sukses di seluruh Indonesia.
                </p>

                {/* Features Grid (2x2) */}
                <div className="grid grid-cols-2 gap-10">
                    <div className="flex flex-col items-start gap-3">
                        <RiCustomerServiceFill size={32} className="text-primary" />
                        <h3 className="text-lg font-semibold">Pelayanan Profesional</h3>
                        <p className="text-subtle text-sm">
                            Tim kami berkomitmen memberikan layanan personal dan profesional dari tahap perencanaan hingga pelaksanaan.
                        </p>
                    </div>

                    <div className="flex flex-col items-start gap-3">
                        <FaLightbulb size={32} className="text-primary" />
                        <h3 className="text-lg font-semibold">Konsep Kreatif & Inovatif</h3>
                        <p className="text-subtle text-sm">
                            Kami menghadirkan ide-ide segar dan konsep acara unik agar event Anda meninggalkan kesan tak terlupakan.
                        </p>
                    </div>

                    <div className="flex flex-col items-start gap-3">
                        <FaUsersCog size={32} className="text-primary" />
                        <h3 className="text-lg font-semibold">Tim Berpengalaman</h3>
                        <p className="text-subtle text-sm">
                            Didukung oleh tim ahli di bidang <strong>MICE</strong> dan manajemen acara untuk event dari skala kecil hingga besar.
                        </p>
                    </div>

                    <div className="flex flex-col items-start gap-3">
                        <FaAward size={32} className="text-primary" />
                        <h3 className="text-lg font-semibold">Reputasi Terpercaya</h3>
                        <p className="text-subtle text-sm">
                            Dipercaya oleh banyak klien dari berbagai industri sebagai mitra EO yang andal dan berkualitas.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 flex justify-end">
                <div className="rounded-2xl overflow-hidden shadow-md w-full max-w-md">
                    <Image
                        src="/images/placeholder.jpg"
                        alt="Highfive Management Event"
                        width={600}
                        height={500}
                        className="object-cover aspect-[3/4] md:aspect-auto lg:aspect-[3/4] w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
}
