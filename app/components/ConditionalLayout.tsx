"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ConditionalLayout({
  children,
  hiddenRoutes,
}: {
  children: React.ReactNode;
  hiddenRoutes: string[];
}) {
  const pathname = usePathname();
  const isHidden = hiddenRoutes.includes(pathname);

  return (
    <>
      {!isHidden && <Navbar />}
      <main>{children}</main>
      {!isHidden && <Footer />}
    </>
  );
}
