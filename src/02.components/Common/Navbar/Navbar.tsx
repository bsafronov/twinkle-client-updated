import { useRouter } from "next/router";
import { NavbarItemProps, useNavbarRoutes } from "./NavbarItems";
import { clsx } from "clsx";
import { HiBell } from "react-icons/hi";
import { IoSettings } from "react-icons/io5";
import ShortPlayer from "../Player/ShortPlayer";
import useDeviceSize from "@/01.shared/hooks/useDeviceSize";
import NavbarDesktop from "./Desktop/NavbarDesktop";
import NavbarMobile from "./Mobile/NavbarMobile";

const Navbar = () => {
  const { width } = useDeviceSize();

  return <>{width >= 768 ? <NavbarDesktop /> : <NavbarMobile />}</>;
};

export default Navbar;
