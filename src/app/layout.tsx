import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { ButtonContact } from "@/components/shared/buttonContact";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta-sans",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.highfivemanagement.com"), // Ganti jika belum final
  title: {
    default: "HighFive Management | Solusi Wisata & Event Terbaik",
    template: "%s | HighFive Management",
  },
  description:
    "HighFive Management adalah perusahaan profesional di bidang wisata dan event organizer yang menyediakan layanan tour dalam dan luar negeri, wisata minat khusus, gathering perusahaan, haji & umrah, outbound, serta transportasi wisata.",
  keywords: [
    "event organizer",
    "wisata minat khusus",
    "tour dalam negeri",
    "tour luar negeri",
    "gathering perusahaan",
    "haji dan umrah",
    "outbound",
    "EO profesional",
    "transportasi wisata",
    "HighFive Management",
  ],
  authors: [
    {
      name: "HighFive Management",
      url: "https://www.highfivemanagement.com/tentang-kami",
    },
  ],
  creator: "HighFive Management",
  publisher: "HighFive Management",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.highfivemanagement.com",
    title: "HighFive Management | Solusi Wisata & Event Terbaik",
    description:
      "Dapatkan pengalaman terbaik bersama HighFive Management, agensi wisata dan event organizer terpercaya untuk tour, gathering, outbound, dan layanan transportasi wisata.",
    siteName: "HighFive Management",
    images: [
      {
        url: "https://www.highfivemanagement.com/images/og-image.jpg", // Ganti dengan gambar asli
        width: 1200,
        height: 630,
        alt: "HighFive Management Event & Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HighFive Management | Solusi Wisata & Event Terbaik",
    description:
      "Tour & Event Organizer terpercaya untuk wisata domestik, mancanegara, gathering, outbound, transportasi, dan banyak lagi.",
    images: ["https://www.highfivemanagement.com/images/og-image.jpg"],
    creator: "@highfiveID", // Ganti jika punya akun Twitter
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${jakartaSans.variable} antialiased`} suppressHydrationWarning
      >
        <Header />
        {children}
        <Footer />
        <ButtonContact />
      </body>
    </html>
  );
}
