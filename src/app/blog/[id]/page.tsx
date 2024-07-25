import type { NextPage } from "next";

import MainTemplate from "@components/layout/main-template/main-template";
import BlogId from "@components/common/blog-id/BlogId";

const page: NextPage = () => {
  return (
    <MainTemplate>
      <BlogId />
    </MainTemplate>
  );
};
export default page;
