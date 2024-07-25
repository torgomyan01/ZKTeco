"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";

import styles from "./Resourese.module.scss";
import Accordion from "../../layout/accordion/Accordion";
import Products from "@components/common/ultima-2/products/Products";
import ConnectWithUs from "../home/сonnect-with-us";
import TestProducts from "@components/layout/test-products/Products";
import ProductsSection from "@components/common/ultima-2/products/Products";

const subText = "You’re in the right place.";
const text = "Need documentation for your ZKTeco product?";
const detalis = [
  "Data Sheets",
  "Data Sheets for Workday Products",
  "Product Images",
  "User Manuals",
  "Installation Guides",
  "Forms",
];
const Resources: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.intro}>
          <h3 className={clsx(styles.text, styles["h3Text"])}>
            {subText.split(" ").map((item, i) => (
              <motion.p
                initial={"init"}
                animate={"animate"}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
                variants={textVariant}
                key={i}
              >
                {item}
              </motion.p>
            ))}
          </h3>
          <h2 className={clsx(styles.text)}>
            {text.split(" ").map((item, i) => (
              <motion.p
                initial={"init"}
                animate={"animate"}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
                variants={textVariant}
                key={i}
              >
                {item}
              </motion.p>
            ))}
          </h2>
          <div className={styles.items}>
            {detalis.map((item, i) => (
              <motion.div
                initial={"init"}
                animate={"animate"}
                transition={{
                  duration: 0.5,
                  delay: i * 0.2,
                }}
                variants={textVariant}
                key={i}
              >
                <Accordion name={item}>
                  <div className={styles.accordionItems}>
                    {[...Array(17)].map((_, i) => (
                      <AnimatePresence key={i}>
                        <motion.div
                          initial={"init"}
                          whileInView={"animate"}
                          exit={"init"}
                          transition={{
                            duration: 0.5,
                            delay: i * 0.05,
                          }}
                          variants={textVariant}
                          className={styles.item}
                        >
                          <p>{i % 2 ? "ULTIMA | 10" : "F 305"}</p>
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="18"
                              height="18"
                              rx="9"
                              fill="#7EBB48"
                            />
                            <path
                              d="M10.9899 11.7089V8.77742L7.68839 12.0789L6.91797 11.3085L10.2195 8.00699H7.29012V6.91882H12.0781V11.7068H10.9899V11.7089Z"
                              fill="white"
                            />
                          </svg>
                        </motion.div>
                      </AnimatePresence>
                    ))}
                  </div>
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
        <ProductsSection />
      </div>
      <ConnectWithUs />
    </div>
  );
};
export default Resources;

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
