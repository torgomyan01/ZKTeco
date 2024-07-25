import React from "react";

import MainTemplate from "@components/layout/main-template/main-template";
import ProductsHeader from "@components/common/products/products-header/products-header";
import Connect from "@components/common/ultima-2/connect/connect";
import Products from "@components/common/ultima-2/products/Products";

function Page() {
  return (
    <MainTemplate>
      <ProductsHeader />
      <Products mt={0} />
      <Connect />
    </MainTemplate>
  );
}

export default Page;
