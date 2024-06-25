"use client";

import { Provider } from "react-redux";
import { setupStore } from "@/store/store";

export default function StoreProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const store = setupStore();
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
}
