"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { X, ChevronDown, HomeIcon, PackageIcon, FileTextIcon, PhoneIcon } from "lucide-react"
import { motion, AnimatePresence, Easing } from "framer-motion"
import { useState } from "react"

interface MobileSidebarProps {
    isOpen: boolean
    toggleMenu: () => void
}

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

export function MobileSidebar({ isOpen, toggleMenu }: MobileSidebarProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const pathname = usePathname()


    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 bg-black/40 z-50"
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
                        className="fixed inset-y-0 right-0 w-80 bg-background text-fore-ground z-60 shadow-lg p-6 flex flex-col justify-between"
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
                                <button onClick={toggleMenu} className="text-muted-foreground">
                                    <X className="w-6 h-6" />
                                </button>
                            </motion.div>

                            <motion.span variants={fadeItem} className="text-sm text-subtle">Menu</motion.span>

                            {/* Mobile Navigation */}
                            <motion.nav variants={fadeItem} className="flex flex-col mt-2 gap-2">
                                {navItems.map((item, idx) =>
                                    item.children ? (
                                        <div key={idx}>
                                            <motion.button
                                                variants={fadeItem}
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                className="flex px-3 py-2 w-full items-center justify-between hover:text-primary transition"
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
                                            </motion.button>

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
                                                                className={`block text-sm px-3 py-1 rounded-md transition ${pathname === sub.href ? "bg-primary text-primary-foreground" : "hover:text-primary"
                                                                    }`}
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
                                            className={`flex items-center gap-2 px-3  py-2 rounded-md transition ${pathname === item.href ? "bg-primary text-primary-foreground" : "hover:text-primary"
                                                }`}
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
    )
}
