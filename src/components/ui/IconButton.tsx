import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

const button = cva("rounded-lg transition active:scale-95 cursor-pointer font-semibold", {
  variants: {
    variant: {
      primary: "bg-blue-600 hover:bg-blue-700 text-gray-200",
      secondary: "bg-indigo-400 hover:bg-indigo-500 text-gray-200",
      ghost: "hover:bg-gray-200 text-gray-600 dark:text-gray-200 dark:hover:bg-gray-900",
      outline:
        "border border-gray-600 text-gray-600 hover:bg-gray-200 dark:border-white dark:text-gray-200 dark:hover:bg-gray-800",
      muted: "bg-gray-200 hover:bg-gray-300 text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200",
    },
    size: {
      md: "text-base p-2",
      lg: "text-lg p-3",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {}

function IconButton({ className, variant, size, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant, size, className })} />;
}

export default IconButton;
