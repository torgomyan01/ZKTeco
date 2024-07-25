import Us905Series from "@components/common/us905-series/Us905Series";
import MainTemplate from "@components/layout/main-template/main-template";
import type { NextPage } from "next";

const page: NextPage = () => {
  return (
    <MainTemplate transparent>
      <Us905Series />
    </MainTemplate>
  );
};
export default page;
