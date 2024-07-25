import { FC } from "react";
import { motion } from "framer-motion";
import styles from "./Intro.module.scss";

const JobIntro: FC = () => {
  const text =
    "ZKTeco, a leading global provider of data collection solutions for time and attendance and workforce management, is looking for highly-motivated, success-driven, and solution-focused professionals to join our rapidly expanding team in Northern New Jersey. If you have what it takes – knowledge of SaaS, cloud-based systems, time & attendance and workforce management domain expertise, the ability to turn enterprise customer needs into successful product deployments, and the desire to be part of building innovative products and solutions - you might find your home here.";
  return (
    <div className={styles.intro}>
      <div className={styles.top}>
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40" cy="40" r="40" fill="#7EBB48" />
          <path
            d="M55.0078 36.0156H48.9648V53.9453H46.9727V40H40.9961V53.9453H39.0039V43.9844H33.0273V53.9453H31.0352V47.9688H24.9922V53.9453H23V55.9375H57V53.9453H55.0078V36.0156Z"
            fill="white"
          />
          <path
            d="M51.023 26.0547H53.5989L47.7719 31.8153L43.7875 29.8231L35.8187 37.7919L31.9258 35.8454L23.4648 42.1916L24.6594 43.785L32.1359 38.178L36.2117 40.216L44.1805 32.2472L48.1648 34.2394L55.0074 27.4632V30.0391H56.9996V24.0625H51.023V26.0547Z"
            fill="white"
          />
        </svg>
        <p className={styles.title}>Join our team</p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.text}>
        {text.split(" ").map((item, i) => (
          <motion.p
            initial={"init"}
            animate={"animate"}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            variants={textVariant}
            key={i}
          >
            {item}
          </motion.p>
        ))}
      </div>
    </div>
  );
};
export default JobIntro;

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
