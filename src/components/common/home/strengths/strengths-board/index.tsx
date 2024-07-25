/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
"use client";

import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FC, forwardRef, useRef } from "react";

import LabelIcon from "../../../../../../public/images/n.png";

import Arrow from "../icons/arrow";

import styles from "./index.module.scss";
import { Label } from "@components/layout/label";
import { ButtonWithArrow } from "@components/layout/buttons/button-with-arrow";

/* eslint-disable react/display-name */

/* eslint-disable react/display-name */

interface IStrengthsBoard {
  mainTitle: string;
  strengthsList: Array<{
    id: string;
    title: string;
  }>;
  details: {
    title: string;
    description: string;
    img?: string;
  };
  reffer?: any;
}

const AnimatedText: FC<{ text: string; containerRef: any }> = ({
  text,
  containerRef,
}) => {
  const words = text.split(" ");
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  return (
    <span>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = (index + 1) / words.length;
        const color = useTransform(
          scrollYProgress,
          [start, end],
          ["#b4b4b4", "#000000"],
        );

        return (
          <motion.span
            key={index}
            style={{ color, display: "inline-block", marginRight: "0.2em" }}
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
};

export const StrengthsBoard = forwardRef<HTMLDivElement, IStrengthsBoard>(
  ({ mainTitle, strengthsList, details }, ref) => {
    const reffer = useRef(null);
    const words = mainTitle.split(" ");
    const { scrollYProgress } = useScroll({
      target: reffer,
      offset: ["start end", "end start"],
    });
    const fasterScrollYProgress = useTransform(
      scrollYProgress,
      (value) => value * 2.9,
    );

    return (
      <div className={clsx(styles.strengthsBoard)} ref={ref}>
        <div className={clsx(styles.strengthsBoardContent)} style={{
				}}>
          {/* <Label
            icon={LabelIcon}
            title="Our Strengths"
            color="gray"
            transparent={true}
          /> */}
          <motion.h2
            initial="init"
            whileInView="animate"
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={labelVariants}
            className={clsx(styles.title)}
          >
            <span>
              {words.map((word, index) => {
                const start = index / words.length;
                const end = (index + 1) / words.length;
                const color = useTransform(
                  fasterScrollYProgress,
                  [start, end],
                  ["#b4b4b4", "#000000"],
                );

                return (
                  <motion.span
                    key={index}
                    style={{
                      color,
                      display: "inline-block",
                      marginRight: "0.2em",
                    }}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </span>
          </motion.h2>
          <ul className={clsx(styles.strengthsList)} ref={reffer}>
            {strengthsList.map(({ id, title }, i) => (
              <motion.li
                key={id}
                initial="init"
                whileInView="animate"
                transition={{ duration: 0.1, delay: 0.1 * i + 0.2 }}
                variants={labelVariants}
                className={clsx(styles.strengthsListItem)}
              >
                <div className={clsx(styles.strengthsListItemMarker)}>
                  <Arrow type="right-marker" size="9" color="black" />
                </div>
                <p className={clsx(styles.strengthsListItemTitle)}>{title}</p>
              </motion.li>
            ))}
          </ul>
          <ButtonWithArrow
            title="Schedule a Consultation"
            bgColor="green"
            delay={1.6}
            textWidth={182}
          />
          <div></div>
        </div>
        <Image
          src={details.img as string}
          width={548}
          height={265}
          alt="Manufacturing Process"
          className={clsx(styles.strengthsBoardDetails)}
        />
      </div>
    );
  },
);

export const MStrengthsBoard = motion(StrengthsBoard);

const labelVariants = {
  init: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
