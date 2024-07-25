import Event from "@components/common/event/Event";
import MainTemplate from "@components/layout/main-template/main-template";
import type { NextPage } from "next";

const page: NextPage = () => {
  return (
    <MainTemplate>
      <Event />
    </MainTemplate>
  );
};
export default page;
