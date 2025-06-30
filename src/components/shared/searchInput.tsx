"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface SearchInputProps {
    placeholder?: string
    value?: string
    onChange?: (val: string) => void
}

export function SearchInput({
    placeholder = "Cari sesuatu...",
    value = "",
    onChange,
}: SearchInputProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className="pl-10 rounded-full w-64"
            />
        </div>
    )
}
