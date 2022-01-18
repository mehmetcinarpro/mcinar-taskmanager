import { forwardRef } from "react";

import Button, { ButtonProps } from "./Button";

type Ref = typeof Button;
const DropdownItem = forwardRef<Ref, ButtonProps>((props, ref) => {
  // Note: className is passed to the inner Button
  const { children, ...other } = props;

  return (
    <li className="mb-2 last:mb-0">
      <Button
        {...other}
        className="inline-flex items-center cursor-pointer w-full px-2 py-1 text-sm font-medium transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
        ref={ref}
      >
        {children}
      </Button>
    </li>
  );
});

export default DropdownItem;
