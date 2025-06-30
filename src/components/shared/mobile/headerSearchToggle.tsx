'use client'

import { useState } from "react"
import { Search } from "lucide-react"
import { MobileSearchModal } from "./mobileSearchModal"

export function HeaderSearchToggle() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="md:hidden p-2"
                aria-label="Open search"
            >
                <Search className="w-5 h-5 text-muted-foreground" />
            </button>

            <MobileSearchModal
                isOpen={open}
                onClose={() => setOpen(false)}
                placeholder="Cari artikel atau destinasi..."
            />
        </>
    )
}
