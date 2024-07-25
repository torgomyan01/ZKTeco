"use client";

import clsx from "clsx";
import { Variants, motion } from "framer-motion";
import LabelIcon from "../../../../../public/images/flash.png";

import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import { Label } from "@components/layout/label";
import { acidGrotesk400, acidGrotesk500 } from "@styles/fonts";
import { ButtonWithArrow } from "@components/layout/buttons/button-with-arrow";
import { ReaderTechnologies } from "@components/layout/reader-technologies";

const delayButtonWithArrow = 1.6;

export default function Hero() {
  const [triger, setTriger] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTriger((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={clsx(styles.heroWrapper)}>
      <motion.div className={clsx(styles.backgroundHeroWrapper)}>
        <video src="/video/Comp 3_1.mp4" autoPlay playsInline muted loop>
          <source src="/video/Comp 3_1.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <div className={clsx(styles.hero)}>
        <div className={clsx(styles.contentContainer)}>
          <motion.div
            initial="offscreen"
            animate="onscreen"
            variants={labelVariants}
          >
            <Label
              icon={LabelIcon}
              title="Introducing Ultima Series 2"
              color="gray"
              textColor="white"
              transparent={true}
            />
          </motion.div>
          <motion.div
            className={clsx(styles.titleWrapper)}
            initial="offscreen"
            animate="onscreen"
            exit="offscreen"
            key={triger}
            variants={titleVariants}
          >
            <h1 className={clsx(styles.title, )}>
              <motion.span
                className={clsx(styles.titleTerm)}
                initial="offscreen"
                animate="onscreen"
                custom={0}
                key={`titleTerm1-${triger}`}
                variants={titleTermVariants}
              >
                Redefining Time Clock
              </motion.span>
              <motion.span
                className={clsx(styles.titleTerm)}
                initial="offscreen"
                animate="onscreen"
                custom={0.2}
                key={`titleTerm2-${triger}`}
                variants={titleTermVariants}
              >
                Solutions for the
              </motion.span>
              <motion.span
                className={clsx(styles.titleTerm)}
                initial="offscreen"
                animate="onscreen"
                custom={0.4}
                key={`titleTerm3-${triger}`}
                variants={titleTermVariants}
              >
                Global Workforce
              </motion.span>
            </h1>
          </motion.div>
          <motion.div
            className={clsx(styles.descriptionWrapper)}
            initial="offscreen"
            animate="onscreen"
            exit="offscreen"
            key={`description-${triger}`}
            variants={descriptionVariants}
          >
            <p className={clsx(styles.description, acidGrotesk500.className)}>
              <motion.span
                className={clsx(styles.descriptionTerm)}
                initial="offscreen"
                animate="onscreen"
                custom={0.6}
                key={`descriptionTerm1-${triger}`}
                variants={descriptionTermVariants}
              >
                Powerful Android-based product line equipped with 5 inch,
              </motion.span>
              <motion.span
                className={clsx(styles.descriptionTerm)}
                initial="offscreen"
                animate="onscreen"
                custom={0.7}
                key={`descriptionTerm2-${triger}`}
                variants={descriptionTermVariants}
              >
                7 inch and 10 inch screen sizes, with multiple biometric
              </motion.span>
              <motion.span
                className={clsx(styles.descriptionTerm)}
                initial="offscreen"
                animate="onscreen"
                custom={0.8}
                key={`descriptionTerm3-${triger}`}
                variants={descriptionTermVariants}
              >
                and card reader technologies.
              </motion.span>
            </p>
          </motion.div>
          <ReaderTechnologies />
          <motion.div
            initial="offscreen"
            animate="onscreen"
            custom={delayButtonWithArrow}
            variants={buttonWithArrowVariants}
            className={styles.button}
          >
            <ButtonWithArrow
              title="Schedule a Consultation"
              bgColor="green"
              delay={delayButtonWithArrow}
              textWidth={182}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const backgroundHeroVariants: Variants = {
  offscreen: {
    opacity: 0,
    scale: 0.5,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const labelVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.0,
      duration: 0.6,
    },
  },
};

const titleVariants: Variants = {
  offscreen: {
    y: 40,
    scale: 1.0,
  },
  onscreen: {
    y: [0, 0, -10, 0],
    scale: [1.0, 1.1, 1.15, 1.0],
    transition: {
      delay: 0.2,
      duration: 0.8,
      times: [0.8, 0.5, 0.3, 0.3],
    },
  },
};

const titleTermVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: (time) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: time + 0.2,
      duration: 0.4,
    },
  }),
};

const descriptionVariants: Variants = {
  offscreen: {
    y: 10,
  },
  onscreen: {
    y: 0,
    transition: {
      delay: 0.7,
      duration: 0.5,
    },
  },
};

const descriptionTermVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 30,
  },
  onscreen: (time) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: time + 0.1,
      duration: 0.3,
    },
  }),
};

const buttonWithArrowVariants: Variants = {
  offscreen: {
    x: 58,
  },
  onscreen: (delay) => ({
    x: 0,
    transition: {
      delay: delay + 0.3,
      duration: 0.6,
    },
  }),
};
