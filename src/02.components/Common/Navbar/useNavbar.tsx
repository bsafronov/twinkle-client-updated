import { useRouter } from "next/router";
import React from "react";
import { NavbarItemProps, useNavbarRoutes } from "./NavbarItems";

const useNavbar = () => {
  const routes = useNavbarRoutes();
  const router = useRouter();

  function handleRedirect(route: NavbarItemProps) {
    if (router.asPath === route.asPath) {
      return handleScrollToTop();
    }

    router.push({ pathname: route.pathname, query: route.query });
  }

  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return {
    routes,
    router,
    handleRedirect,
  };
};

export default useNavbar;
