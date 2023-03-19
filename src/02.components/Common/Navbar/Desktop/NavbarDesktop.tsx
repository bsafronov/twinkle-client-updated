import clsx from "clsx";
import useNavbar from "../useNavbar";

const NavbarDesktop = () => {
  const { router, routes, handleRedirect } = useNavbar();

  return (
    <ul className="sticky left-0 top-20 flex min-w-max flex-col justify-center gap-2 bg-transparent px-0 dark:border-r-gray-700 dark:bg-transparent xl:min-w-[10rem]">
      {routes.map((Route, index) => (
        <li key={index}>
          <a
            onClick={() => handleRedirect(Route)}
            className="group relative flex cursor-pointer items-center gap-2 rounded-lg py-1 px-2 transition-colors hover:bg-slate-200 dark:hover:bg-gray-800"
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

export default NavbarDesktop;
