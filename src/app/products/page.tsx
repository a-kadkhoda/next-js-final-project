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
        <div className="w-[300px] h-full rounded-sm p-4">
          <ul className="space-y-2">
            <li>
              <div className="collapse bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  Categories
                </div>
                <div className="collapse-content">
                  <div className="flex gap-2 items-center">
                    <input type="checkbox" className="checkbox checkbox-xs" />
                    <label>Mobile</label>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="collapse bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">Price</div>
                <div className="collapse-content">
                  <input
                    type="range"
                    min={0}
                    max={100}
                    defaultValue="40"
                    className="range"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="collapse bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">Colors</div>
                <div className="collapse-content">
                  <div className="flex gap-2 items-center">
                    <input type="checkbox" className="checkbox checkbox-xs" />
                    <label>Mobile</label>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input type="checkbox" className="checkbox checkbox-xs" />
                    <label>Mobile</label>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
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
