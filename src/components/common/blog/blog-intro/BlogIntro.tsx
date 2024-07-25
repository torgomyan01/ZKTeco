import { Variants, motion } from "framer-motion";
import { FC } from "react";

import LabelIcon from "../../../../../public/images/blog/flash-circle2.png";
import searchIcon from "../../../../../public/images/blog/search.png";

import styles from "./BlogIntro.module.scss";
import { Label } from "@components/layout/label";

const BlogIntro: FC = () => {
  const text = "Stay up to date with the latest news in the Passwordless World";
  return (
    <div className={styles.intro}>
      <Label icon={LabelIcon} title="Blog" color="green" />
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
      <motion.div
        initial={{
          opacity: 0,
          y: "30px",
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.1,
        }}
        className={styles.inputGroup}
      >
        <input
          type="text"
          placeholder="Discover a topic..."
          className={styles.input}
        />
        <button>
          <img src={searchIcon.src} alt="" />
        </button>
      </motion.div>
    </div>
  );
};
export default BlogIntro;
const textVariant: Variants = {
  init: {
    opacity: 0,
    y: "30px",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
