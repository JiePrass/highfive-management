"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronDown, HomeIcon, PackageIcon, FileTextIcon, PhoneIcon } from "lucide-react"

const navItems = [
    { href: "/", label: "Beranda", icon: <HomeIcon /> },
    {
        label: "Paket Wisata",
        icon: <PackageIcon />,
        children: [
            { href: "/paket/domestik", label: "Domestik" },
            { href: "/paket/internasional", label: "Internasional" },
        ],
    },
    { href: "/artikel", label: "Artikel", icon: <FileTextIcon /> },
    { href: "/kontak", label: "Kontak", icon: <PhoneIcon /> },
]

export function DesktopNav() {
    const pathname = usePathname()
    const dropdownRef = useRef<HTMLDivElement>(null)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsDropdownOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <>
            {navItems.map((item, idx) =>
                item.children ? (
                    isMounted && (
                        <div key={idx} className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className={cn("flex items-center gap-1 px-3 py-1 text-sm rounded-md transition font-semibold text-muted-foreground hover:text-foreground")}
                            >
                                {item.label}
                                <motion.span animate={{ rotate: isDropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                    <ChevronDown className="w-4 h-4" />
                                </motion.span>
                            </button>

                            <AnimatePresence>
                                {isDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-0 top-full mt-2 w-40 bg-white shadow-md rounded-md z-50"
                                    >
                                        {item.children.map((child, subIdx) => (
                                            <Link
                                                key={subIdx}
                                                href={child.href}
                                                className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )
                ) : (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "px-3 py-1 text-sm rounded-md hover:text-foreground transition font-semibold",
                            pathname === item.href ? "bg-primary text-white rounded-full" : "text-muted-foreground"
                        )}
                    >
                        {item.label}
                    </Link>
                )
            )}
        </>
    )
}
