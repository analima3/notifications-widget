import { ReactNode } from "react";

interface ModalBodyProps {
  children: ReactNode;
}
export function ModalBody({ children }: ModalBodyProps) {
  return (
    <div className="h-[calc(100%-105px)] overflow-y-auto overflow-x-hidden">
      {children}
    </div>
  );
}
