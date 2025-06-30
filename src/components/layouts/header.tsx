"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { HeaderSearchToggle } from "../shared/mobile/headerSearchToggle"
import { Button } from "../ui/button"
import { MobileSidebar } from "../shared/mobile/mobileSidebar"
import { DesktopNav } from "../shared/desktop/desktopNav"
import { SearchDropdownInput } from "../shared/searchDropdownInput"

const searchData = [
    { title: "Paket Wisata Domestik", href: "/paket/domestik" },
    { title: "Paket Wisata Internasional", href: "/paket/internasional" },
    { title: "Artikel: Tips Liburan", href: "/artikel/tips-liburan" },
    { title: "Artikel: Destinasi Favorit", href: "/artikel/destinasi" },
    { title: "Paket Hemat Keluarga", href: "/paket/hemat" },
    { title: "Artikel: Liburan Budget", href: "/artikel/budget" },
]

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen);
    const [showHeader, setShowHeader] = useState(true)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
                // scroll down → sembunyikan header
                setShowHeader(false)
            } else {
                // scroll up → tampilkan header
                setShowHeader(true)
            }

            lastScrollY.current = currentScrollY
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])


    return (
        <>
            <header
                className={`sticky top-0 z-50 bg-background transition-transform duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <div className="container mx-auto oy-2">

                    <div className="flex items-center justify-between mx-4 md:mx-0 py-4">
                        <Link href="/" className="text-lg font-semibold flex items-center gap-2">
                            <Image src="/HFE_Logo.png" alt="Logo" width={40} height={40} />
                            <span>Highfive Management</span>
                        </Link>

                        {/* Desktop nav */}
                        <DesktopNav />

                        <div className="flex items-center space-x-2">

                            {/* Desktop */}
                            <div className="hidden md:block">
                                <SearchDropdownInput data={searchData} />
                            </div>
                            <Button asChild variant="accent" className="hidden text-white md:flex">
                                <Link href={"/"}>Pesan</Link>
                            </Button>

                            {/* Mobile */}
                            <HeaderSearchToggle />

                            {/* Hamburger button */}
                            <button
                                className="md:hidden text-muted-foreground"
                                onClick={toggleMenu}
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            
            {/* Sidebar Mobile */}
            <MobileSidebar isOpen={isOpen} toggleMenu={toggleMenu} />
        </>
    )
}

