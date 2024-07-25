"use client";

import { motion, Variants } from "framer-motion";
import clsx from "clsx";

import styles from "./index.module.scss";

import { dataReaderTechnologies } from "./data/dataReaderTechnologies";
import Icon from "../icon/Icon";

export const ReaderTechnologies = () => {
  return (
    <div className={clsx(styles.readerTechnologies)}>
      {dataReaderTechnologies.map(({ id, icon, alt, delay }) => (
        <motion.div
          key={id}
          className={clsx(styles.readerTechnologiesIcon)}
          initial="offscreen"
          animate="onscreen"
          custom={delay}
          variants={iconVariants}
        >
          <Icon name={icon} />
        </motion.div>
      ))}
    </div>
  );
};

const iconVariants: Variants = {
  offscreen: {
    y: 25,
    opacity: 0,
  },
  onscreen: (delay) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: delay + 0.1,
      duration: 0.3,
    },
  }),
};
