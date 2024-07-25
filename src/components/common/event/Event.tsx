"use client";

import { motion } from "framer-motion";
import { FC } from "react";

import styles from "./Event.module.scss";

const Event: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <motion.img
          initial={"init"}
          whileInView={"animate"}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          viewport={{ once: true, amount: 0.1 }}
          variants={textVariant}
          src="/images/events/Rectangle 34624683.png"
          alt=""
        />
        <motion.p
          initial={"init"}
          whileInView={"animate"}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          viewport={{ once: true, amount: 0.1 }}
          variants={textVariant}
          className={styles.title}
        >
          HR-Tech – 2024 | Amsterdam, NL
        </motion.p>
        <motion.div
          initial={"init"}
          whileInView={"animate"}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          viewport={{ once: true, amount: 0.1 }}
          variants={textVariant}
          className={styles.place}
        >
          <p>
            <b>Location:</b> RAI Amsterdam, NL
          </p>
          <p>
            <b>Date:</b> May 2-3, 2024
          </p>
        </motion.div>
        <motion.div
          initial={"init"}
          whileInView={"animate"}
          transition={{
            duration: 0.5,
            delay: 0.7,
          }}
          viewport={{ once: true, amount: 0.1 }}
          variants={textVariant}
          className={styles.description}
        >
          ZKTeco, one of the world’s largest developers and manufacturers of
          workforce data collection terminals, will present their newest product
          offerings at HR Tech from May 2nd to the 3rd, RAI Amsterdam, NL. Come
          see our full lineup of the Ultima series 2 time clocks with our latest
          10”. Don’t miss this opportunity to have a look at a special product
          coming in early 2024. The entire series includes all the standard
          badge technologies plus our most advanced biometric solutions. With a
          five-, seven-, and ten-inch high-resolution touchscreen and powerful
          8-core processor packed with a high-performance flash, the hardware in
          the Ultima Series 2 can support native and web application needs. With
          the Ultima Series 2 touchless biometric technology, clocking in
          becomes as easy as the scan of a face or palm Through a live
          demonstration, guests will have a chance to learn about our Ultima
          Series 2 features and see how easy it is to integrate and implement
          our time clock solution with an organization workforce management
          application. With over a decade of expertise, ZKTeco supplies
          best-in-class time and attendance solutions that can empower the
          workforce of any industry or organization To learn more, stop by booth
          #25 at HRTech. For more information about the event click here.
        </motion.div>
      </div>
    </div>
  );
};
export default Event;

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
