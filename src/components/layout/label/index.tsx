import clsx from "clsx";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

import styles from "./index.module.scss";
import { acidGrotesk700 } from "@styles/fonts";

interface ILabel {
  icon: StaticImageData;
  title: string;
  color: string;
  transparent?: boolean;
  textColor?: string;
}

export const Label: FC<ILabel> = ({
  icon,
  title,
  color,
  transparent,
  textColor,
}) => {
  return (
    <motion.div
      initial={"init"}
      whileInView={"animate"}
      transition={{
        duration: 0.5,
        delay: 0.5 * 0.1,
      }}
      viewport={{ once: true, amount: 0.1 }}
      variants={mainVariant}
      className={clsx(styles.labelWrapper)}
    >
      <div
        className={clsx(
          styles.label,
          styles[color],
          styles[textColor as string],
          transparent && styles.transparent,
        )}
      >
        <Image src={icon} alt={title} width={24} height={24} />
        {title}
      </div>
    </motion.div>
  );
};

const mainVariant = {
  init: {
    opacity: 0,
    y: "30px",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
