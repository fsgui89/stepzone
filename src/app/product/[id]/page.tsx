import ProductDetails from "./ProductDetails";
import { products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({
    id: String(product.id),
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <ProductDetails productId={Number(id)} />;
}
