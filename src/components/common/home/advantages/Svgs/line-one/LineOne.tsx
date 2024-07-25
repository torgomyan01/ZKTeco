import React from "react";
import styles from "./LineOne.module.scss";

const LineOne = () => {
  return (
    <div className={styles["container-line-one"]}>
      <svg
        width="223"
        height="305"
        viewBox="0 0 223 305"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 143C121 143 121 4.23457 221 3"
          stroke="url(#paint0_linear_667_3388)"
          strokeWidth="2"
          className={styles["svg-elem-1"]}
        />
        <path
          d="M21 153H221"
          stroke="url(#paint1_linear_667_3388)"
          strokeWidth="2"
          className={styles["svg-elem-2"]}
        />
        <path
          d="M21 163C121 163 121 287.444 221 303"
          stroke="url(#paint2_linear_667_3388)"
          strokeWidth="2"
          className={styles["svg-elem-3"]}
        />
        <circle
          cx="220"
          cy="153"
          r="3"
          fill="#7EBB48"
          className={styles["svg-elem-4"]}
        />
        <circle
          cx="220"
          cy="3"
          r="3"
          fill="#7EBB48"
          className={styles["svg-elem-5"]}
        />
        <circle
          cx="220"
          cy="302"
          r="3"
          fill="#7EBB48"
          className={styles["svg-elem-6"]}
        />
        <circle
          cx="3"
          cy="143"
          r="3"
          fill="#D1971D"
          className={styles["svg-elem-7"]}
        />
        <circle
          cx="3"
          cy="153"
          r="3"
          fill="#7EBB48"
          className={styles["svg-elem-8"]}
        />
        <circle
          cx="3"
          cy="163"
          r="3"
          fill="#41939C"
          className={styles["svg-elem-9"]}
        />
        <defs>
          <linearGradient
            id="paint0_linear_667_3388"
            x1="21"
            y1="73"
            x2="221"
            y2="73"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7EBB48" stopOpacity="0.1" />
            <stop offset="1" stopColor="#7EBB48" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_667_3388"
            x1="21"
            y1="153.5"
            x2="221"
            y2="153.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7EBB48" stopOpacity="0.1" />
            <stop offset="1" stopColor="#7EBB48" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_667_3388"
            x1="21"
            y1="233"
            x2="221"
            y2="233"
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

export default LineOne;
