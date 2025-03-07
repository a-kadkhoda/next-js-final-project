import { ProductInfo } from "@/helper/products/types";
import Card from "@/page-components/products/card/Card";

const ProductsPage = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    return <div className="text-red-500">Failed to load products</div>;
  }
  const data = await res.json();

  return (
    <div className="p-8 h-[calc(100vh-56px)]">
      <div className="flex gap-4">
        <div className="flex gap-4">
          {data?.data.map((item: ProductInfo) => {
            return <Card key={item.id} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
