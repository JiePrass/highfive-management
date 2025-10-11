import Image from "next/image";

export default function About() {

    return (
        <section className="grid grid-cols-1 md:grid-cols-12 items-center justify-center mx-auto container gap-6 px-6">
            {/* Kiri - Judul */}
            <div className="flex flex-col h-full justify-between md:col-span-5 text-xl font-bold">
                <span>Highfive Management</span>
                <span>2025</span>
            </div>

            {/* Kanan - Headline dan gambar user */}
            <div className="md:col-span-7 space-y-4 md:space-y-16">
                <h2 className="text-2xl md:text-5xl font-semibold text-gray-900 leading-none">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis neque
                </h2>

                <div className="flex gap-3 items-center">
                    <div className="flex relative -space-x-3">
                        {[
                            "/images/profile.png",
                            "/images/profile2.png",
                            "/images/profile3.png",
                            "/images/profile4.png",
                        ].map((img, index) => (
                            <Image
                                key={index}
                                src={img}
                                alt={`User ${index + 1}`}
                                className="w-10 h-10 rounded-full border-2 border-white object-cover shadow"
                                width={300}
                                height={300}
                            />
                        ))}
                    </div>

                    <p className="text-sm hidden md:inline text-gray-500 max-w-md sm:ml-3 mt-2 sm:mt-0">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel optio voluptas repellat ipsum quas. Ab ipsam
                    </p>
                </div>
            </div>
        </section>
    );
}
