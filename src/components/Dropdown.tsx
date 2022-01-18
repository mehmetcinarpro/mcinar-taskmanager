import clsx from "clsx";
import { forwardRef, HTMLAttributes, useRef } from "react";

import Transition from "./Transition";

export interface DropdownProps extends HTMLAttributes<HTMLUListElement> {
  onClose: () => void;
  isOpen: boolean;
  align?: "left" | "right";
}

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
  const { children, onClose, isOpen, className, align = "left", ...other } = props;

  const baseStyle =
    "absolute w-56 p-2 mt-2 text-gray-600 bg-white border border-gray-100 rounded-lg shadow-md min-w-max-content dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700";
  const alignStyle = align === "left" ? "left-0" : "right-0";

  //   function handleEsc(e: KeyboardEvent) {
  //     if (e.key === "Esc" || e.key === "Escape") {
  //       onClose();
  //     }
  //   }

  const dropdownRef = useRef<HTMLUListElement>(null);
  //   function handleClickOutside(e: MouseEvent) {
  //     if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
  //       onClose();
  //     }
  //   }

  //   useEffect(() => {
  //     document.addEventListener("click", handleClickOutside, { capture: true });
  //     document.addEventListener("keydown", handleEsc, { capture: true });
  //     return () => {
  //       document.removeEventListener("click", handleClickOutside);
  //       document.removeEventListener("keydown", handleEsc);
  //     };
  //   }, [isOpen]);

  return (
    <Transition show={isOpen} leave="transition ease-out duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
      <div ref={ref}>
        {/* <FocusLock returnFocus> */}
        <ul className={clsx(baseStyle, alignStyle, className)} ref={dropdownRef} aria-label="submenu" {...other}>
          {children}
        </ul>
        {/* </FocusLock> */}
      </div>
    </Transition>
  );
});

export default Dropdown;
