import React from "react";
import styles from "./SvgSeriesTwo.module.scss";

const SvgSeriesTwo = () => {
  return (
    <div className={styles["container-svg-series-two"]}>
      <svg
        width="163"
        height="250"
        viewBox="0 0 163 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 124C91 124 91 4.06702 161 3"
          stroke="url(#paint0_linear_2435_77389)"
          strokeWidth="2"
          className={styles["svg-elem-1"]}
        />
        <path
          d="M21 144C91 144 91 235.556 161 247"
          stroke="url(#paint1_linear_2435_77389)"
          strokeWidth="2"
          className={styles["svg-elem-2"]}
        />
        <circle
          cx="160"
          cy="3"
          r="3"
          fill="#7EBB48"
          className={styles["svg-elem-3"]}
        />
        <circle
          cx="160"
          cy="247"
          r="3"
          fill="#7EBB48"
          className={styles["svg-elem-4"]}
        />
        <circle
          cx="3"
          cy="124"
          r="3"
          fill="#7EBB48"
          className={styles["svg-elem-5"]}
        />
        <circle
          cx="3"
          cy="144"
          r="3"
          fill="#7EBB48"
          className={styles["svg-elem-6"]}
        />
        <defs>
          <linearGradient
            id="paint0_linear_2435_77389"
            x1="21"
            y1="63.5"
            x2="161"
            y2="63.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7EBB48" stopOpacity="0.1" />
            <stop offset="1" stopColor="#7EBB48" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2435_77389"
            x1="21"
            y1="195.5"
            x2="161"
            y2="195.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7EBB48" stopOpacity="0.1" />
            <stop offset="1" stopColor="#7EBB48" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SvgSeriesTwo;
