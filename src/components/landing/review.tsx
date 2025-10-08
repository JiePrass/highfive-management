// components/ReviewSection.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Image from 'next/image'

const reviews = [
    {
        name: 'Jeki Permana',
        role: 'Siswa Kelas 11',
        text: `Mode belajarnya keren! Bisa ngobrol sama AI kayak punya tutor pribadi. Aku jadi lebih fokus dan nggak gampang terdistraksi`,
        image: '/images/placeholder.jpg',
    },
    {
        name: 'Alika Rahma',
        role: 'Siswi Kelas 10',
        text: `Fourtivity bikin belajar makin asyik! AI-nya paham banget cara ngajarin, aku jadi lebih cepat ngerti materi.`,
        image: '/images/placeholder.jpg',
    },
    {
        name: 'Raka Firmansyah',
        role: 'Siswa Kelas 12',
        text: `Nggak nyangka belajar bisa seseru ini. Fourtivity ngebantu aku siapin ujian dengan cara yang beda dan menarik.`,
        image: '/images/placeholder.jpg',
    },
]

export default function ReviewSection() {
    const [current, setCurrent] = useState(0)

    const handlePrev = () => {
        setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
    }

    const previewItems = [
        ...reviews.slice(current + 1),
        ...reviews.slice(0, current)
    ]

    return (
        <section className="w-full bg-card py-20 relative overflow-hidden">
            <div className="container mx-auto">

                {/* Navigasi tombol */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl md:text-4xl font-medium max-w-xl text-foreground">
                        Kata mereka tentang  <span className="text-primary font-semibold">Highfive Management</span>
                    </h2>
                    <div className="flex items-center gap-2 justify-center md:justify-end col-span-7">
                        <button
                            onClick={handlePrev}
                            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="relative flex flex-col md:flex-row items-start gap-8">
                    {/* Review Image */}
                    <div className="flex-1 w-full md:max-w-80 relative z-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4 }}
                                className="rounded-xl w-full md:w-80 h-80 overflow-hidden shadow-md"
                            >
                                <Image
                                    src={reviews[current].image}
                                    alt={reviews[current].name}
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Review Text */}
                    <div className="flex-1 max-w-sm flex flex-col gap-2 justify-center z-10 h-80">
                        <Quote className="w-8 h-8 mb-4 text-foreground" />
                        <p className="text-2xl font-semibold text-foreground leading-relaxed">
                            {reviews[current].text.split('Aku')[0]}
                            <span className="text-muted-foreground">
                                Aku{reviews[current].text.split('Aku')[1]}
                            </span>
                        </p>
                        <div className="mt-6 text-sm text-gray-600">
                            {reviews[current].name} &nbsp; | &nbsp; {reviews[current].role}
                        </div>
                    </div>

                    {/* Next Preview */}
                    <div className="absolute hidden md:block top-1/2 right-0 -translate-y-1/2 w-[420px] overflow-hidden">
                        <div className="flex gap-4 pl-6">
                            {previewItems.map((review, idx) => (
                                <motion.div
                                    key={idx}
                                    onClick={() => setCurrent((current + 1 + idx) % reviews.length)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                                    className="cursor-pointer w-64 h-64 rounded-md overflow-hidden border border-gray-300 flex-shrink-0"
                                >
                                    <Image
                                        src={review.image}
                                        alt={review.name}
                                        width={128}
                                        height={128}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
