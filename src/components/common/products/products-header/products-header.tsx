"use client";
import "./products-header.scss";
import Image from "next/image";
import Fingerprint from "@components/common/products/products-header/icons/fingerprint";
import { RandomKey } from "@utils/helpers";
import { useEffect, useState } from "react";
import FaceIdIcon from "@components/common/products/products-header/icons/face-id";
import PalmRecognitionIcon from "@components/common/products/products-header/icons/palm-recognition";
import MultiCardReadersIcon from "@components/common/products/products-header/icons/multi-card-readers";
import PortableIcon from "@components/common/products/products-header/icons/portable";
import ProductItem from "@components/common/products/products-header/product-item";

const types = [
  {
    name: "All",
    icon: "",
  },
  {
    name: "Fingerprint",
    icon: <Fingerprint />,
  },
  {
    name: "Palm Recognition",
    icon: <FaceIdIcon />,
  },
  {
    name: "Face-ID",
    icon: <PalmRecognitionIcon />,
  },
  {
    name: "Multi Card Readers",
    icon: <MultiCardReadersIcon />,
  },
  {
    name: "Portable",
    icon: <PortableIcon />,
  },
];

const products = [
  {
    type: types[1].name,
    categoryName: "Fingerprint Readers",
    items: [
      "ZK Teco Ultima 10",
      "ZK Teco Ultima 7",
      "ZK Teco Ultima 5",
      "ZK Teco Ultima 200",
      "ZK Teco Ultima 200",
      "ZK Teco uFace800",
      "ZK Teco US 915",
    ],
    images: [
      "image 33-0.png",
      "image 33-1.png",
      "image 33-2.png",
      "image 33-3.png",
      "image 33-4.png",
      "image 33-5.png",
      "image 33-6.png",
    ],
  },
  {
    type: types[2].name,
    categoryName: "Palm Recognition",
    items: ["ZK Teco Ultima 10", "ZK Teco Ultima 7"],
    images: ["image 33-7.png", "image 33-8.png"],
  },
  {
    type: types[3].name,
    categoryName: "Face-ID Readers",
    items: [
      "ZK Teco Ultima 10",
      "ZK Teco Ultima 7",
      "ZK Teco Ultima 5",
      "ZK Teco Ultima 200",
      "ZK Teco uFace800",
      "ZK Teco US 915",
    ],
    images: [
      "image 33-9.png",
      "image 33-10.png",
      "image 33-11.png",
      "image 33-12.png",
      "image 33-13.png",
      "image 33-14.png",
    ],
  },
  {
    type: types[5].name,
    categoryName: "Multi Card Readers",
    items: [
      "ZK Teco Ultima 10",
      "ZK Teco Ultima 7",
      "ZK Teco Ultima 5",
      "ZK Teco Ultima 200",
      "ZK Teco uFace800",
      "ZK Teco US 915",
    ],
    images: [
      "image 33-9.png",
      "image 33-10.png",
      "image 33-11.png",
      "image 33-12.png",
      "image 33-13.png",
      "image 33-14.png",
    ],
  },
  {
    type: types[4].name,
    categoryName: "Portable Readers",
    items: ["ZK Teco Ultima 10"],
    images: ["image 33-16.png"],
  },
];

function ProductsHeader() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [selectedTab, setSelectedTab] = useState(products);

  useEffect(() => {
    if (!activeTab) {
      setSelectedTab(products);
    } else {
      setSelectedTab([products[activeTab - 1]]);
    }
  }, [activeTab]);

  return (
    <div className="products">
      <div className="products-header">
        <div className="container">
          <div className="products-header-comma">
            <Image
              src="/images/comma.svg"
              alt="comma.svg"
              width={80}
              height={80}
            />
          </div>
          <h1 className="products-header-title">
            We have a wide selection of employee Time Tracking terminals for
            small businesses to large enterprises. Our terminals include a
            variety of technologies like facial and fingerprint biometric,
            proximity, magnetic, barcode, and multi-technology card readers to
            choose from
          </h1>
        </div>
      </div>
      <div className="container">
        <div className="products-navbar">
          {types.map((item, index) => (
            <div
              key={RandomKey()}
              className={`products-navbar-item ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
        <div className="products-category">
          {selectedTab.map((item) => (
            <div key={RandomKey()}>
              <h3 className="products-category-title">{item.categoryName}</h3>

              <div className="row">
                {item.items.map((product, index) => (
                  <ProductItem
                    key={RandomKey()}
                    title={product}
                    image={item.images[index]}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsHeader;
