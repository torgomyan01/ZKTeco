import "./Products.scss";
import { RandomKey } from "@utils/helpers";
import Image from "next/image";

const ProductsItems = [
  {
    title: "Terminals",
    dc: "Choose from a variety of versatile data collection devices.",
    image: ["keyboard-open.svg"],
  },
  {
    title: "TimeTrack + Android SDK",
    dc: "Choose from a variety of versatile data collection devices.",
    image: ["keyboard-open.svg", "androind.svg"],
  },
  {
    title: "CirrusDCS",
    dc: "Connect your ZKTeco time clock to your cloud-based workforce management application via our reliable and real-time API for bi-directional data transfer.",
    image: ["cirrus.svg"],
  },
  {
    title: "Product Development",
    dc: "Leverage ZKServices to help you customize your offering or assist with implementation, integration, and training needs.",
    image: ["code.svg"],
  },
];

interface IThisProps {
  mt?: number;
}

function ProductsSection({ mt }: IThisProps) {
  return (
    <div
      className="products-section"
      style={{ marginTop: mt ? (mt > 1 ? mt : 2500) : 0 }}
    >
      <div className="container">
        <h3 className="products-section-title">Explore Our Products</h3>

        <div className="row align-items-stretch">
          {ProductsItems.map((item) => (
            <div key={RandomKey()} className="col-12 col-sm-6 col-lg-3 mb-4">
              <div className="products-section-item">
                <div className="products-section-item-open">
                  <i className="fa-regular fa-arrow-up-right" />
                </div>
                <div className="products-section-item-header">
                  {item.image.map((image) => (
                    <Image
                      key={RandomKey()}
                      src={`/images/${image}`}
                      alt="keyboard-open"
                      width={58}
                      height={58}
                    />
                  ))}
                </div>
                <h3 className="products-section-item-title">{item.title}</h3>
                <p className="products-section-item-description">{item.dc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsSection;
