import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/paga";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sport App",
  description:
    "Cohort 60m-fs crated this app to understand the concept of next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-full`}
      >
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">  
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
