import { ReactNode } from "react";

interface ModalContainerProps {
  children: ReactNode;
  isOpen: boolean;
}

export function ModalContainer({ children, isOpen }: ModalContainerProps) {
  const customClassName = isOpen
    ? "tranzinc-y-0 opacity-100"
    : "-tranzinc-y-full opacity-0";

  return (
    <>
      <div
        className={`h-5/4 sm:max-w-lg w-full overflow-hidden absolute sm:right-4 top-24 bottom-0 sm:bottom-4 z-10 bg-color-secondary sm:rounded-md shadow-md shadow-zinc-800 transition-all delay-200 ${customClassName}`}
      >
        {children}
      </div>
      <div className={`h-full w-full ${customClassName}`} />
    </>
  );
}
