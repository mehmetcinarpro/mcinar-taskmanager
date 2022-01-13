import { useContext } from "react";

import { SidebarContext, SidebarState } from "../contexts/SidebarContext";

const useSidebarContext = (): SidebarState => {
  const sidebarState = useContext(SidebarContext);
  if (sidebarState === null) {
    throw new Error("Sidebar state not found. Try wrapping a parent component with <SidebarContext.Provider>.");
  }
  return sidebarState;
};

export default useSidebarContext;
