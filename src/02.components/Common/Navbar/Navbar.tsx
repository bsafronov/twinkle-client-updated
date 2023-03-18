import { useRouter } from "next/router";
import { NavbarItemProps, useNavbarRoutes } from "./NavbarItems";
import { clsx } from "clsx";
import { HiBell } from "react-icons/hi";
import { IoSettings } from "react-icons/io5";
import ShortPlayer from "../Player/ShortPlayer";
import { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";

const Navbar = () => {
  const routes = useNavbarRoutes();
  const router = useRouter();

  function handleRedirect(route: NavbarItemProps) {
    if (router.asPath === route.asPath) {
      return handleScrollToTop();
    }

    router.push({ pathname: route.pathname, query: route.query });
  }

  function handleScrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="fixed bottom-4 left-1/2 z-[1000] -translate-x-1/2 overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-gray-700 dark:bg-gray-800 lg:sticky lg:left-0 lg:top-20 lg:min-w-max lg:translate-x-0 lg:flex-col lg:gap-2 lg:border-none lg:bg-transparent lg:px-0 dark:lg:bg-transparent">
      <ShortPlayer className="z-[1000] w-full border-b border-b-slate-200 px-4 py-2 dark:border-b-gray-700 lg:hidden" />
      <ul className="flex justify-center gap-4 py-2 px-4 lg:py-0 lg:px-0">
        <li>
          <ul className="flex gap-4 border-r border-r-slate-300 pr-4 dark:border-r-gray-700 lg:flex-col lg:gap-2 lg:border-none lg:pr-0 xl:min-w-[10rem]">
            {routes.map((Route, index) => (
              <li key={index}>
                <a
                  onClick={() => handleRedirect(Route)}
                  className="group relative flex cursor-pointer items-center gap-2 rounded-lg transition-colors lg:py-1 lg:px-2 lg:hover:bg-slate-200 lg:dark:hover:bg-gray-800"
                >
                  <Route.logo
                    size={20}
                    className={clsx("icon", {
                      "text-blue-500 group-hover:text-blue-600 dark:text-blue-500 dark:group-hover:text-blue-600":
                        router.asPath === Route.asPath,
                      "group-hover:text-slate-400":
                        router.asPath !== Route.asPath,
                    })}
                  />
                  <span className="hidden xl:block">{Route.desc}</span>
                </a>
              </li>
            ))}
          </ul>
        </li>
        <li className="flex items-center lg:hidden">
          <HiBell size={20} className="icon" />
        </li>
        <li className="flex items-center lg:hidden">
          <IoSettings size={18} className="icon" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
