import { ReactNode } from "react";

interface RootProps {
  children: ReactNode;
}

export function Root({ children }: RootProps) {
  return (
    <>
      <div className="min-w-min h-screen lg:h-full bg-color-secondary lg:rounded-md shadow-md shadow-zinc-800">
        {children}
      </div>
    </>
  );
}
