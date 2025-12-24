import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AOSProvider } from "@/components/aos-provider";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mibi-Tech | Mengolah Sampah Organik Menjadi Energi Terbarukan",
  description: "MiBi-Tech adalah inovasi yang berfokus pada pemanfaatan sampah organik menjadi energi terbarukan dan produk bernilai guna. Mengolah limbah pasar menjadi bioetanol dan biobriket.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} font-sans antialiased`}
      >
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
