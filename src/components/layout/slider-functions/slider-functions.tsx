"use client";
import "./slider-functions.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { RandomKey } from "@utils/helpers";
import Image from "next/image";

function SliderFunctions() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    centerMode: true,
  };
  return (
    <div className="slider-functions">
      <div className="slider-functions-slider">
        <Slider {...settings}>
          {Array.from({ length: 6 }).map((i, index) => (
            <div key={RandomKey()} className="slider-functions-item">
              <Image
                src={`/images/slider-items/slider-${index}.svg`}
                alt="icon"
                width={28}
                height={28}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderFunctions;
