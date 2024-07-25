import Job from "@components/common/job/Job";
import MainTemplate from "@components/layout/main-template/main-template";
import type { NextPage } from "next";

const page: NextPage = () => {
  return (
    <MainTemplate menuColor="black" transparent>
      <Job />
    </MainTemplate>
  );
};
export default page;
