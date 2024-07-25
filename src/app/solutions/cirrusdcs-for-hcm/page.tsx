import Products from "@components/common/ultima-2/products/Products";
import Connect from "@components/common/ultima-2/connect/connect";
import MainTemplate from "@components/layout/main-template/main-template";
import Integration from "@components/common/cirrusdcs/integration/integration";
import Step from "@components/common/cirrusdcs/step/step";

function Page() {
  return (
    <MainTemplate>
      <Integration />
      <Step />
      <Products mt={0} />
      <Connect />
    </MainTemplate>
  );
}

export default Page;
