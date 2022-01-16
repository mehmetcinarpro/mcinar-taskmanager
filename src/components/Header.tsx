import { MenuIcon, MoonIcon, SearchIcon, SunIcon } from "@heroicons/react/outline";

import useSidebarContext from "../hooks/useSidebarContext";
import useThemeContext from "../hooks/useTheme";
import Input from "./Input";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  const { theme, toggleTheme } = useThemeContext();
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
        {/* Search input */}
        <div className="flex flex-1 justify-center lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <SearchIcon className="w-4 h-4" aria-hidden="true" />
            </div>
            <Input type="text" className="pl-8 text-gray-700" placeholder="Search for projects" aria-label="Search" />
          </div>
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* <!-- Theme toggler --> */}
          <li className="flex">
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={toggleTheme}
              aria-label="Toggle color mode"
            >
              {theme === "dark" ? <SunIcon className="w-5 h-5" aria-hidden="true" /> : <MoonIcon className="w-5 h-5" aria-hidden="true" />}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
