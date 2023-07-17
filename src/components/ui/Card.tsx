import { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex flex-col gap-3 rounded-md bg-zinc-200/80 dark:bg-zinc-800/80 p-4 text-xs">
      {children}
    </div>
  );
}
