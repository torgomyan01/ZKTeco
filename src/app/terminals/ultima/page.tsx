import MainTemplate from "@components/layout/main-template/main-template";
import UltimaHeader from "@components/common/ultima/ultima-header/ultima-header-header";
import UltimaServices from "@components/common/ultima/services/ultima-services";
import ConfigurableOptions from "@components/common/ultima/configurable-options/configurable-options";
import Products from "@components/common/ultima-2/products/Products";
import Connect from "@components/common/ultima-2/connect/connect";
import Investment from "@components/common/ultima/Investment/Investment";

function Page() {
  return (
    <MainTemplate transparent>
      <UltimaHeader />
      <UltimaServices />
      <ConfigurableOptions />
      <Investment />
      <Products mt={0} />
      <Connect />
    </MainTemplate>
  );
}

export default Page;
