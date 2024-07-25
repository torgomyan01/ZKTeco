"use client";

import clsx from "clsx";
import { Variants, color, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import { FC, useState } from "react";

import AndroidIcon from "../../../../../public/images/home/android-icon.png";
import ApiIcon from "../../../../../public/images/home/api-icon.png";
import AppIcon from "../../../../../public/images/home/app-icon.png";
import CirrusDcsBlue from "../../../../../public/images/home/cirrus-dcs-blue.png";
import CirrusDcsGreen from "../../../../../public/images/home/cirrus-dcs-green.png";
import CirrusDcsOrange from "../../../../../public/images/home/cirrus-dcs-orange.png";
import LabelIcon from "../../../../../public/images/home/n.png";
import WorkdayIcon from "../../../../../public/images/home/workday-icon.png";
import ComingIcon from "../../../../../public/images/home/23.png";
// import LineOne from "./Svgs/line-one/LineOne";
// import LineThree from "./Svgs/line-three/LineThree";
// import LineTwo from "./Svgs/line-two/LineTwo";
import styles from "./index.module.scss";
import { acidGrotesk400, acidGrotesk500, acidGrotesk700 } from "@styles/fonts";
import { Label } from "@components/layout/label";
import LineOne from "./Svgs/line-one/LineOne";
import LineTwo from "./Svgs/line-two/LineTwo";
import LineThree from "./Svgs/line-three/LineThree";

const dataTitle = [
  {
    id: 1,
    text: "Take control & Drive Profitability with",
  },
  {
    id: 2,
    text: "our Time Clock Solution",
  },
];
const colorText = ["Time", "Clock", "Solution"];

export default function Advantages() {
  const [completed, setCompleted] = useState(false);
  // useEffect(() => {
  // 	const timer = setTimeout(() => {
  // 		setCompleted(true)
  // 	}, 1000)
  // 	return () => clearTimeout(timer)
  // })
  return (
    <div className={clsx(styles.advantagesWrapper)}>
      <motion.div
        className={clsx(styles.advantagesContainer)}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        onViewportEnter={() => setCompleted(true)}
      >
        <motion.div
          variants={labelVariants}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Label icon={LabelIcon} title="Advantages" color="gray" transparent />
        </motion.div>
        <motion.h2
          className={clsx(styles.title)}
          variants={titleVariants}
          viewport={{ once: true, amount: 0.1 }}
        >
          {dataTitle.map(({ id, text }, index) => (
            <motion.span
              key={id}
              custom={index * 0.2}
              variants={titleTermVariants}
              // className={`${id === 1 && styles.bold}`}
              style={{
                fontWeight: "500",
              }}
            >
              {text.split(/\s+/).map((word, index) => {
                return (
                  <motion.span
                    key={index}
                    custom={index * 0.1}
                    viewport={{ once: true, amount: 0.1 }}
                    variants={titleWordVariants}
                    className={clsx({
                      [styles.color]: colorText.includes(word),
                    })}
                  >
                    {word}&nbsp;
                  </motion.span>
                );
              })}
            </motion.span>
          ))}
        </motion.h2>
        <motion.h5
          className={clsx(styles.subTitle, acidGrotesk500.className)}
          variants={subTitleVariants}
        >
          Workforce Data Collection Solution for enterprise to Small Business
        </motion.h5>
        <motion.div
          className={clsx(styles.advantagesContentContainer)}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className={clsx(styles.advantagesBlockContainer)}>
            <div className={styles.items}>
              <div className={clsx(styles.timetackingBlock)}>
                {dataIntegration.map(
                  ({ id, colorClass, labelText, title, subTitle, icon }, i) => (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.2,
                      }}
                      key={id}
                      className={clsx(styles.timetackingItemWrapper)}
                    >
                      <TimetackingItem
                        icon={icon}
                        title={title}
                        colorClass={colorClass}
                      />
                    </motion.div>
                  ),
                )}
              </div>
              <div className={styles.center}>
                {completed && (
                  <motion.div className={styles.leftSvg}>
                    <LineOne />
                  </motion.div>
                )}
                <motion.div
                  className={clsx(styles.terminalBlock)}
                  variants={terminalVariants}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <motion.div className={clsx(styles.terminalImageContainer)}>
                    <motion.video
                      variants={terminalImageVariants}
                      className={clsx(styles.terminalImage)}
                      onAnimationComplete={() => setCompleted(true)}
                      viewport={{ once: true, amount: 0.1 }}
                      autoPlay
                      playsInline
                      muted
                      loop
                    >
                      <source
                        src="/video/Comp 5 (online-video-cutter.com).mp4"
                        type="video/mp4"
                      />
                    </motion.video>
                  </motion.div>
                </motion.div>
                {completed && (
                  <motion.div className={styles.bottomSvg}>
                    <LineThree />
                  </motion.div>
                )}
                {completed && (
                  <motion.div className={styles.rightSvg}>
                    <LineTwo />
                  </motion.div>
                )}
              </div>
              <div className={clsx(styles.timetackingBlock)}>
                {dataTimetacking.map(({ id, icon, title }, i) => (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.2,
                    }}
                    key={id}
                    className={clsx(styles.timetackingItemWrapper)}
                  >
                    <TimetackingItem
                      icon={icon}
                      title={title}
                      colorClass="green"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className={styles.bottom}>
              {dataBottom.map(({ id, title, icon }, i) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                  }}
                  key={id}
                  className={clsx(styles.timetackingItemWrapper)}
                >
                  <TimetackingItem
                    icon={icon}
                    title={title}
                    colorClass="green"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

const labelVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.6,
    },
  },
};

