'use client'

import { motion, AnimatePresence } from "framer-motion"
import { X, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface MobileSearchModalProps {
    isOpen: boolean
    onClose: () => void
    value?: string
    onChange?: (val: string) => void
    placeholder?: string
}

export function MobileSearchModal({
    isOpen,
    onClose,
    value,
    onChange,
    placeholder
}: MobileSearchModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 w-screen h-screen bg-black/40 z-40"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Modal */}
                    <motion.div
                        className="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-[90%]"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                    >
                        <div
                            className="relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Icon */}
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />

                            {/* Input */}
                            <Input
                                autoFocus
                                type="text"
                                value={value}
                                onChange={(e) => onChange?.(e.target.value)}
                                placeholder={placeholder || "Cari sesuatu..."}
                                className="pl-10 pr-10 rounded-full h-10 bg-background dark:bg-background"
                            />

                            {/* Tombol close */}
                            <button
                                onClick={onClose}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                                aria-label="Close search"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
