import Events from "@components/common/events/Events";
import MainTemplate from "@components/layout/main-template/main-template";
import type { NextPage } from "next";

const page: NextPage = () => {
  return (
    <MainTemplate>
      <Events />
    </MainTemplate>
  );
};
export default page;
