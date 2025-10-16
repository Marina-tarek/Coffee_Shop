async function getProduct(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductDetails({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <img src={product.image || "/coffee.jpg"} alt={product.name} className="w-full h-80 object-cover rounded-lg mb-6" />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-xl font-semibold text-amber-700">{product.price} EGP</p>
    </div>
  );
}
