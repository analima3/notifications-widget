import { ReactNode } from "react";

interface BodyProps {
  children: ReactNode;
}
export function Body({ children }: BodyProps) {
  return (
    <div className="h-[calc(100%-105px)] overflow-y-auto overflow-x-hidden">
      {children}
    </div>
  );
}
