import clsx from "clsx";
import { motion } from "framer-motion";
import { FC, useState } from "react";

import styles from "./BlogSecond.module.scss";
import { categorys } from "./categorys";
import { useRouter } from "next/navigation";
import Aside from "@components/common/blog/aside/aside";
import Image from "next/image";

const BlogSecond: FC = () => {
  const { push } = useRouter();
  const [active, setActive] = useState(0);
  return (
    <div className={styles.second}>
      <div className={styles.left}>
        <motion.div
          initial={"init"}
          whileInView={"animation"}
          variants={mainVariant}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true, amount: 0.1 }}
          className={clsx(styles.post, styles.bigPost)}
          onClick={() => push("/blog/1")}
        >
          <img src="/images/blog/post-img/android-icon.png" alt="" />
          <header className={styles.header}>
            <p>OTHER</p>
            <p>4 min read</p>
          </header>
          <h3 className={styles.title}>
            Say Goodbye Paper Visitor Logs and Protect Your Facility
          </h3>
        </motion.div>
        {[...Array(10)].map((_, i) => (
          <motion.div
            initial={"init"}
            whileInView={"animation"}
            variants={mainVariant}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
            }}
            viewport={{ once: true, amount: 0.1 }}
            className={clsx(styles.post)}
            onClick={() => push("/blog/1")}
            key={i}
          >
            <Image
              src="/images/blog/post-img/Rectangle 34624659.png"
              alt=""
              width={474}
              height={305}
            />
            <header className={styles.header}>
              <p>OTHER</p>
              <p>4 min read</p>
            </header>
            <h3 className={styles.title}>
              Say Goodbye Paper Visitor Logs and Protect Your Facility
            </h3>
          </motion.div>
        ))}
      </div>
      <div className={styles.right}>
        <motion.p
          initial={"init"}
          whileInView={"animation"}
          variants={mainVariant}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true, amount: 0.1 }}
          className={styles.subText}
        >
          Categories
        </motion.p>
        <div className={styles.categorys}>
          {categorys.map((item, i) => (
            <motion.button
              initial={"init"}
              whileInView={"animation"}
              variants={mainVariant}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
              }}
              viewport={{ once: true, amount: 0.1 }}
              className={clsx(styles.category, i === active && styles.active)}
              key={i}
              onClick={() => setActive(i)}
            >
              <span>{item.title}</span>
              <svg
                width="4.000000"
                height="4.000000"
                viewBox="0 0 4 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs />
                <circle
                  id="Ellipse 8896"
                  cx="2.000000"
                  cy="2.000000"
                  r="2.000000"
                  fill={i === active ? "#fff" : "#000"}
                  fillOpacity="1.000000"
                />
              </svg>
              <span>{item.count}</span>
            </motion.button>
          ))}
        </div>
        <Aside />
      </div>
    </div>
  );
};
export default BlogSecond;

const mainVariant = {
  init: {
    opacity: 0,
    y: "50px",
  },
  animation: {
    opacity: 1,
    y: 0,
  },
};
