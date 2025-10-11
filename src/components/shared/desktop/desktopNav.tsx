"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { HomeIcon, PackageIcon, FileTextIcon, PhoneIcon } from "lucide-react"

const navItems = [
    { href: "/", label: "Beranda", icon: <HomeIcon /> },
    { href: "#services", label: "Layanan", icon: <PackageIcon /> },
    { href: "#articles", label: "Artikel", icon: <FileTextIcon /> },
    { href: "#contact", label: "Kontak", icon: <PhoneIcon /> },
]

export function DesktopNav() {
    const pathname = usePathname()
    return (
        <nav className="hidden lg:flex items-center space-x-4 relative">
            {navItems.map((item) =>
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
            )}
        </nav>
    )
}
