"use client";

import clsx from "clsx";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import { forwardRef } from "react";

import ManufacturingProcessImage from "../../../../public/images/home/manufacturing-process-image.png";
import LabelIcon from "../../../../public/images/home/n.png";

import { ButtonWithArrow } from "../buttons/button-with-arrow";
import Arrow from "../icons/arrow";
import { Label } from "../label";

import styles from "./index.module.scss";
import { acidGrotesk400 } from "@styles/fonts";

interface IStrengthsBoard {
  mainTitle: {
    strongText: string;
    defaultText: string;
  };
  strengthsList: Array<{
    id: string;
    title: string;
  }>;
  details: {
    title: string;
    description: string;
    img?: string;
  };
}

export const StrengthsBoard = forwardRef<HTMLDivElement, IStrengthsBoard>(
  ({ mainTitle, strengthsList, details }, ref) => {
    return (
      <div className={clsx(styles.strengthsBoard)} ref={ref}>
        <div className={clsx(styles.strengthsBoardContent)}>
          <Label
            icon={LabelIcon}
            title="Our Strengths"
            color="gray"
            transparent={true}
          />
          <motion.h2
            initial={"init"}
            whileInView={"animate"}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={labelVariants}
            className={clsx(styles.title, acidGrotesk400.className)}
          >
            <motion.b
              initial={{ color: "#CBCBCB" }}
              whileInView={{ color: "#000" }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              {mainTitle.strongText}
            </motion.b>
            {mainTitle.defaultText}
          </motion.h2>
          <ul className={clsx(styles.strengthsList)}>
            {strengthsList.map(({ id, title }, i) => (
              <motion.li
                key={id}
                initial={"init"}
                whileInView={"animate"}
                transition={{ duration: 0.1, delay: 0.1 * i + 0.2 }}
                variants={labelVariants}
                className={clsx(styles.strengthsListItem)}
              >
                <div className={clsx(styles.strengthsListItemMarker)}>
                  <Arrow type="right-marker" size="9" color="black" />
                </div>
                <p
                  className={clsx(
                    styles.strengthsListItemTitle,
                    acidGrotesk400.className,
                  )}
                >
                  {title}
                </p>
              </motion.li>
            ))}
          </ul>
          <ButtonWithArrow
            title="Schedule a Consultation"
            bgColor="green"
            delay={1.6}
            textWidth={162}
          />
        </div>
        {details.img ? (
          <Image
            src={details.img}
            width={548}
            height={265}
            alt="Manufacturing Process"
            className={clsx(styles.strengthsBoardDetails)}
          />
        ) : (
          <div className={clsx(styles.strengthsBoardDetails)}>
            <div className={clsx(styles.iconsContainer)}>
              <Image
                src={ManufacturingProcessImage}
                width={548}
                height={265}
                alt="Manufacturing Process"
              />
            </div>
            <div className={clsx(styles.textContainer)}>
              <h4 className={clsx(styles.title, acidGrotesk400.className)}>
                {details.title}
              </h4>
              <p className={clsx(styles.description, acidGrotesk400.className)}>
                {details.description}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  },
);

export const MStrengthsBoard = motion(StrengthsBoard);

const labelVariants: Variants = {
  init: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
