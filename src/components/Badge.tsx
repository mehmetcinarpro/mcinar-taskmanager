import clsx from "clsx";
import { forwardRef } from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: "success" | "danger" | "warning" | "neutral" | "primary";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const { className, children, type = "primary", ...other } = props;

  const baseStyle = "inline-flex px-2 text-xs font-medium leading-5 rounded-full";
  const typeStyle = {
    success: "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100",
    danger: "text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-700",
    warning: "text-orange-700 bg-orange-100 dark:text-white dark:bg-orange-600",
    neutral: "text-gray-700 bg-gray-100 dark:text-gray-100 dark:bg-gray-700",
    primary: "text-purple-700 bg-purple-100 dark:text-white dark:bg-purple-600",
  };

  return (
    <span className={clsx(baseStyle, typeStyle[type], className)} ref={ref} {...other}>
      {children}
    </span>
  );
});

export default Badge;
