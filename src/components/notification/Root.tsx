import { ComponentProps, ReactNode } from "react";

interface RootProps extends ComponentProps<"div"> {
  children: ReactNode;
}

export function Root({ children, className, ...rest }: RootProps) {
  return (
    <div
      className={`p-6 w-full flex flex-row gap-4 select-none border-b-[1px] border-color last:border-b-0 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
