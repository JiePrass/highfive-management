"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Menu, X, HomeIcon, PackageIcon, FileTextIcon, PhoneIcon, ChevronDown } from "lucide-react"
import { motion, AnimatePresence, Easing } from "framer-motion"
import { SearchInput } from "../shared/searchInput"
import { HeaderSearchToggle } from "../shared/headerSearchToggle"
import { Button } from "../ui/button"

export function Header() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false)
    const toggleDesktopDropdown = () => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

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
    ];

    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDesktopDropdownOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", isOpen);
    }, [isOpen]);

    const fadeItem = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1] as Easing, // 👈 solusi terbaik untuk VS Code + TypeScript
            },
        },
    };


    return (
        <header className="container py-2 mx-auto">
            <div className="flex items-center justify-between mx-4 md:mx-0 py-4">
                <Link href="/" className="text-lg font-semibold flex items-center gap-2">
                    <Image src="/HFE_Logo.png" alt="Logo" width={40} height={40} />
                    <span>Highfive Management</span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center space-x-4">
                    <nav className="hidden md:flex items-center space-x-4 relative">
                        {navItems.map((item, idx) =>
                            item.children ? (
                                isMounted && (
                                    <div key={idx} className="relative" ref={dropdownRef}>
                                        <button
                                            onClick={toggleDesktopDropdown}
                                            className={cn(
                                                "flex items-center gap-1 px-3 py-1 text-sm rounded-md transition font-semibold text-muted-foreground hover:text-foreground"
                                            )}
                                        >
                                            {item.label}
                                            <motion.span
                                                animate={{ rotate: isDesktopDropdownOpen ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ChevronDown className="w-4 h-4" />
                                            </motion.span>
                                        </button>

                                        <AnimatePresence>
                                            {isDesktopDropdownOpen && (
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
                                        pathname === item.href
                                            ? "bg-primary text-white rounded-full"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            )
                        )}
                    </nav>
                </nav>
                <div className="flex items-center space-x-2">

                    {/* Desktop */}
                    <div className="hidden md:block">
                        <SearchInput />
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

            {/* Sidebar Mobile */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black/40 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                        />

                        {/* Sidebar */}
                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed inset-y-0 right-0 w-72 bg-neutral-900 text-white z-50 shadow-lg p-6 flex flex-col justify-between"
                        >
                            <motion.div
                                className="space-y-4"
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                variants={{
                                    hidden: {},
                                    show: {
                                        transition: {
                                            staggerChildren: 0.2,
                                            delayChildren: 0.2,
                                        },
                                    },
                                }}
                            >
                                {/* Header */}
                                <motion.div
                                    variants={fadeItem}
                                    className="flex justify-between items-center border-b pb-4 border-subtle"
                                >
                                    <div className="flex justify-center items-center gap-1">
                                        <Image src="/HFE_Logo.png" alt="Logo Highfive" width={100} height={100} className="object-contain w-6 h-6" />
                                        <span className="text-xl font-semibold">Highfive</span>
                                    </div>
                                    <button onClick={toggleMenu}>
                                        <X className="w-6 h-6" />
                                    </button>
                                </motion.div>

                                <motion.span variants={fadeItem} className="text-sm text-subtle">Menu</motion.span>

                                {/* Mobile Navigation */}
                                <motion.nav variants={fadeItem} className="flex flex-col mt-2 gap-4">
                                    {navItems.map((item, idx) =>
                                        item.children ? (
                                            <div key={idx}>
                                                <button
                                                    onClick={toggleDropdown}
                                                    className="flex w-full items-center justify-between hover:text-primary transition"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        {item.icon}
                                                        <span>{item.label}</span>
                                                    </div>
                                                    <motion.div
                                                        animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <ChevronDown className="w-5 h-5 text-gray-400" />
                                                    </motion.div>
                                                </button>

                                                <AnimatePresence initial={false}>
                                                    {isDropdownOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="overflow-hidden pl-6 mt-2 space-y-2"
                                                        >
                                                            {item.children.map((sub, subIdx) => (
                                                                <Link
                                                                    key={subIdx}
                                                                    href={sub.href}
                                                                    className="block text-sm hover:text-primary"
                                                                >
                                                                    {sub.label}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <motion.a
                                                key={idx}
                                                href={item.href}
                                                variants={fadeItem}
                                                className="flex items-center gap-2 hover:text-primary transition"
                                            >
                                                {item.icon}
                                                <span>{item.label}</span>
                                            </motion.a>
                                        )
                                    )}
                                </motion.nav>
                            </motion.div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </header>
    )
}

