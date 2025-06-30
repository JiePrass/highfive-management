"use client"

import Link from "next/link"
import Image from "next/image"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaFacebookSquare } from "react-icons/fa"
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai"

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Kiri: Logo & Tagline */}
                <div className="flex flex-col gap-4 md:justify-between items-center md:items-start text-center md:text-left">
                    <div className="flex items-center gap-2">
                        <Image src="/HFE_Logo.png" alt="Highfive Management" width={48} height={48} />
                        <h1 className="text-white font-bold">Highfive Management</h1>
                    </div>
                    <h2 className="text-gray-300 text-2xl">
                        Petualangan Seru di Tengah Alam Pegunungan Puncak
                    </h2>
                    <p className="text-gray-400 text-sm">
                        Menyediakan pengalaman wisata tak terlupakan, mulai dari offroad, glamping, hingga aktivitas tim dan keluarga.
                    </p>
                    <p className="mt-4 hidden md:inline text-gray-500 text-xs">
                        &copy; {new Date().getFullYear()} Highfive Management. All rights reserved.
                    </p>
                </div>

                {/* Kanan: Menu & Info */}
                <div className="flex flex-col gap-8">
                    {/* Navigasi */}
                    <div className="flex flex-wrap justify-center md:justify-end gap-2 text-sm">
                        <Link href="/beranda" className="bg-white font-semibold px-3 py-1 border rounded-full">Beranda</Link>
                        <Link href="/paket" className="text-white px-3 py-1 border rounded-full">Paket</Link>
                        <Link href="/artikel" className="text-white px-3 py-1 border rounded-full">Artikel</Link>
                        <Link href="/kontak" className="text-white px-3 py-1 border rounded-full">Kontak</Link>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-4 md:gap-8">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-gray-500 text-sm">Lokasi</h2>
                            <p className="text-white text-sm">
                                Tugu Selatan, Cisarua, Kabupaten Bogor, Jawa Barat 16750
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-gray-500 text-sm">Media Sosial</h2>
                            <div className="flex items-center gap-4">
                                <Link href="/" className="text-white"><FaFacebookSquare size={28} /></Link>
                                <Link href="/" className="text-white"><AiFillInstagram size={30} /></Link>
                                <Link href="/" className="text-white"><AiFillTikTok size={30} /></Link>
                                <Link href="/" className="text-white"><FaSquareXTwitter size={28} /></Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-gray-500 text-sm">Layanan Unggulan</h2>
                            <p className="text-white text-sm">
                                Offroad, Glamping Riverside, Trekking, ATV, dan outbound untuk keluarga maupun perusahaan.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-gray-500 text-sm">Jam Operasional</h2>
                            <p className="text-white text-sm">
                                Buka setiap hari pukul 08.00 – 17.00 WIB. Reservasi online tersedia 24 jam.
                            </p>
                        </div>
                    </div>
                </div>

                <p className="mt-4 md:hidden text-gray-500 text-xs text-center">
                        &copy; {new Date().getFullYear()} Highfive Management. All rights reserved.
                    </p>
            </div>
        </footer>
    )
}
