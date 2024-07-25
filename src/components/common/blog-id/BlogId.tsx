"use client";

import { motion } from "framer-motion";
import parse from "html-react-parser";
import { FC } from "react";

import styles from "./BlogId.module.scss";
import { content } from "./data";
import Aside from "@components/common/blog/aside/aside";

const BlogId: FC = () => {
  const text = "How Rounding Rules Can Save Your Organization Time and Money";
  const desc = ["New Normal", "/", "6 min read", "/", "apr 10, 2023"];
  const link = [
    "Say Goodbye Paper Visitor Logs and Protect Your Facility",
    "Attestation for Risk Management",
    "How Rounding Rules Can Save Your Organization Time and...",
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.intro}>
          <div className={styles.text}>
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
          </div>
          <div className={styles.desc}>
            {desc.map((item, i) => (
              <motion.p
                initial={"init"}
                animate={"animate"}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                }}
                variants={textVariant}
                key={i}
              >
                {item}
              </motion.p>
            ))}
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.left}>
            <motion.img
              initial={"init"}
              whileInView={"animate"}
              viewport={{ once: true, amount: 0.1 }}
              variants={textVariant}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
              src="/images/blog/post-img/fullPost.png"
              alt=""
            />
            {content.map((item, i) => (
              <motion.div
                initial={"init"}
                whileInView={"animate"}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                }}
                variants={textVariant}
                className={styles.text}
                key={i}
              >
                <h3>{item.title}</h3>
                <div className={styles.desc}>{parse(item.text)}</div>
              </motion.div>
            ))}
          </div>
          <div className={styles.right}>
            <motion.p
              initial={"init"}
              whileInView={"animate"}
              variants={textVariant}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true, amount: 0.1 }}
              className={styles.subText}
            >
              Related acticles
            </motion.p>
            <div className={styles.links}>
              {link.map((item, i) => (
                <motion.div
                  initial={"init"}
                  whileInView={"animate"}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.12,
                  }}
                  variants={textVariant}
                  viewport={{ once: true, amount: 0.1 }}
                  key={i}
                  className={styles.link}
                >
                  <p>{item}</p>
                  <svg
                    width="34.000000"
                    height="34.000000"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <clipPath id="clip1085_7503">
                        <rect
                          id="Frame"
                          rx="-0.448029"
                          width="11.884984"
                          height="11.884983"
                          transform="translate(8.399200 16.129181) rotate(-45.000000)"
                          fill="white"
                          fillOpacity="0"
                        />
                      </clipPath>
                    </defs>
                    <circle
                      id="Ellipse 17"
                      cx="17.000000"
                      cy="17.000000"
                      r="17.000000"
                      fill="#F5F5F5"
                      fillOpacity="1.000000"
                    />
                    <rect
                      id="Frame"
                      rx="-0.448029"
                      width="11.884984"
                      height="11.884983"
                      transform="translate(8.399200 16.129181) rotate(-45.000000)"
                      fill="#FFFFFF"
                      fillOpacity="0"
                    />
                    <g clipPath="url(#clip1085_7503)">
                      <path
                        id="Vector"
                        d="M13.03 20.76L19.92 13.87L19.92 20.2L21.5 20.2L21.5 11.16L12.47 11.16L12.47 12.74L18.79 12.74L11.9 19.63L13.03 20.76Z"
                        fill="#000000"
                        fillOpacity="1.000000"
                        fillRule="evenodd"
                      />
                    </g>
                  </svg>
                </motion.div>
              ))}
            </div>
            <Aside />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogId;
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
