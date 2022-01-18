import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  className?: string;
  variant?: string;
  size?: string;
  pill?: boolean;
  disabled?: boolean;
}

type Ref = ReactNode | HTMLElement | string;
//TODO ref
const Button = forwardRef<Ref, ButtonProps>(
  ({ children, type = "button", className, variant = "primary", size = "normal", pill, disabled = false, ...props }, ref) => {
    console.log({className})
    return (
      <button disabled={disabled} type={type} className={className} {...props}>
        {children}
      </button>
    );
  }
);

export default Button;
