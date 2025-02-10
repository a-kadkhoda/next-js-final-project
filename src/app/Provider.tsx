"use client";

import { store } from "@/redux/store";
import { HeroUIProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <HeroUIProvider>{children}</HeroUIProvider>
      </Provider>
    </QueryClientProvider>
  );
}
