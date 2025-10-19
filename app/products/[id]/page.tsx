import Image from "next/image";

async function getProduct(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; 
  const product = await getProduct(id);

  return (
<section className="py-18">

      <div className="relative z-10 p-8 max-w-2xl mx-auto text-center">
 <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg mb-6">
         <Image
          src={product.image || "/coffee.jpg"}
          alt={product.name}
          className=" object-cover   "
          fill
        />
 </div>
        <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-200 mb-4">{product.description}</p>
        <p className="text-2xl font-semibold text-amber-500">{product.price} EGP</p>
      </div>

</section>
  );
}
