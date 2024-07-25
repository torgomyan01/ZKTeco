import styles from "./LineThree.module.scss";

const LineThree = () => {
  return (
    <div className={styles["container-line-three"]}>
      <svg
        width="6"
        height="90"
        viewBox="0 0 6 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="3"
          y1="90"
          x2="3"
          y2="4"
          stroke="url(#paint0_linear_667_3332)"
          strokeWidth="2"
          strokeLinejoin="round"
          className={styles["svg-elem-1"]}
        />
        <circle
          cx="3"
          cy="3"
          r="3"
          fill="#005CB9"
          className={styles["svg-elem-2"]}
        />
        <defs>
          <linearGradient
            id="paint0_linear_667_3332"
            x1="4.5"
            y1="90"
            x2="4.5"
            y2="4"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#005CB9" stopOpacity="0.1" />
            <stop offset="1" stopColor="#005CB9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
export default LineThree;
