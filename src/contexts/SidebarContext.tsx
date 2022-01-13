import { createContext, PropsWithChildren, useMemo, useState } from "react";

export type SidebarState = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
};

export const SidebarContext = createContext<SidebarState | null>(null);

export const SidebarProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  function close() {
    setIsOpen(false);
  }

  const value = useMemo(
    () => ({
      isOpen,
      toggle,
      close,
    }),
    [isOpen]
  );

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};
