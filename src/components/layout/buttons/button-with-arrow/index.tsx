"use client";

import clsx from "clsx";
import { Variants, motion } from "framer-motion";
import { FC, useEffect, useState } from "react";

import styles from "./index.module.scss";
import { acidGrotesk700 } from "@styles/fonts";
import Arrow from "@components/layout/icons/arrow";

interface IButtonWithArrow {
  title: string;
  bgColor: string;
  delay: number;
  textWidth: number;
  triggerAnimation?: boolean;
  click?: () => void;
}

export const ButtonWithArrow: FC<IButtonWithArrow> = ({
  title,
  bgColor,
  delay,
  textWidth,
  triggerAnimation,
  click,
}) => {
  const config = {
    delay,
    textWidth,
  };
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [triggerAnimation]);

  return (
    <motion.button
      onClick={click}
      key={key}
      className={clsx(
        styles.buttonWithArrow,
        styles[bgColor],
        acidGrotesk700.className,
      )}
      initial="offscreen"
      animate="onscreen"
      custom={config.delay}
      variants={buttonVariants}
    >
      <motion.div
        className={clsx(styles.buttonTextWrapper)}
        initial="offscreen"
        animate="onscreen"
        custom={config}
        variants={buttonTextVariants}
      >
        <span className={clsx(styles.buttonText)}>{title}</span>
      </motion.div>
      <motion.div
        className={clsx(styles.arrowWrapper)}
        initial="offscreen"
        animate="onscreen"
        custom={config.delay}
        variants={arrowVariants}
      >
        <Arrow
          type="right-button"
          size="10"
          color={bgColor === "white" ? "#ffffff" : "#121212"}
        />
      </motion.div>
    </motion.button>
  );
};

const buttonVariants: Variants = {
  offscreen: {
    opacity: 0,
    padding: 0,
    gap: 0,
  },
  onscreen: (delay) => ({
    opacity: 1,
    padding: "11px 17px 11px 24px",
    gap: "0 14px",
    transition: {
      delay,
      duration: 0.4,
    },
  }),
};

const buttonTextVariants: Variants = {
  offscreen: {
    width: 0,
  },
  onscreen: (config) => ({
    width: config.textWidth,
    transition: {
      delay: config.delay + 0.3,
      duration: 0.6,
    },
  }),
};

const arrowVariants: Variants = {
  offscreen: {
    scale: 0,
  },
  onscreen: (delay) => ({
    scale: 1,
    transition: {
      delay,
      duration: 0.4,
    },
  }),
};
