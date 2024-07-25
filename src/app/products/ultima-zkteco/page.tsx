import MainTemplate from "@components/layout/main-template/main-template";
import Products from "@components/common/ultima-2/products/Products";
import Connect from "@components/common/ultima-2/connect/connect";
import HeaderHome from "@components/common/ultima-2/header/header";
import Services from "@components/common/ultima-2/services/services";

function Page() {
  return (
    <MainTemplate>
      <HeaderHome />
      <Services />
      <Products mt={0} />
      <Connect />
    </MainTemplate>
  );
}

export default Page;
