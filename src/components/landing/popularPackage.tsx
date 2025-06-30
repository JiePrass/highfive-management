'use client';

import { useRef, useState, useMemo, useEffect, SetStateAction } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Link from 'next/link';
import { Swiper as SwiperClass } from 'swiper';
import { SearchInput } from '../shared/searchInput';
import { Card } from '../shared/card';
import { Button } from '../ui/button';

const wisataList = [
    {
        title: 'Offroad Seru Gunung Mas',
        label: 'Petualangan',
        description: 'Rasakan sensasi offroad menyusuri perkebunan teh Gunung Mas.',
        image: '/placeholder.jpg',
    },
    {
        title: 'Glamping Riverside Puncak',
        label: 'Keluarga',
        description: 'Nikmati pengalaman menginap di pinggir sungai dengan fasilitas modern.',
        image: '/placeholder.jpg',
    },
    {
        title: 'Trekking Curug Panjang',
        label: 'Wisata',
        description: 'Eksplorasi hutan dan air terjun Curug Panjang dengan pemandu lokal.',
        image: '/placeholder.JPG',
    },
    {
        title: 'Outbound Team Building',
        label: 'Travel',
        description: 'Paket outbound seru untuk meningkatkan kekompakan tim.',
        image: '/placeholder.JPG',
    },
    {
        title: 'Archery & Panahan Alam Terbuka',
        label: 'Haji',
        description: 'Latih fokus dan ketangkasan dengan panahan outdoor di alam terbuka.',
        image: '/placeholder.jpg',
    },
    {
        title: 'ATV Adventure Jalur Hutan Pinus',
        label: 'Event Organizer',
        description: 'Nikmati perjalanan seru mengendarai ATV di jalur hutan pinus.',
        image: '/placeholder.jpg',
    },
];


export default function PopularPackage() {
    const swiperRef = useRef<SwiperClass | null>(null);
    const [query, setQuery] = useState('');
    const [autoplay, setAutoplay] = useState(true);

    const filteredList = useMemo(() => {
        const hasil = wisataList.filter((item) =>
            `${item.title} ${item.label} ${item.description}`
                .toLowerCase()
                .includes(query.toLowerCase())
        );
        return hasil;
    }, [query]);

    useEffect(() => {
        // Matikan autoplay jika query tidak kosong
        setAutoplay(query.trim() === '');
    }, [query]);

    return (
        <section className='mx-auto container'>
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <h2 className="text-2xl md:text-4xl font-semibold">Paket Populer</h2>
                </div>
                <div className="flex items-center gap-3">
                    <SearchInput
                        placeholder="Cari Paket..."
                        onChange={(val: SetStateAction<string>) => setQuery(val)}
                    />
                    <Button variant="outline" asChild>
                        <Link href="/paket">
                            Lihat Semua
                        </Link>
                    </Button>
                </div>
            </div>

            <Swiper
                modules={[Autoplay]}
                loop={filteredList.length > 1}
                autoplay={autoplay ? { delay: 5000, disableOnInteraction: false } : false}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                key={filteredList.length} // re-render saat list berubah
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                }}
            >
                {filteredList.length > 0 ? (
                    filteredList.map((paket, index) => (
                        <SwiperSlide key={index}>
                            <Card data={paket} />
                        </SwiperSlide>
                    ))
                ) : (
                    <div className="text-center col-span-full py-20 text-gray-500 text-sm">
                        Tidak ada destinasi yang sesuai.
                    </div>
                )}
            </Swiper>
        </section>
    );
}
