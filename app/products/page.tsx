import Link from "next/link";

async function getProducts() {
const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,{
cache: "no-store",
});

if (!res.ok) {
  const text = await res.text();
  throw new Error(`Failed to fetch products: ${text}`);
}

const data = await res.json();
return data;
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
        <main className="relative flex flex-col items-center justify-center min-h-screen text-center text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/coffee_bean.png')" }}
          >
    
          </div>
    
          <div className="absolute inset-0 bg-black/80">
              <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((p: any) => (
        <Link key={p._id} href={`/products/${p._id}`} className="border p-4 rounded-lg shadow hover:shadow-lg">
          <img src={p.image || "/coffee.jpg"} alt={p.name} className="w-full h-48 object-cover rounded mb-4" />
          <h2 className="text-lg font-semibold">{p.name}</h2>
          <p className="text-amber-700">{p.price} EGP</p>
        </Link>
      ))}
    </div>
          </div>

        </main>

  );
}
