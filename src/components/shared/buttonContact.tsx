// components/ButtonContact.tsx
"use client";

import { FaWhatsapp } from "react-icons/fa";

export function ButtonContact() {
    const phoneNumber = 6281389599499
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-md transition-all duration-300"
            aria-label="Hubungi via WhatsApp"
        >
            <FaWhatsapp className="w-8 h-8" />
        </a>
    );
}
