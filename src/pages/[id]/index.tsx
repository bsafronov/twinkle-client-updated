import MainLayout from "@/02.components/Common/Layouts/MainLayout";
import HomeHeader from "@/02.components/Home/HomeHeader/HomeHeader";
import HomeInfo from "@/02.components/Home/HomeInfo/HomeInfo";
import PostList from "@/02.components/Post/PostList";
import PostForm from "@/02.components/PostForm/PostForm";
import { NextPage } from "next";

const UserPage: NextPage = () => {
  return (
    <MainLayout>
      <HomeHeader className="col-span-12 xl:col-span-8" />
      <HomeInfo className="h-max col-span-12 md:col-span-4 row-span-2 xl:row-auto" />
      <PostForm className="h-max md:row-start-2 col-span-12 md:col-span-8" />
      <PostList className="h-max md:row-start-3 col-span-12 md:col-span-8 row-span-3" />
    </MainLayout>
  );
};

export default UserPage;
