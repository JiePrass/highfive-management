'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Link from 'next/link';
import { Swiper as SwiperClass } from 'swiper';
import { Button } from '../ui/button';
import { DestinationCard } from '../shared/destinationCard';

const listDestination = [
    {
        title: 'Offroad',
        label: 'Petualangan',
        description: 'Rasakan sensasi offroad menyusuri perkebunan teh Gunung Mas.',
        image: '/images/image (9).jpg',
    },
    {
        title: 'Glamping Riverside Puncak',
        label: 'Keluarga',
        description: 'Nikmati pengalaman menginap di pinggir sungai dengan fasilitas modern.',
        image: '/images/placeholder.jpg',
    },
    {
        title: 'Trekking Curug Panjang',
        label: 'Wisata',
        description: 'Eksplorasi hutan dan air terjun Curug Panjang dengan pemandu lokal.',
        image: '/images/trekking.JPG',
    },
    {
        title: 'Outbound Team Building',
        label: 'Travel',
        description: 'Paket outbound seru untuk meningkatkan kekompakan tim.',
        image: '/images/placeholder.jpg',
    },
    {
        title: 'Archery & Panahan Alam Terbuka',
        label: 'Haji',
        description: 'Latih fokus dan ketangkasan dengan panahan outdoor di alam terbuka.',
        image: '/images/placeholder.jpg',
    },
    {
        title: 'ATV Adventure',
        label: 'Event Organizer',
        description: 'Nikmati perjalanan seru mengendarai ATV di jalur hutan pinus.',
        image: '/images/image (8).jpg',
    },
];


export default function PopularDestination() {
    const swiperRef = useRef<SwiperClass | null>(null);

    return (
        <section className='mx-auto container'>
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl md:text-4xl font-semibold">Destinasi Populer</h2>
                <Button variant="outline" asChild>
                    <Link href="/paket">
                        Lihat Semua
                    </Link>
                </Button>
            </div>

            <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false, 
                }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
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

                {listDestination.map((paket, index) => (
                    <SwiperSlide key={index}>
                        <DestinationCard data={paket} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
