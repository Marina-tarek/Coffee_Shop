import Link from "next/link";
import Image from "next/image";
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
<section className="text-center py-18">
                <div className="container mx-auto">
<div>
  <h2 className="text-3xl text-amber-700">All product in our resturant</h2>
</div>
<div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p: any) => (
        <Link key={p._id} href={`/products/${p._id}`} className="border p-4 rounded-lg shadow hover:shadow-lg">
         <div className="relative w-full h-48">
          <Image src={p.image} alt={p.name} className=" object-cover rounded mb-4" fill />

         </div>
          <h3 className="text-lg font-semibold">{p.name}</h3>
          <p className="text-amber-700">{p.price} EGP</p>
        </Link>
      ))}
</div>
    </div>
</section>

  );
}
