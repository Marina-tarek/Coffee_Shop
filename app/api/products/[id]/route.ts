import { NextResponse } from "next/server";
import Product from "@/models/Product";
import {connectDB}from "@/lib/mongodb";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  await connectDB();
  const product = await Product.findById(id);

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // ← هنا التعديل المهم
  const body = await req.json();

  await connectDB();
  const updated = await Product.findByIdAndUpdate(id, body, { new: true });

  if (!updated) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(updated);
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  await connectDB();
  const deleted = await Product.findByIdAndDelete(id);

  if (!deleted) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Deleted successfully" });
}
