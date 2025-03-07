import { ProductInfo } from "@/helper/products/types";
import AddToCart from "@/page-components/products/addToCart/AddToCart";

import { Metadata } from "next";

interface SingleProductProps {
  params: Promise<{ id: string }>;
}
export async function generateMetadata({
  params,
}: SingleProductProps): Promise<Metadata> {
  const id = (await params).id;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/${id}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  const info: ProductInfo = data.data[0];

  return {
    title: info.category || "Product Not Found",
  };
}

const SingleProduct = async ({ params }: SingleProductProps) => {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/${id}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  const info: ProductInfo = data.data[0];

  return (
    <>
      <div className="p-28 h-[calc(100%-56px)]">
        <div className="flex w-full h-full gap-8">
          <div className="w-1/2">
            <img
              className="rounded-2xl shadow h-[400px]"
              src={info.image}
              alt={info.title}
            />
          </div>
          <div className="w-1/2 flex flex-col gap-8 justify-around ">
            <span className="text-4xl">Title : {info.title}</span>
            <div className="flex flex-col gap-4">
              <span className="text-3xl">Info :</span>
              <p className="indent-8 text-justify">{info.description}</p>
            </div>

            <div className="text-5xl ">
              <span>Price : </span>
              <span>${info.price}</span>
            </div>
            <AddToCart id={Number(id)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
