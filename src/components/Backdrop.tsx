import { forwardRef, HTMLAttributes } from "react";

interface BackdropProps extends HTMLAttributes<HTMLDivElement> {}

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>((props, ref) => {
  const { className, ...other } = props;
  
  return (
    <div
      className={`fixed inset-0 z-40 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center ${className}`}
      ref={ref}
      {...other} />
  );
});

export default Backdrop;
