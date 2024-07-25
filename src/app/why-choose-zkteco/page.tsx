import React from "react";
import MainTemplate from "@components/layout/main-template/main-template";
import WhyChooseZktecoHeader from "@components/common/why-choose-zkteco/why-choose-zkteco-header/why-choose-zkteco-header";
import WhyChooseZktecoSteps from "@components/common/why-choose-zkteco/why-choose-zkteco-steps/why-choose-zkteco-steps";
import Products from "@components/common/ultima-2/products/Products";
import WhyChooseZktecoConnect from "@components/common/why-choose-zkteco/why-choose-zkteco-connect/why-choose-zkteco-connect";

function Page() {
  return (
    <MainTemplate>
      <WhyChooseZktecoHeader />
      <WhyChooseZktecoSteps />
      <Products mt={0} />
      <WhyChooseZktecoConnect />
    </MainTemplate>
  );
}

export default Page;
