import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../cart-context";
import Header from "../Header";
import Footer from "../Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vinyl Vault - Premium Vinyl Records",
  description: "Discover rare and classic vinyl records from around the world. Curated collection for true music enthusiasts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-50 min-h-screen`}
      >
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
