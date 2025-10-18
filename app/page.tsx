import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen text-center text-white">
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">
          ☕ Welcome to Brew Haven ☕
        </h1>
        <Link
          href="/products"
          className="bg-amber-700 hover:bg-amber-800 transition text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md"
        >
          Browse Our Coffee
        </Link>
      </div>
    </main>
  );
}
