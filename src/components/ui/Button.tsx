import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "solid" | "outline";
  children?: ReactNode;
}

export function Button({ variant = "solid", children, ...rest }: ButtonProps) {
  const variantColor =
    variant === "solid"
      ? "text-zinc-900 border-green-500 bg-green-500"
      : "bg-transparent border-zinc-400 dark:border-zinc-700";

  return (
    <button
      {...rest}
      className={`py-1 px-5  border-2 text-color-primary capitalize font-semibold rounded-md ${variantColor} ${rest.className}`}
    >
      {children}
    </button>
  );
}