const titleVariants: Variants = {
  offscreen: {
    y: 100,
    scale: 1.0,
  },
  onscreen: {
    y: [0, 0, -10, 0],
    scale: [1.0, 1.1, 1.15, 1.0],
    transition: {
      delay: 0.4,
      duration: 0.8,
      times: [0.8, 0.5, 0.3, 0.3],
    },
  },
};

const titleTermVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 150,
  },
  onscreen: (time) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: time,
      duration: 0.8,
    },
  }),
};

const titleWordVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: (time) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: time,
      duration: 0.4,
    },
  }),
};

const subTitleVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.7,
    },
  },
};

const terminalVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const terminalImageVariants: Variants = {
  offscreen: {
    scale: 1.2,
    y: 200,
  },
  onscreen: {
    scale: [1.2, 1.2, 1.1, 1.0],
    y: [200, 0, 0, 0],
    transition: {
      duration: 2.3,
      times: [0, 0.2, 0.3, 0.4],
    },
  },
};

const dataTimetacking = [
  {
    id: "Android",
    icon: AndroidIcon,
    title: "Android Platform SDK",
  },
  {
    id: "App",
    icon: AppIcon,
    title: "ZKTimeTrack App",
  },
  {
    id: "API",
    icon: ApiIcon,
    title: "ZKTimeTrack API",
  },
  // {
  //   id: "Coming",
  //   icon: ComingIcon,
  //   title: "Coming soon",
  // },
];

const dataIntegration = [
  {
    id: "Custom",
    colorClass: "blue",
    labelText: "Custom API",
    title: "HCM API Integration",
    subTitle:
      "Optimizing Workday Workforce Management Through Custom API Integration",
    icon: CirrusDcsBlue,
  },
  {
    id: "Universal",
    colorClass: "green",
    labelText: "Universal API",
    title: "Standard API Integration",
    subTitle: "API for Advancing Workforce Management Systems",
    icon: CirrusDcsGreen,
  },
  {
    id: "HCM",
    colorClass: "orange",
    labelText: "HCM",
    title: "Custom API Integration",
    subTitle: "Optimizing HCM: Harnessing Our API for Seamless Integration",
    icon: CirrusDcsOrange,
  },
  // {
  //   id: "HCM",
  //   colorClass: "orange",
  //   title: "Workday Time Tracking",
  //   icon: WorkdayIcon,
  // },
];

const dataBottom = [
  {
    id: "HCM",
    colorClass: "orange",
    title: "Workday Workforce Management",
    icon: WorkdayIcon,
  },
];
interface IIntegrationItem {
  colorClass: string;
  labelText: string;
  title: string;
  subTitle: string;
  icon: StaticImageData;
}

interface ITimetackingItem {
  icon: StaticImageData;
  title: string;
  colorClass: string;
}

const TimetackingItem: FC<ITimetackingItem> = ({ icon, title, colorClass }) => {
  return (
    <div className={clsx(styles.timetackingItemContainer, styles[colorClass])}>
      <div className={clsx(styles.timetackingItemIconWrapper)}>
        <Image src={icon} alt={title} />
      </div>
      <div className={clsx(styles.timetackingItemTitle)}>
        <span>{title}</span>
      </div>
    </div>
  );
};
