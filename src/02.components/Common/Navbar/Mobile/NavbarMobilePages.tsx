import clsx from "clsx";
import useNavbar from "../useNavbar";

const NavbarMobilePages = () => {
  const { handleRedirect, router, routes } = useNavbar();

  return (
    <ul className="flex gap-4 border-r border-r-slate-300 pr-4 dark:border-r-gray-700">
      {routes.map((Route, index) => (
        <li key={index}>
          <a
            onClick={() => handleRedirect(Route)}
            className="group relative flex cursor-pointer items-center gap-2 rounded-lg transition-colors"
          >
            <Route.logo
              size={20}
              className={clsx("icon", {
                "text-blue-500 group-hover:text-blue-600 dark:text-blue-500 dark:group-hover:text-blue-600":
                  router.asPath === Route.asPath,
                "group-hover:text-slate-400": router.asPath !== Route.asPath,
              })}
            />
            <span className="hidden xl:block">{Route.desc}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarMobilePages;
