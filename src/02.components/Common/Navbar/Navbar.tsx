import { useRouter } from "next/router";
import { NavbarItemProps, useNavbarRoutes } from "./NavbarItems";
import { clsx } from "clsx";
import { HiBell } from "react-icons/hi";
import { IoSettings } from "react-icons/io5";
import ShortPlayer from "../Player/ShortPlayer";
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
    <ul className="flex w-full bg-white lg:bg-transparent lg:w-auto py-2 lg:flex-col gap-4 lg:gap-2 left-0 bottom-0 border-t border-slate-200 lg:border-t-0 fixed lg:sticky lg:top-20 justify-center z-[1000]">
      <li>
        <ul className="flex lg:flex-col xl:min-w-[10rem] gap-4 lg:gap-2 pr-4 lg:pr-0 border-r border-r-slate-300 lg:border-none">
          {routes.map((Route, index) => (
            <li key={index}>
              <a
                onClick={() => handleRedirect(Route)}
                className="group flex gap-2 items-center lg:py-1 lg:px-2 rounded-lg cursor-pointer hover:bg-slate-200 group transition-colors"
              >
                <Route.logo
                  size={20}
                  className={clsx("icon ", {
                    "text-blue-500 group-hover:text-blue-600":
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
      <ShortPlayer className="lg:hidden fixed z-[1000] bottom-[2.6rem] py-2 justify-center bg-white w-full left-0 border-t border-t-slate-200" />
    </ul>
  );
};

export default Navbar;
