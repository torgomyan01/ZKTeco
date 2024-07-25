"use client";

import clsx from "clsx";
import { AnimatePresence, Variants, motion } from "framer-motion";
import Image from "next/image";
import { Dispatch, FC, SetStateAction } from "react";

import Corner from "../../icons/corner";

import { navigateLinks } from "./data/dataNav";
import styles from "./index.module.scss";
import {
  motionContentModalConfig,
  motionItemsModalConfig,
  motionModalConfig,
} from "./motion.config";
import { useNavBar } from "./useNavBar";

interface IMainNavBar {
  contentColor: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const MainNavBar: FC<IMainNavBar> = ({ contentColor, setIsOpen }) => {
  const {
    handleMouseEnter,
    handleMouseLeave,
    activeLinks,
    key,
    animateComplete,
    ref,
    push,
    height,
    setAnimateComplete,
    keyAnimation,
  } = useNavBar({ setIsOpen });
  return (
    <div className={clsx(styles.mainNavBar)} onMouseLeave={handleMouseLeave}>
      <div className={styles.highLink}>
        {navigateLinks.map(({ title, hasMenu, delay, colums, id, path }, i) => (
          <motion.button
            key={i}
            className={clsx(styles.button, {
              [styles.white]: contentColor === "white",
              [styles.active]: activeLinks.id === id,
            })}
            initial="offscreen"
            animate="onscreen"
            custom={delay}
            variants={buttonVariants}
            onClick={() => push(path ? path : "")}
            onMouseEnter={() => {
              if (hasMenu) {
                if (key) {
                  animateComplete && handleMouseEnter(id, colums);
                } else {
                  handleMouseEnter(id, colums);
                }
              }
            }}
          >
            {title}
            {hasMenu && (
              <span className={clsx(styles.downArrow)}>
                <Corner
                  type="down"
                  size="15"
                  color={contentColor === "white" ? "#ffffff" : "#121212"}
                />
              </span>
            )}
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {activeLinks.col.length > 0 && (
          <motion.div
            initial={"init"}
            animate={"animate"}
            exit={"exit"}
            variants={motionModalConfig().variants}
            className={clsx(styles.dropDown)}
          >
            <motion.div
              ref={ref}
              initial={"init"}
              animate={"animate"}
              exit={"exit"}
              transition={motionContentModalConfig({ key, height }).transition}
              variants={motionContentModalConfig({ key, height }).variants}
              className={styles.content}
              onAnimationComplete={() => setAnimateComplete(true)}
              key={keyAnimation}
            >
              <div className={styles.items} key={keyAnimation}>
                {activeLinks.col.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={"init"}
                    animate={"animate"}
                    exit={"exit"}
                    transition={motionItemsModalConfig({ key, i }).transition}
                    variants={motionItemsModalConfig({ key, i }).variants}
                    className={styles.links}
                  >
                    {item.title && <h3>{item.title}</h3>}

                    <div
                      className={clsx(styles.links, {
                        [styles.alt]: item.title,
                      })}
                    >
                      {" "}
                      {item.links.map((subItem: any, ind: number) => (
                        <motion.a
                          onClick={() => push(subItem.path)}
                          className={styles.link}
                          key={ind}
                        >
                          <Image
                            width={40}
                            height={40}
                            src={subItem.img}
                            alt=""
                          />
                          <div>
                            <h3>{subItem.name}</h3>
                            {/* <p>{subItem.subName}</p> */}
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div onMouseMove={handleMouseLeave} className={styles.out} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const buttonVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: (delay) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.4,
    },
  }),
};
