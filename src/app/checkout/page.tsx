"use client";
import { ProductInfo } from "@/helper/products/types";

import { useProducts } from "@/queries/checkout";
import { setToCart } from "@/redux/slicers/useSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

const Checkout = () => {
  const cart = useSelector((state: RootState) => state.userSlice.cart);

  const { data: products } = useProducts();

  const dispatch = useDispatch();

  const data = products?.data.filter((product: ProductInfo) =>
    cart.some((item: number) => item === product.id)
  );

  const PriceItem: Array<number> = data?.map((item: ProductInfo) =>
    Number(item.price)
  );

  return (
    <>
      <div className="px-8 pt-8 h-[calc(100%-56px)] ">
        <div className="flex flex-col h-full justify-between gap-12">
          <ul className="flex flex-col gap-4 h-[calc(100vh-250px)] overflow-y-auto" >
            {data && data.length > 0 ? (
              data?.map((item: ProductInfo) => {
                return (
                  <li key={item.id} className="flex gap-4 w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="aspect-square w-[200px]"
                    />
                    <div className="flex flex-col items-center justify-around w-full">
                      <span>{item.title}</span>
                      <span>price : ${item.price}</span>
                      <button
                        onClick={() => dispatch(setToCart(item.id))}
                        className="btn btn-active btn-error w-2/5"
                      >
                        Remove From Cart
                      </button>
                    </div>
                  </li>
                );
              })
            ) : (
              <li>No Item</li>
            )}
          </ul>
          <div className="flex justify-around bg-cyan-900 p-8 w-full h-full rounded-tr-lg rounded-tl-lg">
            <span className="flex justify-center items-center text-2xl">
              Total price : $
              {PriceItem && PriceItem.length > 0 ? PriceItem?.reduce((prev: number, current: number) => {
                return prev + current;
              }) : "0"
            }
            </span>
            <button className="btn btn-success w-60 text-lg">Check out</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
