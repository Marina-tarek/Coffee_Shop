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
<section >
      <div className="relative min-h-screen text-white py-18">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/coffee_bean.png')" }}
      ></div>
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 p-8 max-w-2xl mx-auto text-center">
        <img
          src={product.image || "/coffee.jpg"}
          alt={product.name}
          className="w-full h-80 object-cover rounded-lg mb-6 shadow-lg"
        />
        <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-200 mb-4">{product.description}</p>
        <p className="text-2xl font-semibold text-amber-500">{product.price} EGP</p>
      </div>
    </div>
</section>
  );
}
