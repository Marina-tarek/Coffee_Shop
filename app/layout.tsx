import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "./components/ConditionalLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brew Haven ☕",
  description: "Discover and enjoy our finest coffee blends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hiddenRoutes = ["/login", "/register"];

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
       <div className="relative min-h-screen text-white">
       <div
         className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/coffee_bean.png')" }}
       ></div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10"><ConditionalLayout hiddenRoutes={hiddenRoutes}>{children}</ConditionalLayout></div>
      </div>
        
      </body>
    </html>
  );
}

