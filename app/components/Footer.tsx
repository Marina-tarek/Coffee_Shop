// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black/80 text-gray-300 text-center py-6 mt-12 backdrop-blur-md">
      <p className="text-sm">
        © {new Date().getFullYear()} Coffeesta ☕ — All rights reserved.
      </p>
    </footer>
  );
}
