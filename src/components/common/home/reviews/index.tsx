"use client";

import clsx from "clsx";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { Keyboard, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

import CompanyLogo from "../../../../public/images/company-logo.png";
import CustomerPhoto from "../../../../public/images/customer-photo.png";
import KeyboardArrowRight from "../../../../../public/images/keyboard-arrow-right.png";
import LabelIcon from "../../../../../public/images/home/like.png";

// import { acidGrotesk400 } from "@/styles/fonts"

import { dataReviews } from "./data/reviews";
import styles from "./index.module.scss";
import { Label } from "@components/layout/label";
import { ReviewCard } from "./review-card";

const swiperParams: SwiperOptions = {
  modules: [Navigation, Keyboard, Autoplay],
  speed: 700,
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  spaceBetween: 20,
  allowTouchMove: true,
  navigation: {
    prevEl: ".button-prev",
    nextEl: ".button-next",
    disabledClass: styles.disable,
  },
  keyboard: {
    enabled: true,
  },
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
};

const dataNavButtons = [{ type: "prev" }, { type: "next" }];

export default function Reviews() {
  const swiperRef = useRef<any>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (swiperRef.current && !swiperInstance) {
      const instance: any = swiperRef.current.swiper;
      setSwiperInstance(instance);
    }
  }, [swiperRef, swiperInstance]);

  useEffect(() => {
    if (swiperInstance) {
      const updateNavigation = () => {
        swiperInstance.navigation.update();
      };

      swiperInstance.on("slideChange", updateNavigation);
      swiperInstance.on("resize", updateNavigation);
      swiperInstance.on("observerUpdate", updateNavigation);

      const nextButton = document.querySelector(".button-next");
      const prevButton = document.querySelector(".button-prev");

      const handleNextClick = () => {
        swiperInstance.slideNext();
        updateNavigation();
      };

      const handlePrevClick = () => {
        swiperInstance.slidePrev();
        updateNavigation();
      };

      if (nextButton && prevButton) {
        nextButton.addEventListener("click", handleNextClick);
        prevButton.addEventListener("click", handlePrevClick);
      }

      return () => {
        swiperInstance.off("slideChange", updateNavigation);
        swiperInstance.off("resize", updateNavigation);
        swiperInstance.off("observerUpdate", updateNavigation);

        if (nextButton) {
          nextButton.removeEventListener("click", handleNextClick);
        }
        if (prevButton) {
          prevButton.removeEventListener("click", handlePrevClick);
        }
      };
    }
  }, [swiperInstance]);

  useEffect(() => {
    if (swiperInstance) {
      const handleSlideChange = () => {
        if (swiperInstance.isEnd) {
          setTimeout(() => {
            swiperInstance.slideToLoop(0);
          }, 700); // Adjust delay to ensure smooth transition
        }
      };

      swiperInstance.on("slideChange", handleSlideChange);

      return () => {
        swiperInstance.off("slideChange", handleSlideChange);
      };
    }
  }, [swiperInstance]);

  return (
    <div className={clsx(styles.reviewsContainer)}>
      <Label icon={LabelIcon} title="Reviews" color="grey" transparent />
      <h2 className={clsx(styles.title)}>
        What <span>Our Customers</span> Are Saying?
      </h2>
      {/* <div className={clsx(styles.hint)}>
        <p className={clsx(styles.hintText)}>Use keyboard</p>
        <div className={clsx(styles.keyboardArrowContainer)}>
          <Image
            src={KeyboardArrowRight}
            width={16}
            height={14}
            alt="Arrow left"
            className={clsx(styles.arrowLeft)}
          />
          <Image
            src={KeyboardArrowRight}
            width={16}
            height={14}
            alt="Arrow right"
          />
        </div>
        <p className={clsx(styles.hintText)}>
          to navigate through testimonials
        </p>
      </div> */}
      <div className={clsx(styles.reviewsSliderContainer)}>
        <Swiper
          ref={swiperRef}
          className={clsx(styles.reviewsSlider)}
          onSlideChange={(swiper) => {
            if (swiper.activeIndex === 10) {
              swiper.slideTo(0);
            }
            setActive(swiper.activeIndex);
          }}
          {...swiperParams}
        >
          {dataReviews.map(({ company, review, customer }, index) => (
            <SwiperSlide
              style={{
                maxWidth: "400px",
              }}
              key={index}
            >
              <ReviewCard
                company={company}
                review={review}
                customer={customer}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
