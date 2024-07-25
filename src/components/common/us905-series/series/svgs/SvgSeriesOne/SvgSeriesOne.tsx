import React from "react";
import styles from "./SvgSeriesOne.module.scss";

const SvgSeriesOne = () => {
  return (
    <div className={styles["container-svg-series-one"]}>
      <svg
        width="163"
        height="250"
        viewBox="0 0 163 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M142 124C72 124 72 4.06702 2 3"
          stroke="url(#paint0_linear_2435_77381)"
          strokeWidth="2"
          className={styles["svg-elem-1"]}
        />
        <path
          d="M142 144C72 144 72 235.556 2 247"
          stroke="url(#paint1_linear_2435_77381)"
          strokeWidth="2"
          className={styles["svg-elem-2"]}
        />
        <circle
          cx="3"
          cy="3"
          r="3"
          transform="matrix(-1 0 0 1 6 0)"
          fill="#7EBB48"
          className={styles["svg-elem-3"]}
        />
        <circle
          cx="3"
          cy="3"
          r="3"
          transform="matrix(-1 0 0 1 6 244)"
          fill="#7EBB48"
          className={styles["svg-elem-4"]}
        />
        <circle
          cx="3"
          cy="3"
          r="3"
          transform="matrix(-1 0 0 1 163 121)"
          fill="#7EBB48"
          className={styles["svg-elem-5"]}
        />
        <circle
          cx="3"
          cy="3"
          r="3"
          transform="matrix(-1 0 0 1 163 141)"
          fill="#7EBB48"
          className={styles["svg-elem-6"]}
        />
        <defs>
          <linearGradient
            id="paint0_linear_2435_77381"
            x1="142"
            y1="63.5"
            x2="2"
            y2="63.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7EBB48" stopOpacity="0.1" />
            <stop offset="1" stopColor="#7EBB48" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_2435_77381"
            x1="142"
            y1="195.5"
            x2="2"
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

export default SvgSeriesOne;
