import { motion } from "framer-motion";
import { FC } from "react";

import styles from "./Products.module.scss";

const TestProducts: FC = () => {
  return (
    <div className={styles.wrapper}>
      <motion.h3
        variants={textVariant}
        initial={"init"}
        whileInView={"animate"}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        Explore Our Products
      </motion.h3>
      <div className={styles.items}>
        {products.map((item, i) => (
          <motion.div
            variants={textVariant}
            initial={"init"}
            whileInView={"animate"}
            whileHover={{
              boxShadow: "0 0 40px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
              transition: { duration: 0.5, delay: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
            className={styles.item}
            key={i}
          >
            <button>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4777 18.1543V11.3141L8.77422 19.0176L6.97656 17.2199L14.6801 9.51642H7.84492V6.97736H19.0168V18.1492H16.4777V18.1543Z"
                  fill="white"
                />
              </svg>
            </button>
            <div className={styles.imgs}>
              {item.imgs.map((img, i) => (
                <img src={img} alt="" key={i} />
              ))}
            </div>
            <div className={styles.line}></div>
            <h4 className={styles.name}>{item.title}</h4>
            <div className={styles.description}>{item.description}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default TestProducts;

const products = [
  {
    imgs: ["/images/products/keyboard-open.png"],
    title: "Terminals",
    description: "Choose from a variety of versatile data collection devices.",
  },
  {
    imgs: [
      "/images/products/keyboard-open.png",
      "/images/products/fi_152753.png",
    ],
    title: "TimeTrack + Android SDK",
    description: "Choose from a variety of versatile data collection devices.",
  },
  {
    imgs: ["/images/products/White.png"],
    title: "CirrusDCS",
    description:
      "Connect your ZKTeco time clock to your cloud-based workforce management application via our reliable and real-time API for bi-directional data transfer.",
  },
  {
    imgs: ["/images/products/code.png"],
    title: "Product Development",
    description:
      "Leverage ZKServices to help you customize your offering or assist with implementation, integration, and training needs.",
  },
];

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
