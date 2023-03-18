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
      <HomeInfo className="col-span-12 row-span-2 h-max xl:col-span-4 xl:row-auto" />
      <PostForm className="col-span-12 h-max xl:col-span-8 xl:row-start-2" />
      <PostList className="col-span-12 row-span-3 h-max xl:col-span-8 xl:row-start-3" />
    </MainLayout>
  );
};

export default UserPage;
