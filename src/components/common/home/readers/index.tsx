"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import {
  EffectFade,
  Mousewheel,
  Navigation,
  Pagination,
  Parallax,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

import { dataReaders } from "./data/dataReaders";
import styles from "./index.module.scss";
import { acidGrotesk400 } from "@styles/fonts";
import { ReaderCard } from "@components/layout/reader-card";
import Corner from "@components/layout/icons/corner";

const swiperParams: SwiperOptions = {
  modules: [Navigation, Pagination, Mousewheel, EffectFade, Parallax],
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  parallax: {
    enabled: true,
  },
  speed: 700,
  slidesPerView: 1,
  direction: "horizontal",
  spaceBetween: 20,
  allowTouchMove: true,
  navigation: {
    prevEl: ".button-prev",
    nextEl: ".button-next",
    disabledClass: styles.disable,
  },
  pagination: {
    type: "bullets",
    el: ".slider-pagination",
    clickable: true,
  },
  mousewheel: {
    enabled: false,
    eventsTarget: ".readers",
  },
};

const dataNavButtons = [{ type: "prev" }, { type: "next" }];
const dataArrows = [{ type: "first" }, { type: "second" }];

export default function Readers() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <div className={styles.fixAnimate}>
      <motion.div
        initial={{ scale: 1.25 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className={clsx(styles.readersWrapper, "readers")}
      >
        <div className={clsx(styles.readersContainer)}>
          <div className={clsx(styles.readersTitleContainer)}>
            <h4
              className={clsx(styles.readersSubtitle, acidGrotesk400.className)}
            >
              For small businesses to large enterprises
            </h4>
            <h2 className={clsx(styles.readersTitle, acidGrotesk400.className)}>
              Time Tracking Terminals
            </h2>
          </div>
          <div className={clsx(styles.readersSliderContainer)}>
            <Swiper
              onSlideChange={handleSlideChange}
              className={clsx(styles.readersSlider)}
              {...swiperParams}
            >
              {dataReaders.map(
                ({ id, title, description, icon, iconSize, alt }, i) => (
                  <SwiperSlide key={id}>
                    <AnimatePresence>
                      {currentSlide === i && (
                        <motion.div
                          key={currentSlide}
                          // initial={{opacity: 0.9}}
                          // animate={{opacity: 1}}
                          // exit={{opacity: 0.9}}
                          transition={{ duration: 0.5 }}
                        >
                          <ReaderCard
                            title={title}
                            description={description}
                            icon={icon}
                            iconSize={iconSize}
                            alt={alt}
                            trigger={i}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </SwiperSlide>
                ),
              )}
            </Swiper>
            {dataNavButtons.map(({ type }) => (
              <button
                key={type}
                className={clsx(
                  styles.navButton,
                  styles[type],
                  `button-${type}`,
                )}
              >
                {dataArrows.map(({ type }) => (
                  <span key={type} className={clsx(styles[`${type}Arrow`])}>
                    <Corner type="right" size="30" color="white" />
                  </span>
                ))}
              </button>
            ))}
            <div
              className={clsx(styles.sliderPagination, "slider-pagination")}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
