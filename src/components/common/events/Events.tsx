"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";

import styles from "./Events.module.scss";

const Events: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.heading}>Events</p>
        <div className={styles.items}>
          {[...Array(10)].map((_, i) => (
            <motion.div
              initial={"init"}
              whileInView={"animate"}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
              }}
              viewport={{ once: true, amount: 0.1 }}
              variants={textVariant}
              className={styles.item}
              key={i}
            >
              <img src="/images/events/Rectangle 34624670.png" alt="" />
              <div className={styles.bottom}>
                <p className={styles.date}>12.06.24</p>
                <p className={styles.title}>HR-Tech – 2024 | London, UK</p>
                <p className={styles.text}>
                  Location: ExCeL London, UK Date: April 17-18, 2024 ZKTeco, one
                  of the world’s largest developers and manufacturers of
                  workforce data
                </p>
                <Link href={"/events/1"}>
                  <button>Learn More</button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Events;

const textVariant = {
  init: {
    opacity: 0,
    y: "30px",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
