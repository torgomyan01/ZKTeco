import { motion } from "framer-motion";
import { FC } from "react";

import styles from "./aside.module.scss";
import { ButtonWithArrow } from "@components/layout/buttons/button-with-arrow";

const Aside: FC = () => {
  return (
    <div className={styles.flex}>
      <motion.div
        initial={"init"}
        whileInView={"animation"}
        variants={mainVariant}
        transition={{
          duration: 0.6,
        }}
        viewport={{ once: true, amount: 0.1 }}
        className={styles.aside}
      >
        <h3>Interested In Next-Gen MFA?</h3>
        <p>Discover Multi-Pass enterprise passwordless authentication</p>
        <ButtonWithArrow
          bgColor="green"
          delay={1.4}
          textWidth={166}
          title="Schedule a Consultation"
        />
      </motion.div>
      <h2>Share the page:</h2>
      <div className={styles.links}>
        <svg
          width="32.000000"
          height="32.000000"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <clipPath id="clip1085_7525">
              <rect
                id="fi_3128219"
                width="14.000000"
                height="14.000000"
                transform="translate(9.000000 9.000000)"
                fill="white"
                fillOpacity="0"
              />
            </clipPath>
          </defs>
          <circle
            id="Ellipse 8898"
            cx="16.000000"
            cy="16.000000"
            r="16.000000"
            fill="#F3F3F3"
            fillOpacity="1.000000"
          />
          <rect
            id="fi_3128219"
            width="14.000000"
            height="14.000000"
            transform="translate(9.000000 9.000000)"
            fill="#FFFFFF"
            fillOpacity="0"
          />
          <g clipPath="url(#clip1085_7525)">
            <path
              id="Vector"
              d="M21.59 21.6L21.59 17.49C21.59 15.48 21.16 13.94 18.81 13.94C17.67 13.94 16.92 14.55 16.61 15.14L16.58 15.14L16.58 14.12L14.35 14.12L14.35 21.6L16.68 21.6L16.68 17.89C16.68 16.91 16.86 15.97 18.07 15.97C19.25 15.97 19.27 17.07 19.27 17.94L19.27 21.58L21.59 21.58L21.59 21.6Z"
              fill="#000000"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
            <path
              id="Vector"
              d="M10.58 14.12L12.9 14.12L12.9 21.6L10.58 21.6L10.58 14.12Z"
              fill="#000000"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
            <path
              id="Vector"
              d="M11.74 10.4C11 10.4 10.39 11 10.39 11.74C10.39 12.48 11 13.1 11.74 13.1C12.48 13.1 13.08 12.48 13.08 11.74C13.08 11 12.48 10.4 11.74 10.4Z"
              fill="#000000"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
          </g>
        </svg>
        <svg
          width="32.000000"
          height="32.000000"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <clipPath id="clip1085_7532">
              <rect
                id="fi_20837"
                width="14.000000"
                height="14.000000"
                transform="translate(9.000000 9.000000)"
                fill="white"
                fillOpacity="0"
              />
            </clipPath>
          </defs>
          <circle
            id="Ellipse 8898"
            cx="16.000000"
            cy="16.000000"
            r="16.000000"
            fill="#F3F3F3"
            fillOpacity="1.000000"
          />
          <rect
            id="fi_20837"
            width="14.000000"
            height="14.000000"
            transform="translate(9.000000 9.000000)"
            fill="#FFFFFF"
            fillOpacity="0"
          />
          <g clipPath="url(#clip1085_7532)">
            <path
              id="f_1_"
              d="M17.08 23L17.08 16.61L19.22 16.61L19.54 14.12L17.08 14.12L17.08 12.53C17.08 11.81 17.28 11.32 18.31 11.32L19.63 11.32L19.63 9.09C19.4 9.06 18.62 9 17.71 9C15.81 9 14.51 10.15 14.51 12.28L14.51 14.12L12.36 14.12L12.36 16.61L14.51 16.61L14.51 23L17.08 23Z"
              fill="#010002"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
          </g>
        </svg>
        <svg
          width="32.000000"
          height="32.000000"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <clipPath id="clip1085_7537">
              <rect
                id="fi_5968958"
                width="14.000000"
                height="14.000000"
                transform="translate(9.000000 9.000000)"
                fill="white"
                fillOpacity="0"
              />
            </clipPath>
          </defs>
          <circle
            id="Ellipse 8898"
            cx="16.000000"
            cy="16.000000"
            r="16.000000"
            fill="#F3F3F3"
            fillOpacity="1.000000"
          />
          <rect
            id="fi_5968958"
            width="14.000000"
            height="14.000000"
            transform="translate(9.000000 9.000000)"
            fill="#FFFFFF"
            fillOpacity="0"
          />
          <g clipPath="url(#clip1085_7537)">
            <path
              id="Vector"
              d="M17.3 14.92L22.4 9L21.19 9L16.76 14.14L13.23 9L9.15 9L14.5 16.78L9.15 23L10.36 23L15.03 17.56L18.77 23L22.85 23L17.3 14.92L17.3 14.92ZM15.65 16.85L15.1 16.07L10.79 9.9L12.65 9.9L16.13 14.88L16.67 15.66L21.19 22.13L19.33 22.13L15.65 16.85L15.65 16.85Z"
              fill="#000000"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
export default Aside;
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
