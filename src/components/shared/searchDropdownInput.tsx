"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"

interface Item {
    title: string
    href: string
}

interface SearchDropdownInputProps {
    data: Item[]
    placeholder?: string
    onSelect?: (item: Item) => void
}

export function SearchDropdownInput({
    data,
    placeholder = "Cari artikel atau paket...",
    onSelect,
}: SearchDropdownInputProps) {
    const [query, setQuery] = useState("")
    const [filtered, setFiltered] = useState<Item[]>([])
    const [isFocused, setIsFocused] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    // Filtering pencarian
    useEffect(() => {
        if (!query.trim()) {
            setFiltered([])
            return
        }

        const result = data.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        )
        setFiltered(result.slice(0, 5))
    }, [query, data])

    // Klik di luar = tutup dropdown
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsFocused(false)
            }
        }
        document.addEventListener("mousedown", handler)
        return () => document.removeEventListener("mousedown", handler)
    }, [])

    return (
        <div ref={containerRef} className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 pointer-events-none" />
            <Input
                type="text"
                value={query}
                onFocus={() => setIsFocused(true)}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
                className="pl-10 rounded-full"
            />

            <AnimatePresence>
                {isMounted && isFocused && filtered.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 mt-1 w-full rounded-xl bg-background shadow-lg"
                    >
                        <ul className="max-h-60 overflow-auto py-1 text-sm">
                            {filtered.map((item, idx) => (
                                <li key={idx} className="relative">
                                    <Link
                                        href={item.href}
                                        className="flex items-center gap-2 px-4 py-2 pl-10 hover:bg-muted transition-colors"
                                        onClick={() => {
                                            setIsFocused(false)
                                            setQuery("")
                                            onSelect?.(item)
                                        }}
                                    >
                                        <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
