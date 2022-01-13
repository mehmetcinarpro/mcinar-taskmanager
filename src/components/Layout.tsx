import { PropsWithChildren } from "react";

import Sidebar from "./sidebar/Sidebar";

type Props = {};

const Layout = ({ children }: PropsWithChildren<Props>) => (
  <div className={`flex h-screen bg-gray-50 dark:bg-gray-900 `}>
      <Sidebar />
    <div className="flex flex-col flex-1 min-w-0 w-full">
      {/* Header */}
      <main>{children}</main>
    </div>
  </div>
);

export default Layout;
