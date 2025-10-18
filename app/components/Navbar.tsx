// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-amber-700 hover:text-amber-800">
          Brew Haven ☕
        </Link>

        <ul className="flex gap-6 text-sm">
          <li>
            <Link
              href="/"
              className={`hover:text-amber-700 ${
                pathname === "/" ? "text-amber-700" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className={`hover:text-amber-700 ${
                pathname.startsWith("/products") ? "text-amber-700" : ""
              }`}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/cart"
              className={`hover:text-amber-700 ${
                pathname === "/cart" ? "text-amber-700" : ""
              }`}
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className={`hover:text-amber-700 ${
                pathname === "/login" ? "text-amber-700" : ""
              }`}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
