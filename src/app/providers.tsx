"use client";

import { ContextProvider } from "@/context/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ContextProvider>{children}</ContextProvider>;
}
