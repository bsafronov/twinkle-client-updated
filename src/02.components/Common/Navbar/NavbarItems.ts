import { useAppSelector } from "@/01.shared/hooks/useRedux";
import {
  HiUserCircle,
  HiNewspaper,
  HiChatAlt,
  HiUsers,
  HiUserGroup,
  HiPhotograph,
  HiMusicNote,
} from "react-icons/hi";

export interface NavbarItemProps {
  logo: any;
  desc: string;
  pathname: string;
  query: {};
  asPath: string;
}

export function useNavbarRoutes() {
  const { profile } = useAppSelector((state) => state.user);
  const routes: NavbarItemProps[] = [
    {
      logo: HiUserCircle,
      desc: "Моя страница",
      pathname: "/[id]",
      query: { id: profile.username },
      asPath: `/${profile.username}`,
    },
    {
      logo: HiNewspaper,
      desc: "Новости",
      pathname: "/news",
      query: {},
      asPath: `/news`,
    },
    {
      logo: HiChatAlt,
      desc: "Мессенджер",
      pathname: "/messages",
      query: {},
      asPath: `/messages`,
    },
    {
      logo: HiUsers,
      desc: "Подписки",
      pathname: "/[id]/subs",
      query: { id: profile.username },
      asPath: `/${profile.username}/subs`,
    },
    {
      logo: HiUserGroup,
      desc: "Сообщества",
      pathname: "/[id]/groups",
      query: { id: profile.username },
      asPath: `/${profile.username}/groups`,
    },
    {
      logo: HiPhotograph,
      desc: "Фотографии",
      pathname: "/[id]/gallery",
      query: { id: profile.username },
      asPath: `/${profile.username}/gallery`,
    },
    {
      logo: HiMusicNote,
      desc: "Музыка",
      pathname: "/[id]/music",
      query: { id: profile.username },
      asPath: `/${profile.username}/music`,
    },
  ];

  return routes;
}
