import { useQuery } from "@tanstack/react-query";

export const checkoutkeys = {
  all: ["checkout"],
  products : ["products"]
};



export const useProducts = () => {
  return useQuery({
    queryKey: checkoutkeys.products,
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`);
      if (!res.ok) throw new Error("Failed to fetch products");
      return res.json();
    },
  });
};