import { ComponentProps, ReactNode } from "react";

interface NotificationContainerProps extends ComponentProps<"div"> {
  children: ReactNode;
}

export function NotificationContainer({
  children,
  className,
  ...rest
}: NotificationContainerProps) {
  return (
    <div
      className={`p-6 w-full flex flex-row gap-4 select-none border-b-[1px] border-color last:border-b-0 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
