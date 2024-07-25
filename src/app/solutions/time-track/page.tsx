import MainTemplate from "@components/layout/main-template/main-template";
import React from "react";
import UltimaHeader from "@components/common/time-track/timeTrackHeader/timeTrackHeader";
import ProductsSection from "@components/common/ultima-2/products/Products";
import Connect from "@components/common/ultima-2/connect/connect";
import ServiceTimeTrack from "@components/common/time-track/services/time-track-services";

function Page() {
  return (
    <MainTemplate transparent>
      <UltimaHeader />
      <ServiceTimeTrack />
      <ProductsSection mt={0} />
      <Connect />
    </MainTemplate>
  );
}

export default Page;
