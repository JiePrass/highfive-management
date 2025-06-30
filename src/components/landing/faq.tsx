"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Script from "next/script"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

const faqs = [
    {
        question: "Apakah saya perlu reservasi sebelum datang?",
        answer:
            "Ya, kami sangat menyarankan untuk melakukan reservasi terlebih dahulu agar pengalaman Anda lebih nyaman dan terorganisir.",
    },
    {
        question: "Apa saja jenis paket wisata yang tersedia?",
        answer:
            "Kami menyediakan berbagai paket seperti offroad, camping, trekking, dan family adventure yang bisa disesuaikan dengan kebutuhan Anda.",
    },
    {
        question: "Apakah kegiatan aman untuk anak-anak?",
        answer:
            "Tentu! Kami memiliki paket khusus keluarga dengan aktivitas ramah anak dan pengawasan ketat oleh tim profesional.",
    },
    {
        question: "Berapa biaya paket termurah?",
        answer:
            "Biaya paket mulai dari Rp150.000 per orang, tergantung jenis aktivitas dan fasilitas yang dipilih.",
    },
    {
        question: "Apakah tersedia fasilitas penginapan?",
        answer:
            "Ya, kami menyediakan beberapa pilihan penginapan seperti glamping dan tenda camping lengkap dengan fasilitas dasar.",
    },
    {
        question: "Bagaimana jika terjadi hujan saat kegiatan?",
        answer:
            "Kami memiliki rencana cadangan untuk setiap aktivitas dan akan mengutamakan keselamatan pengunjung dalam kondisi cuaca ekstrem.",
    },
]

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [message, setMessage] = useState("");

    const toggleFAQ = (index: number) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    const handleSend = () => {
        const phone = "6281234567890"; // Ganti dengan nomor WA tujuan (pakai kode negara)
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
    };

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
            },
        })),
    }

    return (
        <section className="relative py-20 container mx-auto px-6 md:px-0" aria-label="Pertanyaan yang Sering Diajukan">
            {/* Structured Data JSON-LD */}
            <Script
                id="faq-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Pertanyaan yang Sering Diajukan
            </h2>
            <div className="flex md:flex-row flex-col">
                <div className="space-y-4 md:w-1/2 mb-12 md:mb-0">
                    {faqs.map((faq, index) => {
                        const isOpen = index === activeIndex
                        const answerId = `faq-answer-${index}`

                        return (
                            <div
                                key={index}
                                className="border-b border-subtle overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between cursor-pointer px-5 py-4 text-left text-lg font-medium"
                                    aria-expanded={isOpen}
                                    aria-controls={answerId}
                                >
                                    {faq.question}
                                    {isOpen ? (
                                        <ChevronUp className="w-5 h-5" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5" />
                                    )}
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            id={answerId}
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-5 pb-4 pt-0 text-subtle text-base">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </div>

                <div className="w-full md:w-1/2 flex flex-col items-center gap-8 justify-center text-center">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <div className="relative w-64 h-64">
                            <Image
                                src="/images/faq.png"
                                alt="FAQ Illustration"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-xl font-semibold">Ada pertanyaan lain?</h3>
                            <p className="text-sm text-muted-foreground">Kirim pertanyaanmu langsung ke WhatsApp kami!</p>
                        </div>
                    </div>

                    <div className="w-full max-w-sm flex flex-col items-center gap-4">
                        <div className="flex flex-col w-full items-start">
                            <span className="text-subtle text-sm font-semibold">Beri tahu kami!</span>
                            <Input
                                placeholder="Tulis pertanyaanmu di sini..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="bg-white border border-muted-foreground"
                            />
                        </div>
                        <Button onClick={handleSend}>
                            Kirim ke WhatsApp
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
