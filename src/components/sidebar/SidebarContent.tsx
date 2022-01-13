import Link from "next/link";
import { useRouter } from "next/router";

import items from "../../data/sidebar";

const SidebarContent = () => {
  const router = useRouter();
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <a className="ml-6 text-lg uppercase font-bold text-gray-800 dark:text-gray-200" href="#">
        Mcinar
      </a>
      <ul className="mt-6">
        {items
          .filter((i) => i.active)
          .map(
            (item) => (
              <li className="relative px-6 py-3" key={item.name}>
                <Link href={item.url}>
                  <a
                    className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${
                      router.asPath === item.url ? "text-gray-800 dark:text-gray-100" : ""
                    }`}
                  >
                    {router.asPath === item.url && <span className="absolute inset-y-2 left-0 w-1 bg-purple-600" aria-hidden="true"></span>}
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                    <span className="ml-4">{item.name}</span>
                  </a>
                </Link>
              </li>
            )
          )}
      </ul>
      <div className="px-6 my-6">
        <button
          className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple"
          type="button"
        >
          Create account
          <span className="ml-2" aria-hidden="true">
            +
          </span>
        </button>
      </div>
    </div>
  );
};

export default SidebarContent;
