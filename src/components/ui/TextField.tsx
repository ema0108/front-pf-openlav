import { cva, type VariantProps } from "class-variance-authority";
import type { InputHTMLAttributes } from "react";
import Label from "./Label";
import type React from "react";

const textfield = cva("rounded-lg outline-none px-4 py-3", {
  variants: {
    variant: {
      default: "bg-gray-100 dark:bg-gray-800 dark:text-gray-50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof textfield> {
  label?: string;
  icon?: React.ElementType;
}

function TextField({ className, variant, label, icon, ...props }: TextFieldProps) {
  return (
    <Label htmlFor={props.id} className="grid gap-2" label={label} icon={icon}>
      <input {...props} className={textfield({ variant, className })} />
    </Label>
  );
}

export default TextField;
