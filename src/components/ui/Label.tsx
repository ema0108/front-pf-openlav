import type { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  label?: string;
  icon?: React.ElementType;
}

function Label({ label, children, icon: Icon, ...props }: LabelProps) {
  return (
    <label {...props}>
      <span className="flex gap-2 items-center font-semibold px-4 text-gray-800 dark:text-gray-400">
        {Icon && <Icon />}
        {label}
      </span>
      {children}
    </label>
  );
}

export default Label;
