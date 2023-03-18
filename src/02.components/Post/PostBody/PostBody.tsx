import PostBodyImages from "./PostBodyImages/PostBodyImages";
import PostBodyMusic from "./PostBodyMusic";
import PostBodyText from "./PostBodyText";

const PostBody = () => {
  return (
    <div className="flex flex-col gap-4">
      <PostBodyText />
      <PostBodyImages />
      {/* <PostBodyMusic /> */}
    </div>
  );
};

export default PostBody;
