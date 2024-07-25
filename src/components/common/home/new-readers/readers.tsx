"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  Autoplay,
  EffectFade,
  Mousewheel,
  Navigation,
  Pagination,
  Parallax,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

import LabelIcon from "../../../../../public/images/home/clock.png";

import { dataReaders } from "../readers/data/dataReaders";

import styles from "./readers.module.scss";
import { ReaderCard } from "@components/layout/reader-card";
import { Label } from "@components/layout/label";

const dataNavButtons = [{ type: "prev" }, { type: "next" }];
const dataArrows = [{ type: "first" }, { type: "second" }];

export default function Readers() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.activeIndex);
    autoPlay(swiper);
  };
  const autoPlay = (swiper: any) => {
    setInterval(() => {
      if (!swiper.autoplay) {
        return;
      }
      if (swiper.isEnd) {
        swiper.slideTo(0);
      }
      swiper.autoplay.pause();
      swiper.autoplay.resume();
    }, 3000);
  };
  const swiperParams: SwiperOptions = {
    modules: [
      Navigation,
      Pagination,
      Mousewheel,
      EffectFade,
      Parallax,
      Autoplay,
    ],
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
    autoplay: {
      delay: 3000, // увеличиваем задержку до 3 секунд
      disableOnInteraction: false, // автоплей не останавливается при взаимодействии
    },
    allowTouchMove: true,
    navigation: {
      prevEl: ".button-prev",
      nextEl: ".button-next",
      // disabledClass: styles.disable,
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

  return (
    <>
      <div className={styles.topContent}>
        <Label icon={LabelIcon} title="TIME CLOCKS" color="gray" transparent />
        <h3>
          Time Tracking <span>Terminals</span>
        </h3>
        <p>For small businesses to large enterprises</p>
      </div>
      <div className={styles.fixAnimate}>
        <motion.div
          initial={{ scaleX: 1.25, scaleY: 1.15 }}
          whileInView={{ scaleX: 1, scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className={clsx(styles.readersWrapper, "readers")}
        >
          <video
            className={clsx(styles.bg)}
            src="/video/Comp 4.mp4"
            autoPlay
            playsInline
            muted
            loop
          >
            {/* <source src="/video/Comp 3_1.mp4" type="video/mp4" /> */}
          </video>
          <div className={styles.container}>
            <div className={clsx(styles.readersTitleContainer)}></div>
            <div className={clsx(styles.readersSliderContainer)}>
              <Swiper
                onSlideChange={handleSlideChange}
                onSwiper={(swiper) => {
                  swiper.updateProgress();
                  swiper.update();
                }}
                className={clsx(styles.readersSlider)}
                {...swiperParams}
              >
                {dataReaders.map(
                  ({ id, title, description, icon, iconSize, alt }, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <AnimatePresence>
                          {currentSlide === i && (
                            <motion.div
                              key={currentSlide}
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
                    );
                  },
                )}
              </Swiper>
              <div
                className={clsx(styles.sliderPagination, "slider-pagination")}
              ></div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
