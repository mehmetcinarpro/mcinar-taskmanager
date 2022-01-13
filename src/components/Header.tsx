import { MenuIcon } from "@heroicons/react/outline";

import useSidebarContext from "../hooks/useSidebarContext";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  const { toggle } = useSidebarContext();

  return (
    <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        {/* Mobile hamburger menu */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={toggle}
          aria-label="Menu"
        >
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
};

export default Header;
