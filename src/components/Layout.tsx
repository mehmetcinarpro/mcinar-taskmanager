import { PropsWithChildren } from "react";

import useSidebarContext from "../hooks/useSidebarContext";
import Header from "./Header";
import Sidebar from "./sidebar/Sidebar";

type Props = {};

const Layout = ({ children }: PropsWithChildren<Props>) => {
  const { isOpen } = useSidebarContext();

  return (
    <div className={`flex h-screen bg-gray-50 dark:bg-gray-900  ${isOpen && "overflow-hidden"}`}>
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0 w-full">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
