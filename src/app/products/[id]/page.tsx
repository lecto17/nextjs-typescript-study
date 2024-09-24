import ProductDetail from "@/components/templates/ProductDetail";
import getAllProducts from "@/services/products/get-all-products";
import getProduct from "@/services/products/get-product";
// import useProduct from "@/services/products/use-product";
import { ApiContext, Product } from "@/types";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface ProductDetailPageProps {
  params: {
    id: number;
  };
}

// const context: ApiContext = {
//   apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || "/api/proxy",
// };

const context: ApiContext = {
  apiRootUrl: process.env.API_BASE_URL || "http://localhost:5000",
};

export async function generateStaticParams() {
  const products = await getAllProducts(context);

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

const ProductDetailPage = async ({
  params: { id },
}: ProductDetailPageProps) => {
  const initialProduct: Product | null = await getProduct(context, { id });

  if (!initialProduct) {
    notFound(); // 페이지가 존재하지 않으면 404 에러 처리
  }

  return (
    <Suspense fallback={<>Loading...</>}>
      <ProductDetail initialProduct={initialProduct} />
    </Suspense>
  );
};

export default ProductDetailPage;

export const revalidate = 10;
