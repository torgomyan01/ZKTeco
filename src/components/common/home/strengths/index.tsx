"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";

import LabelIcon from "../../../../../public/images/n.png";
import { dataProgressBar, dataStrengths } from "./data/dataStrengths";
import styles from "./index.module.scss";
import { acidGrotesk700 } from "@styles/fonts";
import { MStrengthsBoard } from "./strengths-board";
import { Label } from "@components/layout/label";

export default function Strengths() {
  const [top, setTop] = useState(0);
  const strengthsRef = useRef<any>(null);
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const handleResize = () => {
      const strengthsTop = containerRef.current.offsetTop;
      const strengthsHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      maxPoint.current = strengthsHeight - windowHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxPoint = useRef(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 0.7], ["0%", "100%"]);

  return (
    <motion.div
      ref={strengthsRef}
      className={clsx(styles.strengthsWrapper)}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0 }}
    >
      <div className={clsx(styles.strengthsContainer)}>
        <div className={clsx(styles.strengthsProgressBar)}>
          <motion.div
            className={clsx(styles.strengthsProgress)}
            style={{ width: progressWidth }}
          />
          {dataProgressBar.map(({ num, title }, index) => (
            <div
              key={num}
              className={clsx(styles.strengthsProgressBarItem, {
                [styles.active]: +num === 1,
                [styles.borderRight]: index !== dataProgressBar.length - 1,
              })}
            >
              <div className={clsx(styles.index, acidGrotesk700.className)}>
                {num}
              </div>
              <div className={clsx(styles.title, acidGrotesk700.className)}>
                {title}
              </div>
            </div>
          ))}
        </div>
        <motion.div className={styles.label}>
          <Label
            icon={LabelIcon}
            title="Our Strengths"
            color="gray"
            transparent={true}
          />
        </motion.div>
        <div
          className={clsx(styles.strengthsBoardsContainer)}
          ref={containerRef}
        >
          {dataStrengths.map(
            ({ id, mainTitle, strengthsList, details }, index) => (
              <MStrengthsBoard
                key={id}
                mainTitle={mainTitle}
                strengthsList={strengthsList}
                details={details}
                style={{ zIndex: index + 1 }}
                variants={strengthsBoardVariants}
              />
            ),
          )}
        </div>
      </div>
    </motion.div>
  );
}

const strengthsProgressBarVariants = {
  offscreen: {
    // position: 'relative',
    // top: 0,
    // opacity: 0,
    // y: 20
  },
  onscreen: {
    // position: 'relative',
    // top: 0,
    // position: 'sticky',
    // top: -70,
    // opacity: 1,
    // y: 0,
    // transition: {
    //   delay: 0.2,
    //   duration: 0.6
    // }
  },
};

const strengthsBoardVariants = {
  // offscreen: {
  //   opacity: 0,
  //   y: 20
  // },
  // onscreen: {
  //   opacity: 1,
  //   y: 0,
  //   transition: {
  //     delay: 0.2,
  //     duration: 0.6
  //   }
  // }
};
